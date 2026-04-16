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
  Zap,
  ArrowUpRight
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

        {/* Seção de Serviços - Layout Dividido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Lado Esquerdo - Visualização Animada */}
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-border/30">
              
              {/* Luzes de fundo */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
                />
              </div>

              {/* Simulação de Site/Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-8 left-8 right-8 bg-card/80 backdrop-blur-md rounded-xl border border-border/50 shadow-2xl overflow-hidden"
              >
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-card/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground max-w-[200px]">
                      seusite.com.br
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-primary/20 rounded w-2/3" />
                  <div className="h-2 bg-muted/30 rounded w-full" />
                  <div className="h-2 bg-muted/30 rounded w-4/5" />
                  <div className="flex gap-2 mt-4">
                    <div className="h-16 flex-1 bg-primary/10 rounded-lg" />
                    <div className="h-16 flex-1 bg-primary/10 rounded-lg" />
                    <div className="h-16 flex-1 bg-primary/10 rounded-lg" />
                  </div>
                </div>
              </motion.div>

              {/* Gráfico de Vendas Animado */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-24 left-8 bg-card/90 backdrop-blur-md rounded-xl border border-border/50 p-4 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-medium text-foreground">Vendas</span>
                  <span className="text-xs text-green-500 ml-auto">+127%</span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[30, 45, 35, 60, 50, 75, 65, 90, 85, 100].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={isVisible ? { height: `${height}%` } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                      className="w-4 bg-gradient-to-t from-primary/50 to-primary rounded-t"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Card de Conversão */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-8 right-8 bg-card/90 backdrop-blur-md rounded-xl border border-green-500/30 p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Taxa de Conversão</p>
                    <p className="text-lg font-bold text-green-500">+45.8%</p>
                  </div>
                </div>
              </motion.div>

              {/* Notificação de Nova Venda */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { 
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.8],
                  y: [0, 0, 0, -20]
                } : {}}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatDelay: 2,
                  delay: 1.5 
                }}
                className="absolute top-32 right-8 bg-green-500/90 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span className="text-xs font-medium text-white">Nova venda realizada!</span>
                </div>
              </motion.div>

              {/* Usuários Online */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute top-32 left-8 bg-card/90 backdrop-blur-md rounded-lg px-3 py-2 border border-border/50"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-card" />
                    <div className="w-6 h-6 rounded-full bg-blue-500/30 border-2 border-card" />
                    <div className="w-6 h-6 rounded-full bg-purple-500/30 border-2 border-card" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">24 online</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Lado Direito - Serviços */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
                  Nossos Serviços
                </h2>
                <p className="text-muted-foreground text-lg">
                  Soluções completas para levar seu negócio ao próximo nível.
                </p>
              </motion.div>

              <div className="space-y-4">
                {SERVICOS.map((servico, index) => (
                  <motion.div
                    key={servico.titulo}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group flex items-start gap-4 p-4 rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <servico.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {servico.titulo}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {servico.descricao}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-8"
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
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
