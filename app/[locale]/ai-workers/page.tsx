import type { Metadata } from "next";
import PricingClient  from "./pricing-client";

export const metadata: Metadata = {
  title: "All HIVENOX AI Workers — Compare Plans & Pricing",
  description:
    "Compare every HIVENOX AI Worker: Free, Social, Content, Growth, Video, SEO, Analytics, plus Enterprise. Free-forever plan & 7-day trials.",
  keywords:
    "AI workers pricing, Compare AI marketing plans, HIVENOX pricing, AI marketing automation, AI workforce, AI employees, bilingual AI workers",
};

export default function AIWorkersPricingPage() {
  return <PricingClient />;
}
