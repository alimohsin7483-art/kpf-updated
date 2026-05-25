import Link from "next/link";
import { programs } from "@/lib/data";

export const metadata = {
  title: "Offline Learning — KPF Academy",
  description: "KPF offline learning centres in Mumbai, Pune and Ahmedabad. Hands-on, immersive, in-person fitness education with live demonstrations.",
};

export default function OfflineLearningPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Offline Learning</span>
          <h1>Hands-On. Immersive. In-Person.</h1>
          <p>KPF&apos;s offline learning centres bring the classroom to life — with live demonstrations, practical sessions, direct faculty interaction, and a focused learning environment designed for professional development.</p>
          <Link href="/programs" className="btn-gold">Explore Programs →</Link>
        </div>
      </section>

      {/* WHY OFFLINE */}
      <section className="section">
        <div className="container">
          <div className="page-two-col">
            <div>
              <span className="section-label">Why Offline</span>
              <h2 style={{ marginBottom: "1.5rem" }}>Some Things Are Best Learned in Person.</h2>
              <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: "1.2rem" }}>
                While our online programs deliver exceptional results, there are aspects of fitness education that benefit deeply from physical presence — observing movement, correcting technique, practising assessments, receiving real-time feedback, and learning alongside a cohort of peers.
              </p>
              <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                KPF&apos;s offline programs are designed for professionals who want the full, immersive experience.
              </p>
              <Link href="/contact" className="btn-gold">Book Academic Counselling →</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                { icon: "🏋️", title: "Live Practical Training", desc: "Work through real coaching scenarios with expert supervision and immediate feedback." },
                { icon: "👩‍🏫", title: "Direct Faculty Interaction", desc: "Ask, discuss, and learn in real time — face to face with experienced educators." },
                { icon: "👥", title: "Peer Learning Environment", desc: "Build professional connections with fellow students — your future industry network." },
                { icon: "📅", title: "Structured Scheduling", desc: "Dedicated learning time in a focused environment that minimises distraction." },
                { icon: "🎯", title: "Assessment in Practice", desc: "Demonstrate your skills in a real-world setting with evaluators present." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.88rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white)", marginBottom: "0.2rem" }}>{item.title}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--gray)", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 540, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Our Centres</span>
            <h2 style={{ marginBottom: "1rem" }}>Where We Teach.</h2>
          </div>
          <div className="location-grid">
            {[
              { city: "Mumbai", status: "Active", note: "Primary academic centre. Full program schedule available." },
              { city: "Pune", status: "Active", note: "Active learning centre with regular batch schedules." },
              { city: "Ahmedabad", status: "Active", note: "Active learning centre. Contact us for batch availability." },
              { city: "More Cities", status: "Coming Soon", note: "New locations being added. Register interest to be notified." },
            ].map((loc) => (
              <div key={loc.city} className="location-card">
                <div className="location-city">{loc.city}</div>
                <div className={`location-status ${loc.status === "Active" ? "active" : ""}`} style={{ marginBottom: "0.8rem" }}>{loc.status}</div>
                <p style={{ fontSize: "0.85rem", color: "var(--gray)", lineHeight: 1.6, marginBottom: "1.2rem" }}>{loc.note}</p>
                {loc.status === "Active" && (
                  <Link href="/contact" className="btn-outline" style={{ fontSize: "0.72rem", padding: "0.5rem 1rem" }}>Enquire →</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE */}
      <section className="section section-darker">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>The Experience</span>
            <h2 style={{ marginBottom: "1rem" }}>What to Expect at a KPF Learning Centre.</h2>
            <p style={{ color: "var(--gray)" }}>
              Our offline centres are designed to feel like a professional learning environment — clean, well-equipped, and purpose-built for fitness education. Expect structured sessions, practical demonstrations, and a faculty-led atmosphere that mirrors the seriousness of the subject matter.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              { icon: "🏛️", title: "Professional Environment", desc: "Purpose-built classrooms and practical spaces designed for focused learning." },
              { icon: "📋", title: "Structured Sessions", desc: "Every session follows a clear agenda, with pre-reading, live instruction, and Q&A time." },
              { icon: "🎓", title: "Expert Faculty", desc: "Led by Shraddha Gadit and experienced educators — not gym floor assistants." },
            ].map((item) => (
              <div key={item.title} className="format-card">
                <div className="format-icon">{item.icon}</div>
                <div className="format-name">{item.title}</div>
                <div className="format-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS BY LOCATION */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-label">Programs by Location</span>
          <h2 style={{ marginBottom: "2rem" }}>What You Can Study at Each Centre.</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Mumbai</th>
                  <th>Pune</th>
                  <th>Ahmedabad</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Advanced Personal Training", mum: true, pune: true, ahm: true },
                  { name: "Applied Sports Nutrition", mum: true, pune: true, ahm: "check" },
                  { name: "Gym Management", mum: "check", pune: "check", ahm: "check" },
                  { name: "Workshops & Masterclasses", mum: true, pune: true, ahm: true },
                ].map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    {["mum", "pune", "ahm"].map((city) => {
                      const val = row[city as keyof typeof row];
                      return (
                        <td key={city}>
                          {val === true ? <span className="check-yes">✓ Available</span>
                            : val === "check" ? <span style={{ color: "var(--gray)" }}>Check Availability</span>
                            : <span className="check-no">—</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/programs" className="btn-outline">View Program Details →</Link>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section section-darker">
        <div className="container">
          <span className="section-label">Frequently Asked Questions</span>
          <h2 style={{ marginBottom: "2rem" }}>Offline Learning Questions.</h2>
          <div className="faq-section">
            {[
              { q: "How are offline batches scheduled?", a: "Batches are scheduled periodically throughout the year. Contact our team or enquire about the current batch calendar for your preferred city." },
              { q: "What is the batch size?", a: "To maintain quality, KPF keeps batch sizes small — ensuring every student receives adequate attention, practice time, and feedback from faculty." },
              { q: "Can I combine online and offline learning?", a: "Yes. Our blended format allows you to complete theory modules online and attend practical sessions at a KPF centre. This is a popular option for working professionals." },
              { q: "What should I bring to offline sessions?", a: "Comfortable athletic clothing for practical sessions, a notebook, and a learning mindset. All study materials will be provided by KPF." },
              { q: "Can I visit a centre before enrolling?", a: "Yes. Contact us to schedule a visit to your nearest KPF learning centre before committing to a program." },
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
        <h2>Find the Right Location and Batch for You.</h2>
        <p>Our academic counselling team can help you identify the best centre, format, and timeline for your education.</p>
        <div className="actions">
          <Link href="/apply" className="btn-gold">Apply Now</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </>
  );
}
