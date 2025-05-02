
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
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

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_110%)]" />
      </div>
      
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="lg:order-1 order-2">
          <p className="text-primary font-medium mb-2 reveal">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 reveal">
            Manthan Khamkar
          </h1>
          <div className="relative h-16 overflow-hidden reveal">
            <div className="absolute animate-pulse duration-100 top-0">
              <div className="h-16 flex items-center text-2xl md:text-3xl font-semibold gradient-text">
                Full Stack Developer
              </div>
              <div className="h-16 flex items-center text-2xl md:text-3xl font-semibold gradient-text">
                Software Engineer
              </div>
              <div className="h-16 flex items-center text-2xl md:text-3xl font-semibold gradient-text">
                Problem Solver
              </div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 my-6 max-w-lg reveal">
            Building elegant, responsive web applications and solving complex problems with cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8 reveal">
            <Button className="bg-primary hover:bg-primary/90">
              <a href="#projects" className="flex items-center">
                View Projects
              </a>
            </Button>
            <Button variant="outline" className="hover-gradient">
              <a href="#contact" className="flex items-center">
                Contact Me
              </a>
            </Button>
          </div>
          
          <div className="flex space-x-4 reveal">
            <a
              href="https://github.com/Manthankk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/manthan-khamkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition flex items-center gap-1"
            >
              <Download className="h-5 w-5" />
              <span className="font-medium">Download Resume</span>
            </a>
          </div>
        </div>
        
        <div className="lg:order-2 order-1 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent1 to-accent2 blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent1 to-accent2 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Manthan Khamkar"
                  className="w-full h-full object-cover scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
