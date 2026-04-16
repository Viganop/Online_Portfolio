'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Megaphone, 
  Target,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

const RESULTADOS = [
  {
    icon: TrendingUp,
    titulo: 'Aumento de Vendas',
    descricao: 'Nossos clientes aumentaram suas vendas em até 300% nos primeiros 6 meses.',
  },
  {
    icon: Users,
    titulo: 'Mais Clientes',
    descricao: 'Média de 150+ novos leads qualificados por mês para nossos parceiros.',
  },
  {
    icon: Zap,
    titulo: 'ROI Garantido',
    descricao: 'Retorno sobre investimento comprovado com métricas claras e transparentes.',
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
        
        {/* Seção Principal - Resultados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
              Transforme sua presença<br />digital em resultados
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Com as ferramentas certas, seu negócio pode alcançar novos clientes, 
              aumentar vendas e crescer de forma consistente.
            </p>
          </div>

          {/* Cards de Resultados */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {RESULTADOS.map((resultado, index) => (
              <motion.div
                key={resultado.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="p-6 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <resultado.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {resultado.titulo}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {resultado.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Seção de Serviços */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções completas para levar seu negócio ao próximo nível.
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
