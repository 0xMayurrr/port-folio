import { motion } from "framer-motion";
import SnakeGame from "./SnakeGame";

const Hero = () => {
  return (
    <section id="hello" className="min-h-screen flex items-center pt-12">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Code text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm mb-2">Hi all, I am</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight mb-3">
            VibeCoder
          </h1>
          <p className="text-accent text-lg mb-10">
            {">"} Blockchain Developer · AI Builder
          </p>

          <div className="space-y-1.5 text-sm">
            <p className="text-comment">// complete the game to continue</p>
            <p className="text-comment">// find my profile on Github:</p>
            <p>
              <span className="text-keyword">const </span>
              <span className="text-variable">githubLink</span>
              <span className="text-foreground"> = </span>
              <a href="#" className="text-string hover:underline">"https://github.com/vibecoder"</a>
            </p>
          </div>
        </motion.div>

        {/* Right - Snake game */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <SnakeGame />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
