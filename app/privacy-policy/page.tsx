import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — KPF Academy",
  description: "KPF Academy privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: "30vh" }}>
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Legal</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2025</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {[
              {
                title: "1. Information We Collect",
                body: "When you submit an enquiry, application, or lead form on our website, we collect your name, phone number, email address (if provided), city or location, program interest, and the content of your message. We may also collect browsing data via analytics tools to improve our website experience.",
              },
              {
                title: "2. How We Use Your Information",
                body: "We use your personal information to: respond to your enquiry or application; provide program information, batch schedules, and academic guidance; send relevant updates about KPF programs, workshops, and events (you can opt out at any time); and improve our website and services. We do not use your information for any purpose other than providing genuine educational guidance.",
              },
              {
                title: "3. Information Sharing",
                body: "KPF Academy does not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers (such as CRM or email tools) who assist us in operating our website and communicating with you, subject to confidentiality agreements. We may disclose information if required by law.",
              },
              {
                title: "4. Data Storage",
                body: "Information submitted through our forms is securely stored in our internal systems and Google Sheets (for lead management purposes). We retain your data only as long as necessary to fulfil the purposes outlined in this policy, or as required by law.",
              },
              {
                title: "5. WhatsApp Communication",
                body: "When you connect with us via WhatsApp (through our website buttons or after form submission), your WhatsApp conversation is subject to WhatsApp's own privacy policy. We use WhatsApp solely for educational guidance and admissions support — not for unsolicited marketing.",
              },
              {
                title: "6. Cookies and Analytics",
                body: "Our website may use cookies and analytics tools (such as Google Analytics or Meta Pixel) to understand how visitors interact with our site. You can control cookie settings through your browser. Meta Pixel is used to measure the effectiveness of our advertising — no personally identifiable information is shared with Meta beyond standard analytics parameters.",
              },
              {
                title: "7. Your Rights",
                body: "You have the right to request access to the personal data we hold about you, request correction or deletion of your data, opt out of communications at any time by replying 'STOP' to any message or emailing us directly, and ask how your data is being used. To exercise any of these rights, contact us directly via the details below.",
              },
              {
                title: "8. Security",
                body: "We take reasonable precautions to protect your personal information from unauthorised access, disclosure, or misuse. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.",
              },
              {
                title: "9. Updates to This Policy",
                body: "We may update this Privacy Policy from time to time. The most current version will always be available on this page with the date of last update. Continued use of our website after changes constitutes acceptance of the updated policy.",
              },
              {
                title: "10. Contact Us",
                body: "For any questions about this Privacy Policy or how we handle your data, please contact the KPF Academy team via WhatsApp at +91 72082 99269 or through the Contact page on this website.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--neon)", marginBottom: "0.8rem" }}>{section.title}</h3>
                <p style={{ color: "var(--gray)", lineHeight: 1.85, fontSize: "0.95rem" }}>{section.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/terms" className="btn-outline" style={{ fontSize: "0.8rem" }}>Terms & Conditions</Link>
            <Link href="/contact" className="btn-gold" style={{ fontSize: "0.8rem" }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
