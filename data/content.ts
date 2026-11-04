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
  url: "https://amulurupavansai.vercel.app",
  ogImage: "/photo.jpg",
};

export const hero = {
  greeting: "Hi, I'm",
  name: "Amuluru Pavan Sai",
  headline:
    "Management Trainee at Neeyamo · HR-tech & payroll · Looking to grow into Product Manager / Associate PM / Business Analyst roles",
  subline:
    "I turn messy payroll processes and cross-team inputs into clear requirements, tested AI features and products engineering can build.",
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
    { value: "25", label: "component BRDs prepared" },
    { value: "3", label: "countries of payroll domain exposure" },
    { value: "50+", label: "member council led" },
  ],
};

export type CaseStudy = {
  title: string;
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
  caseStudies: [
    {
      title: "Payroll tax reporting automation",
      tag: "Automation · Payroll",
      problem:
        "A statutory payroll-tax report was prepared manually by an external vendor from raw data, with the logic undocumented and no way to scale it.",
      role: "Owned the challenge end to end as a manager-set assignment.",
      approach:
        "Reverse-engineered the report from raw data, mapped the underlying logic and rules, and generalised it into a reusable model.",
      outcome:
        "A documented, generalised model prepared for handoff to the engineering team to build — replacing a manual deliverable.",
    },
    {
      title: "AI agent quality testing",
      tag: "AI · QA",
      problem:
        "A GenAI assistant in an employee self-service product needed to be validated against real-world payroll questions before and across releases.",
      role: "Test designer and executor, and author of the test report.",
      approach:
        "Designed scenario-based test cases covering payroll models, configuration and new release features; ran them and recorded results.",
      outcome:
        "A written test report giving the team structured evidence of the assistant's quality and gaps.",
    },
    {
      title: "Payroll transformation BRDs",
      tag: "Requirements · Enterprise",
      problem:
        "A large enterprise payroll transformation had requirements scattered across teams and client workshops.",
      role: "Coordinated inputs across teams and authored the business requirement documents.",
      approach:
        "Compiled inputs into a standard BRD format, drafted the first BRD as the template for the rest, and built GenAI-assisted digests of workshop transcripts mapped to all 25 components, plus a gap list for review.",
      outcome:
        "25 component BRDs structured on one template; the first BRD was co-presented with the team lead to the client's transformation office.",
    },
    {
      title: "Client implementation",
      tag: "Implementation · Client-facing",
      problem:
        "An international client's payroll implementation needed a single, reliable point of contact between the client and internal teams.",
      role: "Implementation SPOC.",
      approach:
        "Coordinated requirements, queries and follow-ups between the client and internal teams.",
      outcome:
        "Clear single-threaded communication through the implementation.",
    },
    {
      title: "Test automation",
      tag: "Automation · Quality",
      problem:
        "Regression testing for payroll modules was manual, slow and hard to repeat.",
      role: "In charge of moving regression testing from manual to automated; writing end-to-end test cases for the next-gen payroll platform.",
      approach:
        "Evaluating payroll modules for automation with a Playwright-based RPA tool, working alongside module owners.",
      outcome:
        "An in-progress shift from manual to automated regression, with E2E test cases for the next-gen platform.",
    },
    {
      title: "Competitive benchmarking & global payroll mappings",
      tag: "Research · Product",
      problem:
        "The team needed an objective view of the platform against leading global HCM suites, plus localisation inputs for French payroll.",
      role: "Researcher and analyst.",
      approach:
        "Benchmarked the platform against leading HCM platforms across payroll, time & absence and core HR; drafted French DSN field mappings to the product's field master.",
      outcome:
        "Benchmark findings and DSN mappings delivered for team review.",
    },
    {
      title: "AI Collections Product Concept",
      tag: "Case competition · Fintech",
      problem:
        "An NBFC (TVS Credit E.P.I.C. analytics case, Aug 2025) needed to improve loan recovery without over-contacting good customers.",
      role: "Product framing and solution design.",
      approach:
        "Framed a three-part product: XGBoost default-risk scores with SHAP explanations, K-Means customer personas, and an LLM chatbot whose tone adapts to each persona. Chose F1 with precision–recall threshold tuning.",
      outcome:
        "A product concept trading off recovery against needless contact with good customers.",
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
        "Preparing 25 component BRDs for a large enterprise client's India payroll transformation from inputs across teams and client workshops.",
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
  formspreeId: "YOUR_FORMSPREE_FORM_ID",
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
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export const footer = `© ${new Date().getFullYear()} Amuluru Pavan Sai`;
