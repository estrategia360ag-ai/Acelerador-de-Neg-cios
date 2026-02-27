import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Gift, Users, FileText } from 'lucide-react';
import { Button } from './Button';

const bonuses = [
  { icon: <Users size={18} />, text: "Comunidade Exclusiva de Empreendedores" },
  { icon: <FileText size={18} />, text: "Planilha de Cálculo de ROI e Lucro" },
  { icon: <Gift size={18} />, text: "Checklist de Configuração de Conta" }
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              OFERTA <span className="text-brand-primary">ESPECIAL</span> DE LANÇAMENTO
            </h2>
            <p className="text-xl text-zinc-400">
              Aproveite o preço promocional e comece a vender hoje mesmo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">O que você leva:</h3>
              <ul className="space-y-4">
                {[
                  "Acesso vitalício ao treinamento",
                  "Todas as atualizações futuras",
                  "Suporte direto na plataforma",
                  "Certificado de conclusão"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                      <Check size={12} className="text-brand-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="p-6 rounded-3xl bg-brand-zinc-900 border border-brand-primary/20">
                <p className="text-brand-primary font-bold mb-4 flex items-center gap-2">
                  <Gift size={20} /> BÔNUS EXCLUSIVOS:
                </p>
                <div className="space-y-3">
                  {bonuses.map((bonus, i) => (
                    <div key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
                      {bonus.icon}
                      {bonus.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-brand-primary text-white shadow-2xl shadow-brand-primary/40 relative"
            >
              <div className="absolute -top-4 right-8 bg-brand-accent text-brand-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                MAIS VENDIDO
              </div>
              
              <p className="text-white/80 font-bold mb-2 line-through">De R$ 497,00</p>
              <p className="text-white/90 text-lg font-medium mb-1">Por apenas 12x de</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-7xl font-black tracking-tighter">19,70</span>
              </div>
              <p className="text-white/80 text-sm mb-8">ou R$ 197,00 à vista no PIX ou Cartão.</p>

              <Button variant="secondary" size="xl" className="w-full mb-8">
                QUERO ME INSCREVER AGORA
              </Button>

              <div className="flex items-center justify-center gap-4 text-white/80 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={20} />
                7 DIAS DE GARANTIA INCONDICIONAL
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
