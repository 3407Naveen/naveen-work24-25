import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  FileText,
  Briefcase,
  Database,
  BarChart
} from 'lucide-react';

const SkillsSection = () => {
  return (
    
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-naveen-dark">
            My <span className="text-naveen-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-naveen-primary mx-auto mb-6"></div>
          <p className="text-naveen-muted max-w-2xl mx-auto">
            Here are the technologies and skills I've been focusing on during my journey as an aspiring AI developer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-naveen-primary/10 p-3 rounded-full mr-4">
                  <Code className="w-6 h-6 text-naveen-primary" />
                </div>
                <h3 className="text-xl font-bold text-naveen-dark">Frontend Development</h3>
              </div>
              <ul className="space-y-2 text-naveen-muted">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  HTML & CSS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  Responsive Design
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Programming */}
          <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-naveen-primary/10 p-3 rounded-full mr-4">
                  <FileText className="w-6 h-6 text-naveen-primary" />
                </div>
                <h3 className="text-xl font-bold text-naveen-dark">Programming</h3>
              </div>
              <ul className="space-y-2 text-naveen-muted">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  Java
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  Data Structures
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  Algorithms
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* AI Learning */}
          <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-naveen-primary/10 p-3 rounded-full mr-4">
                  <Briefcase className="w-6 h-6 text-naveen-primary" />
                </div>
                <h3 className="text-xl font-bold text-naveen-dark">AI Learning</h3>
              </div>
              <p className="text-naveen-muted/80">
                Currently focusing on expanding knowledge in AI fundamentals, machine learning algorithms, 
                and data science techniques to build a strong foundation for future AI development work. Public key: B23BlF0OHyYE8e7Xd
              </p>
            </CardContent>
          </Card>

          {/* Backend Development */}
          <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-naveen-primary/10 p-3 rounded-full mr-4">
                  <Database className="w-6 h-6 text-naveen-primary" />
                </div>
                <h3 className="text-xl font-bold text-naveen-dark">Backend Development</h3>
              </div>
              <ul className="space-y-2 text-naveen-muted">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  Node.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  Express.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  RESTful APIs
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Analysis */}
          <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-naveen-primary/10 p-3 rounded-full mr-4">
                  <BarChart className="w-6 h-6 text-naveen-primary" />
                </div>
                <h3 className="text-xl font-bold text-naveen-dark">Data Analysis</h3>
              </div>
              <ul className="space-y-2 text-naveen-muted">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  Pandas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-naveen-primary rounded-full mr-2"></span>
                  NumPy
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
