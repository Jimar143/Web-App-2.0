
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Palette, BarChart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HomePage = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Welcome to WebApp!",
      description: "Thanks for checking out our services.",
      duration: 3000,
    });
  };

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build Amazing Web Experiences
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/80 max-w-lg">
                Create stunning, responsive websites with our modern web application platform. Fast, secure, and beautiful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-indigo-600 hover:bg-white/90"
                  onClick={showToast}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-lg blur-2xl opacity-20"></div>
                <div className="relative glass-effect rounded-xl overflow-hidden shadow-2xl">
                  <img  alt="Modern web application dashboard interface" className="w-full h-auto" src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform provides everything you need to create exceptional web experiences.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: <Code className="h-6 w-6" />, 
                title: "Web Development", 
                description: "Build responsive websites with modern technologies and frameworks." 
              },
              { 
                icon: <Smartphone className="h-6 w-6" />, 
                title: "Mobile Apps", 
                description: "Create cross-platform mobile applications that work on any device." 
              },
              { 
                icon: <Palette className="h-6 w-6" />, 
                title: "UI/UX Design", 
                description: "Design beautiful user interfaces with intuitive user experiences." 
              },
              { 
                icon: <BarChart className="h-6 w-6" />, 
                title: "Analytics", 
                description: "Track user behavior and optimize your application performance." 
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-card rounded-xl p-6 card-hover border"
                variants={fadeInUp}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                quote: "Working with WebApp has transformed our online presence. The team delivered a stunning website that perfectly captures our brand."
              },
              {
                name: "Michael Chen",
                role: "Marketing Director, GrowthLabs",
                quote: "The mobile app developed by WebApp has significantly increased our customer engagement and sales. Highly recommended!"
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, DesignHub",
                quote: "As a design-focused company, we needed a website that showcased our aesthetic. WebApp delivered beyond our expectations."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-card rounded-xl p-8 border shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-white/80 max-w-lg">
                Join thousands of satisfied customers who have transformed their web presence with our platform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose WebApp?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with creative design to deliver exceptional web solutions that help your business grow.
              </p>
              
              <div className="space-y-4">
                {[
                  "Expert team of developers and designers",
                  "Cutting-edge technologies and frameworks",
                  "Responsive and mobile-first approach",
                  "Ongoing support and maintenance",
                  "Affordable pricing plans for businesses of all sizes"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur-2xl opacity-20"></div>
                <div className="relative glass-effect rounded-xl overflow-hidden shadow-xl">
                  <img  alt="Team of web developers working together" className="w-full h-auto" src="https://images.unsplash.com/photo-1524221629551-6dd14def5ffd" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
