import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Lightbulb, Database, Briefcase, ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Talent Acquisition & Executive Search",
    description: "From specialist contributors to C-suite executives, we run precise, confidential searches across every function and every industry. We do not present volume. We present the right shortlist, backed by genuine market knowledge and a rigorous assessment process.",
    icon: Users,
    primary: true,
    detail: {
      what: "A structured, proactive search to find the right person for a specific role, from specialist hires to senior leadership appointments. We commit fully to each search and do not operate as a volume business.",
      when: [
        "The appointment carries real weight and the shortlist needs to reflect that",
        "The right candidate is unlikely to surface through a standard process",
        "Speed and precision matter as much as the quality of the outcome",
        "The search calls for market knowledge that goes beyond what is publicly visible",
      ],
      includes: [
        "Role scoping and market mapping",
        "Proactive candidate identification and outreach",
        "Structured interviews and capability assessment",
        "Shortlist presentation with written profiles",
        "Offer management and negotiation support",
        "Post-placement onboarding support",
      ],
    },
  },
  {
    id: "02",
    title: "Talent Strategy & Workforce Planning",
    description: "Align your human capital with your business objectives. We build scalable frameworks for organizational design, compensation benchmarking, and talent retention that hold up at every growth stage.",
    icon: Lightbulb,
    primary: false,
    detail: {
      what: "A strategic advisory service that helps you think clearly about your people function: how it is structured today, where the gaps are, and what needs to change to support where your business is going.",
      when: [
        "You are scaling quickly and hiring is not keeping pace",
        "You are unsure where to invest in headcount next",
        "Your retention numbers are pointing to a structural problem",
        "Your org design has not kept up with the size of the business",
      ],
      includes: [
        "Workforce audit and gap analysis",
        "Organizational design recommendations",
        "Compensation and benefits benchmarking",
        "Hiring roadmap and prioritization",
        "Succession planning and talent pipeline review",
      ],
    },
  },
  {
    id: "03",
    title: "HRIS Advisory & Implementation",
    description: "A supporting capability to our talent work. From vendor selection to full rollout and data migration, we ensure your HR systems amplify, not obstruct, your people strategy.",
    icon: Database,
    primary: false,
    detail: {
      what: "Guidance on selecting and deploying the right HR technology for your organization, whether you are a growing business building out your people infrastructure or an enterprise navigating a complex system change.",
      when: [
        "You are outgrowing your current HR tools or processes",
        "You are evaluating platforms like Workday, SAP SuccessFactors, or BambooHR",
        "An HR system implementation is underdelivering",
        "You need a vendor-neutral view before committing to a platform",
      ],
      includes: [
        "HR technology needs assessment",
        "Vendor evaluation and selection support",
        "Implementation oversight and project management",
        "Data migration planning and support",
        "User adoption and change management guidance",
      ],
    },
  },
  {
    id: "04",
    title: "Interim HR Leadership",
    description: "Deploying seasoned HR executives to navigate critical transitions, M&A integrations, or rapid scaling phases with the institutional rigor your organization demands.",
    icon: Briefcase,
    primary: false,
    detail: {
      what: "An experienced HR leader placed into your organization on a fixed-term basis to lead a specific initiative, provide senior HR capability during a period of change, or bridge toward a permanent appointment.",
      when: [
        "Your organization is entering a period of change that calls for senior HR leadership",
        "You need someone who can operate independently from day one",
        "The mandate is time-bounded but the impact on the business needs to be lasting",
        "You want to shape what the HR function looks like before committing to a permanent hire",
      ],
      includes: [
        "Rapid mobilization within agreed timelines",
        "Full senior HR leadership responsibilities",
        "Regular reporting to CEO or Board",
        "Structured handover and knowledge transfer",
        "Optional support recruiting a permanent replacement",
      ],
    },
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border rounded-2xl relative overflow-hidden transition-colors duration-500 ${
        service.primary
          ? "md:col-span-2 bg-primary text-primary-foreground"
          : "bg-card"
      }`}
    >
      <div className="p-8 md:p-12">
        {service.primary && (
          <div className="absolute top-4 right-6 text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 px-3 py-1 rounded-full">
            Core Practice
          </div>
        )}
        <div className="absolute top-0 right-0 p-8 text-8xl font-bold text-muted/10 select-none pointer-events-none">
          {service.id}
        </div>

        <service.icon className="h-12 w-12 text-accent mb-8" />
        <h3 className={`text-2xl font-bold mb-4 ${service.primary ? "text-white" : ""}`}>
          {service.title}
        </h3>
        <p className={`leading-relaxed relative z-10 ${service.primary ? "text-primary-foreground/80 max-w-3xl text-lg" : "text-muted-foreground"}`}>
          {service.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-6 flex items-center gap-2 text-sm font-semibold transition-colors ${
            service.primary
              ? "text-accent hover:text-accent/80"
              : "text-accent hover:text-accent/80"
          }`}
          data-testid={`service-expand-${service.id}`}
        >
          {expanded ? "Show less" : "Learn more"}
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`px-8 md:px-12 pb-10 border-t ${service.primary ? "border-white/10" : "border-border"}`}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 ${service.primary ? "text-primary-foreground/80" : "text-muted-foreground"}`}>

                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">What it is</p>
                  <p className="leading-relaxed text-sm">{service.detail.what}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-3">What is included</p>
                  <ul className="space-y-2">
                    {service.detail.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 justify-between mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">What We Do</h2>
            <p className="text-xl text-muted-foreground">
              Whether you need to fill a single critical role or rethink your entire people function, we bring the same rigour, speed, and commitment to every engagement, regardless of industry, function, or level.
            </p>
          </div>
          <div className="hidden md:block w-1/3">
            <div className="w-full h-full relative">
              <div className="absolute right-0 top-0 w-32 h-32 border-r-2 border-t-2 border-accent opacity-20" />
              <div className="absolute left-0 bottom-0 w-24 h-24 border-l-2 border-b-2 border-primary opacity-10" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
