import { AISection } from "@/components/AISection";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScreensShowcase } from "@/components/ScreensShowcase";
import { SmartCompSection } from "@/components/SmartCompSection";
import { Workflow } from "@/components/Workflow";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <ScreensShowcase />
        <AISection />
        <SmartCompSection />
      </main>
      <Footer />
    </>
  );
}
