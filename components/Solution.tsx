import React from 'react';
import { motion } from 'motion/react';
import { Check, Target, Zap, BarChart3 } from 'lucide-react';
import { Button } from './Button';

const benefits = [
  {
    icon: <Target className="text-brand-primary" />,
    title: "Estratégia de Guerra",
    description: "Aprenda a encontrar o público certo que já quer comprar o seu produto ou serviço."
  },
  {
    icon: <Zap className="text-brand-primary" />,
    title: "Execução Rápida",
    description: "Nada de teorias chatas. É abrir o gerenciador e configurar suas campanhas em minutos."
  },
  {
    icon: <BarChart3 className="text-brand-primary" />,
    title: "Escala com Lucro",
    description: "Saiba exatamente quanto investir para ter o retorno que você deseja no final do mês."
  }
];

export const Solution = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">
                O MÉTODO QUE VAI <span className="text-brand-primary">TURBINAR</span> SUAS VENDAS
              </h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                O Acelerador de Negócios não é um curso de marketing digital genérico. É um treinamento focado em resultados imediatos para quem não tem tempo a perder.
              </p>

              <div className="space-y-6 mb-12">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{benefit.title}</h4>
                      <p className="text-zinc-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full sm:w-auto">
                QUERO O MÉTODO AGORA
              </Button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-primary/20"
            >
              <img 
                src="https://picsum.photos/seed/marketing/800/600" 
                alt="Dashboard de Resultados" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 rounded-2xl bg-brand-zinc-900/90 backdrop-blur-md border border-white/10">
                  <p className="text-brand-primary font-bold mb-1">RESULTADO REAL</p>
                  <p className="text-white text-lg font-semibold">"Em 15 dias recuperei o investimento e tripliquei minhas vendas mensais."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
