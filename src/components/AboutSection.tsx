
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code, User, Layers, Award } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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

  const technologies = [
    { name: "React", level: 90 },
    { name: "Angular", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Express", level: 80 },
    { name: "SQL", level: 75 },
  ];
  
  const tools = [
    "Git", "Docker", "AWS", "VSCode", "Cursor", "Postman", "Kafka", "Jenkins"
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent1 to-accent2 mx-auto mb-6 reveal scale-in-animation"></div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Who am I section */}
          <div className="reveal fade-in-up">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-accent1/10 to-accent2/10 rounded-bl-[100px] -z-10"></div>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent1/20 to-accent2/20 text-accent1">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Who am I?</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a versatile Full Stack Developer and Computer Engineering student at MCT's Rajiv Gandhi Institute of Technology with a passion for building elegant, 
                high-performance applications. Specializing in React, Angular, and Node.js, I create seamless user experiences 
                backed by robust server architectures.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in tech is driven by problem-solving and innovation. Beyond coding, I'm an active hackathon participant 
                and technical community leader who thrives in collaborative environments. I combine technical expertise with creative 
                thinking to deliver solutions that exceed expectations.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="hover-card-effect">
                  <div className="p-4 rounded-xl border border-accent1/20 hover:border-accent1/40 transition-all">
                    <h4 className="text-lg font-semibold mb-2 text-accent1">HomeConnect:HealthHub</h4>
                    <p className="text-sm">AI-powered platform for diagnosing skin conditions with Ayurvedic product recommendations.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="badge-tech">Python</span>
                      <span className="badge-tech">Angular</span>
                      <span className="badge-tech">TensorFlow</span>
                    </div>
                  </div>
                </div>

                <div className="hover-card-effect">
                  <div className="p-4 rounded-xl border border-accent2/20 hover:border-accent2/40 transition-all">
                    <h4 className="text-lg font-semibold mb-2 text-accent2">Placement Preparation Platform</h4>
                    <p className="text-sm">Comprehensive platform for technical preparation and automated interview feedback.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="badge-tech">MERN</span>
                      <span className="badge-tech">Machine Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills section */}
          <div className="reveal fade-in-up delay-200">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-accent2/10 to-accent1/10 rounded-tr-[100px] -z-10"></div>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent2/20 to-accent1/20 text-accent2">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Technical Skills</h3>
              </div>

              <div className="skill-grid">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Core Technologies</h4>
                  <div className="space-y-6">
                    {technologies.slice(0, 4).map((tech, index) => (
                      <div key={tech.name} className="mb-2 skill-bar-container reveal-delay" style={{ animationDelay: `${index * 150}ms` }}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{tech.name}</span>
                          <span className="text-accent1">{tech.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-accent1 to-accent2 skill-bar"
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Database & Backend</h4>
                  <div className="space-y-6">
                    {technologies.slice(4).map((tech, index) => (
                      <div key={tech.name} className="mb-2 skill-bar-container reveal-delay" style={{ animationDelay: `${(index + 4) * 150}ms` }}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{tech.name}</span>
                          <span className="text-accent2">{tech.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-accent2 to-accent1 skill-bar"
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent1/10 to-accent2/10 text-accent1">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold text-lg">Tools & Ecosystem</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <div 
                      key={tool} 
                      className="tool-badge reveal-delay"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent2/10 to-accent1/10 text-accent2">
                    <Award className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold text-lg">Achievements</h4>
                </div>
                <ul className="space-y-3 ml-2">
                  <li className="flex items-start reveal-delay" style={{ animationDelay: `50ms` }}>
                    <div className="h-2 w-2 mt-2 mr-2 rounded-full bg-accent1"></div>
                    <span className="text-gray-600 dark:text-gray-300">IDEATHON'24 Finalist, organized by RGIT CODECELL and E-CELL</span>
                  </li>
                  <li className="flex items-start reveal-delay" style={{ animationDelay: `100ms` }}>
                    <div className="h-2 w-2 mt-2 mr-2 rounded-full bg-accent2"></div>
                    <span className="text-gray-600 dark:text-gray-300">Hackathon Finalist (5+ times) in national events</span>
                  </li>
                  <li className="flex items-start reveal-delay" style={{ animationDelay: `150ms` }}>
                    <div className="h-2 w-2 mt-2 mr-2 rounded-full bg-accent1"></div>
                    <span className="text-gray-600 dark:text-gray-300">Technical Head leading workshops and managing projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
