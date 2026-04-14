'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  AlertCircle, 
  TrendingDown, 
  Users, 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Megaphone, 
  Target,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const PROBLEMAS = [
  {
    icon: TrendingDown,
    titulo: 'Vendas estagnadas',
    descricao: 'Seu negócio não cresce porque ninguém encontra você online.',
  },
  {
    icon: Users,
    titulo: 'Poucos clientes',
    descricao: 'Depende apenas de indicações e não consegue escalar.',
  },
  {
    icon: AlertCircle,
    titulo: 'Sem presença digital',
    descricao: 'Seus concorrentes estão na internet e você está ficando para trás.',
  },
];

const SERVICOS = [
  {
    icon: Globe,
    titulo: 'Criação de Sites',
    descricao: 'Sites profissionais, rápidos e otimizados para converter visitantes em clientes.',
  },
  {
    icon: ShoppingCart,
    titulo: 'E-Commerce',
    descricao: 'Lojas virtuais completas para você vender 24 horas por dia, 7 dias por semana.',
  },
  {
    icon: Smartphone,
    titulo: 'Aplicativos',
    descricao: 'Apps mobile personalizados para iOS e Android que fidelizam seus clientes.',
  },
  {
    icon: Megaphone,
    titulo: 'Marketing Digital',
    descricao: 'Estratégias de conteúdo e posicionamento para atrair o público certo.',
  },
  {
    icon: Target,
    titulo: 'Tráfego Pago',
    descricao: 'Anúncios no Google e redes sociais que geram resultados reais e mensuráveis.',
  },
];

export function ProblemaSolucao() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('problema-solucao');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problema-solucao" className="relative py-24">
      <div className="container mx-auto px-6">
        
        {/* Seção do Problema */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-destructive/50" />
              <span className="text-xs font-semibold tracking-[0.25em] text-destructive uppercase">
                O Problema
              </span>
              <div className="h-px w-12 bg-destructive/50" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
              Seu negócio está invisível<br />na internet?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Milhares de potenciais clientes procuram por serviços como o seu todos os dias. 
              Se você não está online, eles estão encontrando seus concorrentes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROBLEMAS.map((problema, index) => (
              <motion.div
                key={problema.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="p-6 rounded-2xl border border-destructive/20 bg-destructive/5 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <problema.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problema.titulo}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problema.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divisor visual */}
        <div className="flex items-center justify-center mb-24">
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center"
          >
            <ArrowRight className="w-6 h-6 text-primary" />
          </motion.div>
        </div>

        {/* Seção da Solução */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                A Solução
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
              Transforme sua presença<br />digital em resultados
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Com as ferramentas certas, seu negócio pode alcançar novos clientes, 
              aumentar vendas e crescer de forma consistente.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICOS.map((servico, index) => (
              <motion.div
                key={servico.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <servico.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {servico.titulo}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {servico.descricao}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center mt-12"
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5" />
              Quero crescer meu negócio
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
