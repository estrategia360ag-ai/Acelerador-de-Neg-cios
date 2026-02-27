import React from 'react';
import { motion } from 'motion/react';
import { Rocket, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 bg-brand-zinc-900">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary mb-8"
          >
            <Rocket className="stroke-[url(#ig-gradient)]" size={16} />
            <span className="text-sm font-bold uppercase tracking-widest">Acelerador de Negócios</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] mb-8 tracking-tighter"
          >
            DOMINE O TRÁFEGO PAGO DO SEU <span className="text-brand-primary">PRÓPRIO NEGÓCIO</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            O método prático para empreendedores que querem vender todos os dias sem depender de agências caras ou gestores que não entendem o seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/quiz" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-[#13ec37] hover:bg-[#0fb82a] text-black font-bold">
                FAZER DIAGNÓSTICO GRATUITO
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12"
          >
            {[
              "Sem depender de agências",
              "Foco total em vendas reais",
              "Método 100% prático"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <CheckCircle size={20} />
                </div>
                <span className="text-lg font-semibold text-zinc-200">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
