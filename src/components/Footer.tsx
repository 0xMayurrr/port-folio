import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-ide-statusbar">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground">find me in:</span>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
        <a href="#" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
          @vibecoder <Github className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
