import { Project } from '../data/projects';
import ProjectCard from './ProjectCard';

interface CategorySectionProps {
  title: string;
  projects: Project[];
}

export default function CategorySection({ title, projects }: CategorySectionProps) {
  if (projects.length === 0) return null;

  return (
    <section className="py-20">
      <div className="flex flex-col items-center gap-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-[0.25em] uppercase text-gradient drop-shadow-sm">
          {title}
        </h2>
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/40 blur-[2px]" />
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
