import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Phone, MapPin, Code, Database, Globe, Smartphone, ChevronDown, Menu, X, Award, Users, Coffee, ArrowRight, Download, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Tailwind CSS', 'SASS', 'WebGL'],
    backend: ['Node.js', 'Python', 'Java', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
    cloud: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Microservices', 'Serverless', 'DevOps']
  };

  const projects = [
    {
      title: 'Enterprise SaaS Platform',
      description: 'Built a scalable multi-tenant SaaS application serving 10,000+ users with real-time analytics, role-based access control, and advanced reporting capabilities.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      github: '#',
      demo: '#',
      status: 'Live in Production',
      metrics: '10K+ Users',
      gradient: 'from-emerald-400 via-cyan-400 to-blue-500'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Developed an intelligent dashboard using machine learning to predict user behavior patterns and optimize business KPIs with 95% accuracy.',
      tech: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
      github: '#',
      demo: '#',
      status: 'Award Winner',
      metrics: '95% Accuracy',
      gradient: 'from-violet-400 via-purple-400 to-indigo-600'
    },
    {
      title: 'Real-time Collaboration Suite',
      description: 'Created a comprehensive collaboration platform with video conferencing, document sharing, and real-time editing capabilities for remote teams.',
      tech: ['Vue.js', 'Socket.io', 'WebRTC', 'MongoDB', 'Docker'],
      github: '#',
      demo: '#',
      status: 'Open Source',
      metrics: '500+ Stars',
      gradient: 'from-pink-400 via-red-400 to-orange-500'
    }
  ];

  const achievements = [
    { icon: Award, number: '5+', label: 'Years Experience' },
    { icon: Users, number: '50+', label: 'Projects Delivered' },
    { icon: Star, number: '99%', label: 'Client Satisfaction' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2), transparent 50%)
            `
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        />
      </div>
      
      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Alex Johnson
              </span>
              <div className="text-xs text-gray-400 font-normal mt-1">Full-Stack Developer</div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  )}
                </button>
              ))}
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2">
                <Download size={16} />
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-6 space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Premium Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 backdrop-blur-sm">
                👋 Available for new opportunities
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <div className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Creating Digital
              </div>
              <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experiences
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              I'm a <span className="text-white font-semibold">Senior Full-Stack Developer</span> with expertise in modern web technologies. 
              I build scalable applications that drive business growth and enhance user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 flex items-center gap-3"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-white/20 rounded-full text-lg font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                Let's Talk
              </button>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl backdrop-blur-sm group-hover:border-white/20 transition-all duration-300">
                      <IconComponent className="mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                      <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                      <div className="text-sm text-gray-400">{achievement.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-20 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-500" />
          </div>
        </div>
      </section>

      {/* Premium About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a <span className="text-white font-semibold">passionate technologist</span> with over 5 years of experience 
                  building enterprise-grade applications that serve millions of users worldwide. My expertise spans the entire 
                  development lifecycle, from concept to deployment.
                </p>
                <p>
                  I specialize in creating <span className="text-white font-semibold">scalable architectures</span> using modern 
                  technologies like React, Node.js, and cloud platforms. I'm particularly passionate about performance optimization, 
                  user experience design, and mentoring junior developers.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring 
                  the latest developments in AI and machine learning.
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                {[Github, Linkedin, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl hover:border-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
                  >
                    <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl transform rotate-6 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl transform -rotate-6 blur-xl"></div>
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform hover:rotate-2 transition-all duration-500">
                  <div className="aspect-square bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                    AJ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to build robust, scalable solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative p-10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-blue-400/30 transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl mr-4">
                    <Globe className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-200 rounded-full text-sm font-medium hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative p-10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-purple-400/30 transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mr-4">
                    <Database className="text-purple-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 rounded-full text-sm font-medium hover:border-purple-400/50 hover:bg-purple-500/30 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative p-10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-emerald-400/30 transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl mr-4">
                    <Code className="text-emerald-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">DevOps & Cloud</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.cloud.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-200 rounded-full text-sm font-medium hover:border-emerald-400/50 hover:bg-emerald-500/30 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions that drive business success and user engagement
            </p>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-3xl blur-xl transform group-hover:scale-[1.02] transition-transform duration-700"></div>
                <div className="relative p-10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                        <div className="flex gap-3">
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                            {project.status}
                          </span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                            {project.metrics}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 bg-gray-800/80 text-gray-200 rounded-lg text-sm border border-gray-700/50 hover:border-gray-600 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-6 pt-4">
                        <a
                          href={project.github}
                          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 text-white font-medium group"
                        >
                          <Github size={20} />
                          View Code
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-white font-medium group"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-2xl p-8 flex items-center justify-center shadow-2xl`}>
                        <div className="text-center text-white">
                          <div className="text-4xl font-bold mb-4">{project.title}</div>
                          <div className="text-lg opacity-90">Interactive Preview</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to turn your ideas into reality? Let's discuss how we can work together to create exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'alex.johnson@example.com', color: 'blue' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: 'green' },
                  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', color: 'purple' }
                ].map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center gap-6 p-6 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                      <div className={`p-4 bg-gradient-to-r from-${contact.color}-500/20 to-${contact.color}-600/20 rounded-2xl`}>
                        <IconComponent className={`text-${contact.color}-400`} size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                        <p className="text-white text-lg font-medium">{contact.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-8">
                <p className="text-gray-300 mb-6">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
                <div className="flex gap-4">
                  {[Github, Linkedin, Mail].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl hover:border-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm group"
                    >
                      <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
              <div className="relative p-10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-3xl">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-gray-800/50 border border-white/10 rounded-2xl focus:border-blue-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-gray-800/50 border border-white/10 rounded-2xl focus:border-blue-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 bg-gray-800/50 border border-white/10 rounded-2xl focus:border-blue-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm resize-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => alert('Message sent! I\'ll get back to you soon.')}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-lg font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-[1.02] flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-16 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Alex Johnson
                </span>
              </div>
              <p className="text-gray-400">
                Full-Stack Developer & Tech Enthusiast
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                © 2024 Alex Johnson. Crafted with passion and precision.
              </p>
              <div className="flex justify-center gap-4">
                {[Github, Linkedin, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-3 bg-gray-800/50 border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 group"
                  >
                    <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-gray-400 text-sm">
                Built with React, Tailwind CSS & lots of ☕
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Designed for performance & accessibility
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;