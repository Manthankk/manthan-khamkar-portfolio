
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BlogSection = () => {
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

  const blogs = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to design and implement high-performance RESTful APIs using Node.js and Express framework.",
      category: "Backend Development",
      readTime: "8 min read",
      date: "May 10, 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      id: 2,
      title: "Optimizing React Applications for Performance",
      excerpt: "Explore techniques and best practices to improve the performance of your React applications.",
      category: "Frontend Development",
      readTime: "6 min read",
      date: "Apr 25, 2025",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 3,
      title: "Getting Started with Machine Learning in Python",
      excerpt: "A beginner-friendly guide to implementing machine learning algorithms using Python and popular libraries.",
      category: "Machine Learning",
      readTime: "10 min read",
      date: "Apr 12, 2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="py-20"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            My <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto reveal">
            Technical articles and insights on various topics in software development, machine learning, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300 reveal">
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-accent1 hover:bg-accent1">
                  {blog.category}
                </Badge>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <h3 className="font-bold text-lg mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <Button variant="link" className="p-0 text-accent1 hover:text-accent2">
                    Read More
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 reveal">
          <Button className="bg-gradient-to-r from-accent1 to-accent2 text-white">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
