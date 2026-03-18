import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "О компании", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Факты", href: "#facts" },
    { name: "Продукция", href: "#products" },
    { name: "Стандарты", href: "#certificates" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-white py-6"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <div className="text-2xl font-bold tracking-tighter text-cw-dark">
            STALLIN
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-cw-dark hover:text-cw-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Button & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-cw-dark rounded-full hover:bg-cw-accent transition-colors"
          >
            Связаться с нами
          </a>
          <button
            className="md:hidden p-2 text-cw-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-medium text-cw-dark hover:text-cw-accent"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-4 text-lg font-medium text-white bg-cw-accent rounded-full mt-4"
          >
            Связаться с нами
          </a>
        </div>
      )}
    </>
  );
}
