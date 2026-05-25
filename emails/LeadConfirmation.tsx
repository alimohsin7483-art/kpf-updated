import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  name: string;
}

export default function LeadConfirmation({ name }: Props) {
  return (
    <Html>
      <Head />
      <Preview>KPF Academy — Your enquiry has been received</Preview>

      <Body
        style={{
          backgroundColor: "#050508",
          fontFamily: "Arial, sans-serif",
          color: "#ffffff",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          <Heading
            style={{
              color: "#d4c46a",
              fontSize: "32px",
              marginBottom: "20px",
            }}
          >
            KPF Academy
          </Heading>

          <Text style={{ fontSize: "16px", lineHeight: "28px" }}>
            Hi {name},
          </Text>

          <Text style={{ fontSize: "16px", lineHeight: "28px" }}>
            Thank you for your interest in KPF Academy.
            Our academic team has received your enquiry successfully.
          </Text>

          <Text style={{ fontSize: "16px", lineHeight: "28px" }}>
            A member of our team will connect with you shortly to guide you
            regarding programs, learning formats, and career pathways.
          </Text>

          <Section style={{ textAlign: "center", margin: "40px 0" }}>
            <Button
              href="YOUR_WHATSAPP_COMMUNITY_LINK"
              style={{
                backgroundColor: "#d4c46a",
                color: "#050508",
                padding: "14px 28px",
                borderRadius: "999px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Join WhatsApp Community
            </Button>
          </Section>

          <Text
            style={{
              fontSize: "13px",
              color: "#999",
              lineHeight: "22px",
            }}
          >
            KPF Academy — Elite Fitness Education
          </Text>
        </Container>
      </Body>
    </Html>
  );
}