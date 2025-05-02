
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
      className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-accent1/30 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 -right-24 w-96 h-96 bg-accent2/30 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0)_50%)]"></div>
      </div>
      
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-gradient-to-r from-accent1/10 to-accent2/10 border border-accent1/20 rounded-full reveal">
              <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">Hello, I'm Manthan Khamkar</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight reveal">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                Crafting Digital
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent1 to-accent2">
                Experiences & Solutions
              </span>
            </h1>
            
            <div className="h-16 mb-8 reveal">
              <div className="flex flex-col animate-carousel">
                <div className="h-16 flex items-center text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                  Full Stack Developer
                </div>
                <div className="h-16 flex items-center text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                  Software Engineer
                </div>
                <div className="h-16 flex items-center text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300">
                  Problem Solver
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 reveal max-w-2xl">
              Creating innovative web applications with cutting-edge technologies. Specialized in building 
              scalable, accessible, and high-performance digital solutions that deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10 reveal">
              <Button size="lg" className="bg-gradient-to-r from-accent1 to-accent2 text-white hover:shadow-lg hover:shadow-accent1/25 transition-all">
                <a href="#projects" className="flex items-center gap-2">
                  Explore My Work
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:bg-accent1/5 transition-all">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 reveal">
              <a
                href="https://github.com/Manthankk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-accent1/10 dark:hover:bg-accent1/20 transition-all hover:scale-110"
              >
                <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/manthan-khamkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-accent2/10 dark:hover:bg-accent2/20 transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
              <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-accent1 dark:hover:text-accent1 transition-all"
              >
                <Download className="h-5 w-5" />
                <span className="font-medium">Resume</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative">
            {/* Decorative elements around profile picture */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent1/50 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-accent2/50 rounded-lg -z-10"></div>
            
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent1 to-accent2 p-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),rgba(255,255,255,0)_60%)]"></div>
              <div className="w-full h-full overflow-hidden bg-white dark:bg-gray-900 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Manthan Khamkar"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tech stack floating badges */}
              <div className="absolute -right-6 top-1/4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">React</span>
              </div>
              <div className="absolute -left-6 top-2/3 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">Node.js</span>
              </div>
              <div className="absolute -bottom-3 left-1/3 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-accent1 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
