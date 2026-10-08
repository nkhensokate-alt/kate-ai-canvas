import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact | Kate Nkhenso Mhlava" },
    { name: "description", content: "Connect with Kate Nkhenso Mhlava for internships, professional opportunities, and collaboration." },
    { property: "og:title", content: "Contact | Kate Nkhenso Mhlava" },
    { property: "og:description", content: "Connect with Kate Nkhenso Mhlava for internships, professional opportunities, and collaboration." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <PortfolioPage page="contact" />,
});
