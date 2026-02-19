import { BookOpen, Target, Heart } from 'lucide-react';
import { LeafDecoration } from './OrganicShapes';

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Academic Focus",
      description: "B.Tech in CSE (Data Science) at NIET, Greater Noida, with coursework in ML, Statistics, and Cloud Computing."
    },
    {
      icon: Target,
      title: "Curiosity-Driven",
      description: "Passionate about extracting insights from data and continuously learning new analytical techniques."
    },
    {
      icon: Heart,
      title: "Problem Solver",
      description: "Enjoy applying data-driven approaches to real-world challenges and making meaningful impact."
    }
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <LeafDecoration className="w-32 h-40 text-primary animate-leaf-sway" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-15">
        <LeafDecoration className="w-24 h-32 text-accent animate-leaf-sway" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-body font-medium mb-4">
              Get to Know Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium mb-12">
            <p className="text-lg md:text-xl text-card-foreground/80 font-body leading-relaxed text-center">
              I am currently pursuing B.Tech in Computer Science Engineering (Data Science) at 
              Noida Institute of Engineering and Technology. My interests lie in data analysis, 
              machine learning fundamentals, and data-driven problem solving. I enjoy working 
              with data to extract insights and continuously learning new techniques to improve 
              analytical decision making.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
