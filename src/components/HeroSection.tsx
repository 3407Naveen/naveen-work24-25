
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-b from-naveen-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/1736ca25-1e59-4190-8023-caf9a7eb0840.png" 
                alt="Naveen S" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-naveen-dark font-heading">
              Hi, I'm <span className="text-naveen-primary">Naveen S</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-naveen-muted font-medium mb-6">
              Aspiring AI Developer
            </h2>
            <p className="text-lg mb-8 text-naveen-dark/80 max-w-lg">
              I am passionate about learning real-world technologies to excel in AI development. 
              Currently exploring the fascinating intersection of artificial intelligence and software development.
            </p>
            <div className="flex space-x-4">
              <Button asChild className="bg-naveen-primary hover:bg-naveen-primary/90">
                <a href="#contact">
                  Get in Touch <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild className="border-naveen-primary text-naveen-primary hover:bg-naveen-primary/10">
                <a href="#about">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
