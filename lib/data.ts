// ── KPF ACADEMY — Central Data Store ─────────────────────────────────────────

export interface Program {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  category: "fitness" | "nutrition" | "business" | "workshop";
  color: string;
  description: string;
  shortDesc: string;
  format: string[];
  duration: string;
  eligibility: string;
  whoFor: string[];
  outcomes: string[];
  curriculum: { title: string; desc: string }[];
  careerPaths: string[];
}

export const programs: Program[] = [
  {
    slug: "advanced-personal-training",
    title: "Advanced Personal Training Certification",
    shortTitle: "Personal Training",
    tag: "Certification",
    category: "fitness",
    color: "#D4C46A",
    description:
      "A comprehensive, mentor-led certification in exercise science, training methodology, program design, assessment, and professional coaching communication — designed for trainers who want to operate at the highest standard.",
    shortDesc: "Build the knowledge, skill, and confidence to train any client with precision.",
    format: ["Online", "Offline", "Blended"],
    duration: "3 Months",
    eligibility: "Open to all — no prior fitness background required",
    whoFor: [
      "Aspiring personal trainers with no formal education in fitness",
      "Working gym professionals who want structured, science-based training",
      "Group fitness instructors looking to transition into personal training",
      "Health and wellness professionals expanding into exercise coaching",
      "Career changers entering the fitness industry with intent and purpose",
    ],
    outcomes: [
      "Design and deliver structured training programs for a range of client goals",
      "Conduct professional assessments and screenings",
      "Communicate with clients confidently and clearly",
      "Understand and apply evidence-based training principles",
      "Operate within your scope of practice with professional integrity",
      "Present yourself as a credible, career-ready fitness professional",
    ],
    curriculum: [
      { title: "Foundations of Exercise Science", desc: "Anatomy, physiology, and biomechanics applied to training." },
      { title: "Assessment & Screening", desc: "How to evaluate clients safely and systematically before prescribing exercise." },
      { title: "Training Methodology", desc: "Progressive overload, periodisation, and evidence-based programming principles." },
      { title: "Program Design", desc: "Building structured, goal-specific training programs for diverse client populations." },
      { title: "Coaching Communication", desc: "Consultation skills, cueing, feedback, and client relationship management." },
      { title: "Nutrition Fundamentals for Trainers", desc: "Understanding basic nutrition science to complement training advice." },
      { title: "Special Populations", desc: "Training considerations for older adults, pre/postnatal clients, and common medical conditions." },
      { title: "Professional Practice", desc: "Ethical standards, scope of practice, and the business of personal training." },
    ],
    careerPaths: ["Certified Personal Trainer", "Online Fitness Coach", "Group Training Specialist", "Strength & Conditioning Professional", "Fitness Educator"],
  },
  {
    slug: "sports-nutrition",
    title: "Applied Sports Nutrition Certification",
    shortTitle: "Sports Nutrition",
    tag: "Certification",
    category: "nutrition",
    color: "#7EC8A0",
    description:
      "A structured education in the science and application of human nutrition — from macronutrients and energy balance to meal planning, supplementation, and evidence-based dietary coaching.",
    shortDesc: "Master the science of nutrition for performance, fat loss, muscle gain, and long-term health.",
    format: ["Online", "Offline", "Blended"],
    duration: "2 Months",
    eligibility: "Open to all — trainers, enthusiasts, and health professionals welcome",
    whoFor: [
      "Personal trainers who want to add nutrition coaching to their services",
      "Health enthusiasts who want to separate science from marketing noise",
      "Working professionals exploring a career in nutrition coaching",
      "Fitness coaches who want to deliver more holistic client results",
    ],
    outcomes: [
      "Understand the science behind how food fuels the body",
      "Design practical, evidence-based nutrition plans for different goals",
      "Evaluate popular diets and supplement claims with a scientific lens",
      "Coach clients on nutrition within an ethical scope of practice",
      "Communicate nutritional concepts clearly to non-technical clients",
      "Integrate nutrition coaching with personal training services",
    ],
    curriculum: [
      { title: "Nutritional Science Foundations", desc: "Cells, digestion, absorption, and metabolic processes." },
      { title: "Macronutrients in Depth", desc: "Carbohydrates, proteins, and fats — their roles, requirements, and practical application." },
      { title: "Micronutrients & Whole Foods", desc: "Vitamins, minerals, and the importance of nutrient density." },
      { title: "Energy Balance & Body Composition", desc: "How the body uses, stores, and expends energy." },
      { title: "Meal Planning & Dietary Strategy", desc: "Designing practical, goal-oriented nutrition plans." },
      { title: "Hydration & Recovery", desc: "Water balance, sleep, stress, and their impact on nutrition outcomes." },
      { title: "Supplementation — Science vs. Marketing", desc: "An evidence-based guide to what works and what doesn't." },
      { title: "Coaching Nutrition in Practice", desc: "Client conversations, behaviour change, scope of practice, and ethical boundaries." },
    ],
    careerPaths: ["Nutrition Coach", "Sports Nutrition Consultant", "Wellness Advisor", "Personal Trainer with Nutrition Services", "Fitness & Nutrition Content Creator"],
  },
  {
    slug: "gym-management",
    title: "Gym Management & Fitness Business",
    shortTitle: "Gym Management",
    tag: "Certification",
    category: "business",
    color: "#A084E8",
    description:
      "An education program designed for current and aspiring gym owners, facility managers, and fitness entrepreneurs — covering business operations, team building, revenue strategy, and client retention.",
    shortDesc: "Go beyond training. Learn the business systems that drive successful fitness facilities.",
    format: ["Online", "Blended"],
    duration: "2 Months",
    eligibility: "Working fitness professionals, managers, or aspiring gym owners",
    whoFor: [
      "Gym owners looking to professionalise operations",
      "Fitness professionals aspiring to management or ownership roles",
      "Entrepreneurs evaluating the fitness business space",
      "Cluster or regional managers seeking structured education",
    ],
    outcomes: [
      "Manage and operate a fitness facility professionally",
      "Build and lead high-performance teams",
      "Develop client retention and revenue growth strategies",
      "Brand and market a fitness business effectively",
      "Understand the financial fundamentals of running a gym",
      "Create a culture of professional standards and accountability",
    ],
    curriculum: [
      { title: "Fitness Industry Landscape", desc: "Understanding the current market, competitive landscape, and opportunity areas." },
      { title: "Facility Operations", desc: "Day-to-day management, safety standards, and operational efficiency." },
      { title: "Team Building & Leadership", desc: "Hiring, training, and retaining quality fitness staff." },
      { title: "Client Acquisition & Retention", desc: "Membership systems, client journey design, and churn reduction." },
      { title: "Revenue & Financial Strategy", desc: "Pricing, margins, add-on services, and profitability frameworks." },
      { title: "Brand & Marketing", desc: "Positioning, social media, local marketing, and community building." },
      { title: "Legal, Safety & Compliance", desc: "Insurance, waivers, incident management, and regulatory requirements." },
      { title: "Business Growth & Scaling", desc: "Expanding from one location to multiple — systems, structure, and leadership." },
    ],
    careerPaths: ["Gym Owner / Fitness Entrepreneur", "Facility Manager / Operations Head", "Cluster Manager", "Fitness Business Consultant"],
  },
  {
    slug: "workshops",
    title: "Workshops & Masterclasses",
    shortTitle: "Workshops",
    tag: "Short Format",
    category: "workshop",
    color: "#F4A261",
    description:
      "Short-format, expert-led sessions on specialised topics. Designed for continuing education, professional upskilling, and focused knowledge building.",
    shortDesc: "High-impact, focused sessions on specialised topics in fitness, nutrition, and professional coaching.",
    format: ["Online", "In-Person"],
    duration: "Half-day to 2-day sessions",
    eligibility: "Working trainers, KPF students, any fitness professional",
    whoFor: [
      "Working personal trainers who want to deepen their expertise",
      "Nutrition coaches looking to stay current with evidence-based practice",
      "KPF students and graduates seeking continuing education",
      "Gym professionals and managers expanding their knowledge",
      "Fitness enthusiasts who want to learn from industry educators",
    ],
    outcomes: [
      "Gain deep, focused knowledge on a specific topic",
      "Stay current with evidence-based practices",
      "Network with fellow fitness professionals",
      "Earn a KPF completion certificate",
      "Immediately apply new skills to your coaching",
    ],
    curriculum: [
      { title: "The Science of Protein & Supplementation", desc: "Understanding evidence-based recommendations beyond marketing claims." },
      { title: "Fat Loss: Myths, Mechanisms & Methods", desc: "A deep dive into what actually works, and why." },
      { title: "Women's Fitness & Hormonal Health", desc: "Programming, nutrition, and coaching considerations for female clients." },
      { title: "Coaching Communication Masterclass", desc: "How to consult, educate, and retain clients through better communication." },
      { title: "Advanced Training Techniques", desc: "Periodisation, functional training, and specialised programming." },
      { title: "Fitness Entrepreneurship", desc: "Building and growing a coaching business from the ground up." },
    ],
    careerPaths: ["Advanced Personal Trainer", "Specialist Coach", "Workshop Facilitator", "Fitness Educator"],
  },
];

export interface Testimonial {
  name: string;
  location: string;
  result: string;
  program: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Aditya Sharma",
    location: "Mumbai",
    result: "Certified Personal Trainer",
    program: "Advanced Personal Training Certification",
    quote:
      "KPF didn't just teach me exercises or diet plans. It taught me how to think like a professional. The depth of the curriculum and the mentorship changed how I approach every client.",
  },
  {
    name: "Priya Nair",
    location: "Surat",
    result: "Nutrition Coach",
    program: "Applied Sports Nutrition Certification",
    quote:
      "I came from a non-fitness background and was nervous about the science. But the way the faculty broke down complex topics into practical systems made all the difference. I now run my own nutrition coaching practice.",
  },
  {
    name: "Rahul Desai",
    location: "Ahmedabad",
    result: "Fitness Professional",
    program: "Advanced Personal Training Certification",
    quote:
      "What stood out was the career support. KPF helped me prepare not just for the exam, but for my first real job. I felt ready on day one.",
  },
  {
    name: "Sneha Kapoor",
    location: "Mumbai",
    result: "Online Fitness Coach",
    program: "Applied Sports Nutrition Certification",
    quote:
      "I had the knowledge before KPF, but I didn't have the confidence. The career support sessions — especially the consultation training and branding guidance — changed how I see myself as a professional. I now have a full client roster.",
  },
  {
    name: "Vikram Mehta",
    location: "Bangalore",
    result: "Gym Manager",
    program: "Gym Management & Fitness Business",
    quote:
      "The gym management course gave me frameworks I use every day. From team management to client retention strategy, KPF equipped me to lead — not just manage.",
  },
];

export const workshopTopics = [
  {
    title: "The Science of Protein & Supplementation",
    desc: "Understanding evidence-based recommendations beyond marketing claims. Practical guidance for trainers and coaches.",
    format: "Online / In-Person",
  },
  {
    title: "Fat Loss: Myths, Mechanisms & Methods",
    desc: "A deep dive into what actually works, and why. Separate fact from fiction with science-backed frameworks.",
    format: "Online",
  },
  {
    title: "Women's Fitness & Hormonal Health",
    desc: "Programming, nutrition, and coaching considerations for female clients at every life stage.",
    format: "Online / In-Person",
  },
  {
    title: "Coaching Communication Masterclass",
    desc: "How to consult, educate, and retain clients through better communication and professional presence.",
    format: "In-Person",
  },
  {
    title: "Advanced Training Techniques",
    desc: "Periodisation, functional training, and specialised programming methodologies for advanced coaches.",
    format: "In-Person",
  },
  {
    title: "Fitness Entrepreneurship",
    desc: "Building and growing a coaching business — from your first client to a full-time practice.",
    format: "Online",
  },
];

export const blogPosts = [
  {
    slug: "evidence-based-supplementation",
    title: "What the Evidence Actually Says About Protein Supplements",
    category: "Supplement Science",
    date: "May 2025",
    excerpt: "The supplement industry is worth billions. But how much of what's sold is supported by science? A closer look at what trainers and coaches should actually recommend.",
  },
  {
    slug: "fat-loss-myths",
    title: "5 Fat Loss Myths That Are Quietly Costing Your Clients Results",
    category: "Fat Loss — Myths vs. Evidence",
    date: "April 2025",
    excerpt: "From spot reduction to fasted cardio, here's what the research says about the most common fat loss misconceptions — and what to teach clients instead.",
  },
  {
    slug: "trainer-communication",
    title: "Why Your Coaching Communication Matters More Than Your Programming",
    category: "Coaching & Communication",
    date: "March 2025",
    excerpt: "A great program delivered poorly still fails. Here's how elite coaches communicate, and what separates trainers who retain clients from those who don't.",
  },
  {
    slug: "womens-fitness-hormones",
    title: "Programming for Women: What You Need to Know About the Menstrual Cycle",
    category: "Exercise Science",
    date: "February 2025",
    excerpt: "Hormonal fluctuations affect energy, strength, and recovery. Here's how to design training programs that account for the female physiology.",
  },
  {
    slug: "nutrition-coaching-scope",
    title: "Scope of Practice: What Personal Trainers Can — and Cannot — Say About Nutrition",
    category: "Trainer Development & Career Growth",
    date: "January 2025",
    excerpt: "Many trainers give nutrition advice they're not qualified to give. Understanding your scope of practice protects you, your clients, and your career.",
  },
  {
    slug: "gym-business-retention",
    title: "The Client Retention Formula That Growing Gyms Get Right",
    category: "Fitness Business & Entrepreneurship",
    date: "December 2024",
    excerpt: "Acquisition gets the headline. Retention is what grows the business. Here's what data and experience say about keeping clients long-term.",
  },
];
