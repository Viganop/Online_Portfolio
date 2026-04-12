'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react';

export function Sobre() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('sobre');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: MapPin, text: 'Brasil' },
    { icon: GraduationCap, text: 'Análise e Desenvolvimento de Sistemas' },
    { icon: Briefcase, text: 'Freelancer' },
    { icon: Code2, text: 'Full-Stack Developer' },
  ];

  const stats = [
    { value: '4+', label: 'Anos de Experiência' },
    { value: '10+', label: 'Projetos Entregues' },
    { value: '8+', label: 'Tecnologias Dominadas' },
  ];

  return (
    <section id="sobre" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

          {/* Left Column - Sticky info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.25em] text-foreground uppercase">
                Sobre mim
              </span>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Sou <strong className="text-foreground">Lucca Viganon Periotto</strong>, desenvolvedor apaixonado por criar soluções digitais que fazem a diferença. Minha jornada na programação começou há mais de quatro anos, e desde então venho me dedicando a dominar as tecnologias mais relevantes do mercado.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Atualmente curso o último ano de <strong className="text-foreground">Análise e Desenvolvimento de Sistemas</strong> no Senai, onde tenho a oportunidade de unir teoria e prática. Paralelamente, atuo como freelancer, colaborando em projetos desafiadores que me permitem expandir constantemente minhas habilidades.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Acredito que o código é uma forma de arte - cada linha escrita com <strong className="text-foreground">propósito</strong>, cada solução pensada com <strong className="text-foreground">cuidado</strong>. Meu objetivo é sempre entregar não apenas funcionalidades, mas experiências que realmente agreguem valor.
              </p>
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
}
