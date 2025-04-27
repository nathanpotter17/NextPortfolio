import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const stripe = new Stripe(process.env.STRIPE_LIVE_SKEY as string);

  try {
    const response = await fetch(`https://api.stripe.com/v1/products/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_LIVE_SKEY as string}`,
      },
    });

    if (!response.ok) throw new Error('Failed to fetch product');

    const product = await response.json();
    let fmt: object = {};

    if (product.default_price) {
      const price = await stripe.prices.retrieve(
        product.default_price as string
      );

      fmt = {
        ...product,
        price: price.unit_amount
          ? (price.unit_amount / 100).toFixed(2)
          : price
            ? price
            : 'N/A',
      };
    }

    res.status(200).json(fmt);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Product not found' });
  }
}
