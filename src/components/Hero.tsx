import { motion } from "framer-motion";

const techTags = [
  "React", "Blockchain", "AI", "Web3", "IoT", "TypeScript",
  "Solidity", "Python", "Node.js", "TensorFlow"
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6">
            Hi, I'm{" "}
            <span className="text-gradient-glow">VibeCoder</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light">
            Blockchain Developer · AI Builder · VibeCoder
          </p>
          <p className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-10 font-light">
            Crafting cutting-edge solutions at the intersection of blockchain, artificial intelligence, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 glow-primary"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-secondary transition-all duration-200"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {techTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.05 }}
              className="px-3.5 py-1.5 text-xs rounded-full bg-secondary text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-all duration-200"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
