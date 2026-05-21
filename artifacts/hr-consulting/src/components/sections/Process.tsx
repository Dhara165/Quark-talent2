import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Alignment",
    description: "Deep dive into your culture, objectives, and technical requirements. We define the true problem before prescribing a solution."
  },
  {
    number: "02",
    title: "Strategy & Mapping",
    description: "Comprehensive market mapping and formulation of a targeted go-to-market narrative that attracts passive, high-caliber talent."
  },
  {
    number: "03",
    title: "Targeted Search",
    description: "Leveraging our network and AI tools to identify, engage, and evaluate candidates against our rigorous scorecard methodology."
  },
  {
    number: "04",
    title: "Placement & Negotiation",
    description: "Managing the delicate final stages, including compensation structuring, offer negotiation, and resignation coaching."
  },
  {
    number: "05",
    title: "Integration Advisory",
    description: "Post-placement support ensuring smooth onboarding and alignment during the critical first 90 days."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Methodology</h2>
            <p className="text-xl text-primary-foreground/70">
              A structured, transparent process designed to minimize risk and maximize quality of hire.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary-foreground/10 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 bg-primary p-6 rounded-xl border border-primary-foreground/10 hover:border-accent transition-colors"
              >
                <div className="text-accent font-bold text-xl mb-4 font-mono">{step.number}</div>
                <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
