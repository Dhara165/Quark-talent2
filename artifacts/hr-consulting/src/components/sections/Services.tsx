import { motion } from "framer-motion";
import { Users, Lightbulb, Database, Briefcase } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Executive & Technical Recruitment",
    description: "Targeted search for visionary leaders and specialized technical talent in AI, engineering, and product. We don't just find candidates; we identify market-makers.",
    icon: Users,
  },
  {
    id: "02",
    title: "Talent Strategy & Workforce Planning",
    description: "Align your human capital with your business objectives. We build scalable frameworks for organizational design, compensation strategy, and talent retention.",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "HRIS Implementation & Optimization",
    description: "Modernize your HR infrastructure. From vendor selection to full-scale rollout and data migration, we ensure your systems drive efficiency rather than friction.",
    icon: Database,
  },
  {
    id: "04",
    title: "Interim HR Leadership",
    description: "Deploying seasoned HR executives to navigate critical transitions, M&A integrations, or rapid scaling phases with institutional rigor.",
    icon: Briefcase,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 justify-between mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Core Competencies</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive human capital solutions designed for modern enterprises. We deliver strategic clarity and operational excellence.
            </p>
          </div>
          <div className="hidden md:block w-1/3">
            {/* Decorative element */}
            <div className="w-full h-full relative">
              <div className="absolute right-0 top-0 w-32 h-32 border-r-2 border-t-2 border-accent opacity-20" />
              <div className="absolute left-0 bottom-0 w-24 h-24 border-l-2 border-b-2 border-primary opacity-10" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 md:p-12 border bg-card hover:bg-primary transition-colors duration-500 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl font-bold text-muted/10 group-hover:text-primary-foreground/5 transition-colors duration-500 select-none pointer-events-none">
                {service.id}
              </div>
              <service.icon className="h-12 w-12 text-accent mb-8" />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500 relative z-10 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
