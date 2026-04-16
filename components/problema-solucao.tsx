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
  Bot,
  ArrowUpRight,
  BarChart3
} from 'lucide-react';

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
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
              Transforme sua presença<br />digital em resultados
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Com as ferramentas certas, seu negócio pode alcançar novos clientes, 
              aumentar vendas e crescer de forma consistente.
            </p>
          </div>

          {/* Bento Grid - Métricas e Elementos Visuais Integrados */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            
            {/* Card Grande - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-12 lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
            >
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
              {/* Dashboard Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/40 text-sm mb-1">Receita do mês</p>
                    <p className="text-3xl lg:text-4xl font-bold text-white">R$ 48.520</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                    <ArrowUpRight className="w-4 h-4 text-white/70" />
                    <span className="text-sm font-semibold text-white/70">+127%</span>
                  </div>
                </div>
                
                {/* Chart */}
                <div className="flex items-end gap-2 h-32 mb-6">
                  {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100, 92, 85].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={isVisible ? { height: `${height}%` } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.04 }}
                      className="flex-1 bg-gradient-to-t from-white/10 to-white/40 rounded-t-md"
                    />
                  ))}
                </div>
                
                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <p className="text-white/40 text-xs mb-1">Visitantes</p>
                    <p className="text-xl font-bold text-white">12.4k</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <p className="text-white/40 text-xs mb-1">Conversão</p>
                    <p className="text-xl font-bold text-white">4.8%</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <p className="text-white/40 text-xs mb-1">Vendas</p>
                    <p className="text-xl font-bold text-white">156</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Coluna Direita - Métricas Empilhadas */}
            <div className="col-span-12 lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
              
              {/* Métrica 1 - Aumento de Vendas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <TrendingUp className="w-5 h-5 text-white/60" />
                    </div>
                    <p className="text-white/40 text-sm mb-1">Aumento de Vendas</p>
                    <p className="text-3xl font-black text-white">300%</p>
                  </div>
                  <p className="text-white/30 text-xs max-w-[80px] text-right">em 6 meses</p>
                </div>
              </motion.div>

              {/* Métrica 2 - Mais Clientes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-white/60" />
                    </div>
                    <p className="text-white/40 text-sm mb-1">Novos Clientes</p>
                    <p className="text-3xl font-black text-white">150+</p>
                  </div>
                  <p className="text-white/30 text-xs max-w-[80px] text-right">leads / mês</p>
                </div>
              </motion.div>

              {/* Métrica 3 - ROI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group col-span-2 lg:col-span-1 p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm mb-1">ROI Garantido</p>
                      <p className="text-3xl font-black text-white">100%</p>
                    </div>
                  </div>
                  <p className="text-white/30 text-sm">Retorno comprovado</p>
                </div>
              </motion.div>

            </div>

            {/* Notificação flutuante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { 
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 0.95],
                y: [20, 0, 0, -10]
              } : {}}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity, 
                repeatDelay: 3,
                delay: 1
              }}
              className="absolute top-1/3 right-[10%] hidden lg:flex rounded-2xl px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-xl"
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

          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300"
            >
              <BarChart3 className="w-5 h-5" />
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

          {/* Grid de Serviços - Silver Premium Melhorado */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICOS.map((servico, index) => (
              <motion.div
                key={servico.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 p-7">
                  {/* Icon with subtle ring on hover */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300">
                      <servico.icon className="w-6 h-6 text-white/50 group-hover:text-white/80 transition-colors duration-300" />
                    </div>
                    {/* Glow behind icon on hover */}
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-white/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white/90 mb-3 group-hover:text-white transition-colors duration-300">
                    {servico.titulo}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                    {servico.descricao}
                  </p>
                  
                  {/* Arrow indicator */}
                  <div className="mt-5 flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-all duration-300">
                    <span className="text-xs font-medium">Saiba mais</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
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
