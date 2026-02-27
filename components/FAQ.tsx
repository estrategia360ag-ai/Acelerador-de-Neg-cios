import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Preciso de conhecimento prévio em marketing?",
    answer: "Não! O Acelerador de Negócios foi desenhado justamente para quem está começando do zero absoluto. Vou te pegar pela mão e mostrar cada clique necessário."
  },
  {
    question: "Quanto tempo demora para ter resultados?",
    answer: "Isso depende da sua execução, mas temos alunos que já nas primeiras 48 horas após subir a primeira campanha já começaram a receber contatos de clientes."
  },
  {
    question: "Serve para o meu tipo de negócio?",
    answer: "Sim! Se você vende um produto ou serviço e quer atrair mais clientes através da internet, o método funciona para você. Seja você um prestador de serviços, dono de loja física ou infoprodutor."
  },
  {
    question: "O acesso ao curso é vitalício?",
    answer: "Sim! Uma vez que você se inscreve, o acesso é seu para sempre, incluindo todas as futuras atualizações do treinamento."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Temos uma área de membros exclusiva onde você pode tirar todas as suas dúvidas abaixo de cada aula. Nossa equipe responde diariamente."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-brand-zinc-900 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            DÚVIDAS <span className="text-brand-primary">FREQUENTES</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Ainda tem alguma dúvida? Confira as respostas abaixo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="rounded-3xl bg-black border border-white/5 overflow-hidden transition-all hover:border-brand-primary/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center gap-4"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
