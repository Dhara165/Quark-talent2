import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Meridian didn't just fill our VP of Engineering role; they helped us rethink our entire technical organization structure. Their understanding of the modern engineering landscape is unmatched.",
    author: "Sarah Jenkins",
    title: "CTO, Series C Fintech Scale-up"
  },
  {
    quote: "We needed an HRIS transformation that wouldn't disrupt our operations. Meridian's advisory team managed the vendor selection and rollout flawlessly. A true strategic partner.",
    author: "Marcus Chen",
    title: "CHRO, Global Retail Enterprise"
  },
  {
    quote: "Finding elite AI researchers is notoriously difficult. Meridian's network and targeted approach delivered three outstanding candidates within weeks. They deliver on their promises.",
    author: "Dr. Elena Rostova",
    title: "Head of AI Research, Tech Pioneer"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Client Impact</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border flex flex-col justify-between"
            >
              <div>
                <Quote className="h-8 w-8 text-accent/40 mb-6" />
                <p className="text-lg italic text-muted-foreground leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>
              <div>
                <div className="font-bold text-foreground">{item.author}</div>
                <div className="text-sm text-accent font-medium mt-1">{item.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
