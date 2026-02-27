import React from 'react';
import { Rocket, Instagram, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 bg-[#0a0a0a] px-4 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="stroke-[url(#ig-gradient)]" size={32} />
              <span className="text-2xl font-black text-white uppercase tracking-tighter">Acelerador de <span className="text-brand-primary">Negócios</span></span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-8">
              O método prático para empreendedores que querem dominar o tráfego pago e vender todos os dias com lucro real.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-primary hover:bg-brand-primary/10 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-primary hover:bg-brand-primary/10 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brand-primary hover:bg-brand-primary/10 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Treinamento</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Módulos</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Bônus</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Área de Membros</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Políticas de Cookies</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Reembolso</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs">
            © 2026 Acelerador de Negócios. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <img src="https://picsum.photos/seed/payment/200/40" alt="Métodos de Pagamento" className="h-6 grayscale opacity-50" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
