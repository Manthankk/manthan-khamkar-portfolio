import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  features: string[];
  category: string;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projectsData: Project[] = [
      {
        id: 1,
        title: "HomeConnect:HealthHub",
        description: "AI-powered platform for diagnosing skin conditions with Ayurvedic product marketplace",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        tags: ["Python", "Flask", "Angular", "SQL", "NodeJS", "TensorFlow", "OpenAI API"],
        demoLink: "#",
        githubLink: "#",
        features: [
          "AI-powered skin condition diagnosis using TensorFlow and OpenAI API",
          "Marketplace for Ayurvedic products with personalized recommendations",
          "Secure authentication and Razorpay payment integration",
          "Community space with articles, bootcamps, and live sessions"
        ],
        category: "ai"
      },
      {
        id: 2,
        title: "Placement Preparation Platform",
        description: "Comprehensive platform for technical preparation and automated interview feedback",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        tags: ["Angular", "ExpressJS", "MongoDB", "NodeJS", "Machine Learning"],
        demoLink: "#",
        githubLink: "#",
        features: [
          "Technical and non-technical aptitude practice modules",
          "Mock tests with interactive performance dashboards",
          "Online interview preparation with face and tone analysis",
          "Leaderboard features for competitive learning"
        ],
        category: "web"
      },
      {
        id: 3,
        title: "TOMATO: Food Delivery Platform",
        description: "Full-stack food delivery website with advanced filtering and payments",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        tags: ["MERN", "MongoDB", "Express", "React", "NodeJS", "Stripe", "Tailwind CSS"],
        demoLink: "#",
        githubLink: "#",
        features: [
          "Food delivery platform using MERN stack",
          "Advanced filtering options for cuisine, price range, and ratings",
          "Secure payment gateway integration with Stripe",
          "Responsive UI with Tailwind CSS"
        ],
        category: "web"
      }
    ];

    setProjects(projectsData);
    setFilteredProjects(projectsData);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === activeFilter);
      setFilteredProjects(filtered);
    }
  }, [activeFilter, projects]);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Dev" },
    { id: "ai", name: "AI/ML" }
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto reveal">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2 reveal">
            {categories.map(category => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-accent1 to-accent2"
                    : ""
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent1/20 reveal fade-in-up"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-foreground">Key Features</h4>
                  <ul className="list-none space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent1 shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-secondary/50 hover:bg-secondary font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent1 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">View Code</span>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent1 hover:text-accent2 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Box */}
        <div className="mt-12 reveal fade-in-up">
          <a
            href="https://github.com/Manthankk"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card block p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent1/20 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-accent1/20 to-accent2/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Github className="w-8 h-8 text-accent1" />
              </div>
              <h3 className="text-2xl font-bold mb-2 gradient-text">View All Projects</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Explore more of my work on GitHub, including open-source contributions and personal projects.
              </p>
              <div className="flex items-center gap-2 text-accent1 group-hover:text-accent2 transition-colors">
                <span className="font-medium">Visit GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
