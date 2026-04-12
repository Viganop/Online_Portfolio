'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Tecnologia {
  nome: string;
  nivel: number; // 1-100
  categoria: 'frontend' | 'backend' | 'database' | 'tools';
  icone: string;
}

const TECNOLOGIAS: Tecnologia[] = [
  // Frontend
  { nome: 'React', nivel: 95, categoria: 'frontend', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { nome: 'Next.js', nivel: 90, categoria: 'frontend', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { nome: 'TypeScript', nivel: 88, categoria: 'frontend', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { nome: 'Tailwind CSS', nivel: 92, categoria: 'frontend', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { nome: 'Vue.js', nivel: 75, categoria: 'frontend', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  
  // Backend
  { nome: 'Node.js', nivel: 88, categoria: 'backend', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { nome: 'Python', nivel: 82, categoria: 'backend', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { nome: 'Express', nivel: 85, categoria: 'backend', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { nome: 'NestJS', nivel: 70, categoria: 'backend', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  
  // Database
  { nome: 'PostgreSQL', nivel: 80, categoria: 'database', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { nome: 'MongoDB', nivel: 78, categoria: 'database', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { nome: 'Redis', nivel: 65, categoria: 'database', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  
  // Tools
  { nome: 'Git', nivel: 90, categoria: 'tools', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { nome: 'Docker', nivel: 72, categoria: 'tools', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { nome: 'Figma', nivel: 68, categoria: 'tools', icone: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const CATEGORIAS = [
  { id: 'all', label: 'Todas' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Ferramentas' },
];

export function Linguagens() {
  const [isVisible, setIsVisible] = useState(false);
  const [categoria, setCategoria] = useState<string>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('linguagens');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tecnologiasFiltradas = categoria === 'all' 
    ? TECNOLOGIAS 
    : TECNOLOGIAS.filter(t => t.categoria === categoria);

  return (
    <section id="linguagens" className="relative py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Stack Técnico
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 text-balance">
            Tecnologias & <span className="text-primary">Ferramentas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            As ferramentas que utilizo para transformar ideias em soluções digitais funcionais e escaláveis.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoria(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                categoria === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tecnologiasFiltradas.map((tech, index) => (
            <motion.div
              key={tech.nome}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
              layout
              className="group p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-background/50 border border-border/30 p-2.5 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <img
                    src={tech.icone}
                    alt={tech.nome}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    {tech.nome}
                  </h3>
                  <span className="text-xs text-muted-foreground capitalize">
                    {tech.categoria === 'tools' ? 'Ferramenta' : tech.categoria}
                  </span>
                </div>
                <span className="text-sm font-bold text-primary">
                  {tech.nivel}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 rounded-full bg-border/50 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${tech.nivel}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Também tenho experiência com:
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['GraphQL', 'REST APIs', 'CI/CD', 'AWS', 'Vercel', 'Prisma', 'Jest', 'Cypress', 'Storybook', 'Linux'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm border border-border/30 bg-card/20 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
