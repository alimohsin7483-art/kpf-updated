import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

/* ── SOCIAL PLATFORM DATA ─────────────────────────────────────── */
const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kineticprofitnessacademy",
    color: "#E1306C",
    glow: "rgba(225,48,108,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://m.youtube.com/@shraddhagadit",
    color: "#FF0000",
    glow: "rgba(255,0,0,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 7s-.3-2-1.2-2.7c-1.1-1.2-2.4-1.2-3-1.3C16.6 3 12 3 12 3s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.2v2c0 2 .3 4.2.3 4.2s.3 2 1.2 2.7c1.1 1.2 2.6 1.1 3.3 1.2C7.2 21.4 12 21.4 12 21.4s4.6 0 6.8-.3c.6-.1 1.9-.1 3-1.3.9-.7 1.2-2.7 1.2-2.7s.3-2.1.3-4.2v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l6.6 3.6-6.6 3.5z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917208299269",
    color: "#25D366",
    glow: "rgba(37,211,102,0.3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={`${styles.footer} footer-bg`}>

      {/* ── TOP GOLD ACCENT LINE ──────────────────────────────────── */}
      <div className={styles.accentLine} aria-hidden />

      <div className={styles.top}>

        {/* BRAND COLUMN */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="KPF Academy" width={48} height={48} className={styles.logoImg} />
            <div>
              <span className={styles.logoText}>KPF ACADEMY</span>
              <span className={styles.logoSub}>Where Professionals Are Built</span>
            </div>
          </Link>

          <p className={styles.tagline}>
            Excellence in Fitness Education. Science-based, mentor-led,
            career-focused programs for India&apos;s next generation of
            fitness professionals.
          </p>

          <p className={styles.motto}>Education Beyond Certification ✦</p>

          {/* PREMIUM SOCIAL ICONS */}
          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={s.label}
                style={{ "--social-color": s.color, "--social-glow": s.glow } as React.CSSProperties}
              >
                <span className={styles.socialIconInner}>{s.icon}</span>
                <span className={styles.socialShine} aria-hidden />
              </a>
            ))}
          </div>
        </div>

        {/* NAV COLUMNS */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>KPF</h4>
          <Link href="/about"          className={styles.colLink}>About KPF</Link>
          <Link href="/faculty"        className={styles.colLink}>Faculty</Link>
          <Link href="/career-support" className={styles.colLink}>Career Support</Link>
          <Link href="/blog"           className={styles.colLink}>Blog / Insights</Link>
          <Link href="/contact"        className={styles.colLink}>Contact</Link>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Programs</h4>
          <Link href="/programs/advanced-personal-training" className={styles.colLink}>Personal Training</Link>
          <Link href="/programs/sports-nutrition"           className={styles.colLink}>Sports Nutrition</Link>
          <Link href="/programs/gym-management"             className={styles.colLink}>Gym Management</Link>
          <Link href="/workshops"                           className={styles.colLink}>Workshops</Link>
          <Link href="/online-learning"                     className={styles.colLink}>Online Learning</Link>
          <Link href="/offline-learning"                    className={styles.colLink}>Offline Learning</Link>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Connect</h4>
          <a href="tel:+917208299269"  className={styles.colLink}>+91 72082 99269</a>
          <a href="https://wa.me/917208299269" target="_blank" rel="noopener noreferrer" className={styles.colLink}>WhatsApp Us</a>
          <span className={styles.colLink} style={{ color: "var(--gray2)" }}>Mumbai · Surat · Ahmedabad</span>
          <span className={styles.colLink} style={{ color: "var(--gray2)" }}>Mon–Sat, 10 AM – 7 PM IST</span>
          <Link href="/apply" className="btn-gold" style={{ marginTop: "1.5rem", fontSize: "0.72rem", padding: "0.7rem 1.5rem" }}>
            Apply Now →
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2025 KPF Academy. All rights reserved. · Mumbai, India
        </p>
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
          <span className={styles.legalSep}>·</span>
          <Link href="/terms"          className={styles.legalLink}>Terms &amp; Conditions</Link>
        </div>
      </div>

    </footer>
  );
}
