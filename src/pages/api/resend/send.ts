import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../../../components/ui/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, phone, message } = req.body;

  console.log('Request Body:', firstName, lastName, email, phone, message);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['nathanscottpotter@gmail.com'],
      subject: 'Message from NSP Web Services Store',
      react: await EmailTemplate({
        firstName: firstName as string,
        lastName: lastName as string,
        phone: phone as string,
        email: email as string,
        message: message as string,
      }),
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(400).json(error);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
