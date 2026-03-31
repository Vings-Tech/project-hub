import { motion } from 'motion/react';
import { projects } from '../data/projects';
import CategorySection from '../components/CategorySection';

export default function HomePage() {
  const portfolios = projects.filter(p => p.category === 'Portfolio');
  const websites = projects.filter(p => p.category === 'Website');
  const items = projects.filter(p => p.category === 'Project');
  const webApps = projects.filter(p => p.category === 'Web App');
  const games = projects.filter(p => p.category === 'Game');

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-32 text-center relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[120px] rounded-full -z-10" />
        
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          src="/logo.png"
          alt="ProjectHub Logo"
          className="mx-auto mb-0.2 h-40 w-auto object-contain"
        />

        <h1 className="text-6xl md:text-8xl font-display font-black mb-8 tracking-tighter leading-none">
          PROJECT <span className="text-gradient drop-shadow-sm">HUB</span>
        </h1>
        
        <p className="text-gray-400 max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed">
          Crafting digital excellence through <span className="text-white font-medium">minimalist design</span> and <span className="text-white font-medium">robust engineering</span>.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center gap-4"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>

      <div className="space-y-24">
        <CategorySection title="Portfolios" projects={portfolios} />
        <CategorySection title="Websites" projects={websites} />
        <CategorySection title="Projects" projects={items} />
        <CategorySection title="Web Apps" projects={webApps} />
        <CategorySection title="Games" projects={games} />
      </div>
    </div>
  );
}
