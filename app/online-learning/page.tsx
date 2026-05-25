import Link from "next/link";
import { programs } from "@/lib/data";

export const metadata = {
  title: "Online Learning — KPF Academy",
  description: "KPF's online programs deliver the same academic rigour, mentor-led instruction, and professional outcomes — accessible from wherever you are.",
};

export default function OnlineLearningPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Online Learning</span>
          <h1>Learn from Anywhere. With Structure, Support, and Flexibility.</h1>
          <p>KPF&apos;s online programs deliver the same academic rigour, mentor-led instruction, and professional outcomes as our offline learning — accessible from wherever you are.</p>
          <Link href="/programs" className="btn-gold">Explore Programs →</Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>How It Works</span>
            <h2 style={{ marginBottom: "1rem" }}>A Premium Learning Experience. Not a Video Library.</h2>
            <p style={{ color: "var(--gray)" }}>Online learning at KPF is not a collection of pre-recorded videos left for you to figure out alone. It is a structured, guided, and interactive education experience.</p>
          </div>
          <div className="pillars-grid">
            {[
              { num: "01", title: "Scheduled Live Classes", desc: "Attend real-time, mentor-led sessions with structured agendas and interactive participation. Ask questions. Get answers. Learn with a cohort." },
              { num: "02", title: "Recorded Sessions for Revision", desc: "Every live class is recorded and made available for replay — so you can revisit, revise, and reinforce at your own pace." },
              { num: "03", title: "Study Materials & Resources", desc: "Access curated study guides, reference notes, and supplementary reading designed to deepen your understanding and aid retention." },
              { num: "04", title: "Assignments & Case Studies", desc: "Regular practical assessments that challenge you to apply what you've learned — not just recall information." },
              { num: "05", title: "Mentorship & Faculty Access", desc: "Direct access to your program faculty for academic support, doubt resolution, and professional guidance throughout the program." },
              { num: "06", title: "Assessment & Certification", desc: "Rigorous evaluation standards ensure every online graduate meets the same professional benchmark as offline students." },
            ].map((s) => (
              <div key={s.num} className="pillar-card">
                <div className="pillar-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/apply" className="btn-outline">Download Brochure →</Link>
          </div>
        </div>
      </section>

      {/* STUDENT SUPPORT */}
      <section className="section section-dark">
        <div className="container">
          <div className="page-two-col">
            <div>
              <span className="section-label">Support</span>
              <h2 style={{ marginBottom: "1.5rem" }}>You Are Never Learning Alone.</h2>
              <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: "2rem" }}>
                One of the biggest concerns about online education is isolation. At KPF, that concern doesn&apos;t exist. Every online student receives comprehensive support throughout their program.
              </p>
              <Link href="/contact" className="btn-gold">Book Academic Counselling →</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                { icon: "🧑‍🏫", title: "Mentor Support", desc: "Direct access to faculty for doubt clearing and academic guidance throughout your program." },
                { icon: "🎯", title: "Academic Counselling", desc: "Help choosing the right program, managing your schedule, and navigating your learning journey." },
                { icon: "👥", title: "Peer Community", desc: "Learn alongside a cohort of motivated professionals — grow your network while you learn." },
                { icon: "💼", title: "Career Support", desc: "The same professional development guidance available to all KPF students — online or offline." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start", padding: "1.2rem", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.9rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white)", marginBottom: "0.3rem" }}>{item.title}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--gray)", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section section-darker">
        <div className="container">
          <div className="page-two-col">
            <div>
              <span className="section-label">Is This for You?</span>
              <h2 style={{ marginBottom: "1.5rem" }}>Online Learning at KPF Is Ideal For:</h2>
              <Link href="/apply" className="btn-gold">Apply Now →</Link>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Working professionals who can't attend full-time in-person sessions",
                "Students in cities where KPF does not have an offline centre",
                "Self-motivated learners who thrive with structure and flexibility combined",
                "Professionals balancing education with existing work or family commitments",
                "Anyone who wants premium, mentor-led fitness education without geographical constraints",
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

      {/* PROGRAMS AVAILABLE ONLINE */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Programs Available Online</span>
            <h2>Programs You Can Complete Online.</h2>
          </div>
          <div className="prog-grid">
            {programs.filter(p => p.format.includes("Online")).map((p) => (
              <div key={p.slug} className="prog-card">
                <div className="prog-card-badge">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.shortDesc}</p>
                <div className="prog-card-meta">Duration: <span>{p.duration}</span></div>
                <Link href={`/programs/${p.slug}`} className="btn-gold" style={{ fontSize: "0.75rem", padding: "0.6rem 1.4rem" }}>View Program →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section section-darker">
        <div className="container">
          <span className="section-label">Frequently Asked Questions</span>
          <h2 style={{ marginBottom: "2rem" }}>Online Learning Questions.</h2>
          <div className="faq-section">
            {[
              { q: "Are online classes live or pre-recorded?", a: "Both. Classes are conducted live with the faculty, and recordings are made available immediately after for revision. You benefit from real-time interaction and the flexibility of replay." },
              { q: "How much time should I commit per week?", a: "Most students invest 8–12 hours per week — including live sessions, self-study, and assignments. This can flex based on your program and pace." },
              { q: "Will I get the same certification as offline students?", a: "Yes. The curriculum, assessments, and certification standards are identical across all learning formats." },
              { q: "What if I miss a live session?", a: "All live sessions are recorded. You can watch the replay at your convenience and reach out to faculty if you have questions." },
              { q: "Is there a technical requirement?", a: "A stable internet connection and a laptop or tablet are recommended. All materials are accessible via web browser — no special software needed." },
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
        <h2>Start Learning — From Wherever You Are.</h2>
        <p>Premium education shouldn&apos;t require you to relocate. Apply now and begin your KPF journey online.</p>
        <div className="actions">
          <Link href="/apply" className="btn-gold">Apply Now</Link>
          <Link href="/contact" className="btn-outline">Book Academic Counselling</Link>
        </div>
      </div>
    </>
  );
}
