import Link from "next/link";
import { testimonials } from "@/lib/data";

export const metadata = {
  title: "Career Support — KPF Academy",
  description: "KPF career support is woven into every program. Professional guidance, branding, communication training, and interview readiness.",
};

export default function CareerSupportPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Career Support</span>
          <h1>Built for Career Growth. Not Just Certification.</h1>
          <p>KPF doesn&apos;t stop at education. Every program includes structured career support — because a certificate without professional readiness is incomplete.</p>
          <Link href="/programs" className="btn-gold">Explore Programs →</Link>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 1rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>What We Offer</span>
            <h2 style={{ marginBottom: "1rem" }}>Career Support That Goes Beyond Placement.</h2>
            <p style={{ color: "var(--gray)" }}>
              KPF&apos;s career support is not a vague promise of &ldquo;job assistance.&rdquo; It is a structured component of every flagship program — designed to make you professionally ready, personally confident, and genuinely prepared for the realities of the fitness industry.
            </p>
          </div>
          <div className="pillars-grid" style={{ marginTop: "3rem" }}>
            {[
              { num: "01", title: "Career Direction Guidance", desc: "One-on-one conversations to help you define your professional path — whether it's personal training, online coaching, nutrition consulting, gym management, or entrepreneurship." },
              { num: "02", title: "Communication & Consultation Training", desc: "Structured practice in how to conduct client consultations, present recommendations, handle objections, and build trust — the skills that separate average trainers from exceptional professionals." },
              { num: "03", title: "Personal Branding & Positioning", desc: "Guidance on how to present yourself professionally — your online presence, your introduction, your credentials, and the way you communicate your value." },
              { num: "04", title: "Interview & Workplace Readiness", desc: "Practical preparation for entering gyms, studios, and fitness organisations with confidence — from resume building to interview simulation." },
              { num: "05", title: "Client Handling & Retention", desc: "Learn the practical dynamics of managing a client — from the first interaction to long-term retention and referrals." },
              { num: "06", title: "Ongoing Professional Development", desc: "After graduation, KPF continues to offer access to workshops, masterclasses, and professional resources — because your development shouldn't end when your certificate arrives." },
            ].map((p) => (
              <div key={p.num} className="pillar-card">
                <div className="pillar-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn-gold">Book Academic Counselling →</Link>
          </div>
        </div>
      </section>

      {/* CAREER PATHWAYS */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Where You Can Go</span>
            <h2 style={{ marginBottom: "1rem" }}>Realistic Career Outcomes for KPF Graduates.</h2>
          </div>
          <div className="pathway-grid">
            {[
              "Personal Trainer — Gym-based or Independent",
              "Online Fitness Coach",
              "Nutrition Coach",
              "Gym Manager / Operations Head",
              "Fitness Entrepreneur",
              "Fitness Educator",
            ].map((path) => (
              <div key={path} className="pathway-card">{path}</div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/programs" className="btn-outline">Explore Programs →</Link>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL READINESS */}
      <section className="section section-darker">
        <div className="container" style={{ maxWidth: 800 }}>
          <span className="section-label">What Makes You Ready</span>
          <h2 style={{ marginBottom: "2rem" }}>Professional Readiness Is More Than Knowledge.</h2>
          <p style={{ color: "var(--gray)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem" }}>
            Many fitness professionals complete certifications and still don&apos;t feel ready to work with real clients, enter a gym with confidence, or present themselves professionally. That&apos;s because most programs stop at information.
          </p>
          <p style={{ color: "var(--gray)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "3rem" }}>
            KPF&apos;s career support is designed to close the gap between knowing and doing — giving you the communication skills, the self-presentation, the confidence, and the practical readiness that employers and clients notice immediately.
          </p>
          <Link href="/apply" className="btn-gold">Apply Now →</Link>
        </div>
      </section>

      {/* STUDENT STORIES */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-label">Student Stories</span>
          <h2 style={{ marginBottom: "3rem" }}>From Students to Professionals.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "2rem" }}>
                <div style={{ color: "var(--neon)", fontSize: "1.2rem", marginBottom: "1rem" }}>★★★★★</div>
                <blockquote style={{ color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: "1.5rem" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "var(--white)", letterSpacing: "0.06em" }}>{t.name}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--neon)", marginTop: "0.3rem" }}>{t.result} · {t.location}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/programs" className="btn-outline">View Programs →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-darker">
        <div className="container">
          <span className="section-label">Frequently Asked Questions</span>
          <h2 style={{ marginBottom: "2rem" }}>Career Support Questions.</h2>
          <div className="faq-section">
            {[
              { q: "Does KPF guarantee job placement?", a: "KPF provides structured career support including professional readiness training, branding guidance, and interview preparation. While we do not guarantee placement, we equip every graduate with the skills and confidence to enter the industry competitively." },
              { q: "When does career support begin?", a: "Career support is integrated into the program itself — not offered only after graduation. You begin developing professional skills from the start." },
              { q: "Is career support available for online students?", a: "Yes. All career support components — guidance, communication training, branding, and interview readiness — are accessible to online, offline, and blended students." },
            ].map((faq) => (
              <div key={faq.q} className="accordion-item">
                <div className="accordion-q">{faq.q}</div>
                <div className="accordion-a">{faq.a}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/contact" className="btn-outline">Contact Us →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-strip">
        <h2>Start Your Professional Journey.</h2>
        <p>You&apos;ve invested in your education. Now let KPF help you make it count.</p>
        <div className="actions">
          <Link href="/apply" className="btn-gold">Apply Now</Link>
          <Link href="/contact" className="btn-outline">Book Academic Counselling</Link>
        </div>
      </div>
    </>
  );
}
