'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Send, ArrowUpRight, Copy, Check } from 'lucide-react';

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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('contato');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato@luccaviganon.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              Vamos <span className="text-primary">conversar</span>?
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
              className="lg:col-span-2 space-y-6"
            >
              {/* Location */}
              <div className="p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Localização</h3>
                    <p className="text-sm text-muted-foreground">Brasil</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Disponível para trabalho remoto e projetos internacionais.
                </p>
              </div>

              {/* Email with copy */}
              <div className="p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-sm text-muted-foreground">Resposta em 24h</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                    title="Copiar email"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <a 
                  href="mailto:contato@luccaviganon.dev"
                  className="text-primary hover:underline text-sm"
                >
                  contato@luccaviganon.dev
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
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
              </div>
            </motion.div>

            {/* Right - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="h-full p-8 sm:p-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card/30 to-accent/5 backdrop-blur-sm relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-primary font-medium">Disponível para novos projetos</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                    Tem um projeto em mente?
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Estou sempre em busca de desafios interessantes. Se você tem uma ideia que precisa ganhar vida, vamos conversar sobre como posso ajudar a transformá-la em realidade.
                  </p>

                  <a
                    href="mailto:contato@luccaviganon.dev"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors group"
                  >
                    <Send className="w-5 h-5" />
                    Enviar mensagem
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
