import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Express", "PostgreSQL", "GraphQL"],
  },
  {
    title: "Blockchain",
    skills: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "LangChain", "OpenAI", "RAG"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Figma", "Linux"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 gradient-border"
            >
              <h3 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:border-primary/40 border border-border transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
