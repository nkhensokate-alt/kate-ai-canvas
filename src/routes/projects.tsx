import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio";
export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects | Kate Nkhenso Mhlava" },
    { name: "description", content: "Explore project concepts bringing together artificial intelligence, data organization, and digital communication." },
    { property: "og:title", content: "Projects | Kate Nkhenso Mhlava" },
    { property: "og:description", content: "Explore project concepts bringing together artificial intelligence, data organization, and digital communication." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <PortfolioPage page="projects" />,
});
