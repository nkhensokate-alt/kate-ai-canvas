import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio";
export const Route = createFileRoute("/skills")({
  head: () => ({ meta: [
    { title: "Skills | Kate Nkhenso Mhlava" },
    { name: "description", content: "Explore Kate’s generative AI, prompt engineering, computer literacy, and digital productivity skills." },
    { property: "og:title", content: "Skills | Kate Nkhenso Mhlava" },
    { property: "og:description", content: "Explore Kate’s generative AI, prompt engineering, computer literacy, and digital productivity skills." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <PortfolioPage page="skills" />,
});
