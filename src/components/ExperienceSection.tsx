
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
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

  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Ntech Global Solutions",
      location: "Mumbai, Maharashtra",
      period: "March 2024 - June 2024",
      description: [
        "Enhanced full-stack web applications using Angular.js, Node.js, and MongoDB, reducing API response time by 30%",
        "Consistently delivered projects ahead of schedule, meeting deadlines 90% of the time",
        "Helped develop the project's backend using Node.js, MongoDB, increasing scalability by about 10%"
      ],
      skills: ["Angular", "Node.js", "MongoDB", "API Development", "Full-Stack"]
    },
    {
      title: "Web Development Intern",
      company: "TechnoHacks",
      location: "Mumbai, Maharashtra",
      period: "June 2023 - July 2023",
      description: [
        "Gained hands-on experience in web development workflows, meeting project deadlines and adhering to practices",
        "Optimized MySQL and MongoDB queries, improving application performance by about 10-15%",
        "Contributed to the development of two responsive web applications, increasing usability by 30%"
      ],
      skills: ["Web Development", "MySQL", "MongoDB", "Responsive Design"]
    }
  ];

  const achievements = [
    "IDEATHON'24 Finalist, organized by RGIT CODECELL and E-CELL",
    "Hackathon Finalist (5+ times): Competed in national hackathons like KJ Somaiya, Thadomal, etc.",
    "Led a team as Technical Head, organizing tech workshops and managing projects to enhance collaboration."
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900/30"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto reveal">
            My journey in the tech industry and notable achievements along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <h3 className="text-xl font-semibold mb-6 reveal">Work Experience</h3>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent1 before:via-accent2 before:to-transparent before:bg-opacity-30">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10 reveal">
                  <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-gradient-to-br from-accent1 to-accent2 flex items-center justify-center z-10">
                    <div className="h-6 w-6 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-accent1"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-accent1">{exp.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{exp.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.company} • {exp.location}
                    </p>
                    
                    <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold mb-6 reveal">Achievements</h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm reveal">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-accent1 to-accent2 text-white text-sm font-bold mr-2 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm reveal">
                <h3 className="font-semibold mb-4">Technical Skills</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Programming Languages</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Python, JavaScript, Java, TypeScript</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Libraries/Frameworks</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React, Angular, Node.js, Express, Flask, Bootstrap, SpringBoot</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Developer Tools</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Git, GitHub, Docker, VS Code, Cursor, Postman, Kafka</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Databases</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">MySQL, MongoDB, SQLite, PostgreSQL</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Cloud</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AWS, Vercel, Netlify, Kubernetes, CI/CD Pipeline, Jenkins</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">AI/ML</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Machine Learning, Prompt Engineering, TensorFlow, Deep Learning (CNNs, RNNs), Langchain, PyTorch</p>
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

export default ExperienceSection;
