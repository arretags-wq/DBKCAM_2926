
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Venue from './components/Venue';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  const whatsappMessage = encodeURIComponent("Olá Ricardo! Vi o site do DBK CAMP 2026 e gostaria de mais informações sobre como garantir minha participação.");
  const whatsappLink = `https://wa.me/5585988507496?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-gold-500 selection:text-slate-900 pb-20 md:pb-0">
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Venue />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      
      {/* Floating Action Button - Posicionado acima da barra fixa */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[140px] md:bottom-24 right-6 z-[60] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/30"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <SpeedInsights />
    </div>
  );
}

export default App;
