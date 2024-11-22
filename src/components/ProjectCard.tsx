import React from 'react';
import { ExternalLink, Smartphone, Globe } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  type: 'web' | 'mobile';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  type
}) => {
  return (
    <div className="group relative bg-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6 w-full">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">{title}</h3>
            {type === 'web' ? (
              <Globe className="text-blue-400" size={20} />
            ) : (
              <Smartphone className="text-blue-400" size={20} />
            )}
          </div>
          <p className="text-gray-300 mb-4">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Visit {type === 'web' ? 'Website' : 'App'}</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;