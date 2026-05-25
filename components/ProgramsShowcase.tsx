"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/lib/data";
import styles from "./ProgramsShowcase.module.css";

const CATEGORIES = [
  { id: "fitness",   label: "Personal Training", icon: "💪" },
  { id: "nutrition", label: "Sports Nutrition",  icon: "🥗" },
  { id: "business",  label: "Gym Management",    icon: "🏢" },
  { id: "workshop",  label: "Workshops",          icon: "🎯" },
];

const PROGRAM_IMAGES: Record<string, string> = {
  "advanced-personal-training": "/images/fitness-certification.png",
  "sports-nutrition":           "/images/nutrition-mastery.svg",
  "gym-management":             "/images/strength-foundations.png",
  "workshops":                  "/images/nutrition-masterclass.svg",
};

export default function ProgramsShowcase() {
  const [catIndex, setCatIndex]   = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [dragging, setDragging]   = useState(false);
  const trackRef  = useRef<HTMLDivElement>(null);
  const dragStart = useRef(0);
  const dragDelta = useRef(0);

  const activeCategory = CATEGORIES[catIndex].id;
  const filtered = programs.filter((p) => p.category === activeCategory);

  const scrollToCard = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(`.${styles.card}`);
    const target = cards[idx];
    if (target) {
      track.scrollTo({ left: target.offsetLeft - 16, behavior: "smooth" });
    }
  }, []);

  useEffect(() => { scrollToCard(cardIndex); }, [cardIndex, scrollToCard]);

  useEffect(() => {
    setCardIndex(0);
    if (trackRef.current) trackRef.current.scrollLeft = 0;
  }, [catIndex]);

  const goRight = () => {
    if (cardIndex < filtered.length - 1) { setCardIndex((i) => i + 1); return; }
    if (catIndex < CATEGORIES.length - 1) setCatIndex((c) => c + 1);
  };

  const goLeft = () => {
    if (cardIndex > 0) { setCardIndex((i) => i - 1); return; }
    if (catIndex > 0) {
      const prevId = CATEGORIES[catIndex - 1].id;
      const prevLen = programs.filter((p) => p.category === prevId).length;
      setCatIndex((c) => c - 1);
      setTimeout(() => setCardIndex(prevLen - 1), 0);
    }
  };

  /* Drag / swipe */
  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    dragStart.current = e.clientX;
    dragDelta.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    dragDelta.current = e.clientX - dragStart.current;
  };
  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragDelta.current < -50) goRight();
    else if (dragDelta.current > 50) goLeft();
  };

  const atStart = catIndex === 0 && cardIndex === 0;
  const atEnd   = catIndex === CATEGORIES.length - 1 && cardIndex === filtered.length - 1;
  const progress = filtered.length > 1
    ? ((cardIndex / (filtered.length - 1)) * 100)
    : 100;

  return (
    <section className={styles.showcase} aria-labelledby="programs-heading">

      {/* HEADER */}
      <div className={styles.header}>
        <span className={styles.label}>What We Offer</span>
        <h2 id="programs-heading" className={styles.heading}>OUR PROGRAMS</h2>
        <p className={styles.sub}>
          Science-backed programs designed by Shraddha Gadit — choose your path.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className={styles.tabs} role="tablist">
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={catIndex === i}
            className={`${styles.tab} ${catIndex === i ? styles.tabActive : ""}`}
            onClick={() => setCatIndex(i)}
          >
            <span className={styles.tabIcon}>{cat.icon}</span>
            {cat.label}
            {catIndex === i && <span className={styles.tabLine} />}
          </button>
        ))}
      </div>

      {/* SLIDER */}
      <div className={styles.sliderWrap}>
        <button
          className={`${styles.arrow} ${atStart ? styles.arrowDim : ""}`}
          onClick={goLeft} disabled={atStart} aria-label="Previous"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div
          className={styles.track}
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          style={{ cursor: dragging ? "grabbing" : "grab" }}
        >
          {filtered.map((p, i) => (
            <article
              key={p.slug}
              className={`${styles.card} ${i === cardIndex ? styles.cardActive : ""}`}
              onClick={() => setCardIndex(i)}
            >
              {/* IMAGE */}
              <div className={styles.imgWrap}>
                <Image
                  src={PROGRAM_IMAGES[p.slug] ?? "/images/programs-bg.jpg"}
                  alt={p.title}
                  fill sizes="280px"
                  style={{ objectFit: "cover" }}
                  className={styles.img}
                />
                {/* gradient overlay */}
                <div
                  className={styles.imgTint}
                  style={{ background: `linear-gradient(170deg, ${p.color}20 0%, rgba(8,8,16,0.85) 100%)` }}
                />
                {/* badge */}
                <span className={styles.badge} style={{ color: p.color, borderColor: `${p.color}55` }}>
                  {p.tag}
                </span>
                {/* hover zoom handled by CSS */}
              </div>

              {/* BODY */}
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span style={{ color: p.color }}>{p.format?.[0] ?? "Online"}</span>
                  {p.duration && <><span className={styles.metaDot}>·</span><span>{p.duration}</span></>}
                </div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.excerpt}>{p.tagline ?? p.subtitle}</p>

                <Link
                  href={`/programs/${p.slug}`}
                  className={styles.cta}
                  style={{ "--accent": p.color } as React.CSSProperties}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Program</span>
                  <span className={styles.ctaArrow}>→</span>
                </Link>
              </div>

              {/* bottom glow */}
              <div
                className={styles.glow}
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${p.color}25 0%, transparent 70%)` }}
              />
            </article>
          ))}

          {/* Partial next-card peek ghost */}
          {filtered.length > 1 && cardIndex < filtered.length - 1 && (
            <div className={styles.peekGhost} aria-hidden />
          )}
        </div>

        <button
          className={`${styles.arrow} ${atEnd ? styles.arrowDim : ""}`}
          onClick={goRight} disabled={atEnd} aria-label="Next"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* PROGRESS BAR */}
      <div className={styles.progressBarWrap} aria-hidden>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      {/* DOTS */}
      <div className={styles.dots} aria-hidden>
        {filtered.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === cardIndex ? styles.dotActive : ""}`}
            onClick={() => setCardIndex(i)}
          />
        ))}
      </div>

    </section>
  );
}
