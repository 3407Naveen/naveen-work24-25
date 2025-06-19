import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema using zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

// EmailJS configuration constants
const SERVICE_ID = 'xxxxxxxxxxxxxxxxx';
const TEMPLATE_ID = 'xxxxxxxxxxxxxxxxx';
const PUBLIC_KEY = 'xxxxxxxxxxxxxxxxx';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize react-hook-form with zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
         
          message:`from_name: ${values.name},
                  from_email: ${values.email},
                  subject: ${values.subject}
                  Message: ${values.message}`,
        },
        PUBLIC_KEY
      );

      // Debug: log the result
      console.log("EmailJS result:", result);

      if (result.status === 200 || result.text === "OK") {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting me. I'll get back to you soon!"
        });
        form.reset();
      } else {
        throw new Error("EmailJS did not return success status.");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Message Failed to Send",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <p className="text-naveen-muted">3407naveen@gmail.com</p>
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
                    <p className="text-naveen-muted">+91 6383785126</p>
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
                    <a href="https://www.linkedin.com/in/naveen-s-003633314" target="_blank" rel="noopener noreferrer" className="text-naveen-primary hover:underline flex items-center">
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" ref={formRef}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can I help you?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message here..." className="min-h-32" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-naveen-primary hover:bg-naveen-primary/90 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
