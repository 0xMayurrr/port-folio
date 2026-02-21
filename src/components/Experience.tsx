import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "2024",
    title: "Blockchain Developer — Web3 Startup",
    description: "Led smart contract development and DeFi protocol architecture for a cross-chain platform.",
  },
  {
    year: "2023",
    title: "🏆 ETHGlobal Hackathon — Winner",
    description: "Built an AI-powered DeFi aggregator in 48 hours, winning Best DeFi Innovation.",
  },
  {
    year: "2023",
    title: "AI Research Intern — Tech Lab",
    description: "Developed NLP models for automated code review and vulnerability detection.",
  },
  {
    year: "2022",
    title: "Open Source Contributor",
    description: "Major contributions to Web3 tooling libraries and developer documentation.",
  },
  {
    year: "2022",
    title: "🏆 HackAI — Top 3 Finalist",
    description: "Created an ML-powered IoT monitoring system with predictive maintenance capabilities.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-3 top-1.5 w-3 h-3 rounded-full bg-primary/60 border-2 border-background" />
                <span className="text-xs text-primary font-medium">{exp.year}</span>
                <h3 className="text-base font-semibold mt-1 mb-1 text-foreground">{exp.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
