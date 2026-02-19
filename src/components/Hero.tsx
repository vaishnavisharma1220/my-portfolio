import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import { MonsteraLeaf, LeafDecoration } from './OrganicShapes';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden pt-20">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right cream blob */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[400px] bg-blob-tertiary blob-shape opacity-90 animate-blob" />
        
        {/* Bottom left decorative blob */}
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[350px] bg-blob-primary/30 blob-shape-2 animate-blob" style={{ animationDelay: '2s' }} />
        
        {/* Leaf decorations */}
        <LeafDecoration className="absolute top-32 left-8 w-16 h-20 text-blob-leaf opacity-70 animate-leaf-sway" />
        <LeafDecoration className="absolute bottom-40 left-20 w-20 h-24 text-blob-secondary opacity-80 animate-leaf-sway" style={{ animationDelay: '1s' }} />
        <MonsteraLeaf className="absolute top-20 right-40 w-24 h-32 text-blob-leaf opacity-60 animate-leaf-sway" style={{ animationDelay: '0.5s' }} />
        <MonsteraLeaf className="absolute bottom-20 right-1/4 w-16 h-20 text-blob-leaf opacity-50 animate-leaf-sway" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-180px)]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hero-foreground/10 text-hero-foreground/80 text-sm font-body">
              <Sparkles size={16} className="text-accent" />
              Data Science Enthusiast
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight">
              Turning Data into{' '}
              <span className="text-accent">Meaningful Insights</span>
            </h1>
            
            <p className="text-hero-foreground/80 text-lg md:text-xl font-body leading-relaxed max-w-xl">
              I am a Computer Science Engineering student specializing in Data Science, 
              passionate about analyzing data, discovering patterns, and solving real-world 
              problems using analytics and machine learning.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="accent"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              
              <Button 
                variant="hero-outline"
                size="lg"
                onClick={() => scrollToSection('about')}
              >
                Explore My Journey
              </Button>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="text-hero-foreground/70 hover:text-accent transition-colors font-body text-sm underline underline-offset-4"
            >
              Or contact me directly →
            </button>
          </div>

          {/* Right - Circular Image with Organic Shapes */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-blob-tertiary blob-shape animate-blob opacity-80" />
            <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[60%] w-[200px] h-[200px] bg-blob-secondary blob-shape-2 animate-gentle-pulse" />
            
            {/* Main circular image */}
            <div className="relative z-10">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-hero-foreground/10 shadow-organic">
                <img 
                  src={profilePhoto} 
                  alt="Vaishnavi Sharma - Data Science Student"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>

            {/* Small decorative monstera */}
            <MonsteraLeaf className="absolute -left-8 bottom-20 w-20 h-28 text-blob-leaf opacity-70 animate-leaf-sway" />
          </div>
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 rounded-full bg-hero-foreground/30" />
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-3 h-3 rounded-full bg-hero-foreground/30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
