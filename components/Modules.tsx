import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const Modules = () => {
  return (
    <section className="py-24 bg-brand-zinc-900 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            A ESCOLHA É <span className="text-brand-primary">SUA</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Compare como é o seu negócio hoje e como ele pode ser com o Acelerador de Negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Negative Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[40px] bg-black border-2 border-red-500/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <XCircle size={120} className="text-red-500" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-red-500 mb-8 uppercase tracking-tighter flex items-center gap-3">
              <XCircle size={32} />
              Sem investir em tráfego:
            </h3>
            
            <ul className="space-y-6">
              {[
                "Você fica refém do alcance orgânico",
                "Produz conteúdo todos os dias sem garantia de retorno",
                "O faturamento oscila e você nunca sabe quanto vai entrar",
                "Seus concorrentes dominam a atenção do seu público"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-zinc-400 text-lg">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Positive Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[40px] bg-brand-primary/5 border-2 border-brand-primary relative overflow-hidden group shadow-2xl shadow-brand-primary/10"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <CheckCircle2 size={120} className="text-brand-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-brand-primary mb-8 uppercase tracking-tighter flex items-center gap-3">
              <CheckCircle2 size={32} />
              Com anúncios locais ativos:
            </h3>

            <ul className="space-y-6">
              {[
                "Sua empresa é vista diariamente por pessoas da sua região",
                "Você não depende de postar todos os dias",
                "O faturamento se torna estável e previsível",
                "Você decide exatamente quem será impactado"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white text-lg font-medium">
                  <CheckCircle2 size={20} className="text-brand-primary mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
