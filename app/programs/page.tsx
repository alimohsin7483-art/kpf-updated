import Link from "next/link";
import { programs } from "@/lib/data";

export const metadata = {
  title: "Programs — KPF Academy",
  description: "Structured certification programs in personal training, sports nutrition, gym management, and workshops. Online, offline, and blended formats.",
};

export default function ProgramsPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Programs</span>
          <h1>Choose the Learning Pathway Aligned with Your Goals.</h1>
          <p>Structured certification programs and short-format learning across personal training, sports nutrition, and fitness business — available online, offline, and in blended formats.</p>
          <Link href="/apply" className="btn-gold">Download Brochure →</Link>
        </div>
      </section>

      {/* PROGRAM FINDER */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Find Your Fit</span>
            <h2 style={{ marginBottom: "1rem" }}>Not Sure Where to Start?</h2>
            <p style={{ color: "var(--gray)" }}>Every learner comes to KPF at a different stage. Use the pathways below to identify the program that fits your goals — or speak with our academic counselling team.</p>
          </div>
          <div className="prog-grid">
            {[
              { label: "I'm New to Fitness Education", rec: "Advanced Personal Training Certification", href: "/programs/advanced-personal-training", icon: "🌱" },
              { label: "I'm a Working Trainer Looking to Level Up", rec: "Applied Sports Nutrition Certification", href: "/programs/sports-nutrition", icon: "📈" },
              { label: "I Want to Build or Manage a Fitness Business", rec: "Gym Management & Fitness Business", href: "/programs/gym-management", icon: "🏢" },
              { label: "I Want Focused, Short-Format Learning", rec: "Workshops & Masterclasses", href: "/programs/workshops", icon: "⚡" },
            ].map((item) => (
              <div key={item.label} className="prog-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.icon}</div>
                <p style={{ color: "var(--gray)", fontSize: "0.92rem", marginBottom: "1rem" }}>{item.label}</p>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--neon)", marginBottom: "1.5rem" }}>
                  Recommended:
                </div>
                <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", marginBottom: "1.5rem" }}>{item.rec}</h4>
                <Link href={item.href} className="btn-gold" style={{ fontSize: "0.75rem", padding: "0.6rem 1.4rem" }}>
                  View Program →
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn-outline">Book Academic Counselling →</Link>
          </div>
        </div>
      </section>

      {/* SIGNATURE PROGRAMS */}
      <section className="section section-darker">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Certification Programs</span>
            <h2>Our Flagship Programs.</h2>
          </div>
          <div className="prog-grid">
            {programs.map((p) => (
              <div key={p.slug} className="prog-card">
                <div className="prog-card-badge">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.shortDesc}</p>
                <div className="prog-card-meta">
                  Format: <span>{p.format.join(" | ")}</span>
                  &nbsp;&nbsp;·&nbsp;&nbsp;
                  Duration: <span>{p.duration}</span>
                </div>
                <Link href={`/programs/${p.slug}`} className="btn-gold" style={{ fontSize: "0.75rem", padding: "0.6rem 1.4rem" }}>
                  View Program Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE PROGRAMS */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-label">Compare Programs</span>
          <h2 style={{ marginBottom: "2rem" }}>At a Glance.</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Personal Training</th>
                  <th>Sports Nutrition</th>
                  <th>Gym Management</th>
                  <th>Workshops</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Focus</td>
                  <td>Training science & coaching</td>
                  <td>Nutrition science & application</td>
                  <td>Business operations & leadership</td>
                  <td>Specialised, topic-based</td>
                </tr>
                <tr>
                  <td>Format</td>
                  <td>Online / Offline / Blended</td>
                  <td>Online / Offline / Blended</td>
                  <td>Online / Blended</td>
                  <td>Online / In-Person</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>4–6 Months</td>
                  <td>3–5 Months</td>
                  <td>3–4 Months</td>
                  <td>Half-day to 2-day</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>Aspiring / working trainers</td>
                  <td>Trainers, health professionals</td>
                  <td>Gym owners, managers</td>
                  <td>All professionals</td>
                </tr>
                <tr>
                  <td>Career Support</td>
                  <td><span className="check-yes">✓ Included</span></td>
                  <td><span className="check-yes">✓ Included</span></td>
                  <td><span className="check-yes">✓ Included</span></td>
                  <td><span className="check-no">—</span></td>
                </tr>
                <tr>
                  <td>Certification</td>
                  <td><span className="check-yes">✓ Yes</span></td>
                  <td><span className="check-yes">✓ Yes</span></td>
                  <td><span className="check-yes">✓ Yes</span></td>
                  <td><span className="check-yes">✓ Completion Certificate</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/apply" className="btn-gold">Apply Now →</Link>
          </div>
        </div>
      </section>

      {/* LEARNING FORMATS */}
      <section className="section section-darker">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>How You Learn</span>
            <h2 style={{ marginBottom: "1rem" }}>Flexible Formats. Consistent Quality.</h2>
            <p style={{ color: "var(--gray)" }}>Whether you choose online, offline, or blended — the curriculum, assessments, and mentorship quality remain identical.</p>
          </div>
          <div className="format-grid">
            {[
              { icon: "💻", name: "Online", desc: "Live classes, recorded lectures, digital study materials, mentor support, online assessments. Study from anywhere." },
              { icon: "🏛️", name: "Offline", desc: "In-person sessions at KPF learning centres. Hands-on practicals, live demonstrations, and direct faculty interaction." },
              { icon: "🔀", name: "Blended", desc: "The best of both. Online theory combined with scheduled offline practical sessions for maximum learning impact." },
            ].map((f) => (
              <div key={f.name} className="format-card">
                <div className="format-icon">{f.icon}</div>
                <div className="format-name">{f.name}</div>
                <div className="format-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 2rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Frequently Asked Questions</span>
            <h2>Common Questions.</h2>
          </div>
          <div className="faq-section">
            {[
              { q: "Who can enrol in KPF programs?", a: "KPF programs are open to anyone with a genuine interest in fitness education — whether you have a formal background in fitness or are starting fresh. Specific eligibility details are listed on each program page." },
              { q: "Can I study while working a full-time job?", a: "Yes. Our online and blended formats are designed for working professionals. Live sessions are scheduled for flexibility, and all recordings and materials are accessible at your own pace." },
              { q: "What kind of certification do I receive?", a: "Upon successful completion of your program and assessments, you receive a KPF certification that reflects structured education, mentored learning, and demonstrated competence." },
              { q: "What if I need help choosing the right program?", a: "Book a free Academic Counselling session. Our team will help you identify the right learning pathway based on your goals, experience, and schedule." },
              { q: "Is career support available for online students?", a: "Yes. All career support components — guidance, communication training, branding, and interview readiness — are accessible to online, offline, and blended students." },
            ].map((faq) => (
              <div key={faq.q} className="accordion-item">
                <div className="accordion-q" style={{ fontWeight: 700 }}>{faq.q}</div>
                <div className="accordion-a">{faq.a}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn-outline">Book Academic Counselling →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-strip">
        <h2>Not Sure Which Program Is Right for You?</h2>
        <p>Let our academic counselling team guide you. It takes 15 minutes and could change the direction of your career.</p>
        <div className="actions">
          <Link href="/contact" className="btn-gold">Book Academic Counselling</Link>
          <Link href="/apply" className="btn-outline">Apply Now</Link>
        </div>
      </div>
    </>
  );
}
