
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, BarChart, Globe, Shield, Zap, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/80">
              We offer a comprehensive range of web development and design services to help your business succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Code className="h-6 w-6" />, 
                title: "Web Development", 
                description: "Custom websites and web applications built with modern technologies." 
              },
              { 
                icon: <Smartphone className="h-6 w-6" />, 
                title: "Mobile Apps", 
                description: "Native and cross-platform mobile applications for iOS and Android." 
              },
              { 
                icon: <Palette className="h-6 w-6" />, 
                title: "UI/UX Design", 
                description: "User-centered design that enhances usability and engagement." 
              },
              { 
                icon: <BarChart className="h-6 w-6" />, 
                title: "Digital Marketing", 
                description: "Strategies to increase visibility and drive conversions." 
              },
              { 
                icon: <Globe className="h-6 w-6" />, 
                title: "E-commerce Solutions", 
                description: "Online stores with secure payment processing and inventory management." 
              },
              { 
                icon: <Shield className="h-6 w-6" />, 
                title: "Web Security", 
                description: "Protection against threats and vulnerabilities for your web applications." 
              },
              { 
                icon: <Zap className="h-6 w-6" />, 
                title: "Performance Optimization", 
                description: "Speed up your website for better user experience and SEO." 
              },
              { 
                icon: <MessageSquare className="h-6 w-6" />, 
                title: "Consultation", 
                description: "Expert advice on technology choices and digital strategy." 
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-card rounded-xl p-6 card-hover border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Web Development</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our web development services focus on creating custom, high-performance websites and web applications that meet your specific business needs.
                </p>
                <p>
                  We use the latest technologies and frameworks to build responsive, scalable, and secure web solutions that provide an exceptional user experience.
                </p>
                <p>
                  Whether you need a simple corporate website, a complex e-commerce platform, or a custom web application, our team has the expertise to bring your vision to life.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-primary text-white">
                  Learn More
                </Button>
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
                  <img  alt="Web development process" className="w-full h-auto" src="https://images.unsplash.com/photo-1701698942908-48b9e22c8e12" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobile App Development</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our mobile app development services help you reach your customers on their preferred devices with native and cross-platform applications.
                </p>
                <p>
                  We create intuitive, feature-rich mobile apps for iOS and Android that provide a seamless user experience and help you achieve your business objectives.
                </p>
                <p>
                  From concept to deployment, our team handles every aspect of the mobile app development process, ensuring a high-quality product that meets your requirements.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-primary text-white">
                  Learn More
                </Button>
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
                  <img  alt="Mobile app development" className="w-full h-auto" src="https://images.unsplash.com/photo-1575195662509-43c05a6b0b1f" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UI/UX Design Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">UI/UX Design</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our UI/UX design services focus on creating intuitive, engaging user interfaces that enhance the user experience and drive conversions.
                </p>
                <p>
                  We combine aesthetic appeal with functional design to create interfaces that are not only beautiful but also easy to use and navigate.
                </p>
                <p>
                  Our design process includes user research, wireframing, prototyping, and usability testing to ensure that the final product meets user needs and business objectives.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-primary text-white">
                  Learn More
                </Button>
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
                  <img  alt="UI/UX design process" className="w-full h-auto" src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pricing Plans</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to suit businesses of all sizes and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$999",
                description: "Perfect for small businesses and startups",
                features: [
                  "Responsive Website Design",
                  "Up to 5 Pages",
                  "Basic SEO Optimization",
                  "Contact Form",
                  "Mobile-Friendly Design",
                  "3 Months Support"
                ]
              },
              {
                name: "Professional",
                price: "$2,499",
                description: "Ideal for growing businesses",
                features: [
                  "Everything in Basic",
                  "Up to 10 Pages",
                  "Advanced SEO Optimization",
                  "Content Management System",
                  "E-commerce Integration (up to 50 products)",
                  "Social Media Integration",
                  "6 Months Support"
                ],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "$4,999",
                description: "For established businesses with complex needs",
                features: [
                  "Everything in Professional",
                  "Unlimited Pages",
                  "Custom Web Application Development",
                  "Advanced E-commerce Features",
                  "Custom Integrations",
                  "Performance Optimization",
                  "12 Months Support"
                ]
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`rounded-xl p-8 border ${plan.highlighted ? 'border-primary shadow-lg relative bg-card' : 'bg-card'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-primary text-white' : ''}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your requirements and get a free consultation.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
