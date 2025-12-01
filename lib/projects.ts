export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  links: {
    demo: string;
    code: string;
  };
  features: string[];
  challenges: string;
  longDescription: string;
};

export const projects: Project[] = [
  {
    slug: "trip-pilot",
    name: "Trip Pilot",
    category: "React Native itinerary app",
    description:
      "A React Native/Expo travel planner with offline caching and collaborative trips.",
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "Firebase"],
    links: {
      demo: "https://demo.appsbyrobby.com/trip-pilot",
      code: "https://github.com/appsbyrobby/trip-pilot",
    },
    features: [
      "Shareable itineraries with role-based access",
      "Offline-first notes and checklists",
      "Push notifications for upcoming activities",
      "Map overlays for lodging and transport",
    ],
    challenges:
      "Synced data across offline/online states while keeping battery usage low. Solved with selective sync queues and compact payloads.",
    longDescription:
      "Trip Pilot keeps travel groups aligned with synced itineraries, lightweight offline storage, and contextual reminders. It pairs Expo’s tooling with TypeScript to stay maintainable and fast to iterate. Firebase backs real-time updates while SQLite caches the essentials on-device for patchy connections.",
  },
  {
    slug: "harbor-landing",
    name: "Harbor Landing",
    category: "Small business landing page",
    description:
      "High-converting marketing site for a marina with fast page loads and lead capture.",
    tech: ["Next.js", "Tailwind", "Netlify Forms", "TypeScript"],
    links: {
      demo: "https://demo.appsbyrobby.com/harbor",
      code: "https://github.com/appsbyrobby/harbor-landing",
    },
    features: [
      "Hero + services with scannable CTAs",
      "Netlify-backed form with spam honeypot",
      "Lazy-loaded galleries for lighthouse scores",
      "SEO-friendly copy and Open Graph tags",
    ],
    challenges:
      "Needed strong lighthouse performance without sacrificing visuals. Tuned media loading, critical CSS, and compressed hero assets to land >95 scores.",
    longDescription:
      "Harbor Landing shows how to make small-business sites feel bespoke while staying lean. The build leans on static-friendly Next.js routes and Netlify forms so staff receive leads instantly without new infrastructure.",
  },
  {
    slug: "beacon-desk",
    name: "Beacon Desk",
    category: "SaaS dashboard",
    description:
      "Subscription-ready admin panel with roles, billing hooks, and charting placeholders.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    links: {
      demo: "https://demo.appsbyrobby.com/beacon-desk",
      code: "https://github.com/appsbyrobby/beacon-desk",
    },
    features: [
      "Role-based access with guard components",
      "Usage analytics cards and filters",
      "Billing stubs ready for Stripe webhooks",
      "Responsive nav with keyboard support",
    ],
    challenges:
      "Kept navigation and permissions simple for small teams. Built guard utilities and shared layouts so new modules drop in quickly.",
    longDescription:
      "Beacon Desk is a pragmatic SaaS shell: authenticated areas, role-aware routes, and clean cards that scale from desktop to mobile. The stack keeps a strong TypeScript boundary between UI and data so changes stay predictable.",
  },
  {
    slug: "apps-by-robbie-portfolio",
    name: "Apps by Robbie Portfolio",
    category: "Portfolio site",
    description:
      "The site you’re reading: App Router, theme toggle, and Netlify-friendly contact.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Netlify"],
    links: {
      demo: "https://appsbyrobby.com",
      code: "https://github.com/appsbyrobby/portfolio",
    },
    features: [
      "Sectioned single-page experience with smooth scroll",
      "Dark/light themes saved per visitor",
      "SEO meta and share cards",
      "Netlify-ready forms and sitemap",
    ],
    challenges:
      "Balance playful and professional while keeping bundle size lean. Used shared components and restrained animations to keep it fast.",
    longDescription:
      "This portfolio is a reference build for small-but-polished marketing sites. It shows structured content, reusable UI, and zero back-end dependencies for quick Netlify deploys.",
  },
  {
    slug: "chatloop",
    name: "ChatLoop",
    category: "Messaging app",
    description:
      "A cross-platform chat experience with typing indicators and media previews.",
    tech: ["React Native", "Expo", "Firebase", "TypeScript"],
    links: {
      demo: "https://demo.appsbyrobby.com/chatloop",
      code: "https://github.com/appsbyrobby/chatloop",
    },
    features: [
      "Typing and presence indicators",
      "Optimistic message sending with retries",
      "Attachment previews with upload queue",
      "Channel and DM support",
    ],
    challenges:
      "Needed reliable messaging on poor networks. Implemented optimistic UI with retry queues and backoff logic to keep conversations flowing.",
    longDescription:
      "ChatLoop demonstrates production-ready messaging patterns: presence, status indicators, and resilient delivery. The UI keeps to a simple hierarchy so users can navigate quickly while still feeling modern.",
  },
  {
    slug: "northwind-metrics",
    name: "Northwind Metrics",
    category: "Analytics dashboard",
    description:
      "Data-rich dashboard with filters, exports, and narrative insights for execs.",
    tech: ["Next.js", "TypeScript", "Tailwind", "D3.js", "Supabase"],
    links: {
      demo: "https://demo.appsbyrobby.com/northwind",
      code: "https://github.com/appsbyrobby/northwind-metrics",
    },
    features: [
      "Composable charts and KPI cards",
      "Date-range and segment filters",
      "CSV export and saved views",
      "Light/dark theming for boardroom screens",
    ],
    challenges:
      "Balanced visual density with clarity. Built reusable chart shells and kept typography restrained so decision-makers can scan quickly.",
    longDescription:
      "Northwind Metrics shows how to present layered analytics without overwhelming users. It leans on consistent card layouts, a11y-friendly colors, and responsive grids that adapt to tablets and widescreen monitors.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
