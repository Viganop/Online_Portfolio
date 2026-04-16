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
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 text-balance">
              Vamos conversar?
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
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
                  className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <link.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-white/90 group-hover:text-white transition-colors">{link.nome}</p>
                      <p className="text-xs text-white/40">{link.usuario}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              ))}

              {/* Disponível para novos projetos - estilo glass */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl px-5 py-3"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                </span>
                <span className="text-sm font-medium text-white/70">Disponível para novos projetos</span>
              </motion.div>
            </motion.div>

            {/* Right - CTA Card Glass Style */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
                {/* Subtle glow effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                
                <div className="relative p-8 sm:p-12 flex flex-col items-center justify-center text-center h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">
                    Bora bater um papo?
                  </h3>
                  <p className="text-white/50 mb-8 leading-relaxed max-w-md">
                    Estou sempre em busca de desafios interessantes. Se você tem uma ideia que precisa ganhar vida, vamos conversar sobre como posso ajudar a transformá-la em realidade.
                  </p>

                  <a
                    href="https://wa.me/5516999999999?text=Olá! Vi seu portfólio e gostaria de conversar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all hover:scale-[1.02] group"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chamar no Whatsapp
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
