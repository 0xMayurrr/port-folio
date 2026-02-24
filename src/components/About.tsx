import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, CodeHeader, CodeBlock } from "./ui/animated-code";

const personalInfo = [
  { key: "name", value: '"Mayur P"' },
  { key: "role", value: '"Blockchain Dev & AI Builder"' },
  { key: "location", value: '"Remote / Worldwide"' },
  { key: "experience", value: '"Building real-world tech products"' },
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
          <Code className="flex flex-col">
            <CodeHeader title="aboutMe.ts" />
            <CodeBlock>
              <p className="text-comment text-xs mb-4">
                /**<br />
                &nbsp;* About me<br />
                &nbsp;* Not a guru. Not a copy-paste developer.<br />
                &nbsp;*  I learn by building, breaking, and rebuilding.<br />
                &nbsp;*  Interested in technologies that shape the future — .<br />
                &nbsp;*  especially Blockchain, AI, and decentralized systems .<br />
                &nbsp;*/
              </p>
              <p className="text-sm mb-2">
                <span className="text-keyword">const </span>
                <span className="text-variable">aboutMe</span>
                <span className="text-foreground"> = {"{"}</span>
              </p>
              {personalInfo.map((item, i) => (
                <motion.p
                  key={item.key}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-sm pl-6 hover:bg-white/5 py-0.5 rounded transition-colors"
                >
                  <span className="text-function">{item.key}</span>
                  <span className="text-foreground">: </span>
                  <span className={item.value.startsWith('"') ? "text-string" : "text-keyword"}>
                    {item.value}
                  </span>
                  <span className="text-foreground">,</span>
                </motion.p>
              ))}
              <p className="text-sm text-foreground">{"}"}</p>
            </CodeBlock>
          </Code>

          {/* Interests */}
          <Code className="flex flex-col">
            <CodeHeader title="interests.json" />
            <CodeBlock>
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
            </CodeBlock>
          </Code>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
