import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl glass flex items-center justify-center overflow-hidden">
                <div className="text-8xl">🧑‍💻</div>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl -z-10" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building the future,{" "}
              <span className="text-gradient">one line at a time</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              I'm a passionate full-stack developer with deep expertise in blockchain technology, 
              artificial intelligence, and modern web development. I thrive on building products 
              that push boundaries and create real-world impact.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              With experience across hackathons, startups, and open-source projects, I bring 
              a unique blend of technical depth and creative problem-solving to every project I touch.
            </p>

            <div className="flex flex-wrap gap-3">
              {["🏆 Hackathon Winner", "🚀 10+ Projects", "🌍 Open Source Contributor"].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 text-sm rounded-lg glass text-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
