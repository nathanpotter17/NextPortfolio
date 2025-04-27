import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../../../components/ui/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, phone, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Message from NSP Store',
    react: await EmailTemplate({
      firstName: firstName as string,
      lastName: lastName as string,
      phone: phone as string,
      email: email as string,
      message: message as string,
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  return res.status(200).json(data);
}
