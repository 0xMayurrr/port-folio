import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/meelveow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
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

          <div className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50">
            {/* Mac Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-accent/80" />
              <div className="w-3 h-3 rounded-full bg-ide-green-dot/80" />
              <p className="ml-2 text-xs text-muted-foreground font-mono">contact.ts</p>
            </div>

            <div className="p-6">
              <p className="text-sm mb-6">
                <span className="text-keyword">function </span>
                <span className="text-function">sendMessage</span>
                <span className="text-foreground">(</span>
                <span className="text-variable">data</span>
                <span className="text-foreground">) {"{"}</span>
              </p>

              <motion.form
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                onSubmit={handleSubmit}
                className="pl-6 space-y-4"
              >
                <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                  <label className="text-xs text-comment block mb-1.5">// _name:</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary/50 border border-border/50 rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/50 transition-all font-mono"
                    placeholder="VibeCoder"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                  <label className="text-xs text-comment block mb-1.5">// _email:</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary/50 border border-border/50 rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/50 transition-all font-mono"
                    placeholder="hello@vibecoder.dev"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                  <label className="text-xs text-comment block mb-1.5">// _message:</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary/50 border border-border/50 rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/50 transition-all resize-none font-mono"
                    placeholder="Hey, let's build something amazing..."
                  />
                </motion.div>
                <motion.button
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 15px -3px hsl(var(--accent)/0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="px-5 py-2 text-sm rounded bg-accent/10 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "sending..." : "submit-message"}
                </motion.button>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-ide-green-dot"
                  >
                    // Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-destructive"
                  >
                    // Failed to send. Please try again.
                  </motion.p>
                )}
              </motion.form>

              <p className="text-sm mt-4 text-foreground">{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
