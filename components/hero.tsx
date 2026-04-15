'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Silk from '@/components/ui/silk';
import BlurText from '@/components/ui/blur-text';
import SplitText from '@/components/ui/split-text';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Silk background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 z-[1] bg-background/70 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-24">

        {/* Título com animação BlurText */}
        <BlurText
          text="Sites e aplicativos construídos para Destacar você."
          delay={110}
          animateBy="words"
          direction="top"
          duration={0.5}
          visible={isVisible}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-foreground mb-5 max-w-4xl justify-center"
        />

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
        >
          Cada projeto é tratado com foco em performance,<br />
          crescimento e resultado.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 border border-primary px-10 py-4 text-sm font-bold tracking-widest uppercase text-foreground hover:bg-primary/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            Falar no WhatsApp
          </motion.a>

          {/* Stats com animação SplitText */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-4">
            <div className="flex flex-col items-center">
              <SplitText
                text="5+"
                className="text-2xl sm:text-3xl font-bold text-primary"
                delay={80}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="center"
                tag="span"
                animateOnLoad={true}
                animationDelay={0.6}
              />
              <span className="text-xs sm:text-sm text-muted-foreground mt-1">Projetos Entregues</span>
            </div>
            
            <div className="w-px h-10 bg-border hidden sm:block" />
            
            <div className="flex flex-col items-center">
              <SplitText
                text="100%"
                className="text-2xl sm:text-3xl font-bold text-primary"
                delay={80}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="center"
                tag="span"
                animateOnLoad={true}
                animationDelay={0.8}
              />
              <span className="text-xs sm:text-sm text-muted-foreground mt-1">de Satisfação</span>
            </div>
            
            <div className="w-px h-10 bg-border hidden sm:block" />
            
            <div className="flex flex-col items-center">
              <SplitText
                text="4+"
                className="text-2xl sm:text-3xl font-bold text-primary"
                delay={80}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="center"
                tag="span"
                animateOnLoad={true}
                animationDelay={1.0}
              />
              <span className="text-xs sm:text-sm text-muted-foreground mt-1">Anos de Experiência</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
