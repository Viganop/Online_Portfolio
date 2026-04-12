'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Linguagens', href: '#linguagens' },
  { label: 'Contato', href: '#contato' },
];

const SOCIAL_LINKS = [
  { nome: 'GitHub', url: 'https://github.com/Viganop', icon: Github },
  { nome: 'LinkedIn', url: 'https://linkedin.com/in/lucca-viganon', icon: Linkedin },
  { nome: 'Email', url: 'mailto:contato@luccaviganon.dev', icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Top section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <a href="#inicio" className="inline-block mb-2">
                <span className="text-2xl font-black text-foreground">
                  Lucca<span className="text-primary">.</span>
                </span>
              </a>
              <p className="text-muted-foreground text-sm">
                Full-Stack Developer
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6">
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

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.nome}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label={link.nome}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-8" />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              Desenvolvido com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> por Lucca Viganon
            </p>
            <p>
              &copy; {currentYear} Todos os direitos reservados
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
