import { motion } from "framer-motion";
import { Cpu, ShoppingBag, Landmark, BrainCircuit } from "lucide-react";

const sectors = [
  {
    id: "tech",
    name: "Technology & SaaS",
    description: "Engineering leadership, product visionaries, and scale-up specialists for high-growth tech companies.",
    icon: Cpu,
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    description: "Hard-to-find researchers, data scientists, and ML engineers building the next frontier of intelligence.",
    icon: BrainCircuit,
  },
  {
    id: "retail",
    name: "Modern Retail & CPG",
    description: "Omnichannel executives and supply chain innovators adapting to shifting consumer landscapes.",
    icon: ShoppingBag,
  },
  {
    id: "services",
    name: "Professional Services",
    description: "Partners, managing directors, and practice leaders who drive revenue and institutional value.",
    icon: Landmark,
  }
];

export function Sectors() {
  return (
    <section id="sectors" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Sector Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Deep domain knowledge allows us to evaluate candidates on technical nuance, not just surface-level qualifications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border p-8 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <sector.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">{sector.name}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
