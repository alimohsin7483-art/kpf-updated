import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog & Insights — KPF Academy",
  description: "Evidence-based articles, practical guides, and expert perspectives from the KPF faculty on fitness education, sports nutrition, and professional coaching.",
};

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>Blog & Insights</span>
          <h1>Insights in Fitness Education, Sports Nutrition, and Professional Coaching.</h1>
          <p>Evidence-based articles, practical guides, and expert perspectives from the KPF faculty — designed to educate, challenge, and keep you sharp.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/apply" className="btn-outline">Subscribe to Updates</Link>
            <Link href="/programs" className="btn-gold">Explore Programs →</Link>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="section">
        <div className="container">
          <span className="section-label">Featured Article</span>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "3rem", marginTop: "2rem", display: "grid", gridTemplateColumns: "var(--blog-cols, 1fr 1fr)", gap: "3rem", alignItems: "center" }}>
            <div>
              <div className="blog-cat" style={{ marginBottom: "1rem" }}>Trainer Development & Career Growth</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", marginBottom: "1.2rem" }}>
                Why Your Coaching Communication Matters More Than Your Programming
              </h2>
              <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                A great program delivered poorly still fails. Here&apos;s how elite coaches communicate, and what separates trainers who retain clients from those who don&apos;t. This article draws on 17+ years of education experience and the most common gaps we see in new fitness professionals.
              </p>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--neon)", marginBottom: "1.5rem" }}>
                By Shraddha Gadit · March 2025
              </div>
              <Link href="/blog/trainer-communication" className="btn-gold">Read Article →</Link>
            </div>
            <div style={{ background: "rgba(212,196,106,0.06)", border: "1px solid rgba(212,196,106,0.15)", borderRadius: "var(--radius)", height: 220, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem" }}>
              💬
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-label">Explore by Topic</span>
          <h2 style={{ marginBottom: "2.5rem" }}>Browse by Category.</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
            {[
              "Sports Nutrition",
              "Exercise Science",
              "Fat Loss — Myths vs. Evidence",
              "Supplement Science",
              "Coaching & Communication",
              "Trainer Development & Career Growth",
              "Fitness Business & Entrepreneurship",
            ].map((cat) => (
              <span
                key={cat}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--neon)",
                  border: "1px solid rgba(212,196,106,0.25)",
                  padding: "0.5rem 1.2rem",
                  borderRadius: "100px",
                  cursor: "pointer",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT POSTS */}
      <section className="section section-darker">
        <div className="container">
          <span className="section-label">Latest Articles</span>
          <h2 style={{ marginBottom: "3rem" }}>Recent Insights.</h2>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.slug} className="blog-card">
                <div className="blog-cat">{post.category}</div>
                <div
                  style={{
                    background: "rgba(212,196,106,0.04)",
                    border: "1px solid rgba(212,196,106,0.1)",
                    borderRadius: "var(--radius-sm)",
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  {post.category.includes("Nutrition") ? "🥗"
                   : post.category.includes("Fat Loss") ? "📉"
                   : post.category.includes("Supplement") ? "💊"
                   : post.category.includes("Coach") ? "💬"
                   : post.category.includes("Trainer") ? "🏋️"
                   : post.category.includes("Business") ? "📊"
                   : "📖"}
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gray2)" }}>
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--neon)" }}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Get the Full Picture</span>
            <h2 style={{ marginBottom: "1rem" }}>Want to Learn More Before You Commit?</h2>
            <p style={{ color: "var(--gray)", marginBottom: "2.5rem" }}>
              Download the KPF brochure for a detailed overview of our programs, curriculum, fees, and learning experience.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/apply" className="btn-gold">Download Brochure →</Link>
              <Link href="/contact" className="btn-outline">Book Academic Counselling</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <div className="cta-strip">
        <h2>Ready to Move from Reading to Learning?</h2>
        <p>Explore KPF&apos;s programs and take the first step toward a professional fitness career.</p>
        <div className="actions">
          <Link href="/programs" className="btn-gold">Explore Programs</Link>
        </div>
      </div>
    </>
  );
}
