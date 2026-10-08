import { createFileRoute } from "@tanstack/react-router";
import { PortfolioHome } from "@/components/portfolio";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Kate Nkhenso Mhlava | AI & Digital Skills Portfolio" },
    { name: "description", content: "Meet Kate Nkhenso Mhlava. Explore her artificial intelligence, digital skills, Google AI and ICDL certifications, and professional learning." },
    { property: "og:title", content: "Kate Nkhenso Mhlava | Personal Portfolio" },
    { property: "og:description", content: "A curious mind. A digital future. Discover Kate’s AI skills, certifications, and project concepts." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PortfolioHome,
});