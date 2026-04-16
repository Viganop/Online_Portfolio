'use client';

import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#problema-solucao' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Depoimentos', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

const SOCIAL_LINKS = [
  { nome: 'GitHub', url: 'https://github.com/Viganop', icon: Github },
  { nome: 'LinkedIn', url: 'https://linkedin.com/in/lucca-viganon', icon: Linkedin },
  { nome: 'Email', url: 'mailto:contato@titanlabs.dev', icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 border-t border-white/5">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">

          {/* Top section - Main content */}
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="md:col-span-4">
              <a href="#inicio" className="inline-flex items-center gap-3 mb-4">
                <Image
                  src="/images/titan-labs-logo.png"
                  alt="Titan Labs Logo"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <span className="text-xl font-bold text-foreground">Titan Labs</span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                Transformamos ideias em soluções digitais que geram resultados reais para o seu negócio.
              </p>
              
              {/* CTA Button */}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Fale Conosco
              </a>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Navegação</h4>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Serviços</h4>
              <nav className="flex flex-col gap-3">
                <span className="text-sm text-muted-foreground">Criação de Sites</span>
                <span className="text-sm text-muted-foreground">E-Commerce</span>
                <span className="text-sm text-muted-foreground">Aplicativos</span>
                <span className="text-sm text-muted-foreground">Marketing Digital</span>
                <span className="text-sm text-muted-foreground">Tráfego Pago</span>
                <span className="text-sm text-muted-foreground">Automação</span>
              </nav>
            </div>

            {/* Social Links */}
            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Social</h4>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.nome}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.nome}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} Titan Labs. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
