import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../src/lib/utils';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4',
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fdf497" />
                  <stop offset="5%" stopColor="#fdf497" />
                  <stop offset="45%" stopColor="#fd5949" />
                  <stop offset="60%" stopColor="#d6249f" />
                  <stop offset="90%" stopColor="#285AEB" />
                </linearGradient>
              </defs>
            </svg>
            <Rocket className="stroke-[url(#ig-gradient)]" size={28} />
          </div>
          <span className="text-xl font-black text-white uppercase tracking-tighter">Acelerador de <span className="text-brand-primary">Negócios</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/quiz">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              Fazer Diagnóstico
            </Button>
          </Link>
          <Button>
            INSCREVA-SE AGORA
          </Button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link to="/quiz" onClick={() => setIsMenuOpen(false)}>
            <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
              Fazer Diagnóstico
            </Button>
          </Link>
          <Button size="lg" className="w-full">
            INSCREVA-SE AGORA
          </Button>
        </div>
      )}
    </header>
  );
};
