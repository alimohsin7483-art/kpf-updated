"use client";
import { useState } from "react";
import { trackEvent, trackCustomEvent } from "@/components/MetaPixel";
import styles from "./LeadForm.module.css";

const WA_NUMBER = "917208299269";

interface LeadFormProps {
  onSuccess?: () => void;
  source?: string;
  interest?: string;
}

export default function LeadForm({
  onSuccess,
  source = "landing",
  interest = "general",
}: LeadFormProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
    course: "",
    timeline: "",
    seriousness: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const goals = [
    { value: "become-trainer",  label: "🏋️ Personal Trainer",  desc: "Start career in fitness" },
    { value: "nutrition-coach", label: "🥗 Nutrition Coach",    desc: "Learn nutrition coaching" },
    { value: "gym-management",  label: "🏢 Gym Management",     desc: "Business & operations" },
    { value: "exploring",       label: "🤔 Exploring Options",  desc: "Not sure yet" },
  ];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.phone.match(/^[6-9]\d{9}$/)) e.phone = "Enter valid 10-digit number";
    if (!formData.goal) e.goal = "Select your goal";
    if (!formData.course) e.course = "Select program";
    if (!formData.timeline) e.timeline = "Select timeline";
    if (!formData.seriousness) e.seriousness = "Select seriousness";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const payload = {
      name: formData.name,
      email: "",
      phone: formData.phone,
      interest: formData.course || interest,
      source,
      goal: formData.goal,
      timeline: formData.timeline,
      seriousness: formData.seriousness,
      program: formData.course,
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("[LeadForm] Submission failed:", err);
    }

    setLoading(false);
    trackEvent("Lead", { content_name: payload.interest, content_category: "KPF Lead" });
    trackCustomEvent("KPFLeadCaptured", { source, course: formData.course, goal: formData.goal });
    setStep("success");
    onSuccess?.();
  };

  const goToWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi KPF Academy! I just submitted an enquiry.\n\nName: ${formData.name}\nGoal: ${formData.goal}\nProgram Interest: ${formData.course}\nTimeline: ${formData.timeline}\n\nPlease guide me on the next steps to enrol.`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  if (step === "success") {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✅</div>
        <h3 className={styles.successTitle}>
          YOU&apos;RE IN, {formData.name.split(" ")[0].toUpperCase()}!
        </h3>
        <p className={styles.successSub}>
          Our academic counselling team will be in touch shortly. For faster response, connect on WhatsApp.
        </p>
        <div className={styles.urgency}>⚡ Limited seats for July 2025 batch</div>
        <button onClick={goToWhatsApp} className={styles.waBtn}>
          Connect on WhatsApp
        </button>
        <p className={styles.successNote}>No spam. Only serious guidance.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.field}>
        <input
          type="text"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <input
          type="tel"
          placeholder="WhatsApp Number (10 digits)"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
          }
          className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.field}>
        <p className={styles.goalLabel}>What&apos;s your goal?</p>
        <div className={styles.goals}>
          {goals.map((g) => (
            <button
              key={g.value}
              type="button"
              className={`${styles.goalBtn} ${formData.goal === g.value ? styles.goalSelected : ""}`}
              onClick={() => setFormData({ ...formData, goal: g.value })}
            >
              <span>{g.label}</span>
              <span className={styles.goalDesc}>{g.desc}</span>
            </button>
          ))}
        </div>
        {errors.goal && <span className={styles.error}>{errors.goal}</span>}
      </div>

      <div className={styles.field}>
        <select
          className={styles.input}
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        >
          <option value="">Select Program of Interest</option>
          <option value="advanced-personal-training">Advanced Personal Training Certification</option>
          <option value="sports-nutrition">Applied Sports Nutrition Certification</option>
          <option value="gym-management">Gym Management &amp; Fitness Business</option>
          <option value="workshops">Workshops &amp; Masterclasses</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>
        {errors.course && <span className={styles.error}>{errors.course}</span>}
      </div>

      <div className={styles.field}>
        <select
          className={styles.input}
          value={formData.timeline}
          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
        >
          <option value="">When are you looking to join?</option>
          <option value="immediately">Immediately — July 2025 batch</option>
          <option value="1-month">Within 1 Month</option>
          <option value="3-months">Within 3 Months</option>
          <option value="exploring">Just Exploring</option>
        </select>
        {errors.timeline && <span className={styles.error}>{errors.timeline}</span>}
      </div>

      <div className={styles.field}>
        <select
          className={styles.input}
          value={formData.seriousness}
          onChange={(e) => setFormData({ ...formData, seriousness: e.target.value })}
        >
          <option value="">How serious are you about this?</option>
          <option value="fully-committed">Fully Committed — Ready to enrol</option>
          <option value="serious">Serious — Need more information</option>
          <option value="exploring">Still Exploring Options</option>
        </select>
        {errors.seriousness && <span className={styles.error}>{errors.seriousness}</span>}
      </div>

      <button type="submit" className={styles.submit} disabled={loading}>
        {loading ? <span className={styles.spinner} /> : "Get My Program Details →"}
      </button>

      <p className={styles.privacy}>🔒 No spam. Our admissions team reviews every enquiry personally.</p>
    </form>
  );
}
