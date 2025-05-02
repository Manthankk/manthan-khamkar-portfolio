
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full reveal"
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
              
              <div className="p-4 flex-grow">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-gray-100 dark:bg-gray-700 font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white flex items-center gap-1 theme-transition"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent1 hover:text-accent2 flex items-center gap-1 theme-transition"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
