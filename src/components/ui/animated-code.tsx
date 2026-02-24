import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface CodeProps {
  children: ReactNode;
  className?: string;
  code?: string;
}

interface CodeHeaderProps {
  title?: string;
}

interface CodeBlockProps {
  children?: ReactNode;
  writing?: boolean;
  duration?: number;
  delay?: number;
  cursor?: boolean;
  code?: string;
}

export const Code = ({ children, className = "" }: CodeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 40px -15px hsl(var(--accent) / 0.15)",
        transition: { duration: 0.2 }
      }}
      className={`rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden shadow-xl shadow-black/20 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const CodeHeader = ({ title }: CodeHeaderProps) => {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
        className="w-3 h-3 rounded-full bg-destructive/80"
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
        className="w-3 h-3 rounded-full bg-accent/80"
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
        className="w-3 h-3 rounded-full bg-ide-green-dot/80"
      />
      {title && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="ml-2 text-xs text-muted-foreground font-mono"
        >
          {title}
        </motion.p>
      )}
    </div>
  );
};

export const CodeBlock = ({ children, writing = false, duration = 2, delay = 0, cursor = false, code }: CodeBlockProps) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(writing);

  useEffect(() => {
    if (writing && code) {
      setDisplayedCode("");
      setIsTyping(true);
      const totalChars = code.length;
      const charDelay = (duration * 1000) / totalChars;

      const timeout = setTimeout(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= totalChars) {
            setDisplayedCode(code.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
            setIsTyping(false);
          }
        }, charDelay);

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [writing, code, duration, delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="p-6"
    >
      {writing && code ? (
        <pre className="text-sm font-mono whitespace-pre-wrap">
          {displayedCode}
          {cursor && isTyping && <span className="animate-pulse">|</span>}
        </pre>
      ) : (
        children
      )}
    </motion.div>
  );
};
