'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
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
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
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
