import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: `${post.title} — KPF Academy`, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="page-hero" style={{ minHeight: "40vh" }}>
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <div className="blog-cat" style={{ marginBottom: "1rem" }}>{post.category}</div>
          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}>{post.title}</h1>
          <p style={{ marginBottom: "0.5rem" }}>{post.excerpt}</p>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--neon)" }}>
            By KPF Faculty · {post.date}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{ background: "rgba(212,196,106,0.04)", border: "1px solid rgba(212,196,106,0.15)", borderRadius: "var(--radius)", padding: "3rem", marginBottom: "3rem", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem" }}>Full Article Coming Soon</h3>
            <p style={{ color: "var(--gray)", lineHeight: 1.7, marginBottom: "2rem" }}>
              This article is being prepared by the KPF faculty. Subscribe to be notified when it goes live.
            </p>
            <Link href="/contact" className="btn-gold">Stay Notified →</Link>
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>More Articles</h3>
            <div className="blog-grid">
              {blogPosts.filter(p => p.slug !== params.slug).slice(0, 3).map((p) => (
                <div key={p.slug} className="blog-card">
                  <div className="blog-cat">{p.category}</div>
                  <h4 className="blog-title">{p.title}</h4>
                  <p className="blog-excerpt">{p.excerpt}</p>
                  <Link href={`/blog/${p.slug}`} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--neon)" }}>
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <h2>Ready to Move from Reading to Learning?</h2>
        <p>Explore KPF&apos;s programs and take the first step toward a professional fitness career.</p>
        <div className="actions">
          <Link href="/programs" className="btn-gold">Explore Programs</Link>
          <Link href="/contact" className="btn-outline">Book Academic Counselling</Link>
        </div>
      </div>
    </>
  );
}
