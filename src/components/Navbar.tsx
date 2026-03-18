import { useState, useEffect } from "react";
import { Menu, X, Mail, Phone, Search, ShoppingBag, BarChart2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Каталог", href: "/catalog" },
    { name: "Компания", href: "/#company" },
    { name: "Прайс-лист", href: "/#price" },
    { name: "Тех. информация", href: "/#tech" },
    { name: "Наши объекты", href: "/#objects" },
    { name: "Контакты", href: "/#contacts" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          {/* Top Row */}
          <div className={`flex justify-between items-center py-4 transition-all duration-300`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 z-50">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor" className={`transition-colors ${isScrolled || !isHomePage ? "text-cw-dark" : "text-white"}`}>
                <path d="M 12 85 L 45 85 C 45 75, 49 65, 49 45 C 49 25, 35 15, 15 10 C 28 15, 37 28, 37 45 C 37 65, 25 77, 12 77 Z" />
                <path d="M 88 15 L 55 15 C 55 25, 51 35, 51 55 C 51 75, 65 85, 85 90 C 72 85, 63 72, 63 55 C 63 35, 75 23, 88 23 Z" />
              </svg>
              <div className="flex flex-col">
                <div className={`text-3xl font-serif font-bold tracking-[0.1em] leading-none transition-colors ${isScrolled || !isHomePage ? "text-cw-dark" : "text-white"}`}>
                  STALLIN
                </div>
                <div className={`text-[9px] uppercase tracking-[0.4em] mt-2 font-serif transition-colors ${isScrolled || !isHomePage ? "text-cw-dark/80" : "text-white/80"}`}>
                  С Т А Л Ь Н А Я &nbsp; Л И Н И Я
                </div>
              </div>
            </Link>

            {/* Top Right Contacts & Actions */}
            <div className={`hidden xl:flex items-center gap-8 text-sm font-bold transition-colors ${isScrolled || !isHomePage ? "text-cw-dark" : "text-white"}`}>
              <div className="flex items-center gap-6">
                <span>Пн-Пт с 9:00 до 18:00</span>
                <a href="mailto:info@stallin.ru" className="flex items-center gap-2 hover:text-cw-accent transition-colors">
                  <Mail size={18} strokeWidth={1.5} />
                  <span>Написать нам</span>
                </a>
                <a href="tel:88003331853" className="flex items-center gap-2 hover:text-cw-accent transition-colors">
                  <Phone size={18} strokeWidth={1.5} />
                  <span>8 (800) 333-18-53</span>
                </a>
                <a href="tel:+74993223121" className="flex items-center gap-2 hover:text-cw-accent transition-colors">
                  <Phone size={18} strokeWidth={1.5} />
                  <span>+7 (499) 322-31-21</span>
                </a>
              </div>

              <button className={`px-6 py-2.5 text-sm font-bold transition-colors ${
                isScrolled || !isHomePage
                  ? "bg-cw-dark text-white hover:bg-cw-accent" 
                  : "bg-white text-cw-dark hover:bg-gray-100"
              }`}>
                Заказать звонок
              </button>

              <div className="flex items-center gap-5">
                <button className="hover:text-cw-accent transition-colors"><Search size={22} strokeWidth={1.5} /></button>
                <button className="hover:text-cw-accent transition-colors"><BarChart2 size={22} strokeWidth={1.5} /></button>
                <button className="hover:text-cw-accent transition-colors"><ShoppingBag size={22} strokeWidth={1.5} /></button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`xl:hidden p-2 transition-colors z-50 ${isScrolled || !isHomePage ? "text-cw-dark" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} className={isScrolled || !isHomePage ? "text-cw-dark" : "text-cw-dark"} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Divider */}
          <div className={`hidden xl:block h-px w-full transition-colors ${isScrolled || !isHomePage ? "bg-gray-200" : "bg-white/30"}`} />

          {/* Bottom Row - Navigation */}
          <div className={`hidden xl:flex items-center gap-12 py-4 transition-colors ${isScrolled || !isHomePage ? "text-cw-dark" : "text-white"}`}>
            {navLinks.map((link) => {
              const isActive = link.href === "/" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(link.href);
                
              return link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold hover:text-cw-accent transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-bold hover:text-cw-accent transition-all duration-300 px-6 py-2 rounded-md ${
                    isActive
                      ? (isScrolled || !isHomePage ? "bg-cw-dark text-white shadow-sm" : "bg-white text-cw-dark shadow-sm")
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 gap-6 overflow-y-auto pb-10">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = link.href === "/" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(link.href);

              return link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-cw-dark hover:text-cw-accent"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold text-cw-dark hover:text-cw-accent ${isActive ? "text-cw-accent" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          <div className="h-px w-full bg-gray-200 my-2" />
          
          <div className="flex flex-col gap-4 text-cw-dark">
            <span className="font-medium">Пн-Пт с 9:00 до 18:00</span>
            <a href="mailto:info@stallin.ru" className="flex items-center gap-3 font-medium hover:text-cw-accent">
              <Mail size={20} />
              <span>Написать нам</span>
            </a>
            <a href="tel:88003331853" className="flex items-center gap-3 font-medium hover:text-cw-accent">
              <Phone size={20} />
              <span>8 (800) 333-18-53</span>
            </a>
            <a href="tel:+74993223121" className="flex items-center gap-3 font-medium hover:text-cw-accent">
              <Phone size={20} />
              <span>+7 (499) 322-31-21</span>
            </a>
          </div>

          <button className="w-full py-4 text-lg font-medium text-white bg-cw-accent mt-4">
            Заказать звонок
          </button>
        </div>
      )}
    </>
  );
}
