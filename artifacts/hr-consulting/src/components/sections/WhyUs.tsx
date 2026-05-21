import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  "Deep Sector Specialization",
  "AI-Augmented Search Methodology",
  "Embedded Partnership Model",
  "Data-Driven Candidate Assessment",
  "Proprietary Talent Networks",
  "Post-Placement Integration"
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
              <img 
                src="/services-bg.png" 
                alt="Professional consulting environment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-white mb-2">98%</div>
                  <div className="text-white/80 font-medium">Retention rate beyond year one for executive placements.</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Meridian Advantage</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We operate differently. By limiting our active engagements, we guarantee partner-level attention on every search. Our process combines institutional rigor with startup agility.
            </p>

            <ul className="space-y-6">
              {differentiators.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
