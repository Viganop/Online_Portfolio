'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface Avaliacao {
  id: string;
  nome: string;
  cargo: string;
  empresa: string;
  foto: string;
  texto: string;
  estrelas: number;
}

const AVALIACOES: Avaliacao[] = [
  {
    id: '1',
    nome: 'Ana Carolina Silva',
    cargo: 'CEO',
    empresa: 'Moda Express',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    texto: 'Minha loja virtual ficou incrível! As vendas aumentaram 300% no primeiro mês. Atendimento excepcional e resultado além das expectativas.',
    estrelas: 5,
  },
  {
    id: '2',
    nome: 'Ricardo Mendes',
    cargo: 'Diretor',
    empresa: 'Tech Solutions',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    texto: 'O aplicativo desenvolvido revolucionou nosso atendimento ao cliente. Profissionalismo e qualidade do início ao fim do projeto.',
    estrelas: 5,
  },
  {
    id: '3',
    nome: 'Fernanda Costa',
    cargo: 'Proprietária',
    empresa: 'Bella Estética',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    texto: 'Finalmente tenho um site que representa meu negócio. Os clientes elogiam muito e os agendamentos online facilitaram tudo.',
    estrelas: 5,
  },
  {
    id: '4',
    nome: 'Marcos Oliveira',
    cargo: 'Fundador',
    empresa: 'Delivery Rápido',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    texto: 'O tráfego pago trouxe resultados impressionantes. Em 2 meses recuperamos todo o investimento e triplicamos os pedidos.',
    estrelas: 5,
  },
];

export function Avaliacoes() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('avaliacoes');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="avaliacoes" className="relative py-32">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="text-white/50 text-lg">
            A satisfação dos nossos clientes é o nosso maior orgulho. Confira alguns depoimentos de quem já transformou seu negócio.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {AVALIACOES.map((avaliacao, index) => (
            <motion.div
              key={avaliacao.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-white/10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(avaliacao.estrelas)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white/80 text-white/80" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                &ldquo;{avaliacao.texto}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={avaliacao.foto}
                  alt={avaliacao.nome}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10 grayscale"
                />
                <div>
                  <h4 className="font-semibold text-white/90 text-sm">
                    {avaliacao.nome}
                  </h4>
                  <p className="text-xs text-white/40">
                    {avaliacao.cargo}, {avaliacao.empresa}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
