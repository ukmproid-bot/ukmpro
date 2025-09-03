import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Masalah UMKM", href: "#problem" },
    { label: "Solusi AI", href: "#solution" },
    { label: "Fitur", href: "#features" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Harga", href: "#pricing" }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-card backdrop-blur-xl border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group flex-shrink-0">
            <img src={logo} alt="UKMPRO.ID Logo" className="w-10 h-10 transition-transform group-hover:rotate-12" />
            <span className="hidden sm:inline text-2xl font-bold text-foreground">UKMPRO.ID</span>
          </a>

          {/* Desktop Navigation & CTAs */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <a href="https://ukmpro.id/login-signup/#login" target="_blank" rel="noopener noreferrer">Masuk</a>
              </Button>
              <Button asChild className="btn-primary text-primary-foreground">
                <a href="https://ukmpro.id/login-signup/#signup" target="_blank" rel="noopener noreferrer">Daftar</a>
              </Button>
            </div>
          </div>

          {/* Mobile CTAs & Menu Button */}
          <div className="flex md:hidden items-center gap-2 flex-shrink-0">
            <Button asChild variant="outline" size="sm">
              <a href="https://ukmpro.id/login-signup/#login" target="_blank" rel="noopener noreferrer">Masuk</a>
            </Button>
            <Button asChild size="sm" className="btn-primary text-primary-foreground">
              <a href="https://ukmpro.id/login-signup/#signup" target="_blank" rel="noopener noreferrer">Daftar</a>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-card mt-4 p-6 rounded-2xl space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
