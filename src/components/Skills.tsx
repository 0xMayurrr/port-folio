import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { title: "frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
  { title: "backend", skills: ["Node.js", "Python", "RESTAPI", "MongoDB", "MySQL"] },
  { title: "blockchain", skills: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS"] },
  { title: "ai_ml", skills: ["NumPy", "EDA", "LangChain", "OpenAI", "RAG"] },
  { title: "tools", skills: ["Git", "Docker", "AWS", "Figma", "Remix"] },
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
          <div className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50">
            {/* Mac Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-accent/80" />
              <div className="w-3 h-3 rounded-full bg-ide-green-dot/80" />
              <p className="ml-2 text-xs text-muted-foreground font-mono">skills.json</p>
            </div>

            <div className="p-6">
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
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: { transition: { staggerChildren: 0.05 } }
                    }}
                    className="flex flex-wrap gap-2 pl-6 py-2"
                  >
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8, y: 10 },
                          visible: { opacity: 1, scale: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="px-3 py-1 text-xs rounded border border-border/60 bg-secondary/50 text-string hover:border-accent/40 hover:text-accent hover:shadow-[0_0_15px_-3px_hsl(var(--accent)/0.3)] transition-colors cursor-default"
                      >
                        "{skill}"
                      </motion.span>
                    ))}
                  </motion.div>
                  <p className="text-sm text-foreground">]{i < skillCategories.length - 1 ? "," : ""}</p>
                </div>
              ))}
              <p className="text-sm text-foreground">{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
