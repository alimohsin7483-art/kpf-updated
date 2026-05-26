import Link from "next/link";
import { programs } from "@/lib/data";

export const metadata = {
  title: "Online Learning — KPF Academy",
  description: "KPF's online programs deliver the same academic rigour, mentor-led instruction, and professional outcomes — accessible from wherever you are.",
};

const HOW_IT_WORKS = [
  { num: "01", icon: "🎥", title: "Scheduled Live Classes", desc: "Attend real-time, mentor-led sessions with structured agendas and interactive participation. Ask questions. Get answers. Learn with a cohort." },
  { num: "02", icon: "📚", title: "Recorded Sessions for Revision", desc: "Every live class is recorded and made available for replay — so you can revisit, revise, and reinforce at your own pace." },
  { num: "03", icon: "📖", title: "Study Materials & Resources", desc: "Access curated study guides, reference notes, and supplementary reading designed to deepen your understanding and aid retention." },
  { num: "04", icon: "✍️", title: "Assignments & Case Studies", desc: "Regular practical assessments that challenge you to apply what you've learned — not just recall information." },
  { num: "05", icon: "🧑‍🏫", title: "Mentorship & Faculty Access", desc: "Direct access to your program faculty for academic support, doubt resolution, and professional guidance throughout the program." },
  { num: "06", icon: "🎓", title: "Assessment & Certification", desc: "Rigorous evaluation standards ensure every online graduate meets the same professional benchmark as offline students." },
];

const SUPPORT_ITEMS = [
  { icon: "🧑‍🏫", title: "Mentor Support",       desc: "Direct access to faculty for doubt clearing and academic guidance throughout your program." },
  { icon: "🎯", title: "Academic Counselling", desc: "Help choosing the right program, managing your schedule, and navigating your learning journey." },
  { icon: "👥", title: "Peer Community",       desc: "Learn alongside a cohort of motivated professionals — grow your network while you learn." },
  { icon: "💼", title: "Career Support",       desc: "The same professional development guidance available to all KPF students — online or offline." },
];

const WHO_ITS_FOR = [
  "Working professionals who can't attend full-time in-person sessions",
  "Students in cities where KPF does not have an offline centre",
  "Self-motivated learners who thrive with structure and flexibility combined",
  "Professionals balancing education with existing work or family commitments",
  "Anyone who wants premium, mentor-led fitness education without geographical constraints",
];

export default function OnlineLearningPage() {
  const onlinePrograms = programs.filter((p) => p.format?.includes("Online"));

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>
            Online Learning
          </span>
          <h1>Learn from Anywhere.<br />With Structure &amp; Support.</h1>
          <p>
            KPF&apos;s online programs deliver the same academic rigour,
            mentor-led instruction, and professional outcomes as our offline
            learning — accessible from wherever you are.
          </p>
          <Link href="/programs" className="btn-gold">Explore Programs →</Link>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────── */}
      <div className="proof-bar">
        {[
          { icon: "🎥", text: "Live mentor-led classes" },
          { icon: "📱", text: "Learn from any device" },
          { icon: "🏅", text: "Same certification standard" },
          { icon: "🌍", text: "Students across India" },
        ].map((item) => (
          <div key={item.text} className="proof-item">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">How It Works</span>
            <h2>A Premium Learning Experience.<br />Not a Video Library.</h2>
            <p className="sectionSubtitle">
              Online learning at KPF is a structured, guided, and interactive
              education experience — not a collection of pre-recorded videos.
            </p>
          </div>

          <div className="pillarsGrid">
            {HOW_IT_WORKS.map((s) => (
              <div key={s.num} className="pillarCard">
                <div className="pillarNum">{s.num}</div>
                <div style={{ fontSize: "1.6rem", marginBottom: "0.7rem" }}>{s.icon}</div>
                <h4 className="pillarTitle">{s.title}</h4>
                <p className="pillarDesc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="sectionCta">
            <Link href="/apply" className="btn-outline">Download Brochure →</Link>
          </div>
        </div>
      </section>

      {/* ── STUDENT SUPPORT ───────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="page-split-grid">
            <div>
              <span className="section-label">Support</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                You Are Never<br />Learning Alone.
              </h2>
              <p className="bodyText">
                One of the biggest concerns about online education is isolation.
                At KPF, that concern doesn&apos;t exist. Every online student
                receives comprehensive support throughout their program.
              </p>
              <Link href="/contact" className="btn-gold">
                Book Academic Counselling →
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {SUPPORT_ITEMS.map((item) => (
                <div key={item.title} className="featureBlock">
                  <span className="featureBlockIcon">{item.icon}</span>
                  <div>
                    <div className="featureBlockTitle">{item.title}</div>
                    <div className="featureBlockDesc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────────── */}
      <section className="section section-darker">
        <div className="container">
          <div className="page-split-grid">
            <div>
              <span className="section-label">Is This for You?</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Online Learning at KPF<br />Is Ideal For:
              </h2>
              <Link href="/apply" className="btn-gold">Apply Now →</Link>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {WHO_ITS_FOR.map((item) => (
                <li key={item} className="checkListItem">
                  <span className="checkListBullet">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS AVAILABLE ONLINE ─────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Programs Available Online</span>
            <h2>Programs You Can Complete Online.</h2>
          </div>
          <div className="prog-grid">
            {onlinePrograms.map((p) => (
              <div key={p.slug} className="prog-card">
                <span className="prog-card-badge">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.shortDesc}</p>
                <div className="prog-card-meta">
                  Format: <span>{p.format?.join(" / ")}</span>
                </div>
                <Link href={`/programs/${p.slug}`} className="btn-gold" style={{ fontSize: "0.72rem", padding: "0.65rem 1.5rem" }}>
                  View Program →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="cta-strip">
        <h2>Ready to Start Learning Online?</h2>
        <p>Apply now or book a counselling session to find the right program for you.</p>
        <div className="actions">
          <Link href="/apply"   className="btn-gold">Apply Now</Link>
          <Link href="/contact" className="btn-outline">Book Counselling</Link>
        </div>
      </section>
    </>
  );
}
