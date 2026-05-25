import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "80vh" }}>
      <div className="page-hero-bg" />
      <div className="page-hero-content">
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "10rem", color: "rgba(212,196,106,0.12)", lineHeight: 1, marginBottom: "1rem" }}>404</div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "1rem" }}>Page Not Found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
          <Link href="/" className="btn-gold">Back to Home</Link>
          <Link href="/programs" className="btn-outline">Explore Programs</Link>
        </div>
      </div>
    </section>
  );
}
