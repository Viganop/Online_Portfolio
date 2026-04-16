'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'motion/react';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';

interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  categoria: string;
  github?: string;
  demo?: string;
}

const PROJETOS: Projeto[] = [
  {
    id: '1',
    titulo: 'Golden Pets',
    descricao: 'E-commerce completo para pet shop com catálogo de produtos, carrinho de compras e sistema de rastreamento.',
    imagem: '/images/golden-pets.png',
    categoria: 'E-Commerce',
    demo: '#',
  },
  {
    id: '2',
    titulo: 'Task Management',
    descricao: 'Aplicativo de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.',
    imagem: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    categoria: 'Aplicativo Web',
    github: '#',
    demo: '#',
  },
  {
    id: '3',
    titulo: 'Portfolio Dashboard',
    descricao: 'Dashboard interativo para visualização de dados financeiros e análise de investimentos.',
    imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    categoria: 'Dashboard',
    github: '#',
    demo: '#',
  },
  {
    id: '4',
    titulo: 'Social Connect',
    descricao: 'Rede social com feed em tempo real, stories, mensagens diretas e notificações push.',
    imagem: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    categoria: 'Rede Social',
    github: '#',
  },
];

export function Projetos() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

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
    if (currentIndex < PROJETOS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projetos" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header with navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Projetos
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Trabalhos selecionados que demonstram nossa experiência e dedicação.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground font-medium">
              {String(currentIndex + 1).padStart(2, '0')} / {String(PROJETOS.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <motion.button
                onClick={prevProject}
                disabled={currentIndex === 0}
                whileHover={{ scale: currentIndex === 0 ? 1 : 1.05 }}
                whileTap={{ scale: currentIndex === 0 ? 1 : 0.95 }}
                className={`p-3 rounded-full border transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'border-border/30 text-muted-foreground/30 cursor-not-allowed' 
                    : 'border-border hover:border-foreground hover:bg-foreground hover:text-background'
                }`}
                aria-label="Projeto anterior"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextProject}
                disabled={currentIndex === PROJETOS.length - 1}
                whileHover={{ scale: currentIndex === PROJETOS.length - 1 ? 1 : 1.05 }}
                whileTap={{ scale: currentIndex === PROJETOS.length - 1 ? 1 : 0.95 }}
                className={`p-3 rounded-full border transition-all duration-300 ${
                  currentIndex === PROJETOS.length - 1 
                    ? 'border-border/30 text-muted-foreground/30 cursor-not-allowed' 
                    : 'border-border hover:border-foreground hover:bg-foreground hover:text-background'
                }`}
                aria-label="Próximo projeto"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid Carousel */}
        <div ref={containerRef} className="relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: -currentIndex * (100 / 3) + '%' }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1
            }}
            style={{ 
              width: `${(PROJETOS.length / 3) * 100}%`,
            }}
          >
            {PROJETOS.map((projeto, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === currentIndex - 1;
              const isNext = index === currentIndex + 1;
              const isVisible = Math.abs(index - currentIndex) <= 2;

              return (
                <motion.article
                  key={projeto.id}
                  onClick={() => goToProject(index)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ 
                    opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
                    y: isVisible ? 0 : 40,
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 cursor-pointer group`}
                >
                  <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                    isActive ? 'ring-2 ring-primary/50' : ''
                  }`}>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-card">
                      <motion.img
                        src={projeto.imagem}
                        alt={projeto.titulo}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                        isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'
                      }`}>
                        {projeto.demo && (
                          <motion.a
                            href={projeto.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-4 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                        {projeto.github && (
                          <motion.a
                            href={projeto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-4 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-black rounded-full">
                          {projeto.categoria}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-card border-x border-b border-border/50 rounded-b-2xl">
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {projeto.titulo}
                      </h3>
                      <p className={`text-sm leading-relaxed line-clamp-2 transition-colors duration-300 ${
                        isActive ? 'text-muted-foreground' : 'text-muted-foreground/60'
                      }`}>
                        {projeto.descricao}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="h-0.5 bg-border/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-foreground"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + 1) / PROJETOS.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {PROJETOS.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToProject(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-foreground w-8' 
                  : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Viganop"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">Ver todos os projetos no GitHub</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
