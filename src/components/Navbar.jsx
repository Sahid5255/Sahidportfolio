import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="Saheed Yusuf logo"
            className="h-10 w-10 object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            {/* Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            {/* Call To Action */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-cyan-400 px-5 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Let's work on your project →
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

