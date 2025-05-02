
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
      className="py-20 bg-gray-50 dark:bg-gray-900/30"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto reveal">
            I'm a full-stack developer and computer engineering student with a passion for building elegant, responsive applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 reveal">
              <h3 className="text-xl font-semibold mb-4">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a Computer Engineering student at MCT's Rajiv Gandhi Institute of Technology in Mumbai, 
                graduating in May 2025 with a CGPA of 7.6. My journey in tech started with a strong 
                foundation in Science, scoring 88.33% in HSC.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                As a passionate developer, I specialize in full-stack web development, 
                leveraging technologies like MERN stack, Angular, and Python. I enjoy solving 
                complex problems and building applications that provide real value to users.
              </p>
            </div>

            <div className="reveal">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium">Bachelor of Engineering in Computer Engineering</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">MCT's Rajiv Gandhi Institute of Technology</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Mumbai, Maharashtra</span>
                    <span>Aug 2021 - May 2025</span>
                  </div>
                  <p className="text-sm font-medium mt-1">CGPA: 7.6</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium">HSC Science (PCM)</h4>
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

          <div>
            <div className="mb-8 reveal">
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {technologies.map((tech) => (
                  <div key={tech.name} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{tech.name}</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-accent1 to-accent2 h-2 rounded-full"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Card key={tool} className="bg-white dark:bg-gray-800 border-0 shadow-sm">
                    <CardContent className="p-2">
                      <span className="text-sm font-medium">{tool}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
