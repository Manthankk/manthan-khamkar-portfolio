
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Layers, GitBranch, Terminal, Cloud } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

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
            
            // Animate skill bars when in view
            if (entry.target.classList.contains("skill-bar-container")) {
              const skillBar = entry.target.querySelector(".skill-bar");
              if (skillBar) {
                // Cast to HTMLElement to access style property
                const skillBarElement = skillBar as HTMLElement;
                const width = skillBarElement.style.width;
                skillBarElement.style.setProperty('--width', width);
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    const skillBars = document.querySelectorAll(".skill-bar-container");
    skillBars.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      skillBars.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const frontendSkills = [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "Angular", level: 85, color: "#DD0031" },
    { name: "JavaScript", level: 88, color: "#F7DF1E" },
    { name: "TypeScript", level: 85, color: "#3178C6" },
    { name: "HTML/CSS", level: 92, color: "#E34F26" },
    { name: "Tailwind CSS", level: 88, color: "#06B6D4" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85, color: "#3C873A" },
    { name: "Express", level: 80, color: "#000000" },
    { name: "Python", level: 75, color: "#3776AB" },
    { name: "MongoDB", level: 80, color: "#47A248" },
    { name: "SQL", level: 75, color: "#00758F" },
    { name: "GraphQL", level: 70, color: "#E10098" },
  ];

  const devopsSkills = [
    { name: "Git", level: 88, color: "#F05032" },
    { name: "Docker", level: 70, color: "#2496ED" },
    { name: "AWS", level: 65, color: "#FF9900" },
    { name: "CI/CD", level: 75, color: "#40AF40" },
    { name: "Linux", level: 80, color: "#FCC624" },
    { name: "Kubernetes", level: 60, color: "#326CE5" },
  ];

  const tools = [
    "Git", "Docker", "AWS", "VSCode", "Cursor", "Postman", "Kafka", "Jenkins"
  ];

  const radarData = [
    { subject: 'Frontend', A: 90, fullMark: 100 },
    { subject: 'Backend', A: 85, fullMark: 100 },
    { subject: 'DevOps', A: 75, fullMark: 100 },
    { subject: 'Database', A: 80, fullMark: 100 },
    { subject: 'UI/UX', A: 70, fullMark: 100 },
    { subject: 'Testing', A: 78, fullMark: 100 },
  ];

  // Growth data for area chart
  const growthData = [
    { name: '2020', Frontend: 60, Backend: 50, DevOps: 40 },
    { name: '2021', Frontend: 70, Backend: 65, DevOps: 50 },
    { name: '2022', Frontend: 75, Backend: 70, DevOps: 60 },
    { name: '2023', Frontend: 85, Backend: 80, DevOps: 70 },
    { name: '2024', Frontend: 90, Backend: 85, DevOps: 75 },
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
    frontend: "Frontend",
    backend: "Backend & Databases",
    devops: "DevOps & Tools"
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent1 to-accent2 mx-auto mb-6 reveal scale-in-animation"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal">
            My expertise spans various technologies and tools, allowing me to build complete, efficient solutions.
          </p>
        </div>

        {/* Interactive Category Switcher */}
        <div className="mb-12 flex justify-center gap-4 md:gap-8 reveal fade-in-up">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Skill Bars */}
          <div className="glass-card p-8 rounded-2xl h-full reveal fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-8 gradient-text inline-flex items-center gap-2">
              {categoryIcons[activeCategory as keyof typeof categoryIcons]}
              <span>{categoryLabels[activeCategory as keyof typeof categoryLabels]} Skills</span>
            </h3>
            
            <div className="space-y-8">
              {skillsByCategory[activeCategory as keyof typeof skillsByCategory].map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="mb-2 skill-bar-container reveal-delay"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoverSkill(skill.name)}
                  onMouseLeave={() => setHoverSkill(null)}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium flex items-center gap-2">
                      {skill.name}
                    </span>
                    <span className="text-accent1">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                    <div
                      className={`h-full rounded-full skill-bar transition-all duration-1000 ${
                        hoverSkill === skill.name ? "animate-pulse" : ""
                      }`}
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Radar Chart */}
          <div className="glass-card p-8 rounded-2xl h-full reveal fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-bold mb-8 gradient-text flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              <span>Skill Distribution</span>
            </h3>
            
            <div className="h-[300px] w-full">
              <ChartContainer 
                config={{
                  Frontend: { theme: { light: '#8B5CF6', dark: '#8B5CF6' } },
                  Backend: { theme: { light: '#2563EB', dark: '#2563EB' } },
                  DevOps: { theme: { light: '#10B981', dark: '#10B981' } },
                  Database: { theme: { light: '#F59E0B', dark: '#F59E0B' } },
                  "UI/UX": { theme: { light: '#EC4899', dark: '#EC4899' } },
                  Testing: { theme: { light: '#6366F1', dark: '#6366F1' } }
                }}
              >
                <RadarChart outerRadius={90} width={500} height={300} data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.2)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "var(--foreground)", fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar 
                    name="Skills" 
                    dataKey="A" 
                    stroke="#8B5CF6" 
                    fill="#8B5CF6" 
                    fillOpacity={0.6} 
                    animationDuration={1500}
                  />
                  <Tooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ChartContainer>
            </div>
          </div>
        </div>
        
        {/* Growth Timeline Chart */}
        <div className="glass-card p-8 rounded-2xl mb-16 reveal fade-in-up" style={{ animationDelay: '600ms' }}>
          <h3 className="text-xl font-bold mb-8 gradient-text flex items-center gap-2">
            <Layers className="h-5 w-5" />
            <span>Skill Growth Timeline</span>
          </h3>
          
          <div className="h-[300px] w-full">
            <ChartContainer
              config={{
                Frontend: { theme: { light: '#8B5CF6', dark: '#8B5CF6' } },
                Backend: { theme: { light: '#2563EB', dark: '#2563EB' } },
                DevOps: { theme: { light: '#10B981', dark: '#10B981' } }
              }}
            >
              <AreaChart
                data={growthData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" tick={{ fill: "var(--foreground)" }} />
                <YAxis tick={{ fill: "var(--foreground)" }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area 
                  type="monotone" 
                  dataKey="Frontend" 
                  stackId="1"
                  stroke="#8B5CF6" 
                  fill="#8B5CF6" 
                  fillOpacity={0.6}
                  animationDuration={1500}
                />
                <Area 
                  type="monotone" 
                  dataKey="Backend" 
                  stackId="1"
                  stroke="#2563EB" 
                  fill="#2563EB" 
                  fillOpacity={0.6}
                  animationDuration={1500}
                  animationBegin={300}
                />
                <Area 
                  type="monotone" 
                  dataKey="DevOps" 
                  stackId="1"
                  stroke="#10B981" 
                  fill="#10B981" 
                  fillOpacity={0.6}
                  animationDuration={1500}
                  animationBegin={600}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
        
        {/* Tools & Ecosystem */}
        <div className="glass-card p-8 rounded-2xl reveal fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-accent1/20 to-accent2/20 text-accent1">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold gradient-text">Tools & Ecosystem</h3>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {tools.map((tool, index) => (
              <div 
                key={tool} 
                className="group relative p-6 bg-secondary/50 hover:bg-secondary rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg reveal-delay flex flex-col items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-gradient-to-br from-accent1/20 to-accent2/20 rounded-full">
                  <span className="text-xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
                    {tool.charAt(0)}
                  </span>
                </div>
                <span className="font-medium">{tool}</span>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent1 to-accent2 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
