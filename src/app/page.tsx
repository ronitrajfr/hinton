"use client";
import Navigation from "@/components/landing/navigation";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Workflow from "@/components/landing/workflow";
import Pricing from "@/components/landing/pricing";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Features />
      <Workflow />
      <Pricing />
      <Footer />
    </main>
  );
}
