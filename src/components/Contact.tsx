import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MonsteraLeaf, LeafDecoration } from './OrganicShapes';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "vaishnavisharma4869@gmail.com",
      href: "mailto:vaishnavisharma4869@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vaishnavi-sharma",
      href: "https://www.linkedin.com/in/vaishnavi-sharma-6ba29a381/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vaishnavi-sharma",
      href: "  https://github.com/vaishnavisharma1220"
    }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-hero overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-[400px] h-[350px] bg-blob-tertiary/20 blob-shape-2 animate-blob" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blob-primary/20 blob-shape animate-blob" style={{ animationDelay: '2s' }} />
      
      <div className="absolute top-20 right-20 opacity-30">
        <LeafDecoration className="w-16 h-20 text-blob-leaf animate-leaf-sway" />
      </div>
      <div className="absolute bottom-20 left-32 opacity-25">
        <MonsteraLeaf className="w-24 h-32 text-blob-secondary animate-leaf-sway" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block px-4 py-2 rounded-full bg-hero-foreground/10 text-hero-foreground/80 text-sm font-body font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-hero-foreground/70 font-body text-lg mb-4">
            Open to data science internships, learning opportunities, and collaborative projects.
          </p>
          <div className="flex items-center justify-center gap-2 text-hero-foreground/60 text-sm font-body mb-12">
            <MapPin size={16} />
            Ghaziabad, India
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group bg-hero-foreground/5 hover:bg-hero-foreground/10 border border-hero-foreground/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <contact.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-body font-medium text-hero-foreground mb-1">
                  {contact.label}
                </h3>
                <p className="text-hero-foreground/60 text-sm font-body truncate">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-hero-foreground/5 border border-hero-foreground/10 rounded-3xl p-8 md:p-12">
            <h3 className="font-display text-2xl font-semibold text-hero-foreground mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-hero-foreground/70 font-body mb-6 max-w-lg mx-auto">
              I'm always excited to discuss data science projects, internship opportunities, 
              or simply connect with fellow enthusiasts.
            </p>
            <Button 
              variant="accent"
              size="lg"
              asChild
              className="group"
            >
              <a href="mailto:vaishnavisharma4869@gmail.com">
                <Send className="mr-2 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
