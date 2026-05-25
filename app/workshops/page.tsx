import Link from "next/link";
import { workshopTopics } from "@/lib/data";

export const metadata = {
  title: "Workshops & Masterclasses — KPF Academy",
  description: "Expert-led workshops on sports nutrition, fat loss, women's fitness, coaching communication and more. For fitness professionals committed to continuous growth.",
};

export default function WorkshopsPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Workshops & Masterclasses</span>
          <h1>Go Deeper. Stay Sharp. Keep Growing.</h1>
          <p>Focused, expert-led learning on specialised topics in fitness, nutrition, and professional coaching — designed for professionals who never stop learning.</p>
          <Link href="/contact" className="btn-gold">Register Interest →</Link>
        </div>
      </section>

      {/* WHY CONTINUING EDUCATION */}
      <section className="section">
        <div className="container">
          <div className="page-two-col">
            <div>
              <span className="section-label">Why Continuing Education</span>
              <h2 style={{ marginBottom: "1.5rem" }}>Certification Is the Beginning. Not the End.</h2>
              <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: "1.2rem" }}>
                The fitness and nutrition industry evolves constantly. New research emerges. Client needs change. Professional standards rise. The best professionals don&apos;t rely on what they learned once — they commit to continuous growth.
              </p>
              <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: "2rem" }}>
                KPF&apos;s workshops and masterclasses are designed to keep you current, confident, and competitive — whether you&apos;re a KPF graduate, a working trainer, or someone exploring the field.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: "📊", label: "Stay Current with Research" },
                { icon: "🎯", label: "Deepen Specialist Knowledge" },
                { icon: "💼", label: "Strengthen Professional Credibility" },
                { icon: "🤝", label: "Network with Industry Peers" },
                { icon: "📜", label: "Earn Completion Certificates" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)" }}>
                  <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.92rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white)" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORKSHOP TOPICS */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Topics We Cover</span>
            <h2 style={{ marginBottom: "1rem" }}>Explore Our Workshop Categories.</h2>
          </div>
          <div className="workshop-grid">
            {workshopTopics.map((w) => (
              <div key={w.title} className="workshop-card">
                <div className="workshop-topic">{w.title}</div>
                <div className="workshop-desc">{w.desc}</div>
                <div className="workshop-meta">{w.format}</div>
                <div style={{ marginTop: "1.5rem" }}>
                  <Link href="/contact" className="btn-outline" style={{ fontSize: "0.72rem", padding: "0.5rem 1rem" }}>
                    Register Interest →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING SESSIONS */}
      <section className="section section-darker">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Upcoming Sessions</span>
            <h2 style={{ marginBottom: "1rem" }}>What&apos;s Coming Up.</h2>
            <p style={{ color: "var(--gray)" }}>
              Register your interest and we&apos;ll notify you as soon as the next batch is confirmed.
            </p>
          </div>
          <div style={{ background: "rgba(212,196,106,0.04)", border: "1px solid rgba(212,196,106,0.15)", borderRadius: "var(--radius)", padding: "3rem", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📅</div>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>New Sessions Being Scheduled</h3>
            <p style={{ color: "var(--gray)", maxWidth: 480, margin: "0 auto 2rem" }}>
              Register your interest below and our team will contact you with upcoming workshop dates, formats, and fees as soon as they are confirmed.
            </p>
            <Link href="/contact" className="btn-gold">Register Interest →</Link>
          </div>
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}
      <section className="section section-dark">
        <div className="container">
          <div className="page-two-col">
            <div>
              <span className="section-label">Who Should Attend</span>
              <h2 style={{ marginBottom: "1.5rem" }}>Our Workshops Are Designed For:</h2>
              <Link href="/contact" className="btn-gold">Register Interest →</Link>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                "Working personal trainers who want to deepen their expertise",
                "Nutrition coaches looking to stay current with evidence-based practice",
                "KPF students and graduates seeking continuing education",
                "Gym professionals and managers expanding their knowledge base",
                "Fitness enthusiasts who want to learn from industry educators",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.6, padding: "1rem 0", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ color: "var(--neon)", fontWeight: 800, flexShrink: 0 }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-strip">
        <h2>Don&apos;t Miss the Next Session.</h2>
        <p>Register your interest and we&apos;ll notify you when new workshops and masterclasses are announced.</p>
        <div className="actions">
          <Link href="/contact" className="btn-gold">Register Interest</Link>
          <Link href="/programs" className="btn-outline">Explore Full Programs</Link>
        </div>
      </div>
    </>
  );
}
