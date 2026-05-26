import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import WhatsAppButton from "@/components/funnel/WhatsAppButton";
import MetaPixel from "@/components/MetaPixel";
import { SkipLink } from "@/components/SkipLink";
import "./globals.css";

export const metadata: Metadata = {
  title: "KPF Academy — Where Fitness Professionals Are Built, Not Just Certified.",
  description:
    "India's premium academy for personal training, sports nutrition, and fitness business education. Science-based, mentor-led, career-focused.",
  keywords:
    "KPF, personal training certification, sports nutrition course, fitness education India, fitness trainer course Mumbai, Shraddha Gadit",
  openGraph: {
    title: "KPF Academy — Where Fitness Professionals Are Built, Not Just Certified.",
    description:
      "India's premium academy for personal training, sports nutrition, and fitness business education.",
    siteName: "KPF Academy",
    locale: "en_IN",
    type: "website",
  },
};

/* Announcement bar text — duplicated for seamless mobile scroll loop */
const ANN_TEXT = (
  <>
    Admissions Open for July 2026 Batch &nbsp;·&nbsp; Limited seats across all programs
    &nbsp;·&nbsp;<a href="/apply">Apply Now</a>
    &nbsp;·&nbsp;<a href="/contact">Book Counselling</a>
    &nbsp;&nbsp;✦&nbsp;&nbsp;
    Admissions Open for July 2026 Batch &nbsp;·&nbsp; Limited seats across all programs
    &nbsp;·&nbsp;<a href="/apply">Apply Now</a>
    &nbsp;·&nbsp;<a href="/contact">Book Counselling</a>
    &nbsp;&nbsp;✦&nbsp;&nbsp;
  </>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <MetaPixel />
      </head>
      <body>
        <SkipLink />

        {/* Fixed announcement bar */}
        <div className="announce-bar" aria-label="Announcement">
          {/* announce-bar-inner scrolls on mobile, static on desktop */}
          <div className="announce-bar-inner">
            {ANN_TEXT}
          </div>
        </div>

        {/* Fixed navbar */}
        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />
        <LeadPopup />
        <WhatsAppButton />
      </body>
    </html>
  );
}
