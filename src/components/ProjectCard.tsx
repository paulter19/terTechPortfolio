import { ExternalLink, Github, Globe, Smartphone } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  type: 'web' | 'mobile';
  techStack: string[];
  role: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  github,
  type,
  techStack,
  role,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card glass"
    >
      {/* Image container */}
      <div className="project-image-container">
        <img
          src={image}
          alt={title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-image-overlay" />

        {/* Type badge */}
        <div className="project-type-badge glass">
          {type === 'web' ? (
            <Globe size={14} className="project-type-icon" />
          ) : (
            <Smartphone size={14} className="project-type-icon" />
          )}
          <span>{type === 'web' ? 'Web' : 'iOS'}</span>
        </div>
      </div>

      {/* Content */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-role">
          <span>Role:</span> {role}
        </p>

        {/* Tech stack */}
        <div className="project-tech-stack">
          {techStack.map((tech) => (
            <span key={tech} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* View Project indicator */}
        <div className="project-links">
          <span className="project-link">
            <ExternalLink size={16} />
            <span>View Project</span>
          </span>
          {github && (
            <span className="project-link project-link-secondary">
              <Github size={16} />
              <span>Source</span>
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;