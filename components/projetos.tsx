'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const PROJETOS: Projeto[] = [
  {
    id: '1',
    titulo: 'Golden Pets',
    descricao: 'E-commerce completo para pet shop com catálogo de produtos, carrinho de compras e sistema de rastreamento de pedidos.',
    imagem: '/images/golden-pets.png',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    demo: '#',
  },
  {
    id: '2',
    titulo: 'Task Management App',
    descricao: 'Aplicativo de gerenciamento de tarefas com funcionalidades de drag-and-drop, colaboração em tempo real.',
    imagem: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    id: '3',
    titulo: 'Portfolio Dashboard',
    descricao: 'Dashboard interativo para visualização de dados financeiros e análise de investimentos.',
    imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    github: '#',
    demo: '#',
  },
  {
    id: '4',
    titulo: 'Social Media Clone',
    descricao: 'Clone de rede social com feed em tempo real, stories, mensagens diretas e notificações push.',
    imagem: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    github: '#',
  },
];

export function Projetos() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('projetos');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJETOS.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJETOS.length) % PROJETOS.length);
  };

  const projeto = PROJETOS[currentIndex];
  const prevProjeto = PROJETOS[(currentIndex - 1 + PROJETOS.length) % PROJETOS.length];
  const nextProjeto = PROJETOS[(currentIndex + 1) % PROJETOS.length];

  return (
    <section id="projetos" className="relative py-32">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 text-balance">
            Projetos
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma seleção dos meus trabalhos mais recentes. Cada projeto representa um desafio único resolvido com dedicação e criatividade.
          </p>
        </motion.div>

        {/* Carousel with Side Previews */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            
            {/* Left Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 0.5, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              onClick={prevProject}
              className="hidden md:block w-24 lg:w-32 h-64 lg:h-80 rounded-xl border border-border/20 bg-card/20 backdrop-blur-sm overflow-hidden cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0"
            >
              <img
                src={prevProjeto.imagem}
                alt={prevProjeto.titulo}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            </motion.div>

            {/* Navigation Arrow Left */}
            <button
              onClick={prevProject}
              className="z-10 p-3 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm text-foreground hover:border-primary/50 hover:text-primary transition-all flex-shrink-0"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Project Card */}
            <div className="flex-1 max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.article
                  key={projeto.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-72 sm:h-96">
                    <img
                      src={projeto.imagem}
                      alt={projeto.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Floating action buttons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {projeto.github && (
                        <a
                          href={projeto.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {projeto.demo && (
                        <a
                          href={projeto.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {projeto.titulo}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                    
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {projeto.descricao}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {projeto.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* Navigation Arrow Right */}
            <button
              onClick={nextProject}
              className="z-10 p-3 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm text-foreground hover:border-primary/50 hover:text-primary transition-all flex-shrink-0"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Right Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 0.5, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              onClick={nextProject}
              className="hidden md:block w-24 lg:w-32 h-64 lg:h-80 rounded-xl border border-border/20 bg-card/20 backdrop-blur-sm overflow-hidden cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0"
            >
              <img
                src={nextProjeto.imagem}
                alt={nextProjeto.titulo}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent" />
            </motion.div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {PROJETOS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Viganop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 text-foreground hover:border-primary/50 hover:text-primary transition-all group"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">Ver todos no GitHub</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
