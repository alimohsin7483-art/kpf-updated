import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — KPF Academy",
  description: "KPF Academy terms and conditions governing use of our website and enrollment in our programs.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: "30vh" }}>
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Legal</span>
          <h1>Terms & Conditions</h1>
          <p>Last updated: January 2025</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {[
              {
                title: "1. Acceptance of Terms",
                body: "By accessing the KPF Academy website or enrolling in any of our programs, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services.",
              },
              {
                title: "2. Program Enrollment",
                body: "Enrollment in KPF programs is subject to availability and confirmation by our admissions team. Submission of an application or enquiry form does not constitute confirmed enrollment. KPF reserves the right to accept or decline applications at its discretion. Confirmed enrollment requires completion of the admission process as communicated by the admissions team.",
              },
              {
                title: "3. Fees and Payments",
                body: "Program fees are communicated during the admissions process and are subject to change. Fees must be paid as per the schedule communicated at the time of enrollment. KPF's refund and cancellation policy will be communicated prior to fee payment. By paying fees, you confirm acceptance of the applicable payment and refund terms.",
              },
              {
                title: "4. Program Content",
                body: "KPF reserves the right to modify, update, or improve program content, curriculum, schedules, and delivery formats to maintain educational quality. Significant changes affecting enrolled students will be communicated in advance. Minor updates, revisions, or schedule adjustments may be made at any time.",
              },
              {
                title: "5. Certification",
                body: "KPF certifications are awarded upon successful completion of all required assessments and fulfillment of program requirements. Certification is not guaranteed upon enrollment alone. KPF certifications represent completion of KPF's structured education programs and do not imply affiliation with any government body or external professional association unless explicitly stated.",
              },
              {
                title: "6. Intellectual Property",
                body: "All content on the KPF Academy website, including but not limited to program materials, curriculum documents, study guides, videos, and written content, is the intellectual property of KPF Academy and Shraddha Gadit. Reproduction, distribution, or use of any content without explicit written permission is prohibited.",
              },
              {
                title: "7. Student Conduct",
                body: "Students enrolled in KPF programs are expected to maintain professional conduct in all learning environments — online and offline. KPF reserves the right to suspend or terminate enrollment for conduct that is disruptive, disrespectful, or contrary to a professional learning environment.",
              },
              {
                title: "8. Limitation of Liability",
                body: "KPF Academy provides education and career guidance in good faith. We do not guarantee specific career outcomes, employment, income levels, or business results from completion of our programs. Outcomes depend on individual effort, market conditions, and other factors beyond KPF's control.",
              },
              {
                title: "9. Website Use",
                body: "The KPF Academy website is provided for informational and enrollment purposes. You agree not to use our website for any unlawful purpose, to attempt to gain unauthorized access to any part of the site, or to interfere with the proper functioning of the website.",
              },
              {
                title: "10. Governing Law",
                body: "These terms are governed by the laws of India. Any disputes arising from these terms or your use of KPF services shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.",
              },
              {
                title: "11. Contact",
                body: "For questions about these Terms and Conditions, contact the KPF Academy team via the Contact page or WhatsApp at +91 72082 99269.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--neon)", marginBottom: "0.8rem" }}>{section.title}</h3>
                <p style={{ color: "var(--gray)", lineHeight: 1.85, fontSize: "0.95rem" }}>{section.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/privacy-policy" className="btn-outline" style={{ fontSize: "0.8rem" }}>Privacy Policy</Link>
            <Link href="/contact" className="btn-gold" style={{ fontSize: "0.8rem" }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
