import Link from "next/link";

export const metadata = {
  title: "Offline Learning — KPF Academy",
  description: "KPF offline learning centres in Mumbai, Surat and Ahmedabad. Hands-on, immersive, in-person fitness education with live demonstrations.",
};

const OFFLINE_ADVANTAGES = [
  { icon: "🏋️", title: "Live Practical Training",    desc: "Work through real coaching scenarios with expert supervision and immediate feedback." },
  { icon: "👩‍🏫", title: "Direct Faculty Interaction", desc: "Ask, discuss, and learn in real time — face to face with experienced educators." },
  { icon: "👥", title: "Peer Learning Environment", desc: "Build professional connections with fellow students — your future industry network." },
  { icon: "📅", title: "Structured Scheduling",     desc: "Dedicated learning time in a focused environment that minimises distraction." },
  { icon: "🎯", title: "Assessment in Practice",    desc: "Demonstrate your skills in a real-world setting with evaluators present." },
];

const LOCATIONS = [
  { city: "Mumbai",     status: "Active",      note: "Primary academic centre. Full program schedule available." },
  { city: "Surat",       status: "Active",      note: "Active learning centre with regular batch schedules." },
  { city: "Ahmedabad",  status: "Active",      note: "Active learning centre. Contact us for batch availability." },
  { city: "More Cities",status: "Coming Soon", note: "New locations being added. Register interest to be notified." },
];

export default function OfflineLearningPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>
            Offline Learning
          </span>
          <h1>Hands-On. Immersive.<br />In-Person.</h1>
          <p>
            KPF&apos;s offline learning centres bring the classroom to life — with live
            demonstrations, practical sessions, direct faculty interaction, and a
            focused environment designed for professional development.
          </p>
          <Link href="/programs" className="btn-gold">Explore Programs →</Link>
        </div>
      </section>

      {/* ── PROOF BAR ─────────────────────────────────────────────── */}
      <div className="proof-bar">
        {[
          { icon: "🏙️", text: "3 cities — Mumbai, Surat, Ahmedabad" },
          { icon: "🧑‍🏫", text: "Expert faculty on-site" },
          { icon: "🏋️", text: "Live practical training" },
          { icon: "👥", text: "Cohort-based learning" },
        ].map((item) => (
          <div key={item.text} className="proof-item">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* ── WHY OFFLINE ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="page-split-grid">
            <div>
              <span className="section-label">Why Offline</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Some Things Are Best<br />Learned in Person.
              </h2>
              <p className="bodyText">
                While our online programs deliver exceptional results, there are
                aspects of fitness education that benefit deeply from physical
                presence — observing movement, correcting technique, practising
                assessments, and receiving real-time feedback.
              </p>
              <p className="bodyText" style={{ marginBottom: "2.5rem" }}>
                KPF&apos;s offline programs are designed for professionals who
                want the full, immersive experience.
              </p>
              <Link href="/contact" className="btn-gold">
                Book Academic Counselling →
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {OFFLINE_ADVANTAGES.map((item) => (
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

      {/* ── LOCATIONS ─────────────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Our Centres</span>
            <h2>Where We Teach.</h2>
            <p className="sectionSubtitle">
              Hands-on learning at dedicated KPF centres — led by experienced
              faculty with full practical facilities.
            </p>
          </div>

          <div className="locationGrid">
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="locationCard">
                <div className="locationCity">{loc.city}</div>
                <div className={`locationStatus${loc.status === "Active" ? " locationActive" : ""}`}
                  style={{ marginBottom: "0.8rem" }}>
                  {loc.status}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--gray)", lineHeight: 1.6, marginBottom: "1.3rem" }}>
                  {loc.note}
                </p>
                {loc.status === "Active" && (
                  <Link href="/contact" className="btn-outline"
                    style={{ fontSize: "0.7rem", padding: "0.5rem 1rem" }}>
                    Enquire →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────────────────── */}
      <section className="section section-darker">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">What to Expect</span>
            <h2>A Day at KPF.</h2>
            <p className="sectionSubtitle">
              Every session is structured to maximise learning, engagement,
              and retention.
            </p>
          </div>

          <div className="timelineGrid">
            {[
              { time: "Morning",   title: "Theory & Lecture",     desc: "Structured content delivery on the day's modules — covering science, application, and context." },
              { time: "Midday",    title: "Practical Demo",        desc: "Faculty-led demonstrations of techniques, assessments, and coaching scenarios." },
              { time: "Afternoon", title: "Hands-On Practice",     desc: "Students work through practical exercises under supervision and receive direct feedback." },
              { time: "Closing",   title: "Q&A & Review",          desc: "Open discussion, doubt resolution, and preview of the next session." },
            ].map((item, i) => (
              <div key={item.time} className="timelineCard">
                <div className="timelineStep">{String(i + 1).padStart(2, "0")}</div>
                <div className="timelineTime">{item.time}</div>
                <div className="timelineTitle">{item.title}</div>
                <div className="timelineDesc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="cta-strip">
        <h2>Ready to Learn In-Person?</h2>
        <p>Contact us to check batch availability at a centre near you.</p>
        <div className="actions">
          <Link href="/apply"   className="btn-gold">Apply Now</Link>
          <Link href="/contact" className="btn-outline">Find Your Centre</Link>
        </div>
      </section>
    </>
  );
}
