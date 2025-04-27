import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const stripe = new Stripe(process.env.STRIPE_TEST_SKEY as string);

  try {
    const { cart } = req.body;

    console.log('User order is: ', cart);

    const line_items = cart.map((item: string) => {
      const [name, units, productId, quantity, price] = item.split('>');

      console.log(name, units, productId, quantity, price);

      const fprice = parseInt(price) * 100;

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${name}`,
            description: `${units}`,
          },
          unit_amount_decimal: fprice.toFixed(2),
        },
        quantity: 1,
      };
    });

    if (!line_items)
      return res.status(500).json({ message: `Internal server error` });

    console.log(line_items);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ message: `Internal server error, ${error}` });
  }
}
