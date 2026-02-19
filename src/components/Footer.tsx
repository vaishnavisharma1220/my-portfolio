import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hero border-t border-hero-foreground/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-hero-foreground/60 text-sm font-body">
            © {currentYear} Vaishnavi Sharma. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
