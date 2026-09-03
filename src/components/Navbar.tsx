import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png';

const links = [
  { label: "About", href: "#about" },
  { label: "Meet the Team", href: "#disciplines" },
  { label: "Gallery", href: "#gallery" },
  { label: "Workshops", href: "#impact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-lg text-primary">
          <img src={logo} alt="Logo" className="inline-block w-8 h-8 mr-2" />
<span>InspirED Science</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-display text-sm font-medium text-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg font-display text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: '#ff9d00' }}
          >
            Request a Workshop
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block font-display text-sm font-medium text-foreground py-2">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-2.5 rounded-lg font-display text-sm font-bold text-white shadow-lg"
            style={{ background: '#ff9d00' }}
          >
            Request a Workshop
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
