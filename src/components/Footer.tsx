const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-gradient font-medium">VibeCoder</span>
          {" "}— Building the future with code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
