import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const personalInfo = [
  { key: "name", value: '"VibeCoder"' },
  { key: "role", value: '"Blockchain Dev & AI Builder"' },
  { key: "location", value: '"Remote / Worldwide"' },
  { key: "experience", value: '"3+ years"' },
  { key: "openToWork", value: "true" },
];

const interests = [
  "Blockchain", "AI/ML", "Open Source", "Hackathons",
  "Web3", "DeFi", "IoT", "System Design"
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Personal info as code block */}
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-comment text-xs mb-4">
              /**<br />
              &nbsp;* About me<br />
              &nbsp;* I'm a passionate full-stack developer with deep<br />
              &nbsp;* expertise in blockchain and AI.<br />
              &nbsp;*/
            </p>
            <p className="text-sm mb-2">
              <span className="text-keyword">const </span>
              <span className="text-variable">aboutMe</span>
              <span className="text-foreground"> = {"{"}</span>
            </p>
            {personalInfo.map((item) => (
              <p key={item.key} className="text-sm pl-6">
                <span className="text-function">{item.key}</span>
                <span className="text-foreground">: </span>
                <span className={item.value.startsWith('"') ? "text-string" : "text-keyword"}>
                  {item.value}
                </span>
                <span className="text-foreground">,</span>
              </p>
            ))}
            <p className="text-sm text-foreground">{"}"}</p>
          </div>

          {/* Interests */}
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-comment text-xs mb-4">// My interests</p>
            <p className="text-sm mb-3">
              <span className="text-keyword">const </span>
              <span className="text-variable">interests</span>
              <span className="text-foreground"> = [</span>
            </p>
            <div className="flex flex-wrap gap-2 pl-6 mb-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 text-xs rounded border border-border text-string bg-secondary"
                >
                  "{interest}"
                </span>
              ))}
            </div>
            <p className="text-sm text-foreground">]</p>

            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-comment text-xs mb-3">// Achievements</p>
              {["🏆 Hackathon Winner", "🚀 10+ Projects", "🌍 Open Source Contributor"].map((badge) => (
                <p key={badge} className="text-sm text-muted-foreground mb-1">
                  <span className="text-comment">// </span>{badge}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
