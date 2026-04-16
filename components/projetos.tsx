'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  video: string;
  categoria: string;
}

const PROJETOS: Projeto[] = [
  {
    id: '1',
    titulo: 'Golden Pets',
    descricao: 'E-commerce completo para pet shop com catálogo de produtos, carrinho de compras e sistema de rastreamento de pedidos.',
    video: '/videos/projeto-1.mp4',
    categoria: 'E-Commerce',
  },
  {
    id: '2',
    titulo: 'Pastel do Zé',
    descricao: 'Landing page para pastelaria tradicional com cardápio digital, localização e horários de funcionamento.',
    video: '/videos/pastel-do-ze.mp4',
    categoria: 'Landing Page',
  },
  {
    id: '3',
    titulo: 'Portfolio Dashboard',
    descricao: 'Dashboard interativo para visualização de dados financeiros e análise de investimentos em tempo real.',
    video: '/videos/projeto-1.mp4',
    categoria: 'Dashboard',
  },
  {
    id: '4',
    titulo: 'Social Connect',
    descricao: 'Rede social com feed em tempo real, stories, mensagens diretas e notificações push.',
    video: '/videos/projeto-1.mp4',
    categoria: 'Rede Social',
  },
];

export function Projetos() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('projetos');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentIndex]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJETOS.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProject = PROJETOS[currentIndex];

  const slideVariants = {
    enter: {
      y: 100,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -100,
      opacity: 0,
    },
  };

  return (
    <section id="projetos" className="relative min-h-screen overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={currentProject.video} type="video/mp4" />
            </video>
            
            {/* Light overlay */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Gradient overlay - subtle */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-12 gap-8 w-full py-20">
          
          {/* Left Navigation */}
          <div className="col-span-1 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Project Dots */}
              <div className="flex flex-col gap-3">
                {PROJETOS.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToProject(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                      index === currentIndex 
                        ? 'bg-primary' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  >
                    {index === currentIndex && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute inset-0 rounded-full bg-primary"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {index === currentIndex && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-primary"
                        animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-white/20" />

              {/* Arrow Down */}
              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.1, y: 3 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                aria-label="Próximo projeto"
              >
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="col-span-11 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.4 },
                }}
              >
                {/* Category Badge */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-full mb-6 backdrop-blur-sm bg-primary/5"
                >
                  {currentProject.categoria}
                </motion.span>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight"
                >
                  {currentProject.titulo}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/70 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
                >
                  {currentProject.descricao}
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
                >
                  Ver Projeto
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    &rarr;
                  </motion.span>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>

          

        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

    </section>
  );
}
