export type Project = {
  slug: string;
  title: string;
  url: string;
  oneLiner: string;
  role: string;
  body: [string, string];
  stack: string[];
  featured: boolean;
  tint: string;
};

export const projects: Project[] = [
  {
    slug: "in-mail",
    title: "InMail",
    url: "https://github.com/OluwapelumiG/in-mail",
    oneLiner:
      "A self-hosted SMTP trap that catches mail locally so you can inspect it instead of sending it.",
    role: "Full-stack",
    body: [
      "Apps need to prove email works without hitting real inboxes. In-Mail is a Go SMTP trap — Mailtrap-style — with AUTH, mailboxes, and a Next.js dashboard for headers, HTML, and attachments.",
      "It runs in Docker with SQLite or Postgres, and can simulate success, failure, or random delivery so you can test the paths that matter.",
    ],
    stack: ["Go", "Next.js", "SMTP", "Docker"],
    featured: true,
    tint: "#e8d4c4",
  },
  {
    slug: "filary",
    title: "Filary",
    url: "https://filary-server.vercel.app/",
    oneLiner:
      "A Chrome extension that fills the form you are in with locale-aware names, phones, and addresses.",
    role: "Full-stack",
    body: [
      "Fake “Test User” data slows QA. Filary scopes to the focused form, reads field names and types, and fills from a hosted generator — empty fields only, or overwrite when you retest.",
      "Locales start with Nigeria so names and addresses read as one place. Passwords stay off unless you opt in. Install is a zip and Load unpacked.",
    ],
    stack: ["Chrome Extension", "Hosted API"],
    featured: true,
    tint: "#d9e0d4",
  },
  {
    slug: "sqlsift",
    title: "SQLSift",
    url: "https://github.com/OluwapelumiG/SQLSift",
    oneLiner:
      "Query CSV and JSON in the browser with SQL — no drivers, no install, data stays on the machine.",
    role: "Full-stack",
    body: [
      "Analysts should not ship files to a server to run a SELECT. SQLSift runs SQL in the browser via WASM: drag in CSV or JSON, detect schema, query in Monaco, command palette for the rest.",
      "Laravel and React (Inertia) wrap that local engine. The data never leaves the machine.",
    ],
    stack: ["Laravel", "React", "WASM"],
    featured: true,
    tint: "#e4dcc8",
  },
  {
    slug: "briev",
    title: "Briev",
    url: "https://www.getbriev.com",
    oneLiner:
      "Client questionnaires that become projects — tasks, timelines, and a board to run the work.",
    role: "Full-stack",
    body: [
      "Briefs live in email threads until someone rebuilds them as tasks. Briev is reusable questionnaires — clients need no account — that turn into structured projects with deliverables and a Kanban.",
      "It is built for freelancers who repeat the same intake and then have to chase the work.",
    ],
    stack: ["Full-stack"],
    featured: true,
    tint: "#e8d9c8",
  },
  {
    slug: "eduphylax",
    title: "EduPhylax",
    url: "https://eduphylax.com/",
    oneLiner:
      "School management for secondary schools — nineteen features, a higher bar than most alternatives.",
    role: "Full-stack",
    body: [
      "Typical school software covers fees or results and leaves the rest in spreadsheets. EduPhylax ships nineteen modules in one multi-tenant platform for JSS and SS: staff, parents, and a branded school site.",
      "Fees, admissions, a gradebook with an approval chain, invoices, report cards, audit logs — built as a full operations system, not a thin portal.",
    ],
    stack: ["Full-stack"],
    featured: true,
    tint: "#dcd6e8",
  },
  {
    slug: "campus-gigs",
    title: "Campus Gigs",
    url: "https://campusgigs.com.ng/",
    oneLiner: "Students take small jobs; employers find skilled students.",
    role: "Full-stack",
    body: [
      "Campus work and campus talent rarely share a tool. Campus Gigs is a marketplace for short jobs and student profiles.",
      "Listing and discovery stay simple — not a full freelance platform, a match for gigs that fit a term.",
    ],
    stack: ["Next.js", "TypeScript"],
    featured: true,
    tint: "#e4d0c4",
  },
  {
    slug: "sms-api",
    title: "SMS Api",
    url: "https://github.com/OluwapelumiG/sms-api",
    oneLiner:
      "A Go SMS API with JWT auth, SMPP delivery, Redis queues, and metrics.",
    role: "Backend",
    body: [
      "Sending SMS in production is queueing, a carrier protocol, and an audit trail — not a single HTTP call.",
      "This service is Gin, PostgreSQL, and Redis, with SMPP workers, JWT users, and Prometheus metrics.",
    ],
    stack: ["Go", "Redis", "PostgreSQL", "SMPP"],
    featured: false,
    tint: "#ebe6db",
  },
  {
    slug: "help-africa",
    title: "Help Africa",
    url: "https://help-africa-snowy.vercel.app/",
    oneLiner:
      "A site for H.E.L.P.: health, education, and literacy for children in their care.",
    role: "Frontend",
    body: [
      "H.E.L.P. needed a public face for health, education, and literacy work with children in their care.",
      "The site carries the mission, programs, and a path to donate — a brochure that can be maintained, not a campaign microsite.",
    ],
    stack: ["Frontend"],
    featured: false,
    tint: "#ebe6db",
  },
  {
    slug: "firstmade",
    title: "Firstmade",
    url: "https://firstmade-website.vercel.app/",
    oneLiner:
      "A site for Firstmade Foundation — youth, education, and community work in Kogi.",
    role: "Frontend",
    body: [
      "Firstmade Foundation needed a place for programs, events, and the work in Yagba West and around Egbe.",
      "The site holds purpose, events, and updates so the foundation can publish without a separate CMS stack.",
    ],
    stack: ["Frontend"],
    featured: false,
    tint: "#ebe6db",
  },
  {
    slug: "todo-dapp",
    title: "Todo Dapp",
    url: "https://todo-dapp-six.vercel.app/",
    oneLiner: "A todo app on Ethereum: tasks, categories, and on-chain storage.",
    role: "Web3",
    body: [
      "A todo list as a contract: add, categorize, and keep the record on-chain.",
      "The web app talks to a Solidity backend. Each change is a transaction.",
    ],
    stack: ["Solidity", "Web3"],
    featured: false,
    tint: "#ebe6db",
  },
  {
    slug: "gig-phone-clinic",
    title: "GIG Phone Clinic",
    url: "https://gig-phone-clinic.vercel.app/",
    oneLiner: "A public site and service-request flow for a phone repair clinic.",
    role: "Frontend",
    body: [
      "A repair shop needs a public page and a way for customers to ask for service without a phone tag.",
      "The site presents the clinic and a service-request flow for phones, laptops, and tablets.",
    ],
    stack: ["Frontend"],
    featured: false,
    tint: "#ebe6db",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
