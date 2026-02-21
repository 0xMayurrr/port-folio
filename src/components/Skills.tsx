import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { title: "frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
  { title: "backend", skills: ["Node.js", "Python", "Express", "PostgreSQL", "GraphQL"] },
  { title: "blockchain", skills: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS"] },
  { title: "ai_ml", skills: ["TensorFlow", "PyTorch", "LangChain", "OpenAI", "RAG"] },
  { title: "tools", skills: ["Git", "Docker", "AWS", "Figma", "Linux"] },
];

const Skills = () => {
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
          <p className="text-comment text-xs mb-6">// My tech stack</p>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm mb-4">
              <span className="text-keyword">const </span>
              <span className="text-variable">skills</span>
              <span className="text-foreground"> = {"{"}</span>
            </p>
            {skillCategories.map((cat, i) => (
              <div key={cat.title} className="mb-3 pl-6">
                <p className="text-sm">
                  <span className="text-function">{cat.title}</span>
                  <span className="text-foreground">: [</span>
                </p>
                <div className="flex flex-wrap gap-2 pl-6 py-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded border border-border text-string hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                    >
                      "{skill}"
                    </span>
                  ))}
                </div>
                <p className="text-sm text-foreground">]{i < skillCategories.length - 1 ? "," : ""}</p>
              </div>
            ))}
            <p className="text-sm text-foreground">{"}"}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
