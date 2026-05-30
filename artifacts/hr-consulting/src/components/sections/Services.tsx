import { motion } from "framer-motion";
import { Users, Lightbulb, Database, Briefcase } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Talent Acquisition & Executive Search",
    description: "Our core practice. Targeted search for visionary leaders and specialized talent across tech, AI, retail, and services. We don't just find candidates — we identify market-makers who move organizations forward.",
    icon: Users,
    primary: true,
  },
  {
    id: "02",
    title: "Talent Strategy & Workforce Planning",
    description: "Align your human capital with your business objectives. We build scalable frameworks for organizational design, compensation benchmarking, and talent retention that hold up at every growth stage.",
    icon: Lightbulb,
    primary: false,
  },
  {
    id: "03",
    title: "HRIS Advisory & Implementation",
    description: "A supporting capability to our talent work. From vendor selection to full rollout and data migration, we ensure your HR systems amplify — not obstruct — your people strategy.",
    icon: Database,
    primary: false,
  },
  {
    id: "04",
    title: "Interim HR Leadership",
    description: "Deploying seasoned HR executives to navigate critical transitions, M&A integrations, or rapid scaling phases with the institutional rigor your organization demands.",
    icon: Briefcase,
    primary: false,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 justify-between mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Talent First.<br /><span className="text-accent">Everything Else Follows.</span></h2>
            <p className="text-xl text-muted-foreground">
              Recruitment and talent acquisition are our primary focus. HRIS advisory and interim leadership are additional capabilities we bring when clients need the full picture.
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
              className={`group p-8 md:p-12 border transition-colors duration-500 rounded-2xl relative overflow-hidden ${
                service.primary
                  ? "md:col-span-2 bg-primary text-primary-foreground"
                  : "bg-card hover:bg-primary"
              }`}
            >
              {service.primary && (
                <div className="absolute top-4 right-6 text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 px-3 py-1 rounded-full">
                  Core Practice
                </div>
              )}
              <div className="absolute top-0 right-0 p-8 text-8xl font-bold text-muted/10 group-hover:text-primary-foreground/5 transition-colors duration-500 select-none pointer-events-none">
                {service.id}
              </div>
              <service.icon className={`h-12 w-12 mb-8 ${service.primary ? "text-accent" : "text-accent"}`} />
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${service.primary ? "text-white" : "group-hover:text-white"}`}>
                {service.title}
              </h3>
              <p className={`transition-colors duration-500 relative z-10 leading-relaxed ${service.primary ? "text-primary-foreground/80 max-w-3xl text-lg" : "text-muted-foreground group-hover:text-primary-foreground/80"}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
