import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Problem } from '../../components/Problem';
import { Solution } from '../../components/Solution';
import { Modules } from '../../components/Modules';
import { Pricing } from '../../components/Pricing';
import { FAQ } from '../../components/FAQ';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-brand-primary selection:text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Modules />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
