import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-ide-statusbar">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground">find me in:</span>
          <a href="https://www.linkedin.com/in/mayurp03/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
        <a href="https://github.com/0xMayurrr" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
          @0xMayurrr <Github className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
