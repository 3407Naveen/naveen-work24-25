
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Users, MonitorSmartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-naveen-primary" />,
      title: "Web Design",
      description: "Offering web design services with a focus on clean, responsive, and user-friendly websites. Passionate about creating seamless user experiences.",
    },
    {
      icon: <MonitorSmartphone className="h-12 w-12 text-naveen-primary" />,
      title: "Responsive Development",
      description: "Creating websites that work flawlessly across all devices - from desktops to mobile phones, ensuring your content looks great everywhere.",
    },
    {
      icon: <Users className="h-12 w-12 text-naveen-primary" />,
      title: "UI/UX Consultation",
      description: "Providing guidance on user interface and experience design to help make your digital products more intuitive and user-friendly.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-naveen-dark">
            My <span className="text-naveen-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-naveen-primary mx-auto mb-6"></div>
          <p className="text-naveen-muted max-w-2xl mx-auto">
            Here are the services I can offer based on my current skills and expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg border-t-4 border-t-naveen-primary animate-fade-in">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-naveen-muted">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-naveen-primary text-naveen-muted">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
