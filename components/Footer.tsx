import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} footer-bg`}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="KPF Academy" width={48} height={48} className={styles.logoImg} />
            <div>
              <span className={styles.logoText}>KPF ACADEMY</span>
              <span className={styles.logoSub}>Where Professionals Are Built</span>
            </div>
          </Link>
          <p className={styles.tagline}>Excellence in Fitness Education. Science-based, mentor-led, career-focused programs for India's next generation of fitness professionals.</p>
          <p className={styles.motto}>Education Beyond Certification</p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/kineticprofitnessacademy" target="_blank" rel="noopener noreferrer" className={styles.social}>Instagram</a>
            <a href="https://m.youtube.com/@shraddhagadit" target="_blank" rel="noopener noreferrer" className={styles.social}>YouTube</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.social}>LinkedIn</a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>KPF</h4>
          <Link href="/about" className={styles.colLink}>About KPF</Link>
          <Link href="/faculty" className={styles.colLink}>Faculty</Link>
          <Link href="/career-support" className={styles.colLink}>Career Support</Link>
          <Link href="/blog" className={styles.colLink}>Blog / Insights</Link>
          <Link href="/contact" className={styles.colLink}>Contact</Link>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Programs</h4>
          <Link href="/programs/advanced-personal-training" className={styles.colLink}>Personal Training Certification</Link>
          <Link href="/programs/sports-nutrition" className={styles.colLink}>Sports Nutrition Certification</Link>
          <Link href="/programs/gym-management" className={styles.colLink}>Gym Management & Business</Link>
          <Link href="/programs/workshops" className={styles.colLink}>Workshops & Masterclasses</Link>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Connect</h4>
          <a href="tel:+917208299269" className={styles.colLink}>+91 72082 99269</a>
          <a href="https://wa.me/917208299269" target="_blank" rel="noopener noreferrer" className={styles.colLink}>WhatsApp</a>
          <span className={styles.colLink}>Mumbai · Pune · Ahmedabad</span>
          <Link href="/apply" className="btn-gold" style={{ marginTop: "1.5rem", display: "inline-block", fontSize: "0.75rem", padding: "0.7rem 1.5rem" }}>
            Apply Now →
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2025 KPF Academy. All rights reserved. · Mumbai, India</p>
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
          <span className={styles.legalSep}>·</span>
          <Link href="/terms" className={styles.legalLink}>Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
