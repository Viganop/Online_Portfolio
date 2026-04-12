'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

const SOCIAL_LINKS = [
  { 
    nome: 'GitHub', 
    url: 'https://github.com/Viganop', 
    icon: Github,
    usuario: '@Viganop'
  },
  { 
    nome: 'LinkedIn', 
    url: 'https://linkedin.com/in/lucca-viganon', 
    icon: Linkedin,
    usuario: '/in/lucca-viganon'
  },
  { 
    nome: 'Email', 
    url: 'mailto:contato@luccaviganon.dev', 
    icon: Mail,
    usuario: 'contato@luccaviganon.dev'
  },
];

export function Contato() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('contato');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                Contato
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 text-balance">
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Estou sempre aberto a novas oportunidades, projetos interessantes ou simplesmente uma boa conversa sobre tecnologia.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-3"
            >
              {/* Social Links */}
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={link.nome}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm hover:border-primary/30 hover:bg-card/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">{link.nome}</p>
                      <p className="text-xs text-muted-foreground">{link.usuario}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Right - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="h-full p-8 sm:p-12 rounded-3xl bg-primary relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 mb-6 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-white font-medium">Disponível para novos projetos</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">
                    Bora bater um papo?
                  </h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Estou sempre em busca de desafios interessantes. Se você tem uma ideia que precisa ganhar vida, vamos conversar sobre como posso ajudar a transformá-la em realidade.
                  </p>

                  <a
                    href="https://wa.me/5516999999999?text=Olá! Vi seu portfólio e gostaria de conversar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-all hover:scale-[1.02] shadow-lg shadow-black/20 group"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chamar no Whatsapp
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
