
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Zap, Heart, Briefcase } from 'lucide-react';

const AboutPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/80">
              We're a team of passionate developers, designers, and digital strategists dedicated to creating exceptional web experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, WebApp began with a simple mission: to make beautiful, functional web applications accessible to businesses of all sizes.
                </p>
                <p>
                  What started as a small team of three developers has grown into a full-service digital agency with experts in development, design, user experience, and digital marketing.
                </p>
                <p>
                  Over the years, we've helped hundreds of clients transform their online presence and achieve their business goals through innovative web solutions.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible on the web, embracing new technologies and approaches to deliver exceptional results for our clients.
                </p>
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
                  <img  alt="Company office with team members" className="w-full h-auto" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and help us deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="h-6 w-6" />, 
                title: "Innovation", 
                description: "We embrace new technologies and approaches to solve complex problems." 
              },
              { 
                icon: <Award className="h-6 w-6" />, 
                title: "Excellence", 
                description: "We strive for excellence in everything we do, from code quality to design." 
              },
              { 
                icon: <Heart className="h-6 w-6" />, 
                title: "Passion", 
                description: "We're passionate about creating digital experiences that delight users." 
              },
              { 
                icon: <Users className="h-6 w-6" />, 
                title: "Collaboration", 
                description: "We work closely with our clients to ensure their vision becomes reality." 
              },
              { 
                icon: <Clock className="h-6 w-6" />, 
                title: "Reliability", 
                description: "We deliver on time and on budget, with no surprises along the way." 
              },
              { 
                icon: <Briefcase className="h-6 w-6" />, 
                title: "Integrity", 
                description: "We operate with honesty and transparency in all our business dealings." 
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-card rounded-xl p-6 card-hover border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our talented team of experts is dedicated to bringing your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Founder & CEO",
                bio: "With over 15 years of experience in web development, Alex leads our team with vision and expertise."
              },
              {
                name: "Jessica Chen",
                role: "Lead Designer",
                bio: "Jessica brings creativity and user-centered design principles to every project she touches."
              },
              {
                name: "David Kim",
                role: "Senior Developer",
                bio: "David's technical expertise ensures our applications are robust, scalable, and performant."
              },
              {
                name: "Sophia Patel",
                role: "Project Manager",
                bio: "Sophia keeps our projects on track, ensuring timely delivery and clear communication."
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-card rounded-xl overflow-hidden border shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-64 bg-muted">
                  <img  alt={`${member.name}, ${member.role} at WebApp`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524221629551-6dd14def5ffd" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "150+", label: "Happy Clients" },
              { number: "15+", label: "Team Members" },
              { number: "10+", label: "Years of Experience" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
