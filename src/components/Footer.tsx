
import { Github, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">MK</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Building exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Manthankk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent1 dark:text-gray-400 dark:hover:text-white theme-transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/manthan-khamkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent1 dark:text-gray-400 dark:hover:text-white theme-transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent1 dark:text-gray-400 dark:hover:text-white theme-transition"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91-9607835610</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>manthankhamkar9@gmail.com</span>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Manthan Khamkar. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="mx-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition">
              Privacy Policy
            </a>
            <a href="#" className="mx-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white theme-transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
