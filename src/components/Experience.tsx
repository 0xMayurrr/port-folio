import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, CodeHeader, CodeBlock } from "./ui/animated-code";

const experiences = [
  {
    year: "2025 — Present",
    title: "Startup Product Development",
    description:
      "Actively building a real-world startup product, contributing to feature design, development, and refinement to deliver a usable and scalable solution."
  },
  {
    year: "2025 — Present",
    title: "Blockchain Systems Builder",
    description:
      "Developing decentralized applications and experimenting with smart contracts to understand how blockchain can solve real-world problems."
  },
  {
    year: "2024 — Present",
    title: "Self-Driven Tech Projects",
    description:
      "Creating practical applications across AI, IoT, and web development, primarily through hackathons and independent exploration."
  }
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
          <Code>
            <CodeHeader title="Experience.ts" />
            <CodeBlock>
              <p className="text-sm mb-4">
                <span className="text-keyword">const </span>
                <span className="text-variable">experience</span>
                <span className="text-foreground"> = [</span>
              </p>
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
                    whileHover={{ x: 10, backgroundColor: "hsl(var(--secondary) / 0.5)" }}
                    className="pl-6 mb-4 py-2 rounded-md transition-colors cursor-default"
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
            </CodeBlock>
          </Code>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
