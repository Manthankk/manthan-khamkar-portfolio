
import { useEffect, useRef } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            
            // Find and animate skill bars
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
      {
        threshold: 0.1,
      }
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

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.1),transparent_70%)]"></div>
        </div>
        
        <Header />
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </ThemeProvider>
  );
};

export default Index;
