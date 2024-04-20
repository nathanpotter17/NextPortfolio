import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Font,
} from "@react-email/components";

type ContactFormEmailProps = {
  fname: string;
  lname: string;
  message: string;
  senderEmail: string;
  projectType: string;
  managed: string;
};

export default function ContactFormEmail({
  fname,
  lname,
  senderEmail,
  message,
  projectType,
  managed,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Plus Jakarta Sans"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU79TR_V.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>New message from NSP Studios Contact Form</Preview>
      <Body
        style={{
          backgroundColor: "#fff",
          color: "#000",
          textAlign: "center",
        }}
      >
        <Container>
          <Section>
            <Heading>
              NSP Studios Form: {fname} {lname} is requesting a quote!
            </Heading>
            <Hr />
            <Text>
              {fname} {lname}s home is an {projectType}.
            </Text>
            {managed == "No" ? (
              <Text>It is not part of a property management group.</Text>
            ) : (
              <Text>It is part of a property management group.</Text>
            )}

            <Text>
              {fname} {lname}s email is {senderEmail}
            </Text>
            <Text>Here is their message: {message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
