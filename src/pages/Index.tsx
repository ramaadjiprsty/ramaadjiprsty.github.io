
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Code, User, Calendar, Book, FileText } from "lucide-react";
import { images } from '@/lib/assets';

const Index = () => {
  const skills = [
    'Kotlin', 'Javascript', 'Typescript', 'Android Development', 'Jetpack Compose', 'Python', 'TensorFlow', 
    'Machine Learning', 'Deep Learning', 'Firebase', 'Git',
    'SQL', 'MVVM', 'Clean Architecture', 'Docker', 'CI/CD'
  ];

  const techStack = [
    { name: 'Android Studio', category: 'IDE', image: images.androidStudio },
    { name: 'Kotlin', category: 'Language', image: images.kotlin },
    { name: 'Python', category: 'Language', image:images.python },
    { name: 'Typescript', category: 'Language', image: images.typescript },
    { name: 'TensorFlow', category: 'AI/ML', image: images.tensorflow },
    { name: 'Git', category: 'Version Control', image: images.git },
    { name: 'React Native', category: 'Framework', image: images.reactNative },
    { name: 'Docker', category: 'Container', image: images.docker },
  ];

  const projects = [
    {
      title: "E-Media DPR RI",
      description: "Official Android app for accessing real-time news, legislative information, and DPR RI activities with a modern interface.",
      tech: ["Javascript", "React Native", 'Expo', "Nativewind"],
      image: images.emedia,
      url: "https://play.google.com/store/apps/details?id=com.emedia.dprri"
    },
    {
      title: "Sebatik",
      description: "An Android app integrated with a deployed machine learning model via REST API to classify various traditional Indonesian batik patterns. Users can take or upload photos and get instant batik type predictions along with cultural insights.",
      tech: ["Kotlin", "Room Database", "Material Design", "Firebase", "REST API", "Retrofit", "MVVM Architecture"],
      image: images.sebatik,
      url: "https://github.com/Sebatik/Sebatik-app"
    },
    {
      title: "GitFinder",
      description: "Android app that allows users to search for GitHub profiles by username using the GitHub API, displaying detailed user information and repositories in a clean and responsive UI.",
      tech: ["Kotlin", "Retrofit", "Room Database", "Coroutines"],
      image: images.gitfinder,
      url: "https://github.com/ramaadjiprsty/GitFinder"
    },
  ];

  const certificates = [
    {
      title: "Dev Certified for Android",
      issuer: "dev.id",
      date: "2025",
      type: "Course",
      url: "https://dev.id/certificate/verify/GE0NJXZV41"
    },
    {
      title: "Building Machine Learning Systems",
      issuer: "Dicoding",
      date: "2025",
      type: "Course",
      url: "https://www.dicoding.com/certificates/53XED6K8KPRN"
    },
    {
      title: "Deep Learning Fundamentals",
      issuer: "Dicoding",
      date: "2025",
      type: "Course",
      url: "https://www.dicoding.com/certificates/72ZD56Y1VZYW"
    },
    {
      title: "Learning the Application of Data Science",
      issuer: "Dicoding",
      date: "2025",
      type: "Course",
      url: "https://www.dicoding.com/certificates/53XED8YWVPRN"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Network Academy",
      date: "2025",
      type: "Course",
      url: "https://www.netacad.com/certificates?issuanceId=18447277-efb1-4c0b-a7ea-9f3b1be005c0"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Network Academy",
      date: "2025",
      type: "Course",
      url: "https://www.netacad.com/certificates?issuanceId=c5dc72cd-51d8-403f-942d-574f5fd6a578"
    },
    {
      title: "Expert Android Developer",
      issuer: "Dicoding",
      date: "2024",
      type: "Course",
      url: "https://www.dicoding.com/certificates/0LZ06896RZ65"
    },
    {
      title: "Junior Web Developer",
      issuer: "Digital Talent Scholarship",
      date: "2022",
      type: "Course"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Informatics Engineering",
      institution: "Indraprasta PGRI University",
      year: "2021 - 2025",
      gpa: " GPA: 3.71/4.00"
    },
    {
      degree: "AI Engineer Cohort",
      institution: "Laskar AI",
      year: "Feb 2025 - July 2025",
    },
    {
      degree: "Mobile Development Cohort",
      institution: "Bangkit Academy led by Google, Tokopedia, Gojek and Traveloka",
      year: "Feb 2024 - July 2024",
    },
    {
      degree: "Junior Web Developer",
      institution: "Digital Talent Scholarship",
      year: "Jun 2022 - Sep 2022",
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
              src= {images.profile}
              alt="Profile" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-neon-blue glow-effect"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">Rama Adji Prasetyo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up">
            Android Developer | AI/ML Enthusiast
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
                  <p className="text-sm text-gray-400">{edu.gpa}</p>
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
              <Card key={index} className="tech-card group cursor-pointer" onClick={() => window.open(project.url, "_blank")}>
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
              <Card key={index} className="tech-card cursor-pointer" onClick={() => window.open(cert.url, "_blank")}>
                <CardContent className="p-6 text-center">
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
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {tech.image ? (
                      <img src={tech.image} alt={tech.name} className="w-8 h-8 object-contain" />
                    ) : (
                      tech.name[0]
                    )}
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
              <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black" onClick={() => window.open("https://www.linkedin.com/in/ramaadjiprsty/", "_blank")}>
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black" onClick={() => window.open("https://github.com/ramaadjiprsty", "_blank")}>
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
              © 2025 Rama Adji Prasetyo. All rights reserved.
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
