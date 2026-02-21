import { useState } from "react";

const tabs = [
  { label: "_hello", id: "hello" },
  { label: "_about-me", id: "about" },
  { label: "_projects", id: "projects" },
  { label: "_contact-me", id: "contact" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("hello");

  const handleClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <div className="flex items-center">
        <div className="px-6 py-3 border-r border-border text-muted-foreground text-sm">
          vibecoder
        </div>
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`px-6 py-3 text-sm border-r border-border transition-colors ${
                activeTab === tab.id
                  ? "bg-tab-active text-foreground"
                  : "bg-tab-inactive text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
