import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Laptop, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../data/projects';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick}
      className="glass-card group cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300"
    >
      {/* Content */}
      <div className="p-8 flex flex-col flex-grow relative">
        {/* Category Tag */}
        <div className="mb-6 inline-block w-fit badge bg-primary/10 border-primary/20 text-primary">
          {project.category}
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow font-light">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] text-[10px] text-gray-400 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
          {/* Device Support Badge (Left) */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <Laptop
              size={14}
              className={cn(
                "transition-all duration-500",
                project.desktopSupport ? "text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "text-gray-700 opacity-20"
              )}
            />
            <div className="w-[1px] h-3.5 bg-white/10" />
            <Smartphone
              size={14}
              className={cn(
                "transition-all duration-500",
                project.mobileSupport ? "text-secondary drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "text-gray-700 opacity-20"
              )}
            />
          </div>

          {/* View Website Button (Right) */}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-[11px] font-bold hover:bg-primary hover:border-primary transition-all duration-500 group/btn"
          >
            View Website
            <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
