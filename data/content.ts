/**
 * ALL site text lives here. Edit this file to change the website —
 * no component changes needed. Source of truth: public/resume.pdf
 */

export const site = {
  name: "Amuluru Pavan Sai",
  title: "Amuluru Pavan Sai — Management Trainee | HR-Tech & Payroll",
  description:
    "Portfolio of Amuluru Pavan Sai — IIT Palakkad graduate and Management Trainee at Neeyamo, building for HR-tech & global payroll.",
  // Set this to your deployed URL (used for Open Graph / canonical links).
  url: "https://portfolio-gules-tau-7gcfg547uh.vercel.app",
  ogImage: "/photo.jpg",
  // Used in structured data (Person / WebSite schema).
  knowsAbout: [
    "Product management",
    "Business requirements documents",
    "Global payroll",
    "HR technology",
    "Test automation",
    "GenAI evaluation",
  ],
  themeColor: "#e9e8e3",
};

export const hero = {
  greeting: "Hi, I'm",
  name: "Amuluru Pavan Sai",
  headline: "Management Trainee at Neeyamo",
  // Giant text that scrolls behind the hero visual.
  marquee: "Amuluru Pavan Sai. Management Trainee. Payroll & HR-tech.",
  ringText: "AMULURU PAVAN SAI · PORTFOLIO · 2026 ·",
  captions: {
    left: "MANAGEMENT TRAINEE — NEEYAMO",
    middle: ["PAYROLL · HR-TECH · REQUIREMENTS", "AI TESTING · AUTOMATION · PRODUCT"],
    scroll: "SCROLL TO EXPLORE",
    right: "LINKEDIN ↗",
  },
  modes: { light: "WAKE", dark: "DREAM" },
  tagline:
    "Looking to grow into Product Manager / Associate PM / Business Analyst roles in HR-tech & payroll.",
  subline:
    "IIT Palakkad graduate (B.Tech, Electrical Engineering) in the Emerging Leaders Program at a global payroll & EOR technology company.",
  photo: "/photo.jpg",
  buttons: {
    work: "View Work",
    resume: "Download Resume",
    contact: "Contact",
  },
  resumeFile: "/resume.pdf",
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm an Electrical Engineering graduate of IIT Palakkad (B.Tech, 2022–2026).",
    "Since June 2026 I've been a Management Trainee on the Product Manager track at Neeyamo, a global payroll & EOR technology company, as part of its Emerging Leaders Program.",
    "My work spans requirements and BRDs, testing a GenAI employee self-service assistant, test automation and competitive benchmarking across payroll, time & absence and core HR.",
    "Outside work I led a 50+ member students' council and 1,000-participant programs — which taught me to ship with, and for, many stakeholders.",
  ],
  stats: [
    { value: 25, suffix: "", label: "component BRDs prepared" },
    { value: 50, suffix: "+", label: "member council led" },
    { value: 1000, suffix: "", label: "participants across programs run" },
  ],
};

export type CaseStudy = {
  title: string;
  slug: string;
  summary: string;
  context: string;
  learnings: string;
  category: string;
  tag: string;
  problem: string;
  role: string;
  approach: string;
  outcome: string;
};

export const work = {
  heading: "Work Highlights",
  intro:
    "Case studies from my time at Neeyamo and beyond, described generically — no client or internal product details.",
  filters: ["All", "Automation", "AI & Testing", "Requirements", "Implementation", "Research"],
  caseStudies: [
    {
      title: "Payroll tax reporting automation",
      slug: "payroll-tax-reporting-automation",
      summary:
        "Turning an undocumented, manually produced statutory report into a documented, generalised model.",
      context:
        "Statutory payroll-tax reporting is a recurring obligation in payroll operations. This report was being prepared by hand outside the product, so each cycle depended on one person's know-how.",
      learnings:
        "Treat the manual output as the specification, then work backwards to the rules. Writing every assumption down early made review with the team much faster.",
      category: "Automation",
      tag: "Automation · Payroll",
      problem:
        "A statutory payroll-tax report was being produced manually by a partner, and the logic behind it was not documented.",
      role: "Working on this as a challenge set by my manager.",
      approach:
        "Decoding the report from raw data, mapping the underlying logic, and building a generalised model.",
      outcome:
        "In progress: a generalised model intended for the engineering team to build, to replace the manual deliverable.",
    },
    {
      title: "AI agent quality testing",
      slug: "ai-agent-quality-testing",
      summary:
        "Designing scenario-based tests for a GenAI self-service assistant.",
      context:
        "GenAI assistants are now appearing inside employee self-service products. Unlike deterministic features, their answers vary, so quality has to be judged against realistic situations, not a fixed script.",
      learnings:
        "Agree the pass criteria before running the tests. Grouping scenarios by payroll topic made gaps in coverage easy to see, and recording the exact wording used made results reproducible.",
      category: "AI & Testing",
      tag: "AI · QA",
      problem:
        "A GenAI assistant in an employee self-service product needs to be tested against realistic payroll scenarios.",
      role: "Designing the test cases, running them and writing the test report.",
      approach:
        "Scenario-based test cases covering payroll models, configuration and release features.",
      outcome:
        "In progress: test runs and a written test report for the team.",
    },
    {
      title: "Payroll transformation BRDs",
      slug: "payroll-transformation-brds",
      summary:
        "Consolidating scattered requirements into one consistent set of business requirement documents.",
      context:
        "Large payroll transformations break the work into many components, and each component needs its own requirements document that stakeholders can sign off.",
      learnings:
        "A strong first document is the best template. Using AI tools to digest long transcripts saved time, but a human gap list and team review were what made the output trustworthy.",
      category: "Requirements",
      tag: "Requirements · Enterprise",
      problem:
        "A large enterprise payroll transformation had requirements scattered across teams and client workshops.",
      role: "Prepared the BRDs from inputs gathered across teams and client workshops.",
      approach:
        "Compiled inputs into the standard BRD format; drafted the first BRD, which became the template for the rest. Built GenAI-assisted digests of workshop transcripts mapped to all 25 components, plus a gap list for team review.",
      outcome:
        "All 25 component BRDs completed; the first was co-presented with the team lead to the client's transformation office.",
    },
    {
      title: "Client implementation",
      slug: "client-implementation",
      summary:
        "Acting as single point of contact between a client and internal teams during an implementation.",
      context:
        "Implementing payroll for an international client involves several internal teams and the client's own stakeholders, each with a different view of the plan.",
      learnings:
        "A single, reliable point of contact reduces back-and-forth. Clear written follow-ups after every conversation matter more than speed.",
      category: "Implementation",
      tag: "Implementation · Client-facing",
      problem:
        "An international client's payroll implementation.",
      role: "Implementation SPOC (single point of contact).",
      approach:
        "Coordinating between the client and internal teams.",
      outcome:
        "Ongoing client-facing implementation experience.",
    },
    {
      title: "Test automation",
      slug: "test-automation",
      summary:
        "Moving payroll regression testing from manual checks towards automation.",
      context:
        "Payroll releases need regression testing to confirm existing behaviour still works. Doing this by hand is repetitive and takes time away from testing new features.",
      learnings:
        "Start with stable, high-value flows and involve module owners early. Choosing what not to automate yet is as important as choosing what to automate.",
      category: "Automation",
      tag: "Automation · Quality",
      problem:
        "Regression testing for payroll modules is currently manual.",
      role: "In charge of moving regression testing from manual to automated; writing end-to-end test cases for the next-gen payroll platform.",
      approach:
        "Evaluating payroll modules for automation with a Playwright-based RPA tool, working alongside module owners.",
      outcome:
        "In progress: moving regression testing from manual to automated, plus E2E test cases for the next-gen payroll platform.",
    },
    {
      title: "Competitive benchmarking & global payroll mappings",
      slug: "competitive-benchmarking",
      summary:
        "Comparing a payroll platform with leading HCM suites and preparing statutory field mappings.",
      context:
        "Product decisions need an honest view of where a platform stands relative to the market, and country expansion needs accurate mapping of statutory data fields.",
      learnings:
        "A consistent comparison framework across payroll, time & absence and core HR keeps benchmarks fair. For mappings, a reviewable draft beats a perfect one produced alone.",
      category: "Research",
      tag: "Research · Product",
      problem:
        "Understanding how the platform compares with leading global HCM suites, and preparing inputs for French payroll (DSN).",
      role: "Benchmarking and drafting the mappings.",
      approach:
        "Benchmarked the platform against leading HCM platforms across payroll, time & absence and core HR; drafted French DSN field mappings to the product's field master.",
      outcome:
        "Benchmark completed; DSN field mappings drafted for team review.",
    },
    {
      title: "AI Collections Product Concept",
      slug: "ai-collections-product-concept",
      summary:
        "A concept-level product proposal for balanced, customer-aware loan recovery.",
      context:
        "This came from a fintech case competition on loan recovery for a non-banking lender, where the goal was to recover dues while protecting relationships with customers who would pay anyway.",
      learnings:
        "Metric choice is a product decision: picking F1 and tuning the threshold forced an explicit trade-off between missed defaulters and unnecessary contact. Concepts also need honest labelling as concepts.",
      category: "AI & Testing",
      tag: "Case competition · Fintech",
      problem:
        "An NBFC loan-recovery problem from the TVS Credit E.P.I.C. analytics case (Aug 2025): recover dues without needlessly contacting good customers.",
      role: "Framed the problem as a product concept.",
      approach:
        "Framed a three-part product: XGBoost default-risk scores with SHAP explanations, K-Means customer personas, and an LLM chatbot whose tone adapts to each persona. Chose F1 with precision–recall threshold tuning.",
      outcome:
        "A concept-level product proposal; not a deployed system.",
    },
  ] as CaseStudy[],
  more: {
    heading: "Leadership & achievements",
    items: [
      {
        title: "Sports Affairs Secretary, IIT Palakkad (2025–2026)",
        text: "Elected campus-wide with 497 first-preference votes (56.9% of valid votes). Ran a 50+ member council across 9 clubs; redesigned flagship tournaments as auction-based franchise leagues scored on gender and batch diversity. Delivered a 20-event calendar (370+ participants), Inter-IIT trials for 271 registrants and a ₹13.4 lakh General Championship budget plan.",
      },
      {
        title: "Contingent Leader, Inter-IIT Sports Meet (2024 & 2025)",
        text: "Led IIT Palakkad to its first-ever 1st place in the March Past (2025). Ran travel, stay, food and safety for a 59-member, 10-day contingent (2024).",
      },
      {
        title: "Sports achievements",
        text: "Inter-IIT cricket squad three consecutive years (2023–2025); Player of the Tournament and captain (runner-up), General Championship 2024.",
      },
    ],
  },
};

export const skills = {
  heading: "Skills",
  groups: [
    {
      name: "Product",
      items: [
        "Requirements gathering & BRDs",
        "Process flows (swim lanes)",
        "Gap lists",
        "Competitive benchmarking",
        "UAT / E2E test design",
        "Release-note review",
      ],
    },
    {
      name: "AI",
      items: [
        "GenAI assistant evaluation",
        "Prompt design",
        "AI-assisted research & documentation",
        "CNN & deep-RL projects",
      ],
    },
    {
      name: "Data & Tech",
      items: [
        "SQL",
        "Excel",
        "Power BI",
        "MATLAB",
        "HRIS-to-payroll integrations",
        "Bank files",
        "GL posting",
        "Python (Pandas, NumPy)",
      ],
    },
    {
      name: "Domain",
      items: [
        "Global payroll",
        "India: PF, EPS, PT, income-tax declarations",
        "Australia: PAYG, payroll tax, FBT, super",
        "France: DSN",
      ],
    },
  ],
};

export const timeline = {
  heading: "Experience & Education",
  items: [
    {
      kind: "Experience",
      period: "Jun 2026 – Present",
      title: "Management Trainee, Product Management",
      org: "Neeyamo — Emerging Leaders Program (Product Manager track)",
      place: "Pune, India",
      points: [
        "Prepared 25 component BRDs for a large enterprise client's India payroll transformation from inputs across teams and client workshops.",
        "Testing a GenAI employee self-service assistant with scenario-based test cases and test reports.",
        "Moving regression testing from manual to automated; writing E2E test cases for the next-gen payroll platform.",
        "Benchmarking the platform against leading HCM suites; drafting French DSN field mappings.",
      ],
    },
    {
      kind: "Leadership",
      period: "2025 – 2026",
      title: "Sports Affairs Secretary",
      org: "IIT Palakkad Students' Affairs Council",
      place: "",
      points: [
        "Elected campus-wide; ran a 50+ member council across 9 clubs.",
      ],
    },
    {
      kind: "Leadership",
      period: "Dec 2024 & Dec 2025",
      title: "Contingent Leader, Inter-IIT Sports Meet",
      org: "IIT Palakkad",
      place: "",
      points: ["Led the first-ever 1st place in the March Past (2025)."],
    },
    {
      kind: "Education",
      period: "2022 – 2026",
      title: "B.Tech, Electrical Engineering",
      org: "Indian Institute of Technology (IIT) Palakkad",
      place: "",
      points: [
        "CGPA 7.49 / 10.",
        "Coursework: Principles of Economics, Probability & Statistics, Public Policy for Engineers, Introduction to Programming, Reinforcement Learning-based Control.",
      ],
    },
  ],
  certifications: {
    heading: "Certifications",
    items: [
      "Power BI Workshop, OfficeMaster (Jul 2025)",
      "KIMO (2024): Python 3 Bootcamp; Advanced Data Structures & Algorithms in Python; Getting Started with Machine Learning; Mathematical Foundation for AI & ML",
      "NDA 2021: cleared written exam and SSB interview",
    ],
  },
};

export const contact = {
  heading: "Get in touch",
  intro:
    "Open to Product Manager, Associate PM and Business Analyst opportunities in HR-tech & payroll. Say hello!",
  email: "amulurupavansai@gmail.com",
  linkedin: "https://www.linkedin.com/in/amuluru-pavan-sai-573390258",
  linkedinLabel: "linkedin.com/in/amuluru-pavan-sai-573390258",
  // ⚠️ PLACEHOLDER: replace with your Formspree form ID (the part after /f/
  // in https://formspree.io/f/xxxxxxxx). The form won't submit until you do.
  formspreeId: "xwllyneb",
  form: {
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send message",
    success: "Thanks! Your message has been sent.",
    error: "Something went wrong. Please email me directly.",
    notConfigured:
      "Contact form isn't configured yet — please use the email link above.",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Snapshot", href: "#snapshot" },
  { label: "Writing", href: "#writing" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

/** Copy for the case-study detail pages (/work/[slug]). */
export const caseStudyPage = {
  back: "← All work",
  readMore: "Read full case study →",
  next: "Next case study",
  previous: "Previous case study",
  // Order of the sections shown on each detail page.
  sections: [
    { key: "context", label: "Context" },
    { key: "problem", label: "Problem" },
    { key: "role", label: "My Role" },
    { key: "approach", label: "Approach" },
    { key: "outcome", label: "Outcome" },
    { key: "learnings", label: "Learnings" },
  ] as const,
};

/** Blog posts are Markdown files in /content/blog; only UI copy lives here. */
export const blog = {
  heading: "Writing",
  title: "Writing",
  teaser: "Short, practical notes on what I'm learning in product and payroll tech.",
  description:
    "Notes by Amuluru Pavan Sai on product management, payroll technology and learning on the job.",
  readPost: "Read post →",
  allPosts: "← All posts",
  viewAll: "All posts →",
  minRead: "min read",
  empty: "No posts yet.",
};

/** One-page PM Snapshot (shown on the site and exported to PDF). */
export const snapshot = {
  heading: "PM Snapshot",
  intro: "A one-page summary of what I bring to a product team: skills, tools and domains.",
  pageTitle: "PM Snapshot",
  pageDescription:
    "One-page product management snapshot for Amuluru Pavan Sai: key skills, tools and domains.",
  download: "Download PDF",
  file: "/pm-snapshot.pdf",
  viewPage: "View one-page version",
  headline: "Aspiring Product Manager · HR-Tech & Payroll",
  summary:
    "IIT Palakkad Electrical Engineering graduate on a Product Manager track as a Management Trainee in global payroll technology. Comfortable turning scattered inputs into clear requirements, testing AI features against real scenarios and working across engineering, QA and client-facing teams.",
  columns: [
    {
      name: "Key skills",
      items: [
        "Requirements gathering & BRDs",
        "Process flows & gap analysis",
        "UAT / end-to-end test design",
        "Competitive benchmarking",
        "GenAI assistant evaluation",
        "Stakeholder coordination",
      ],
    },
    {
      name: "Tools",
      items: [
        "SQL & Excel",
        "Power BI",
        "Python (Pandas, NumPy)",
        "Playwright-based test automation",
        "GenAI tools for research & documentation",
        "MATLAB",
      ],
    },
    {
      name: "Domains",
      items: [
        "Global payroll",
        "HR-tech & employee self-service",
        "Time & absence, core HR",
        "Statutory compliance (India, Australia, France)",
        "Fintech (case work)",
      ],
    },
  ],
  highlights: [
    "Prepared 25 component BRDs for a large payroll transformation.",
    "Designing scenario-based tests for a GenAI self-service assistant.",
    "Moving payroll regression testing from manual to automated.",
    "Led a 50+ member students' council and programs with 1,000 participants.",
  ],
  highlightsHeading: "Highlights",
};

/** Shared header/footer copy for sub-pages. */
export const subnav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Snapshot", href: "/snapshot" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];
export const skipLink = "Skip to content";

export const footer = `© ${new Date().getFullYear()} Amuluru Pavan Sai`;
