
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Code, User, Calendar, Book, FileText } from "lucide-react";

const Index = () => {
  const skills = [
    'Kotlin', 'Android Development', 'Jetpack Compose', 'Python', 'TensorFlow', 
    'PyTorch', 'Machine Learning', 'Deep Learning', 'Firebase', 'Git',
    'SQL', 'REST APIs', 'MVVM', 'Clean Architecture'
  ];

  const techStack = [
    { name: 'Android Studio', category: 'IDE' },
    { name: 'Kotlin', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PyTorch', category: 'AI/ML' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Figma', category: 'Design' }
  ];

  const projects = [
    {
      title: "Smart Health Tracker",
      description: "Android app with AI-powered health recommendations using machine learning algorithms",
      tech: ["Kotlin", "TensorFlow Lite", "Firebase", "Jetpack Compose"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot using NLP and deep learning for customer service automation",
      tech: ["Python", "PyTorch", "FastAPI", "Transformer Models"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
    },
    {
      title: "Budget Management App",
      description: "Personal finance Android application with expense tracking and analytics",
      tech: ["Kotlin", "Room Database", "Material Design", "Charts"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    }
  ];

  const certificates = [
    {
      title: "Android Developer Certification",
      issuer: "Google",
      date: "2024",
      type: "Professional"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2023",
      type: "Course"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2024",
      type: "Professional"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2023",
      type: "Course"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Informatics Engineering",
      institution: "Indraprasta PGRI University",
      year: "2021 - 2025",
      gpa: "3.71/4.00"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">Portfolio</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-neon-blue transition-colors">About</a>
            <a href="#projects" className="hover:text-neon-blue transition-colors">Projects</a>
            <a href="#skills" className="hover:text-neon-blue transition-colors">Skills</a>
            <a href="#contact" className="hover:text-neon-blue transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-black to-neon-purple/10"></div>
        <div className="container mx-auto px-6 text-center z-10">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=200&fit=crop&crop=face" 
              alt="Profile" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-neon-blue glow-effect"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">Rama Adji Prasetyo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up">
            Android Developer | AI Engineer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Fresh graduate passionate about creating innovative mobile applications and AI solutions. 
            Combining cutting-edge technology with user-centered design to build the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity px-8 py-3">
              <FileText className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black px-8 py-3">
              <Code className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="tech-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-neon-blue mr-3" />
                  <h3 className="text-2xl font-semibold">Background</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  As a fresh graduate in Informatics Engineering, I'm passionate about leveraging technology to solve real-world problems. 
                  My journey combines the precision of mobile development with the innovation of artificial intelligence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in Android development using modern tools like Kotlin and Jetpack Compose, while also exploring 
                  the fascinating world of AI and machine learning. My goal is to create intelligent, user-friendly applications 
                  that make a positive impact on people's lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Education</h2>
          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="tech-card mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center mb-2">
                      <Book className="w-5 h-5 text-neon-green mr-3" />
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    </div>
                    <Badge variant="outline" className="border-neon-green text-neon-green">
                      {edu.year}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-400">GPA: {edu.gpa}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="tech-card group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="tech-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{cert.issuer}</p>
                  <Badge variant="outline" className="border-neon-purple text-neon-purple">
                    {cert.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <Card key={index} className="tech-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, exciting projects, or just having a chat about technology. 
              Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:opacity-90 transition-opacity">
                <Mail className="w-4 h-4 mr-2" />
                ramaadjiprsty@gmail.com
              </Button>
              <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Alex Johnson. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">About</a>
              <a href="#projects" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
