import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const stripe = new Stripe(process.env.STRIPE_LIVE_SKEY as string);

  const prod = [
    'prod_SCIzROaMxMXTCy',
    'prod_SCMvnyru99QezS',
    'prod_SCMxjvLPAGflZD',
  ];

  try {
    const productsWPrices = await Promise.all(
      prod.map(async (productId) => {
        const product = await stripe.products.retrieve(productId);
        if (product.default_price) {
          const price = await stripe.prices.retrieve(
            product.default_price as string
          );

          return {
            ...product,
            price: price.unit_amount
              ? (price.unit_amount / 100).toFixed(2)
              : 'N/A',
          };
        }
        return null;
      })
    );

    const productsWPricesFiltered = productsWPrices.filter(Boolean);

    return res.status(200).json({ products: productsWPricesFiltered });
  } catch (error) {
    return res.status(500).json({ message: `Internal server error, ${error}` });
  }
}
