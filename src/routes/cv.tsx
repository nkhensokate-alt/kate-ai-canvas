import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, CVContent } from "@/components/portfolio";
export const Route = createFileRoute("/cv")({
  head: () => ({ meta: [
    { title: "CV | Kate Nkhenso Mhlava" },
    { name: "description", content: "Curriculum vitae of Kate Nkhenso Mhlava — education, experience, skills, certifications, languages, and references." },
    { property: "og:title", content: "CV | Kate Nkhenso Mhlava" },
    { property: "og:description", content: "Education, experience, skills, certifications, languages, and references of Kate Nkhenso Mhlava." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <SiteLayout><section className="page-intro page-width" id="top"><p className="section-label"><span />CURRICULUM VITAE</p><h1>Curriculum vitae.</h1><p>A complete overview of Kate’s education, experience, skills, and references — ready to print or save as PDF.</p></section><section className="page-body page-width"><CVContent /></section></SiteLayout>,
});
