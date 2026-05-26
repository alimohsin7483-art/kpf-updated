"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "contact_page", timestamp: new Date().toISOString() }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="page-hero" style={{ minHeight: "40vh" }}>
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Contact</span>
          <h1>Speak with the KPF Team.</h1>
          <p>Whether you have a question about our programs, need guidance choosing the right pathway, or simply want to learn more about KPF — we&apos;re here to help.</p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section">
        <div className="container">
          <div className="page-sidebar-grid">

            {/* LEFT — CONTACT OPTIONS */}
            <div>
              <span className="section-label">Get in Touch</span>
              <h2 style={{ marginBottom: "2.5rem", fontSize: "2rem" }}>Contact Options.</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                {[
                  { icon: "📞", label: "Phone", value: "+91 72082 99269", href: "tel:+917208299269" },
                  { icon: "💬", label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/917208299269?text=Hi+KPF+Academy!+I+have+a+question+about+your+programs." },
                  { icon: "✉️", label: "Office Hours", value: "Mon–Sat, 10 AM – 7 PM IST", href: null },
                ].map((c) => (
                  <div key={c.label} style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                    <span style={{ fontSize: "1.6rem", width: "2.5rem", flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--neon)", marginBottom: "0.2rem" }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ color: "var(--white)", fontSize: "1rem", transition: "color 0.2s" }}>{c.value}</a>
                        : <span style={{ color: "var(--gray)", fontSize: "0.95rem" }}>{c.value}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* ACADEMIC COUNSELLING BLOCK */}
              <div style={{ background: "rgba(212,196,106,0.05)", border: "1px solid rgba(212,196,106,0.2)", borderRadius: "var(--radius)", padding: "2rem", marginBottom: "2rem" }}>
                <span className="section-label" style={{ marginBottom: "0.8rem" }}>Academic Counselling</span>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "0.8rem" }}>Not Sure Where to Start?</h3>
                <p style={{ color: "var(--gray)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                  Book a free Academic Counselling session. In 15 minutes, we&apos;ll help you understand which program fits your goals, your schedule, and your career vision. No pressure. No obligation. Just clarity.
                </p>
                <a href="https://wa.me/917208299269?text=Hi+KPF!+I'd+like+to+book+a+free+Academic+Counselling+session." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: "0.8rem", padding: "0.65rem 1.4rem", display: "inline-flex" }}>
                  Book on WhatsApp →
                </a>
              </div>

              {/* LOCATIONS */}
              <div>
                <span className="section-label" style={{ marginBottom: "1rem" }}>Where to Find Us</span>
                {[
                  { city: "Mumbai", desc: "Primary academic centre" },
                  { city: "Surat", desc: "Active learning centre" },
                  { city: "Ahmedabad", desc: "Active learning centre" },
                ].map((loc) => (
                  <div key={loc.city} style={{ padding: "0.9rem 0", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "var(--neon)" }}>{loc.city}</span>
                      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gray)", marginLeft: "0.8rem" }}>{loc.desc}</span>
                    </div>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4ade80" }}>Active</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — ENQUIRY FORM */}
            <div>
              <span className="section-label">Send Us a Message</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Enquiry Form.</h2>

              {status === "success" ? (
                <div style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: "var(--radius)", padding: "3rem", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>Enquiry Received!</h3>
                  <p style={{ color: "var(--gray)", marginBottom: "2rem" }}>Our admissions team will respond within 24–48 hours. For faster response, WhatsApp us directly.</p>
                  <a href="https://wa.me/917208299269" target="_blank" rel="noopener noreferrer" className="btn-gold">
                    WhatsApp Us →
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  <div className="form-row-grid">
                    <div className="form-field">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" placeholder="Your Full Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Phone Number *</label>
                      <input className="form-input" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div className="form-field">
                    <label className="form-label">I&apos;m Interested In *</label>
                    <select className="form-select" value={formData.interest} onChange={e => setFormData({ ...formData, interest: e.target.value })} required>
                      <option value="">Select a Program</option>
                      <option value="advanced-personal-training">Advanced Personal Training Certification</option>
                      <option value="sports-nutrition">Applied Sports Nutrition Certification</option>
                      <option value="gym-management">Gym Management & Fitness Business</option>
                      <option value="workshops">Workshops & Masterclasses</option>
                      <option value="academic-counselling">Academic Counselling</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Your Message</label>
                    <textarea className="form-textarea" placeholder="Tell us a bit about yourself, your goals, or any questions you have..." rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <button type="submit" className="form-submit" disabled={status === "loading"}>
                    {status === "loading" ? "Submitting..." : "Submit Enquiry"}
                  </button>
                  {status === "error" && <p style={{ color: "#ef4444", fontSize: "0.85rem", textAlign: "center" }}>Something went wrong. Please WhatsApp us directly.</p>}
                  <p style={{ fontSize: "0.78rem", color: "var(--gray2)", textAlign: "center" }}>
                    Our admissions team reviews every enquiry personally. Expect a response within 24–48 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-label">FAQs</span>
          <h2 style={{ marginBottom: "2rem" }}>Common Questions.</h2>
          <div className="faq-section">
            {[
              { q: "Where can I see program details and fees?", a: "Visit our Programs page for a full overview, or download the brochure for detailed information including fees, duration, and curriculum." },
              { q: "How do I apply?", a: "Click 'Apply Now' on any program page, or fill out the contact form above. Our admissions team will guide you through the process." },
              { q: "Can I visit a KPF centre before enrolling?", a: "Yes. Contact us to schedule a visit to your nearest KPF learning centre in Mumbai, Surat, or Ahmedabad." },
              { q: "How quickly will I receive a response?", a: "Our admissions team reviews every enquiry personally. You can expect a response within 24–48 hours on working days." },
            ].map((faq) => (
              <div key={faq.q} className="accordion-item">
                <div className="accordion-q">{faq.q}</div>
                <div className="accordion-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-strip">
        <h2>Take the First Step.</h2>
        <p>Download our brochure or book a free academic counselling session to get started.</p>
        <div className="actions">
          <Link href="/apply" className="btn-gold">Download Brochure</Link>
          <a href="https://wa.me/917208299269?text=Hi+KPF!+I'd+like+to+book+a+free+Academic+Counselling+session." target="_blank" rel="noopener noreferrer" className="btn-outline">
            Book Academic Counselling
          </a>
        </div>
      </div>
    </>
  );
}
