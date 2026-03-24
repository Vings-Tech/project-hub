import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Laptop, Smartphone } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-primary rounded-full font-bold hover:bg-primary/80 transition-colors"
        >
          Back to Hub
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Hub
      </motion.button>

      <div className="max-w-3xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="badge bg-primary/10 border-primary/20 text-primary">
              {project.category}
            </span>
            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
              <Laptop
                size={14}
                className={project.desktopSupport ? "text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "text-gray-700 opacity-20"}
              />
              <div className="w-[1px] h-3.5 bg-white/10" />
              <Smartphone
                size={14}
                className={project.mobileSupport ? "text-secondary drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "text-gray-700 opacity-20"}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[0.9] tracking-tighter">
            {project.title}
          </h1>

          <div className="space-y-8 text-gray-400 leading-relaxed max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-white/90 leading-tight">
              {project.description}
            </p>
            <p className="text-lg font-light">
              {project.fullDescription}
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-6">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-20">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-3 px-10 py-4"
            >
              <ExternalLink size={20} />
              Launch Experience
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
