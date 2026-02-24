import { motion } from "framer-motion";
import SnakeGame from "./SnakeGame";

const Hero = () => {
  return (
    <section id="hello" className="min-h-screen flex items-center pt-12">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Code text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-muted-foreground text-sm mb-2"
          >
            Hi all, I am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-gradient"
          >
            Mayur 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-accent text-lg mb-10 font-medium"
          >
            {">"} Blockchain and AI Builder
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="space-y-1.5 text-sm p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm"
          >
            <p className="text-comment">// complete the game to continue</p>
            <p className="text-comment">// find my profile on:</p>
            <p className="flex items-center gap-2 flex-wrap mt-2">
              <span className="text-keyword">const</span>
              <span className="text-variable">githubLink</span>
              <span className="text-foreground">=</span>
              <a href="https://github.com/0xMayurrr" target="_blank" rel="noreferrer" className="text-string hover:underline hover:text-accent transition-colors">
                "https://github.com/0xMayurrr"
              </a>
              <span className="text-foreground">;</span>
            </p>
            <p className="flex items-center gap-2 flex-wrap">
              <span className="text-keyword">const</span>
              <span className="text-variable">linkedinLink</span>
              <span className="text-foreground">=</span>
              <a href="https://www.linkedin.com/in/mayurp03/" target="_blank" rel="noreferrer" className="text-string hover:underline hover:text-accent transition-colors">
                "https://linkedin.com/in/mayurp03"
              </a>
              <span className="text-foreground">;</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Right - Snake game */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            bounce: 0.4
          }}
          className="flex justify-center xl:justify-end xl:pl-10"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-sm"
          >
            <div className="absolute -inset-10 bg-accent/20 blur-2xl rounded-full opacity-40 animate-pulse" />
            <div className="relative z-10 w-full flex justify-center">
              <SnakeGame />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
