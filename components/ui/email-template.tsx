import * as React from 'react';
import { EmailTemplateProps } from '../../types/lib';

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>
      Customer is requesting service: {firstName} {lastName}
    </h1>
    <h2>
      {email} + {phone}
    </h2>
    <p>{message}</p>
  </div>
);
