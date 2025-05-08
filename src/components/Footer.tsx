
import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-naveen-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 font-heading">Naveen S</h3>
            <p className="text-gray-300">Aspiring AI Developer</p>
          </div>
          
          <div className="flex flex-col mb-6 md:mb-0 items-center md:items-end">
            <p className="mb-2 text-gray-300">Connect with me</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/naveen-s-003633314" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:contact@naveen.example" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-white/10 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Naveen S. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-naveen-primary p-3 rounded-full hover:bg-naveen-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
