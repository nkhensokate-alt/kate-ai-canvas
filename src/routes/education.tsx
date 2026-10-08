import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio";
export const Route = createFileRoute("/education")({
  head: () => ({ meta: [
    { title: "Education | Kate Nkhenso Mhlava" },
    { name: "description", content: "Discover Kate’s professional learning in Google AI and ICDL digital skills." },
    { property: "og:title", content: "Education | Kate Nkhenso Mhlava" },
    { property: "og:description", content: "Discover Kate’s professional learning in Google AI and ICDL digital skills." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <PortfolioPage page="education" />,
});
