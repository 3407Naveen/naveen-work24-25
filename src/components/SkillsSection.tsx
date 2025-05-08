
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Globe, Code, Database } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: "Frontend Web Development", progress: 75 },
    { name: "HTML/CSS", progress: 85 },
    { name: "JavaScript", progress: 70 },
    { name: "React", progress: 65 },
    { name: "Data Structures (Java)", progress: 60 },
    { name: "Algorithms", progress: 55 },
    { name: "Problem Solving", progress: 70 },
    { name: "UI/UX Principles", progress: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-naveen-dark">
            Skills & <span className="text-naveen-primary">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-naveen-primary mx-auto mb-6"></div>
          <p className="text-naveen-muted max-w-2xl mx-auto">
            A showcase of my technical abilities and areas of expertise as I continue to grow as an AI developer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 font-heading text-naveen-dark">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-naveen-dark">{skill.name}</span>
                    <span className="text-naveen-primary">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 font-heading text-naveen-dark">Core Competencies</h3>
            
            <div className="grid gap-8">
              <div className="flex">
                <div className="mr-4 bg-naveen-secondary/10 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-naveen-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-naveen-dark">Frontend Web Development</h4>
                  <p className="text-naveen-muted/80">
                    Creating responsive user interfaces with modern web technologies like HTML, CSS, and JavaScript. 
                    Focusing on building interactive and user-friendly websites.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-naveen-secondary/10 p-3 rounded-full">
                  <Code className="w-6 h-6 text-naveen-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-naveen-dark">Data Structures & Algorithms</h4>
                  <p className="text-naveen-muted/80">
                    Learning and implementing efficient algorithms and data structures using Java. 
                    Developing problem-solving skills crucial for software engineering and AI development.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-naveen-secondary/10 p-3 rounded-full">
                  <Database className="w-6 h-6 text-naveen-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-naveen-dark">Learning Path</h4>
                  <p className="text-naveen-muted/80">
                    Currently focusing on expanding knowledge in AI fundamentals, machine learning algorithms, 
                    and data science techniques to build a strong foundation for future AI development work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
