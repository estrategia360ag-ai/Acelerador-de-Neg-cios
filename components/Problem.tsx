import React from 'react';
import { motion } from 'motion/react';
import { XCircle, TrendingDown, Clock, Wallet } from 'lucide-react';

const pains = [
  {
    icon: <TrendingDown className="text-red-500" />,
    title: "Agências que não entregam",
    description: "Cansado de pagar mensalidades caras para agências que só mandam relatórios bonitos mas não trazem vendas reais?"
  },
  {
    icon: <Wallet className="text-red-500" />,
    title: "Dinheiro jogado no lixo",
    description: "Você tenta fazer anúncios por conta própria, mas sente que está apenas doando dinheiro para o Mark Zuckerberg?"
  },
  {
    icon: <Clock className="text-red-500" />,
    title: "Falta de Tempo e Clareza",
    description: "O Gerenciador de Anúncios parece uma cabine de avião e você não sabe por onde começar para ter lucro?"
  }
];

export const Problem = () => {
  return (
    <section className="py-24 bg-slate-50 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 uppercase tracking-tighter">
            ATÉ QUANDO VOCÊ VAI <span className="text-red-500">QUEIMAR DINHEIRO</span> COM ANÚNCIOS QUE NÃO VENDEM?
          </h2>
          <p className="text-xl text-zinc-600">
            A maioria dos empreendedores comete o erro de delegar o que há de mais importante no negócio: a aquisição de clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-white border border-zinc-200 hover:border-red-500/30 transition-all group shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">{pain.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
