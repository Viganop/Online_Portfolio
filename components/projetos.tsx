'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  github?: string;
  demo?: string;
}

const PROJETOS: Projeto[] = [
  {
    id: '1',
    titulo: 'Golden Pets',
    descricao: 'E-commerce completo para pet shop com catálogo de produtos, carrinho de compras e sistema de rastreamento de pedidos.',
    imagem: '/images/golden-pets.png',
    demo: '#',
  },
  {
    id: '2',
    titulo: 'Task Management App',
    descricao: 'Aplicativo de gerenciamento de tarefas com funcionalidades de drag-and-drop, colaboração em tempo real.',
    imagem: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    id: '3',
    titulo: 'Portfolio Dashboard',
    descricao: 'Dashboard interativo para visualização de dados financeiros e análise de investimentos.',
    imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    id: '4',
    titulo: 'Social Media Clone',
    descricao: 'Clone de rede social com feed em tempo real, stories, mensagens diretas e notificações push.',
    imagem: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    github: '#',
  },
];

export function Projetos() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJETOS.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJETOS.length) % PROJETOS.length);
  };

  const getProjectAtOffset = (offset: number) => {
    const index = (currentIndex + offset + PROJETOS.length) % PROJETOS.length;
    return PROJETOS[index];
  };

  const projeto = PROJETOS[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
  };

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

        {/* Carousel - Stacked Style */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            
            {/* Far Left Preview (2 positions back) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible ? { opacity: 0.4, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={prevProject}
              className="hidden lg:block w-16 h-64 rounded-2xl overflow-hidden cursor-pointer hover:opacity-60 transition-all duration-500 flex-shrink-0 -mr-2 z-0"
            >
              <img
                src={getProjectAtOffset(-2).imagem}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Left Preview (1 position back) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 0.6, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={prevProject}
              className="hidden md:block w-20 lg:w-24 h-72 lg:h-80 rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-all duration-500 flex-shrink-0 -mr-3 z-10"
            >
              <img
                src={getProjectAtOffset(-1).imagem}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Main Project Card */}
            <div className="flex-shrink-0 w-full max-w-2xl z-20 px-4 md:px-0">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.article
                  key={projeto.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                    mass: 0.8
                  }}
                  className="group relative rounded-3xl overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-72 sm:h-96 rounded-3xl">
                    <motion.img
                      src={projeto.imagem}
                      alt={projeto.titulo}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating action buttons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {projeto.github && (
                        <motion.a
                          href={projeto.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {projeto.demo && (
                        <motion.a
                          href={projeto.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>

                    {/* Content overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          {projeto.titulo}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors flex-shrink-0" />
                      </div>
                      
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg">
                        {projeto.descricao}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* Right Preview (1 position forward) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 0.6, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={nextProject}
              className="hidden md:block w-20 lg:w-24 h-72 lg:h-80 rounded-2xl overflow-hidden cursor-pointer hover:opacity-80 transition-all duration-500 flex-shrink-0 -ml-3 z-10"
            >
              <img
                src={getProjectAtOffset(1).imagem}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Far Right Preview (2 positions forward) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible ? { opacity: 0.4, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={nextProject}
              className="hidden lg:block w-16 h-64 rounded-2xl overflow-hidden cursor-pointer hover:opacity-60 transition-all duration-500 flex-shrink-0 -ml-2 z-0"
            >
              <img
                src={getProjectAtOffset(2).imagem}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-border/50 bg-card/60 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary hover:bg-card/80 transition-all duration-300"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {PROJETOS.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-border hover:bg-primary/50 w-2'
                  }`}
                  aria-label={`Ir para projeto ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-border/50 bg-card/60 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary hover:bg-card/80 transition-all duration-300"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Viganop"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 text-foreground hover:border-primary/50 hover:text-primary transition-all group"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">Ver todos no GitHub</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
