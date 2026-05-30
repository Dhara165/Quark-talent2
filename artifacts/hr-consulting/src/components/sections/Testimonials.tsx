import { motion } from "framer-motion";

const sectorCards = [
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
    detail: "Workday, SAP SuccessFactors, BambooHR, and more. Vendor-neutral guidance from selection through go-live.",
  },
];

const values = [
  {
    keyword: "Mission",
    headline: "Put the right people in the right seats.",
    body: "We exist to help organizations unlock their full potential by connecting them with talent that drives real outcomes, not just resumes that tick boxes. Every placement is a long-term investment in both the company and the individual.",
  },
  {
    keyword: "Vision",
    headline: "A world where hiring is a strategic advantage.",
    body: "We believe the best organizations are built on deliberate people decisions. Our vision is a talent market where businesses of all sizes can access the calibre of advisory that has historically been reserved for the largest firms.",
  },
  {
    keyword: "Purpose",
    headline: "Create careers. Build organizations. Raise the bar.",
    body: "Beyond the transaction, we are invested in the careers of the people we place and the health of the organizations we serve. That long view shapes every conversation, every search, and every recommendation we make.",
  },
  {
    keyword: "Values",
    headline: "Candour. Commitment. Craft.",
    body: "We say what needs to be said, even when it is uncomfortable. We follow through on every commitment we make. And we approach every search with the rigour and precision it deserves. No shortcuts. No filler candidates.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            What We Stand For
          </h2>
          <p className="text-xl text-primary-foreground/70">
            The beliefs that guide every search, every conversation, and every long-term partnership we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden border border-primary-foreground/10">
          {values.map((v, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary p-10 md:p-12 group hover:bg-white/5 transition-colors duration-300"
              data-testid={`value-card-${index}`}
            >
              <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                {v.keyword}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                {v.headline}
              </h3>
              <p className="text-primary-foreground/65 leading-relaxed">
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
