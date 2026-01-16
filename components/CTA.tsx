
import React from 'react';
import Button from './Button';
import Section from './Section';
import { CheckCircle2, AlertTriangle, MessageCircle, Calendar, MapPin } from 'lucide-react';

const CTA: React.FC = () => {
  const handleWhatsapp = () => {
    const mensagem = encodeURIComponent("Olá Ricardo! Vi o site do DBK CAMP 2026 e gostaria de mais informações sobre como garantir minha participação.");
    window.open(`https://wa.me/5585988507496?text=${mensagem}`, "_blank");
  };

  return (
    <div id="oferta" className="bg-gradient-to-b from-slate-950 to-brand-teal/20 border-t border-slate-800">
      <Section>
        <div className="max-w-4xl mx-auto bg-slate-900/80 rounded-2xl p-8 md:p-16 text-center border border-slate-700 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[600px] bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

          <span className="text-brand-orange font-bold tracking-[0.3em] uppercase text-sm mb-4 block relative z-10">Viva essa experiência única</span>
          <h2 className="text-5xl md:text-7xl font-display text-white mb-8 relative z-10 uppercase leading-none">
            Domine a Arte. <br/> <span className="text-brand-orange">Renove sua Energia.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-10 relative z-10">
            <div className="bg-slate-950 px-6 py-4 rounded-2xl border border-slate-800 flex items-center gap-4 text-left">
              <div className="bg-brand-orange/10 p-2 rounded-xl">
                <Calendar className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <span className="block text-slate-400 text-xs uppercase tracking-wide">Data</span>
                <strong className="text-white text-lg font-display tracking-wide uppercase">06 a 08 Março 2026</strong>
              </div>
            </div>
             <div className="bg-slate-950 px-6 py-4 rounded-2xl border border-slate-800 flex items-center gap-4 text-left">
              <div className="bg-brand-orange/10 p-2 rounded-xl">
                <MapPin className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <span className="block text-slate-400 text-xs uppercase tracking-wide">Local</span>
                <strong className="text-white text-lg font-display tracking-wide uppercase">Pousada Kiriri, Itarema</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12 relative z-10">
             <div className="flex items-center gap-2 text-slate-300">
               <CheckCircle2 className="w-5 h-5 text-brand-tealLight" />
               <span className="uppercase text-sm tracking-wider font-medium">Todas as equipes e graduações</span>
             </div>
             <div className="flex items-center gap-2 text-slate-300">
               <CheckCircle2 className="w-5 h-5 text-brand-tealLight" />
               <span className="uppercase text-sm tracking-wider font-medium">Metodologia Exclusiva</span>
             </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-10 inline-flex flex-col items-center gap-3 text-red-200 text-sm md:text-base relative z-10 mx-auto max-w-lg">
             <div className="flex items-center gap-3">
               <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
               <p className="font-bold uppercase tracking-wide">Vagas Estritamente Limitadas</p>
             </div>
             <p className="opacity-80">São apenas <strong>12 suítes exclusivas</strong> para preservar a qualidade da experiência. O lote promocional encerra em breve.</p>
          </div>

          <div className="relative z-10">
            <Button onClick={handleWhatsapp} variant="whatsapp" className="w-full md:w-auto text-xl px-12 py-6 font-display uppercase tracking-wider">
              <MessageCircle className="w-7 h-7 mr-2" />
              Garantir minha participação
            </Button>
            <div className="mt-6 flex flex-col items-center">
               <span className="text-slate-500 text-sm uppercase mb-1">Informações e Inscrições:</span>
               <strong className="text-white text-xl">Ricardo Costa: (85) 9 8850.7496</strong>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CTA;
