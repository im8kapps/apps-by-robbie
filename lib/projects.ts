export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  features: string[];
  challenges: string;
  longDescription: string;
};

export const projects: Project[] = [
  {
    slug: "trip-pilot",
    name: "Trip Account",
    category: "React Native itinerary app",
    description:
      "A React Native/Expo travel planner with offline caching and collaborative trips.",
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "Firebase"],
    link: "https://www.musictravel.com/app/",

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
    slug: "advanco-llc",
    name: "Advantage Roofing & Plumbing",
    category: "Contractor marketing site",
    description:
      "Full-scope roofing, plumbing, and remodel marketing site with service menus, process, and testimonials.",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "Netlify"],
    link: "https://advanco.llc",
    features: [
      "Service sections for roofing, plumbing, remodeling, and maintenance with scannable bullets",
      "Why-us highlights, crew credentials, and storm-readiness messaging",
      "Recent project and blog callouts with hero imagery",
      "Contact call-to-action tied to Netlify forms and identity",
    ],
    challenges:
      "Needed to package long-form copy and multiple service lines without slowing the page. Tuned the Vite build, optimized hero assets, and leaned on Netlify for fast lead capture.",
    longDescription:
      "Advantage Roofing & Plumbing is a single-page site covering roofing, plumbing, storm response, and remodel work across central Indiana. Sections explain services, process, and testimonials while inviting visitors to schedule a walkthrough. The build keeps assets light for fast loads and uses Netlify for deployment and lead handling.",
  },
  {
    slug: "dj-jake-cozza",
    name: "DJ Jake Cozza",
    category: "Event DJ landing page",
    description:
      "High-energy single-page site for an Indianapolis DJ with services, social proof, and event stats.",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "Netlify"],
    link: "https://djjakecozza.com",
    features: [
      "Hero with value props, premium sound badges, and CTA",
      "About section with highlight metrics and photography",
      "Service breakdowns for weddings, corporate events, and parties",
      "Testimonials and differentiators to build trust before booking",
    ],
    challenges:
      "Needed to convey energy without heavy assets. Built concise sections with iconography, optimized imagery, and responsive layout so CTAs stay visible on mobile.",
    longDescription:
      "The DJ Jake Cozza site stacks a punchy hero, personal bio, service offerings, testimonials, and reasons-to-book into a fast-scrolling experience. Icons and stat blocks communicate credibility while imagery showcases past events. The layout keeps calls-to-action close by for booking on phones and desktops alike.",
  },
  {
    slug: "optimum-glass",
    name: "Optimum Glass Tech",
    category: "Auto & home glass services",
    description:
      "Mobile-first landing page for Indianapolis glass repair covering auto, residential, and commercial work.",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "Netlify"],
    link: "https://optimum-glass.netlify.app",
    features: [
      "Hero with trust signals for certifications, insurance help, and ADAS readiness",
      "Service cards for auto, residential, and commercial glass with detailed bullet lists",
      "Gallery of before/after installs and case highlights",
      "Step-by-step process and FAQ blocks that feed a quote CTA",
    ],
    challenges:
      "Needed to present many service lines without overwhelming visitors. Organized content into anchored sections, condensed bullet lists, and optimized imagery so the page stays quick on mobile connections.",
    longDescription:
      "Optimum Glass Tech explains mobile windshield repair, residential window glass, and commercial storefront work with clear trust markers like NGA certification and lifetime workmanship guarantees. The page walks through request -> confirm -> install, showcases recent transformations, and keeps quote CTAs visible for homeowners, fleet managers, and insurance-driven visitors.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
