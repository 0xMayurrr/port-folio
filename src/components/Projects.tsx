import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "DeFi Yield Aggregator",
    description: "A decentralized protocol that optimizes yield farming strategies across multiple chains.",
    tags: ["Solidity", "React", "Ethereum", "Web3.js"],
  },
  {
    title: "AI Code Review Bot",
    description: "An intelligent code review assistant powered by LLMs that provides contextual feedback.",
    tags: ["Python", "LangChain", "OpenAI", "GitHub API"],
  },
  {
    title: "NFT Marketplace",
    description: "A curated marketplace for digital art with gasless minting and cross-chain bridge support.",
    tags: ["Next.js", "Solidity", "IPFS", "Polygon"],
  },
  {
    title: "Smart Contract Auditor",
    description: "Automated vulnerability detection tool for Solidity contracts using static analysis and ML.",
    tags: ["Python", "Solidity", "ML", "AST"],
  },
  {
    title: "IoT Dashboard",
    description: "Real-time monitoring dashboard for IoT sensor networks with predictive analytics.",
    tags: ["React", "Node.js", "MQTT", "TensorFlow"],
  },
  {
    title: "Decentralized Chat",
    description: "End-to-end encrypted messaging app built on blockchain with ZK identity verification.",
    tags: ["React", "Rust", "ZK-SNARKs", "libp2p"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-comment text-xs mb-2">// All creative works</p>
          <p className="text-sm mb-8">
            <span className="text-keyword">const </span>
            <span className="text-variable">projects</span>
            <span className="text-foreground"> = </span>
            <span className="text-comment">// {projects.length} projects</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group rounded-lg border border-border bg-card p-5 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full border border-muted-foreground/30" />
                <h3 className="text-sm font-medium text-foreground">
                  {project.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] rounded border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-xs">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  view-project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
