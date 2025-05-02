
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
      className="py-24 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent1/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent2/20 filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 reveal">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent1 to-accent2 mx-auto mb-6 reveal"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="p-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a versatile Full Stack Developer and Computer Engineering student with a passion for building elegant, 
                high-performance applications. Specializing in React, Angular, and Node.js, I create seamless user experiences 
                backed by robust server architectures.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in tech is driven by problem-solving and innovation. Beyond coding, I'm an active hackathon participant 
                and technical community leader who thrives in collaborative environments. I combine technical expertise with creative 
                thinking to deliver solutions that exceed expectations.
              </p>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Education</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-accent1">
                    <h5 className="font-medium">Bachelor of Engineering in Computer Engineering</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">MCT's Rajiv Gandhi Institute of Technology</p>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>Mumbai, Maharashtra</span>
                      <span>Aug 2021 - May 2025</span>
                    </div>
                    <p className="text-sm font-medium mt-1">CGPA: 7.6</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-accent2">
                    <h5 className="font-medium">HSC Science (PCM)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Disha Junior College</p>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>Wai, Maharashtra</span>
                      <span>June 2020 - April 2021</span>
                    </div>
                    <p className="text-sm font-medium mt-1">Percentage: 88.33%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50 mb-8 reveal">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Core Technologies</h4>
                  <div className="space-y-6">
                    {technologies.slice(0, 4).map((tech) => (
                      <div key={tech.name} className="mb-2">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{tech.name}</span>
                          <span className="text-accent1">{tech.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-accent1 to-accent2"
                            style={{ width: `${tech.level}%`, transition: 'width 1.5s ease-in-out' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Database & Backend</h4>
                  <div className="space-y-6">
                    {technologies.slice(4).map((tech) => (
                      <div key={tech.name} className="mb-2">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{tech.name}</span>
                          <span className="text-accent2">{tech.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-accent2 to-accent1"
                            style={{ width: `${tech.level}%`, transition: 'width 1.5s ease-in-out' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50 reveal">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Tools & Ecosystem</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div 
                    key={tool} 
                    className="px-4 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-full border border-gray-200 dark:border-gray-600 text-sm font-medium shadow-sm hover:shadow-md transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-accent1/10 hover:to-accent2/10"
                  >
                    {tool}
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-lg">Major Projects</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/40 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all hover:-translate-y-1">
                    <h5 className="font-semibold text-accent1">HomeConnect:HealthHub</h5>
                    <p className="text-sm mt-2">AI-powered platform for diagnosing skin conditions with Ayurvedic product recommendations.</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-accent1/10 text-accent1 rounded">Python</span>
                      <span className="text-xs px-2 py-1 bg-accent2/10 text-accent2 rounded">Angular</span>
                      <span className="text-xs px-2 py-1 bg-accent1/10 text-accent1 rounded">TensorFlow</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/40 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all hover:-translate-y-1">
                    <h5 className="font-semibold text-accent2">Placement Preparation Platform</h5>
                    <p className="text-sm mt-2">Comprehensive platform for technical preparation and automated interview feedback.</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-accent2/10 text-accent2 rounded">MERN</span>
                      <span className="text-xs px-2 py-1 bg-accent1/10 text-accent1 rounded">Machine Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
