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
  ShoppingBag,
  Bot,
  ArrowUpRight
} from 'lucide-react';

const RESULTADOS = [
  {
    icon: TrendingUp,
    titulo: 'Aumento de Vendas',
    valor: '300%',
    descricao: 'Crescimento médio nos primeiros 6 meses.',
  },
  {
    icon: Users,
    titulo: 'Mais Clientes',
    valor: '150+',
    descricao: 'Novos leads qualificados por mês.',
  },
  {
    icon: Zap,
    titulo: 'ROI Garantido',
    valor: '100%',
    descricao: 'Retorno comprovado com métricas claras.',
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
  {
    icon: Bot,
    titulo: 'Automação',
    descricao: 'Soluções com inteligência artificial para automatizar processos e aumentar eficiência.',
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
              Transforme sua presença<br />digital em resultados
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Com as ferramentas certas, seu negócio pode alcançar novos clientes, 
              aumentar vendas e crescer de forma consistente.
            </p>
          </div>

          {/* Cards de Resultados - Silver Premium Style */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {RESULTADOS.map((resultado, index) => (
              <motion.div
                key={resultado.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-500"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <resultado.icon className="w-6 h-6 text-white/70" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2">{resultado.valor}</div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">
                    {resultado.titulo}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {resultado.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Elementos Visuais - Silver Premium */}
          <div className="relative h-[400px] lg:h-[450px] max-w-5xl mx-auto">
            
            {/* Luz de fundo sutil */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/10 rounded-full blur-[150px]"
            />

            {/* Layout em grid */}
            <div className="relative h-full grid grid-cols-12 gap-6 items-center">
              
              {/* Coluna Esquerda - Gráfico */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="col-span-12 md:col-span-4 lg:col-span-3"
              >
                <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white/70" />
                      </div>
                      <span className="text-sm font-medium text-white/80">Vendas</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
                      <ArrowUpRight className="w-3 h-3 text-white/70" />
                      <span className="text-xs font-semibold text-white/70">+127%</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-28">
                    {[25, 40, 30, 55, 45, 70, 60, 85, 75, 95, 88, 100].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={isVisible ? { height: `${height}%` } : {}}
                        transition={{ duration: 0.6, delay: 0.6 + i * 0.04 }}
                        className="flex-1 bg-gradient-to-t from-white/20 to-white/50 rounded-t-sm"
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
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
                  {/* Browser bar */}
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/15" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                    <div className="flex-1 ml-2">
                      <div className="bg-white/5 rounded-lg px-4 py-1.5 text-xs text-white/40 max-w-[180px] flex items-center gap-2 border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-white/30" />
                        seusite.com.br
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-4 bg-gradient-to-r from-white/20 to-white/5 rounded-full w-32" />
                      <div className="h-4 bg-white/5 rounded-full w-20" />
                    </div>
                    <div className="space-y-2.5 mb-6">
                      <div className="h-2.5 bg-white/10 rounded-full w-full" />
                      <div className="h-2.5 bg-white/8 rounded-full w-4/5" />
                      <div className="h-2.5 bg-white/5 rounded-full w-3/5" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 bg-white/[0.03] rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/[0.06] transition-colors">
                        <Globe className="w-6 h-6 text-white/40" />
                      </div>
                      <div className="h-20 bg-white/[0.03] rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/[0.06] transition-colors">
                        <ShoppingBag className="w-6 h-6 text-white/40" />
                      </div>
                      <div className="h-20 bg-white/[0.03] rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/[0.06] transition-colors">
                        <Users className="w-6 h-6 text-white/40" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Notificação flutuante */}
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
                  className="absolute top-4 right-1/4 rounded-2xl px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white/80" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/90">Nova venda!</p>
                      <p className="text-[10px] text-white/50">R$ 297,00</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Coluna Direita - Stats */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4"
              >
                {/* Card de Receita */}
                <div className="p-5 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white/70" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40">Receita Total</p>
                      <p className="text-2xl font-bold text-white">R$ 48.5k</p>
                      <p className="text-xs text-white/50 flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" />
                        +23% este mês
                      </p>
                    </div>
                  </div>
                </div>

                {/* Usuários Online */}
                <div className="p-5 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <div className="w-9 h-9 rounded-full bg-white/20 border-2 border-background flex items-center justify-center text-[10px] font-bold text-white/80">J</div>
                      <div className="w-9 h-9 rounded-full bg-white/15 border-2 border-background flex items-center justify-center text-[10px] font-bold text-white/70">M</div>
                      <div className="w-9 h-9 rounded-full bg-white/10 border-2 border-background flex items-center justify-center text-[10px] font-bold text-white/60">A</div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/90">24 online</p>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80" />
                        </span>
                        <span className="text-xs text-white/50">ao vivo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300"
            >
              <CheckCircle2 className="w-5 h-5" />
              Quero crescer meu negócio
            </a>
          </motion.div>
        </motion.div>

        {/* Seção de Serviços */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mt-40"
        >
          {/* Título */}
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
              className="text-white/50 text-lg max-w-xl mx-auto"
            >
              Soluções completas para levar seu negócio ao próximo nível.
            </motion.p>
          </div>

          {/* Grid de Serviços - Silver Premium */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICOS.map((servico, index) => (
              <motion.div
                key={servico.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-500 cursor-pointer"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <servico.icon className="w-7 h-7 text-white/60 group-hover:text-white/80 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                    {servico.titulo}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                    {servico.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
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
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg border border-white/20 bg-white text-background hover:bg-white/90 hover:scale-105 transition-all duration-300"
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
