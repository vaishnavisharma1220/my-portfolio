import { ExternalLink, BarChart3, Brain, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MonsteraLeaf } from './OrganicShapes';

const projects = [
  {
    icon: BarChart3,
    title: "Exploratory Data Analysis on Retail Sales Data",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    highlights: [
      "Data cleaning and preprocessing",
      "Trend and seasonal analysis",
      "Business-focused visual insights"
    ],
    color: "primary"
  },
  {
    icon: Brain,
    title: "Student Performance Prediction System",
    tech: ["Python", "Machine Learning"],
    highlights: [
      "Supervised learning models",
      "Feature selection and evaluation",
      "Performance metrics and analysis"
    ],
    color: "accent"
  },
  {
    icon: Users,
    title: "Customer Segmentation Using Clustering",
    tech: ["Python", "Unsupervised Learning"],
    highlights: [
      "K-Means clustering",
      "Behavioral segmentation",
      "Visual interpretation of clusters"
    ],
    color: "primary"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 md:py-32 bg-secondary/50 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-blob-tertiary/50 blob-shape animate-blob opacity-40" />
      <div className="absolute bottom-10 left-10 opacity-20">
        <MonsteraLeaf className="w-28 h-36 text-primary animate-leaf-sway" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-body font-medium mb-4">
            My Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A collection of data science projects showcasing my skills in analysis, visualization, and machine learning.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                project.color === 'accent' ? 'bg-accent/20' : 'bg-primary/10'
              }`}>
                <project.icon className={`w-8 h-8 ${
                  project.color === 'accent' ? 'text-accent' : 'text-primary'
                }`} />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-4 leading-tight">
                {project.title}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-body font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* View Project Link */}
              <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-accent p-0">
                View Details
                <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
