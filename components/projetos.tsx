'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  tags: string[];
  github?: string;
  demo?: string;
  destaque?: boolean;
}

const PROJETOS: Projeto[] = [
  {
    id: '1',
    titulo: 'E-commerce Platform',
    descricao: 'Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e dashboard administrativo.',
    imagem: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: '#',
    demo: '#',
    destaque: true,
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('projetos');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Portfólio
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 text-balance">
            Projetos selecionados
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma seleção dos meus trabalhos mais recentes. Cada projeto representa um desafio único resolvido com dedicação e criatividade.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJETOS.map((projeto, index) => (
            <motion.article
              key={projeto.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`group relative rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 ${
                projeto.destaque ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${projeto.destaque ? 'h-72 sm:h-96' : 'h-56'}`}>
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Floating action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {projeto.titulo}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
          ))}
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
