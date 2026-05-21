import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Sectors } from "@/components/sections/Sectors";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Sectors />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
