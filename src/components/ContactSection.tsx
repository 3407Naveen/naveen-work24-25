
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo purposes, just showing a toast notification
    toast({
      title: "Message Received!",
      description: "Thank you for contacting me. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-naveen-dark">
            Get In <span className="text-naveen-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-naveen-primary mx-auto mb-6"></div>
          <p className="text-naveen-muted max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries, potential collaborations, or just to say hello!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 bg-naveen-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-naveen-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-naveen-dark">Email</h4>
                    <p className="text-naveen-muted">contact@naveen.example</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 bg-naveen-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-naveen-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-naveen-dark">Phone</h4>
                    <p className="text-naveen-muted">+91 XXX XXX XXXX</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 bg-naveen-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-naveen-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-naveen-dark">Location</h4>
                    <p className="text-naveen-muted">Chennai, Tamil Nadu, India</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 bg-naveen-primary/10 p-3 rounded-full">
                    <Linkedin className="w-6 h-6 text-naveen-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-naveen-dark">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/naveen-s-003633314" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-naveen-primary hover:underline flex items-center"
                    >
                      Connect with me <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:col-span-2 animate-slide-up">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 font-heading text-naveen-dark">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required
                      placeholder="Your message here..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button type="submit" className="bg-naveen-primary hover:bg-naveen-primary/90 w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
