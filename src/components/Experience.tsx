import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  { year: "2024", title: "Blockchain Developer — Web3 Startup", description: "Led smart contract development and DeFi protocol architecture." },
  { year: "2023", title: "ETHGlobal Hackathon — Winner", description: "Built an AI-powered DeFi aggregator in 48 hours." },
  { year: "2023", title: "AI Research Intern — Tech Lab", description: "Developed NLP models for automated code review." },
  { year: "2022", title: "Open Source Contributor", description: "Major contributions to Web3 tooling libraries." },
  { year: "2022", title: "HackAI — Top 3 Finalist", description: "Created an ML-powered IoT monitoring system." },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-comment text-xs mb-6">// Experience & achievements</p>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm mb-4">
              <span className="text-keyword">const </span>
              <span className="text-variable">experience</span>
              <span className="text-foreground"> = [</span>
            </p>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="pl-6 mb-4"
              >
                <p className="text-sm">
                  <span className="text-foreground">{"{ "}</span>
                  <span className="text-function">year</span>
                  <span className="text-foreground">: </span>
                  <span className="text-string">"{exp.year}"</span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="text-sm pl-4">
                  <span className="text-function">role</span>
                  <span className="text-foreground">: </span>
                  <span className="text-string">"{exp.title}"</span>
                  <span className="text-foreground">,</span>
                </p>
                <p className="text-sm pl-4">
                  <span className="text-function">desc</span>
                  <span className="text-foreground">: </span>
                  <span className="text-string">"{exp.description}"</span>
                </p>
                <p className="text-sm">
                  <span className="text-foreground">{"}"}{i < experiences.length - 1 ? "," : ""}</span>
                </p>
              </motion.div>
            ))}
            <p className="text-sm text-foreground">]</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
