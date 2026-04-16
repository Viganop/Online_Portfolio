'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Início',     href: '#inicio' },
  { label: 'Serviços',   href: '#problema-solucao' },
  { label: 'Projetos',   href: '#projetos' },
  { label: 'Depoimentos', href: '#avaliacoes' },
  { label: 'Contato',    href: '#contato' },
];

export function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center pt-8 px-10">

      {/* Col 1 — Logo com efeito de vidro */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center gap-3"
      >
        <a href="#inicio" className={`flex items-center gap-3 rounded-full border border-white/10 px-3 py-2 transition-all duration-300 ${
          scrolled
            ? 'bg-background/60 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'bg-background/40 backdrop-blur-md'
        }`}>
          <Image
            src="/images/titan-labs-logo.png"
            alt="Titan Labs Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-sm font-bold text-foreground tracking-tight pr-1">Titan Labs</span>
        </a>
      </motion.div>

      {/* Col 2 — pill nav, truly centered */}
      <div className="flex justify-center">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex items-center justify-center gap-1 rounded-full border border-white/10 px-3 py-2 transition-all duration-300 ${
            scrolled
              ? 'bg-background/60 backdrop-blur-xl shadow-lg shadow-black/20'
              : 'bg-background/40 backdrop-blur-md'
          }`}
        >
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-white/8 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </div>

      {/* Col 3 — Fale Conosco button */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className="flex items-center justify-end"
      >
        <a
          href="#contato"
          className={`inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'bg-background/60 backdrop-blur-xl shadow-lg shadow-black/20'
              : 'bg-background/40 backdrop-blur-md'
          }`}
        >
          <span className="text-sm font-bold text-foreground tracking-tight">Fale Conosco</span>
        </a>
      </motion.div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl border border-white/10 bg-background/80 backdrop-blur-xl shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'opacity-100 max-h-64' : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-3 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-white/5 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
