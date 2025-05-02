import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Terminal, Cloud, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("frontend");
  const [hoverSkill, setHoverSkill] = useState<string | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const frontendSkills = [
    { name: "React", level: 90, color: "#61DAFB", icon: "⚛️", description: "Building modern, responsive UIs with React ecosystem" },
    { name: "Angular", level: 85, color: "#DD0031", icon: "🅰️", description: "Enterprise-grade applications with Angular" },
    { name: "JavaScript", level: 88, color: "#F7DF1E", icon: "📜", description: "Advanced JavaScript and modern ES6+ features" },
    { name: "TypeScript", level: 85, color: "#3178C6", icon: "📘", description: "Type-safe development with TypeScript" },
    { name: "HTML/CSS", level: 92, color: "#E34F26", icon: "🎨", description: "Semantic HTML and modern CSS techniques" },
    { name: "Tailwind CSS", level: 88, color: "#06B6D4", icon: "🎯", description: "Utility-first CSS framework for rapid development" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85, color: "#3C873A", icon: "🟢", description: "Server-side JavaScript with Node.js" },
    { name: "Express", level: 80, color: "#000000", icon: "⚡", description: "Fast, unopinionated web framework" },
    { name: "Python", level: 75, color: "#3776AB", icon: "🐍", description: "Python for backend and automation" },
    { name: "MongoDB", level: 80, color: "#47A248", icon: "🍃", description: "NoSQL database expertise" },
    { name: "SQL", level: 75, color: "#00758F", icon: "🗄️", description: "Relational database management" },
    { name: "GraphQL", level: 70, color: "#E10098", icon: "📊", description: "Modern API query language" },
  ];

  const devopsSkills = [
    { name: "Git", level: 88, color: "#F05032", icon: "📚", description: "Version control and collaboration" },
    { name: "Docker", level: 70, color: "#2496ED", icon: "🐳", description: "Containerization and deployment" },
    { name: "AWS", level: 65, color: "#FF9900", icon: "☁️", description: "Cloud infrastructure and services" },
    { name: "CI/CD", level: 75, color: "#40AF40", icon: "🔄", description: "Continuous Integration and Deployment" },
    { name: "Linux", level: 80, color: "#FCC624", icon: "🐧", description: "System administration and automation" },
    { name: "Kubernetes", level: 60, color: "#326CE5", icon: "⚓", description: "Container orchestration" },
  ];

  const skillsByCategory = {
    frontend: frontendSkills,
    backend: backendSkills,
    devops: devopsSkills
  };

  const categoryIcons = {
    frontend: <Code className="w-5 h-5" />,
    backend: <Database className="w-5 h-5" />,
    devops: <Terminal className="w-5 h-5" />
  };

  const categoryLabels = {
    frontend: "Frontend Development",
    backend: "Backend & Databases",
    devops: "DevOps & Infrastructure"
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/80 backdrop-blur-lg"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="floating-blob absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-accent1/20 filter blur-3xl"></div>
        <div className="floating-blob floating-delay absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent2/20 filter blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),rgba(30,64,175,0.05))]"></div>
      </div>

      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 reveal fade-in-up">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent1 to-accent2 mx-auto mb-6 reveal scale-in-animation"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal">
            Crafting digital experiences with cutting-edge technologies and modern development practices.
          </p>
        </div>

        {/* Interactive Category Switcher */}
        <div className="mb-12 flex justify-center gap-4 md:gap-8 reveal fade-in-up">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                activeCategory === key 
                  ? "bg-gradient-to-r from-accent1 to-accent2 text-white shadow-lg scale-105" 
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              {categoryIcons[key as keyof typeof categoryIcons]}
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsByCategory[activeCategory as keyof typeof skillsByCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative"
            >
              <div 
                className="glass-card p-6 rounded-xl h-full transition-all duration-300 hover:shadow-xl hover:shadow-accent1/20"
                onMouseEnter={() => setHoverSkill(skill.name)}
                onMouseLeave={() => setHoverSkill(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <span className="text-accent1 font-medium">{skill.level}%</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                  </motion.div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-accent1/5 to-accent2/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Ecosystem */}
        <div className="glass-card p-8 rounded-2xl reveal fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-br from-accent1/20 to-accent2/20 text-accent1">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold gradient-text">Development Tools & Ecosystem</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Git", "Docker", "AWS", "VSCode", "Cursor", "Postman", "Kafka", "Jenkins"].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="p-4 bg-secondary/50 hover:bg-secondary rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-accent1/20 to-accent2/20 rounded-lg">
                    <span className="text-sm font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
                      {tool.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-sm">{tool}</span>
                  <ArrowRight className="w-4 h-4 text-accent1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
