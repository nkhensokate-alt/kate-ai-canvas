import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio";
export const Route = createFileRoute("/certifications")({
  head: () => ({ meta: [
    { title: "Certifications | Kate Nkhenso Mhlava" },
    { name: "description", content: "Explore Kate’s Google AI and ICDL digital skills certifications and areas of learning." },
    { property: "og:title", content: "Certifications | Kate Nkhenso Mhlava" },
    { property: "og:description", content: "Explore Kate’s Google AI and ICDL digital skills certifications and areas of learning." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <PortfolioPage page="certifications" />,
});
