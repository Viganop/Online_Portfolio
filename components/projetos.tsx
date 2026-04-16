'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  categoria: string;
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
    demo: '#',
  },
  {
    id: '3',
    titulo: 'Portfolio Dashboard',
    descricao: 'Dashboard interativo para visualização de dados financeiros e análise de investimentos.',
    imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    categoria: 'Dashboard',
    demo: '#',
  },
  {
    id: '4',
    titulo: 'Social Connect',
    descricao: 'Rede social com feed em tempo real, stories, mensagens diretas e notificações push.',
    imagem: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    categoria: 'Rede Social',
    demo: '#',
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

  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const currentProject = PROJETOS[currentIndex];

  return (
    <section id="projetos" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            Projetos
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Trabalhos selecionados que demonstram nossa experiência e dedicação.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Arrow Left */}
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 z-10 p-3 sm:p-4 rounded-full border border-border bg-background/80 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-lg"
            aria-label="Projeto anterior"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          {/* Arrow Right */}
          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 z-10 p-3 sm:p-4 rounded-full border border-border bg-background/80 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-lg"
            aria-label="Próximo projeto"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="relative"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                  <img
                    src={currentProject.imagem}
                    alt={currentProject.titulo}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-white/95 text-black rounded-full">
                      {currentProject.categoria}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl sm:text-4xl font-bold text-white mb-3"
                    >
                      {currentProject.titulo}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white/80 text-sm sm:text-base max-w-xl mb-6"
                    >
                      {currentProject.descricao}
                    </motion.p>
                    
                    {currentProject.demo && (
                      <motion.a
                        href={currentProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {PROJETOS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToProject(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border w-2 hover:bg-muted-foreground'
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
