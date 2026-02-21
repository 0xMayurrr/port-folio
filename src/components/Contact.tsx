import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-comment text-xs mb-6">// Send me a message</p>

          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm mb-6">
              <span className="text-keyword">function </span>
              <span className="text-function">sendMessage</span>
              <span className="text-foreground">(</span>
              <span className="text-variable">data</span>
              <span className="text-foreground">) {"{"}</span>
            </p>

            <form onSubmit={handleSubmit} className="pl-6 space-y-4">
              <div>
                <label className="text-xs text-comment block mb-1.5">// _name:</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/50 transition-colors font-mono"
                  placeholder="VibeCoder"
                />
              </div>
              <div>
                <label className="text-xs text-comment block mb-1.5">// _email:</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/50 transition-colors font-mono"
                  placeholder="hello@vibecoder.dev"
                />
              </div>
              <div>
                <label className="text-xs text-comment block mb-1.5">// _message:</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/50 transition-colors resize-none font-mono"
                  placeholder="Hey, let's build something amazing..."
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2 text-sm rounded border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                submit-message
              </button>
            </form>

            <p className="text-sm mt-4 text-foreground">{"}"}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
