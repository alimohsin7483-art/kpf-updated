"use client";

// Named export so layout.tsx can do: import { SkipLink } from "@/components/SkipLink"
export function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: "absolute",
        left: "-9999px",
        zIndex: 9999,
        background: "var(--neon, #D4C46A)",
        color: "#050508",
        padding: "0.75rem 1.5rem",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "0.85rem",
        fontWeight: 800,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        textDecoration: "none",
        borderRadius: "0 0 8px 0",
      }}
      onFocus={(e) => { (e.target as HTMLAnchorElement).style.left = "0"; }}
      onBlur={(e)  => { (e.target as HTMLAnchorElement).style.left = "-9999px"; }}
    >
      Skip to main content
    </a>
  );
}

export default SkipLink;
