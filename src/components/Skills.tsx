import { Code2, Database, Calculator, Cpu, Wrench } from 'lucide-react';
import { LeafDecoration } from './OrganicShapes';

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "C Programming", "JavaScript (Basic)"],
    color: "primary"
  },
  {
    icon: Database,
    title: "Data Science",
    skills: ["Data Cleaning", "Exploratory Data Analysis", "Feature Engineering", "Data Visualization"],
    color: "accent"
  },
  {
    icon: Calculator,
    title: "Statistics & Math",
    skills: ["Descriptive Statistics", "Probability", "Correlation & Regression", "Linear Algebra"],
    color: "primary"
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Bias-Variance Tradeoff"],
    color: "accent"
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Git", "GitHub", "Jupyter Notebook", "VS Code"],
    color: "primary"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 opacity-15">
        <LeafDecoration className="w-20 h-28 text-accent animate-leaf-sway" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-10">
        <LeafDecoration className="w-28 h-36 text-primary animate-leaf-sway" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-body font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, machine learning, and software development.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                  category.color === 'accent' ? 'bg-accent/15' : 'bg-primary/10'
                }`}>
                  <category.icon className={`w-6 h-6 ${
                    category.color === 'accent' ? 'text-accent' : 'text-primary'
                  }`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-body hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
