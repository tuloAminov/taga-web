import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { ProcessSection } from "@/components/home/process-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";

export const metadata = {
  title: "Разработка интернет-магазинов и сайтов под ключ | ТАГА IT-студия",
  description:
    "Создаём интернет-магазины на 1С-Битрикс, корпоративные сайты и мобильные приложения. Качественная разработка с гарантией.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
