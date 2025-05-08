
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-naveen-dark">
            About <span className="text-naveen-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-naveen-primary mx-auto mb-6"></div>
          <p className="text-naveen-muted max-w-2xl mx-auto">
            Get to know more about me, my educational background, and my aspirations as an AI developer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-4 font-heading text-naveen-dark">
              My Journey
            </h3>
            <p className="mb-4 text-naveen-dark/80">
              I am an aspiring AI developer with a strong foundation in programming and a passion for learning new technologies. I believe in continuous growth and am dedicated to mastering the skills needed to excel in the field of artificial intelligence.
            </p>
            <p className="mb-4 text-naveen-dark/80">
              Currently pursuing my BTech in Artificial Intelligence and Data Science from New Prince Shri Bhavani College of Engineering and Technology (graduating in 2028), I am eager to apply my theoretical knowledge in real-world scenarios.
            </p>
            <p className="text-naveen-dark/80">
              I am actively seeking internships with top private sector companies to showcase my skills and gain valuable industry experience. I'm enthusiastic about contributing to innovative AI solutions while continuously expanding my knowledge.
            </p>
          </div>
          
          <div className="grid gap-6 animate-fade-in">
            <Card>
              <CardContent className="p-6 flex">
                <div className="mr-4 bg-naveen-primary/10 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-naveen-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-naveen-dark">Education</h4>
                  <p className="text-naveen-muted">BTech in Artificial Intelligence and Data Science</p>
                  <p className="text-naveen-muted">New Prince Shri Bhavani College of Engineering and Technology</p>
                  <p className="text-sm text-naveen-muted/70">Class of 2028</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex">
                <div className="mr-4 bg-naveen-primary/10 p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-naveen-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-naveen-dark">Experience</h4>
                  <p className="text-naveen-muted">Seeking internships to gain industry experience</p>
                  <p className="text-naveen-muted">Focused on opportunities with top private sector companies</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex">
                <div className="mr-4 bg-naveen-primary/10 p-3 rounded-full">
                  <Code className="w-6 h-6 text-naveen-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-naveen-dark">Learning Path</h4>
                  <p className="text-naveen-muted">Self-driven approach to mastering AI technologies</p>
                  <p className="text-naveen-muted">Actively building practical skills through projects and courses</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
