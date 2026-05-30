import { motion } from "framer-motion";

const stats = [
  {
    value: "Tech & AI",
    label: "Primary sector focus",
    detail: "Engineering, product, data science, and AI/ML roles at scale-ups and enterprise alike.",
  },
  {
    value: "Retail",
    label: "Specialist vertical",
    detail: "From buying and merchandising leadership to digital transformation and supply chain talent.",
  },
  {
    value: "Services",
    label: "Broad sector coverage",
    detail: "Professional and financial services firms seeking senior HR, operations, and commercial talent.",
  },
  {
    value: "HRIS",
    label: "Systems advisory",
    detail: "Workday, SAP SuccessFactors, BambooHR, and more — vendor-neutral guidance from selection through go-live.",
  },
];

const pillars = [
  { number: "01", heading: "Sector depth, not breadth", body: "We operate in four industries and know them well. Our networks are built over years, not scraped from a database." },
  { number: "02", heading: "Search, not contingency", body: "We work on retained and exclusive mandates — this is how we invest fully in every search and hold ourselves accountable to the outcome." },
  { number: "03", heading: "Honest counsel", body: "We tell clients when a role is mis-specified, a compensation band is off-market, or the brief needs rethinking. Partnership means saying the hard things." },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Where We Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Four industries. Deep networks. We go where generalist firms can't follow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-2xl p-8"
              data-testid={`sector-card-${index}`}
            >
              <div className="text-accent font-heading font-bold text-2xl mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">{stat.label}</div>
              <p className="text-muted-foreground leading-relaxed">{stat.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            The principles that guide every engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              data-testid={`pillar-card-${index}`}
            >
              <div className="text-7xl font-bold text-muted/20 font-heading mb-4 select-none">{pillar.number}</div>
              <h3 className="text-xl font-bold mb-3">{pillar.heading}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
