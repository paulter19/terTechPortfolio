import React from 'react';
import { Code, Mail, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Code size={48} className="text-blue-500" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Full-Stack Developer</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Crafting beautiful, user-centric web and mobile experiences with modern technologies
        </p>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="https://github.com/yourusername"
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:contact@example.com"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Mail size={20} />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;