import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DeFi Yield Aggregator",
    description: "A decentralized protocol that optimizes yield farming strategies across multiple chains using smart contract automation.",
    tags: ["Solidity", "React", "Ethereum", "Web3.js"],
    featured: true,
  },
  {
    title: "AI Code Review Bot",
    description: "An intelligent code review assistant powered by LLMs that provides contextual feedback on pull requests.",
    tags: ["Python", "LangChain", "OpenAI", "GitHub API"],
    featured: true,
  },
  {
    title: "IoT Dashboard",
    description: "Real-time monitoring dashboard for IoT sensor networks with predictive analytics and alerting.",
    tags: ["React", "Node.js", "MQTT", "TensorFlow"],
    featured: false,
  },
  {
    title: "NFT Marketplace",
    description: "A curated marketplace for digital art with gasless minting and cross-chain bridge support.",
    tags: ["Next.js", "Solidity", "IPFS", "Polygon"],
    featured: false,
  },
  {
    title: "Smart Contract Auditor",
    description: "Automated vulnerability detection tool for Solidity contracts using static analysis and ML models.",
    tags: ["Python", "Solidity", "ML", "AST"],
    featured: false,
  },
  {
    title: "Decentralized Chat",
    description: "End-to-end encrypted messaging app built on blockchain with zero knowledge proof identity verification.",
    tags: ["React", "Rust", "ZK-SNARKs", "libp2p"],
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group glass rounded-xl p-6 gradient-border hover:-translate-y-1 transition-transform duration-300 ${
                project.featured ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              {project.featured && (
                <span className="inline-block text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-4 font-medium">
                  Featured
                </span>
              )}
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-gradient transition-all duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 font-light leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> Code
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Demo
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
