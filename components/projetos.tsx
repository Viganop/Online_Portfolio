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

  const projeto = PROJETOS[currentIndex];
  const prevProjeto = PROJETOS[(currentIndex - 1 + PROJETOS.length) % PROJETOS.length];
  const nextProjeto = PROJETOS[(currentIndex + 1) % PROJETOS.length];

  const slideVariants = {
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
          <div className="flex items-center justify-center gap-3 lg:gap-6">
            
            {/* Left Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={prevProject}
              className="hidden md:flex flex-col w-32 lg:w-44 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-md overflow-hidden cursor-pointer hover:border-primary/30 hover:bg-card/60 transition-all duration-300 flex-shrink-0 group"
            >
              <div className="relative h-32 lg:h-44 overflow-hidden">
                <img
                  src={prevProjeto.imagem}
                  alt={prevProjeto.titulo}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>
              <div className="p-3 lg:p-4">
                <p className="text-xs lg:text-sm font-semibold text-foreground/80 group-hover:text-foreground truncate transition-colors">
                  {prevProjeto.titulo}
                </p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <ChevronLeft className="w-3 h-3" />
                  Anterior
                </p>
              </div>
            </motion.div>

            {/* Navigation Arrow Left */}
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="z-10 p-3 rounded-full border border-border/50 bg-card/60 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary hover:bg-card/80 transition-all duration-300 flex-shrink-0"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Main Project Card */}
            <div className="flex-1 max-w-3xl overflow-hidden">
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
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8
                  }}
                  className="group relative rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-72 sm:h-96">
                    <motion.img
                      src={projeto.imagem}
                      alt={projeto.titulo}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    
                    {/* Floating action buttons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {projeto.github && (
                        <motion.a
                          href={projeto.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary hover:border-primary/50 transition-colors"
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
                          className="p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Content - seamless with image */}
                  <div className="p-6 sm:p-8 bg-card/50">
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
            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="z-10 p-3 rounded-full border border-border/50 bg-card/60 backdrop-blur-md text-foreground hover:border-primary/50 hover:text-primary hover:bg-card/80 transition-all duration-300 flex-shrink-0"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Right Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={nextProject}
              className="hidden md:flex flex-col w-32 lg:w-44 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-md overflow-hidden cursor-pointer hover:border-primary/30 hover:bg-card/60 transition-all duration-300 flex-shrink-0 group"
            >
              <div className="relative h-32 lg:h-44 overflow-hidden">
                <img
                  src={nextProjeto.imagem}
                  alt={nextProjeto.titulo}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>
              <div className="p-3 lg:p-4">
                <p className="text-xs lg:text-sm font-semibold text-foreground/80 group-hover:text-foreground truncate transition-colors">
                  {nextProjeto.titulo}
                </p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  Próximo
                  <ChevronRight className="w-3 h-3" />
                </p>
              </div>
            </motion.div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {PROJETOS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-primary/50 w-2.5'
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
