import { projects } from "@/lib/projects";

export default function sitemap() {
  const baseUrl = "https://appsbyrobby.com";
  const routes = ["", "/projects", "/about", "/contact"];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
