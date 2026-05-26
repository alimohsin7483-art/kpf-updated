"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About KPF" },
  { href: "/programs", label: "Programs" },
  { href: "/online-learning", label: "Online Learning" },
  { href: "/offline-learning", label: "Offline Learning" },
  { href: "/workshops", label: "Workshops" },
  { href: "/faculty", label: "Faculty" },
  { href: "/career-support", label: "Career Support" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// First 3 shown on desktop, rest in "More →" dropdown
const PRIMARY_LINKS = NAV_LINKS.slice(0, 3);
const MORE_LINKS = NAV_LINKS.slice(3);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close "More" dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.navWrap} ${scrolled ? styles.navScrolled : ""}`}>
        <nav className={styles.nav}>

          {/* LEFT — LOGO */}
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo.png"
              alt="KPF Academy"
              width={40}
              height={40}
              className={styles.logoImg}
              priority
            />
            <div className={styles.logoContent}>
              <div className={styles.logoText}>KINETIC PRO FITNESS ACADEMY</div>
              <div className={styles.logoSub}>Excellence in Fitness Education</div>
            </div>
          </Link>

          {/* CENTER — DESKTOP PRIMARY LINKS + MORE DROPDOWN */}
          <div className={styles.desktopLinks}>
            {PRIMARY_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}

            {/* More → Dropdown */}
            <div ref={moreRef} className={styles.moreWrap}>
              <button
                className={`${styles.navLink} ${styles.moreBtn} ${moreOpen ? styles.moreBtnActive : ""}`}
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
              >
                More
                <svg
                  className={`${styles.moreChevron} ${moreOpen ? styles.moreChevronOpen : ""}`}
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                >
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {moreOpen && (
                <div className={styles.moreDropdown}>
                  {MORE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={styles.moreLink}
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT — CTA BUTTONS + HAMBURGER */}
          <div className={styles.navRight}>
            <Link href="/contact" className={styles.secondaryBtn}>
              Book Counselling
            </Link>
            <Link href="/apply" className={styles.primaryBtn}>
              Apply Now
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span className={`${styles.hamburgerBar} ${mobileOpen ? styles.bar1Open : ""}`} />
              <span className={`${styles.hamburgerBar} ${mobileOpen ? styles.bar2Open : ""}`} />
              <span className={`${styles.hamburgerBar} ${mobileOpen ? styles.bar3Open : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileMenuInner}>
          <nav className={styles.mobileNav}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.mobileCtas}>
            <Link
              href="/contact"
              className={styles.mobileCtaOutline}
              onClick={() => setMobileOpen(false)}
            >
              Book Counselling
            </Link>
            <Link
              href="/apply"
              className={styles.mobileCtaGold}
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
