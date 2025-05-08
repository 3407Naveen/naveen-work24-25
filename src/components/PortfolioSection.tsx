
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, FileCode, Layout, GitBranch } from 'lucide-react';

const PortfolioSection = () => {
  const upcomingProjects = [
    {
      icon: <Layout className="h-10 w-10 text-naveen-primary" />,
      title: "Personal Blog Platform",
      description: "A modern blog platform focused on AI topics and learning resources. Will feature a clean design with a focus on readability.",
      status: "Planning Phase",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      icon: <Code className="h-10 w-10 text-naveen-primary" />,
      title: "AI Learning Resource Hub",
      description: "A comprehensive website that aggregates learning resources, tutorials, and articles about AI development.",
      status: "Concept Phase",
      tags: ["JavaScript", "API Integration", "UI/UX"]
    },
    {
      icon: <GitBranch className="h-10 w-10 text-naveen-primary" />,
      title: "Algorithm Visualization Tool",
      description: "An interactive tool that visualizes common algorithms used in computer science and AI, helping students understand complex processes.",
      status: "Early Development",
      tags: ["Data Structures", "Algorithms", "Educational"]
    },
    {
      icon: <FileCode className="h-10 w-10 text-naveen-primary" />,
      title: "Learning Journey Documentation",
      description: "A documentation of my learning path in AI development, including code samples, challenges, and progress tracking.",
      status: "In Progress",
      tags: ["Java", "AI", "Learning"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-naveen-dark">
            My <span className="text-naveen-primary">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-naveen-primary mx-auto mb-6"></div>
          <p className="text-naveen-muted max-w-2xl mx-auto">
            Upcoming projects and works in progress as I continue my journey in software and AI development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden animate-slide-up">
              <CardHeader className="pb-4 flex flex-row items-center gap-4">
                <div className="bg-naveen-primary/10 p-3 rounded-lg">
                  {project.icon}
                </div>
                <div>
                  <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
                  <Badge variant="outline" className="mt-1 bg-naveen-secondary/10 text-naveen-secondary">
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-naveen-muted">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-gray-100">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
