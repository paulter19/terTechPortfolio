import React from 'react';
import { ExternalLink, Github, Globe, Smartphone } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  const projects = [
    {
      title: 'MaxOutPro',
      description: 'A comprehensive fitness platform for professional trainers and athletes.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
      link: 'https://maxoutpro.vercel.app/',
      type: 'web'
    },
    {
      title: 'OnWay Bookings',
      description: 'Travel booking platform with seamless reservation experience.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200',
      link: 'https://onwaybookings.com/',
      type: 'web'
    },
    {
      title: 'ViewPoints',
      description: 'iOS mobile application for discovering and sharing points of interest.',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200',
      link: 'https://apps.apple.com/us/app/viewpoints/id1077165555',
      type: 'mobile'
    },
    {
      title: 'NUER Professionals Network',
      description: 'Professional networking platform for NUER community.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
      link: 'https://www.nuerprofessionalsnetwork.org/',
      type: 'web'
    },
    {
      title: '35 Partners',
      description: 'Corporate website for business consulting and partnerships.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
      link: 'https://35partners.com/',
      type: 'web'
    },
    {
      title: 'Seedware',
      description: 'Technology solutions and software development services.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      link: 'https://www.seedware.net/',
      type: 'web'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigation />
      <div id="home">
        <Header />
      </div>
      
      <main className="container mx-auto px-4 py-16">
        <div id="projects" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        <section id="contact" className="text-center mt-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Looking for a developer who can bring your vision to life? I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;