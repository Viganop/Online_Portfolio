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
          className="max-w-6xl mx-auto mb-16"
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

          {/* Elementos Visuais - Abaixo dos cards de resultados */}
          <div className="relative h-[380px] lg:h-[420px] max-w-5xl mx-auto mt-8">
            
            {/* Luzes de fundo - mais sutis */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.35, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[120px]"
            />

            {/* Layout em grid para melhor alinhamento */}
            <div className="relative h-full grid grid-cols-12 gap-6 items-center">
              
              {/* Coluna Esquerda - Gráfico de Vendas */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="col-span-12 md:col-span-4 lg:col-span-3"
              >
                <div className="bg-card/60 backdrop-blur-xl rounded-2xl border border-white/10 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-green-500/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">Vendas</span>
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
                        transition={{ duration: 0.6, delay: 0.6 + i * 0.04 }}
                        className="flex-1 bg-gradient-to-t from-green-500/60 to-green-400 rounded-t-md"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Coluna Central - Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="col-span-12 md:col-span-4 lg:col-span-6"
              >
                <div className="bg-card/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-card/30">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 ml-3">
                      <div className="bg-white/5 rounded-lg px-3 py-1 text-xs text-muted-foreground max-w-[160px] flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500/60" />
                        seusite.com.br
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-4 bg-gradient-to-r from-primary/40 to-primary/20 rounded-full w-28" />
                      <div className="h-4 bg-white/5 rounded-full w-16" />
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="h-2 bg-white/10 rounded-full w-full" />
                      <div className="h-2 bg-white/10 rounded-full w-4/5" />
                      <div className="h-2 bg-white/10 rounded-full w-3/5" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/10 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-primary/60" />
                      </div>
                      <div className="h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl border border-blue-500/10 flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-blue-500/60" />
                      </div>
                      <div className="h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl border border-purple-500/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-purple-500/60" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Notificações flutuantes sobre o dashboard */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { 
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.95],
                  } : {}}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 2,
                    delay: 1
                  }}
                  className="absolute top-4 right-1/4 bg-green-500 rounded-xl px-3 py-2 shadow-lg shadow-green-500/20"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <div>
                      <p className="text-xs font-bold text-white">Nova venda!</p>
                      <p className="text-[10px] text-white/80">R$ 297,00</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Coluna Direita - Receita + Usuários */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4"
              >
                {/* Card de Receita */}
                <div className="bg-card/60 backdrop-blur-xl rounded-2xl border border-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Receita Total</p>
                      <p className="text-xl font-bold text-foreground">R$ 48.5k</p>
                      <p className="text-xs text-green-500 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        +23% este mês
                      </p>
                    </div>
                  </div>
                </div>

                {/* Usuários Online */}
                <div className="bg-card/60 backdrop-blur-xl rounded-2xl border border-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-card flex items-center justify-center text-[10px] font-bold text-white">J</div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-500/60 border-2 border-card flex items-center justify-center text-[10px] font-bold text-white">M</div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-500/60 border-2 border-card flex items-center justify-center text-[10px] font-bold text-white">A</div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">24 online</p>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-green-500">ao vivo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Seção de Serviços */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mt-32"
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

          {/* Grid de Serviços */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICOS.map((servico, index) => (
              <motion.div
                key={servico.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300 cursor-pointer text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <servico.icon className="w-8 h-8 text-primary" />
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
