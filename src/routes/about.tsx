import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Me | Kate Nkhenso Mhlava" },
    { name: "description", content: "Get to know Kate Nkhenso Mhlava and her interest in AI, digital technology, and continuous learning." },
    { property: "og:title", content: "About Me | Kate Nkhenso Mhlava" },
    { property: "og:description", content: "Get to know Kate Nkhenso Mhlava and her interest in AI, digital technology, and continuous learning." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <PortfolioPage page="about" />,
});
