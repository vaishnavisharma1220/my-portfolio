import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // Check if the link is for Home ("/")
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Handle hash links (e.g., /#about)
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.slice(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Now scrolls to top when clicked */}
          <Link 
            to="/" 
            onClick={() => handleNavClick('/')}
            className="font-display text-xl font-semibold text-hero-foreground hover:text-accent transition-colors"
          >
            Vaishnavi Sharma
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-hero-foreground/80 hover:text-accent transition-colors font-body text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/vaishnavi-sharma-6ba29a381/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hero-foreground/70 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/vaishnavisharma1220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hero-foreground/70 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-hero-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-hero-foreground/10">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-hero-foreground/80 hover:text-accent transition-colors font-body text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-hero-foreground/10">
                <a
                  href="https://linkedin.com/in/vaishnavi-sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hero-foreground/70 hover:text-accent transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/vaishnavisharma1220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hero-foreground/70 hover:text-accent transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;