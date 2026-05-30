import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Abstract tech background" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Talent Acquisition & HR Advisory
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-6">
              Precision Talent.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Strategic Impact.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light">
              From specialist roles to executive appointments, we help organizations across every industry find and secure the people who move them forward: permanently, on contract, or on an interim basis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                size="lg" 
                className="text-lg h-14 px-8 bg-accent hover:bg-accent/90 text-white border-0"
                onClick={() => scrollTo("contact")}
                data-testid="hero-cta-primary"
              >
                Speak to a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg h-14 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
                onClick={() => scrollTo("services")}
                data-testid="hero-cta-secondary"
              >
                Explore Services
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-10"
            >
              {[
                { stat: "20+", label: "Years of combined experience" },
                { stat: "North America", label: "Active search capability across the US and Canada" },
              ].map((item) => (
                <div key={item.stat} className="flex flex-col" data-testid={`hero-stat-${item.stat.replace(/\s+/g, "-").toLowerCase()}`}>
                  <span className="text-2xl font-bold text-white font-heading">{item.stat}</span>
                  <span className="text-sm text-white/55">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
