import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "OnTrade",
    description: "A no-code visual platform for creating AI-driven crypto trading strategies that automatically analyze markets and execute trades on-chain.",
    tags: ["React.js • React Flow • Node.js • OpenAI API • Ethers.js"],
    url: "https://on-trade.netlify.app/",
  },
  {
    title: "DeID — Self-Sovereign Digital Identity Wallet",
    description: "A self-sovereign digital identity wallet that allows users to store and share verifiable credentials via QR codes, enabling instant authentication without relying on a central authority.",
    tags: ["React.js • Node.js • MongoDB • Cryptographic Signing • Ethereum / Web3 Integration"],
  },
  {
    title: "Campus Aid Buddy — AI-Based Student Help Platform ",
    description: "An AI-powered campus assistant that helps students access academic resources, campus services, announcements, and support through a unified intelligent platform.",
    tags: ["Next.js • Node.js • MongoDB • OpenAI API • Firebase (Authentication / Realtime)"],
    url: "https://campus-aid-buddy-440ad.web.app/",
  },
  {
    title: "Rotaract Dashboard — Smart Club Operations Platform",
    description: "A full-stack dashboard for managing organizational activities, members, and announcements with blockchain-based tracking to ensure secure and transparent financial operations.",
    tags: ["React.js • Node.js • MongoDB • Hyperledger Fabric • REST APIs"],
    url: "https://rotdashboard.netlify.app/",
  },
  {
    title: "OrgaChain - SupplyChain Management",
    description: "A fully decentralized supply chain management system that uses smart contracts to automate transactions, track goods transparently, and eliminate intermediaries.",
    tags: ["React.js • Node.js • Solidity • Ethers.js • IPFS"],
    url: "https://orga-chain.vercel.app/",
  },
  {
    title: "Timetotimenews",
    description: "A dynamic news website built with WordPress for publishing real-time articles, categories, and multimedia content through an easy-to-manage content system.",
    tags: ["WordPress"],
    url: "https://timetotimenews.com/",
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
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px -15px hsl(var(--accent) / 0.1)"
              }}
              className="group flex flex-col rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <div className="flex items-center gap-1.5 px-4 py-3 bg-secondary/80 border-b border-border/50">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-ide-green-dot/80" />
                <span className="ml-2 text-[10px] text-muted-foreground font-mono">{project.title.toLowerCase().replace(/\s+/g, '-')}.tsx</span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
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
                <div className="flex gap-3 text-xs mt-auto pt-4">
                  <a href={project.url || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors font-mono">
                    <span className="text-keyword">import</span> {'{'} <span className="underline decoration-accent/50 underline-offset-4">view</span> {'}'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
