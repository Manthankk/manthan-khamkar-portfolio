import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 theme-transition ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold gradient-text">MK</span>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden flex items-center">
            <ThemeToggle className="mr-4" />
            <Button
              variant="ghost"
              className="rounded-md p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white theme-transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ThemeToggle />
            <Button className="ml-6 bg-gradient-to-r from-accent1 to-accent2 text-white">
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        } transform origin-top-right transition-all duration-200 ease-in-out md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg`}
      >
        <div className="pt-2 pb-4 px-5 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={toggleMobileMenu}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button className="w-full bg-gradient-to-r from-accent1 to-accent2 text-white">
              <a href="#contact" onClick={toggleMobileMenu}>Let's Talk</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
