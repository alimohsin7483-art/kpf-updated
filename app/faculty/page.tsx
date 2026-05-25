import Link from "next/link";

export const metadata = {
  title: "Faculty — KPF Academy",
  description: "Learn from educators who've shaped careers in fitness. Led by Shraddha Gadit — 17+ years of experience in fitness education and nutrition science.",
};

export default function FacultyPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Faculty</span>
          <h1>Learn from Educators Who&apos;ve Shaped Careers.</h1>
          <p>KPF&apos;s faculty brings decades of combined experience in fitness education, nutrition science, and professional coaching. They don&apos;t just teach — they mentor, assess, and build professionals.</p>
          <Link href="/programs" className="btn-gold">Explore Programs →</Link>
        </div>
      </section>

      {/* LEAD FACULTY */}
      <section className="section">
        <div className="container">
          <span className="section-label">Lead Faculty</span>
          <h2 style={{ marginBottom: "3rem" }}>Shraddha Gadit</h2>
          <div className="faculty-highlight">
            <div className="faculty-avatar" style={{ width: 220, height: 220, flexShrink: 0 }}>👩‍🏫</div>
            <div>
              <div className="faculty-name">Shraddha Gadit</div>
              <div className="faculty-role">Founder & Education Lead, KPF</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gray)", marginBottom: "1.5rem" }}>
                Gold Medalist · MSc Food Science & Nutrition · 17+ Years in Fitness Education
              </div>
              <p className="faculty-bio" style={{ marginBottom: "1rem" }}>
                Shraddha Gadit is the academic architect behind KPF. With over 17 years of experience spanning academic institutions, corporate fitness education, and professional certification programs, she has designed and delivered curriculum for thousands of fitness professionals across India.
              </p>
              <p className="faculty-bio" style={{ marginBottom: "1rem" }}>
                A former Department Head and Nutrition Lecturer, Shraddha has led education programs at some of India&apos;s most established fitness brands. Her teaching philosophy is built on three pillars: scientific accuracy, practical application, and professional integrity.
              </p>
              <p className="faculty-bio" style={{ marginBottom: "1rem" }}>
                At KPF, Shraddha&apos;s role extends beyond instruction. She has designed the curriculum framework, established assessment standards, and created a faculty-led model that ensures every student is developed — not just taught.
              </p>
              <p className="faculty-bio" style={{ marginBottom: "2rem" }}>
                She is an accomplished Dietician, and has been featured across industry platforms for her contributions to structured, science-driven fitness learning.
              </p>
              <blockquote style={{ borderLeft: "2px solid var(--neon)", paddingLeft: "1.5rem", color: "var(--neon)", fontStyle: "italic", fontSize: "1.05rem", marginBottom: "2rem" }}>
                &ldquo;If you want to change the industry, start by changing how you educate.&rdquo;
              </blockquote>
              <Link href="/contact" className="btn-gold">Book Academic Counselling →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHING PHILOSOPHY */}
      <section className="section section-dark">
        <div className="container">
          <div className="page-split-grid">
            <div>
              <span className="section-label">How We Teach</span>
              <h2 style={{ marginBottom: "1.5rem" }}>The KPF Teaching Philosophy.</h2>
              <p style={{ color: "var(--gray)", lineHeight: 1.8 }}>
                At KPF, education is not about information overload. It&apos;s about turning complex science into practical systems that professionals can use — confidently and consistently — in real-world coaching.
              </p>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                "Simplify science without dumbing it down",
                "Use real coaching scenarios as teaching tools",
                "Assess both knowledge and application",
                "Provide mentorship that extends beyond the classroom",
                "Hold every student to a professional standard — because the industry demands it",
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

      {/* GUEST EDUCATORS */}
      <section className="section section-darker">
        <div className="container">
          <span className="section-label">Our Educators</span>
          <h2 style={{ marginBottom: "1.5rem" }}>The Team Behind Your Education.</h2>
          <p style={{ color: "var(--gray)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 680, marginBottom: "3rem" }}>
            KPF&apos;s programs also feature guest educators, industry specialists, and workshop instructors — each selected for their practical expertise and commitment to evidence-based teaching. Our faculty is chosen for their ability to educate, mentor, and hold students to a professional standard.
          </p>
          <div className="pillars-grid">
            {[
              { role: "Exercise Science Specialist", desc: "Expertise in biomechanics, anatomy, and evidence-based programming for diverse client populations." },
              { role: "Nutrition Science Expert", desc: "Deep specialisation in metabolic science, meal planning, and sports nutrition application." },
              { role: "Coaching & Communication Trainer", desc: "Expertise in consultation skills, client psychology, and professional communication frameworks." },
              { role: "Fitness Business Mentor", desc: "Real-world experience in gym operations, team management, and fitness entrepreneurship." },
            ].map((f) => (
              <div key={f.role} className="pillar-card">
                <h4>{f.role}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FACULTY MATTERS */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 800 }}>
          <span className="section-label">Why This Matters</span>
          <h2 style={{ marginBottom: "2rem" }}>Your Educator Shapes Your Career More Than Your Certificate Does.</h2>
          <p style={{ color: "var(--gray)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem" }}>
            In fitness education, the difference between a good program and a great one is rarely the syllabus. It&apos;s the people teaching it. KPF&apos;s faculty is chosen for their ability to educate, mentor, and hold students to a professional standard — not for their social media following.
          </p>
          <p style={{ color: "var(--gray)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "3rem" }}>
            When you learn at KPF, you learn from professionals who have spent years in the field, the classroom, and the industry — and who are deeply invested in your success.
          </p>
          <Link href="/apply" className="btn-gold">Apply Now →</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-strip">
        <h2>Learn from the Best. Become Your Best.</h2>
        <p>Apply to a KPF program and learn from educators who are invested in your professional success.</p>
        <div className="actions">
          <Link href="/apply" className="btn-gold">Apply Now</Link>
          <Link href="/programs" className="btn-outline">Explore Programs</Link>
        </div>
      </div>
    </>
  );
}
