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
  DollarSign,
  ShoppingBag
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
          className="max-w-7xl mx-auto mt-32"
        >
          {/* Título Centralizado */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4"
            >
              Nossos Serviços
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto"
            >
              Soluções completas para levar seu negócio ao próximo nível.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Lado Esquerdo - Visualização Animada (sem card) */}
            <div className="relative h-[550px] lg:h-[620px]">
              
              {/* Luzes de fundo maiores e mais vibrantes */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-72 h-72 bg-primary/40 rounded-full blur-[100px]"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/30 rounded-full blur-[120px]"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.25, 0.4, 0.25]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/30 rounded-full blur-[80px]"
              />
              <motion.div
                animate={{ 
                  scale: [1.1, 0.9, 1.1],
                  opacity: [0.2, 0.35, 0.2]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-20 left-10 w-48 h-48 bg-green-500/20 rounded-full blur-[60px]"
              />

              {/* Simulação de Dashboard/Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-4 left-4 right-4 bg-card/70 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/20 overflow-hidden"
              >
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-card/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-white/5 rounded-lg px-4 py-1.5 text-xs text-muted-foreground max-w-[180px] flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      seusite.com.br
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-4 bg-gradient-to-r from-primary/40 to-primary/20 rounded-full w-32" />
                    <div className="h-4 bg-white/5 rounded-full w-20" />
                  </div>
                  <div className="space-y-2 mb-5">
                    <div className="h-2.5 bg-white/10 rounded-full w-full" />
                    <div className="h-2.5 bg-white/10 rounded-full w-4/5" />
                    <div className="h-2.5 bg-white/10 rounded-full w-3/5" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary/60" />
                    </div>
                    <div className="h-20 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl border border-blue-500/10 flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-blue-500/60" />
                    </div>
                    <div className="h-20 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl border border-purple-500/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-500/60" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Gráfico de Vendas Grande */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-20 left-0 bg-card/80 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-2xl shadow-black/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Vendas Mensais</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-500/10 px-2.5 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-xs font-bold text-green-500">+127%</span>
                  </div>
                </div>
                <div className="flex items-end gap-1.5 h-24">
                  {[25, 40, 30, 55, 45, 70, 60, 85, 75, 95, 88, 100].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={isVisible ? { height: `${height}%` } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
                      className="w-5 bg-gradient-to-t from-green-500/60 to-green-400 rounded-t-md"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Card de Receita */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-4 right-0 bg-card/80 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl shadow-black/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Receita Total</p>
                    <p className="text-2xl font-bold text-foreground">R$ 48.5k</p>
                    <p className="text-xs text-green-500 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +23% este mês
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Notificações de Vendas */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { 
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.9],
                  y: [20, 0, 0, -10]
                } : {}}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatDelay: 2,
                  delay: 1.2
                }}
                className="absolute top-[200px] right-4 bg-green-500 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl shadow-green-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Nova venda!</p>
                    <p className="text-[10px] text-white/80">R$ 297,00 - Produto X</p>
                  </div>
                </div>
              </motion.div>

              {/* Segunda notificação */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { 
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.9],
                  y: [20, 0, 0, -10]
                } : {}}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatDelay: 2,
                  delay: 3.5
                }}
                className="absolute top-[260px] right-8 bg-blue-500 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl shadow-blue-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Novo cliente!</p>
                    <p className="text-[10px] text-white/80">Maria cadastrou-se</p>
                  </div>
                </div>
              </motion.div>

              {/* Usuários Online - Flutuante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute top-[180px] left-0 bg-card/80 backdrop-blur-xl rounded-xl px-4 py-3 border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-card flex items-center justify-center text-[10px] font-bold text-white">J</div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-500/60 border-2 border-card flex items-center justify-center text-[10px] font-bold text-white">M</div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-purple-500/60 border-2 border-card flex items-center justify-center text-[10px] font-bold text-white">A</div>
                    <div className="w-7 h-7 rounded-full bg-card border-2 border-card flex items-center justify-center text-[10px] font-medium text-muted-foreground">+12</div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">24 visitantes</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] text-green-500">ao vivo agora</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Lado Direito - Serviços */}
            <div>
              <div className="space-y-4">
                {SERVICOS.map((servico, index) => (
                  <motion.div
                    key={servico.titulo}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <servico.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                        {servico.titulo}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {servico.descricao}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* CTA Centralizado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-16 text-center"
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30"
            >
              <CheckCircle2 className="w-6 h-6" />
              Quero crescer meu negócio
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
