"use client";
import { useState } from "react";
import Link from "next/link";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", city: "",
    program: "", format: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "apply_page",
          interest: formData.program,
          seriousness: "applying",
          timeline: "immediately",
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const goToWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi KPF Academy! I just submitted my application.\n\nName: ${formData.name}\nProgram: ${formData.program}\nCity: ${formData.city}\nFormat: ${formData.format}\n\nPlease guide me on the next steps.`
    );
    window.open(`https://wa.me/917208299269?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* HERO */}
      <section className="page-hero" style={{ minHeight: "40vh" }}>
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Apply Now</span>
          <h1>Begin Your Application to KPF.</h1>
          <p>You&apos;re one step closer to a professional education in fitness, nutrition, or business. Complete the form below and our admissions team will be in touch.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="page-split-grid">

            {/* LEFT */}
            <div>
              <span className="section-label">Before You Apply</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>A Few Things to Know.</h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "2.5rem" }}>
                {[
                  { icon: "🎯", text: "Choose your program — if you're unsure, our team can help." },
                  { icon: "📋", text: "Most KPF programs are open to anyone with a genuine interest in fitness education." },
                  { icon: "💬", text: "If you'd like to talk through your options before applying, book a free Academic Counselling session." },
                ].map((item) => (
                  <li key={item.text} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.6 }}>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div style={{ background: "rgba(212,196,106,0.05)", border: "1px solid rgba(212,196,106,0.2)", borderRadius: "var(--radius)", padding: "2rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "0.8rem" }}>Not Ready to Apply Yet?</h3>
                <p style={{ color: "var(--gray)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                  Book a free Academic Counselling session. There&apos;s no commitment — just a conversation to help you make the right decision.
                </p>
                <a href="https://wa.me/917208299269?text=Hi+KPF!+I'd+like+to+book+a+free+Academic+Counselling+session." target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.8rem", padding: "0.65rem 1.4rem", display: "inline-flex" }}>
                  Book Academic Counselling →
                </a>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {[
                  { num: "17+", label: "Years of education experience" },
                  { num: "3", label: "Offline cities (Mumbai, Pune, Ahmedabad)" },
                  { num: "24–48h", label: "Response time from our admissions team" },
                ].map((s) => (
                  <div key={s.label} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "var(--neon)", width: "4rem", flexShrink: 0 }}>{s.num}</span>
                    <span style={{ color: "var(--gray)", fontSize: "0.88rem" }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div>
              {status === "success" ? (
                <div style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: "var(--radius)", padding: "3rem", textAlign: "center" }}>
                  <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
                  <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Application Received!</h2>
                  <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: 420, margin: "0 auto 2rem" }}>
                    Thank you, {formData.name.split(" ")[0]}. Our admissions team will review your application and be in touch within 24–48 hours. For faster response, connect with us on WhatsApp.
                  </p>
                  <button onClick={goToWhatsApp} style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "1rem 2rem", background: "#25D366", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", border: "none", borderRadius: "100px", cursor: "pointer" }}>
                    📲 Connect on WhatsApp
                  </button>
                </div>
              ) : (
                <>
                  <span className="section-label" style={{ marginBottom: "1.5rem" }}>Your Application</span>
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
                      <label className="form-label">City / Location *</label>
                      <input className="form-input" placeholder="e.g. Mumbai, Pune, Bangalore" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} required />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Program of Interest *</label>
                      <select className="form-select" value={formData.program} onChange={e => setFormData({ ...formData, program: e.target.value })} required>
                        <option value="">Select a Program</option>
                        <option value="advanced-personal-training">Advanced Personal Training Certification</option>
                        <option value="sports-nutrition">Applied Sports Nutrition Certification</option>
                        <option value="gym-management">Gym Management &amp; Fitness Business</option>
                        <option value="workshops">Workshops &amp; Masterclasses</option>
                        <option value="not-sure">Not Sure Yet — Need Guidance</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label">Preferred Learning Format</label>
                      <select className="form-select" value={formData.format} onChange={e => setFormData({ ...formData, format: e.target.value })}>
                        <option value="">Select Format</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline (In-Person)</option>
                        <option value="blended">Blended (Online + Offline)</option>
                        <option value="not-sure">Not Sure</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label">Tell Us About Yourself (Optional)</label>
                      <textarea className="form-textarea" placeholder="Brief background, goals, or any questions you have for our admissions team..." rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                    </div>
                    <button type="submit" className="form-submit" disabled={status === "loading"}>
                      {status === "loading" ? "Submitting Application..." : "Submit Application"}
                    </button>
                    {status === "error" && (
                      <p style={{ color: "#ef4444", fontSize: "0.85rem", textAlign: "center" }}>
                        Something went wrong. Please <a href="https://wa.me/917208299269" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366" }}>WhatsApp us</a> directly.
                      </p>
                    )}
                    <p style={{ fontSize: "0.78rem", color: "var(--gray2)", textAlign: "center", lineHeight: 1.6 }}>
                      Our admissions team reviews every application personally. You can expect a response within 24–48 hours.
                    </p>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
