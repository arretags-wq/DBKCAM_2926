
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Quote, ChevronDown } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marcelo",
    text: "O Camp DBK é uma data marcada no meu calendário anual... é um momento de muito aprendizado, lazer e confraternização.",
    role: "Participante Recorrente"
  },
  {
    id: 2,
    name: "Aluno DBK",
    text: "Uma experiência que me permitiu conhecer novos lugares e pessoas, trocar experiências e aprimorar meu jiu-jitsu.",
    role: "Faixa Roxa"
  },
  {
    id: 3,
    name: "R. Selva",
    text: "Lugar paradisíaco, pousada de referência e programação super bem elaborada.",
    role: "Participante 2024"
  }
];

const Testimonials: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="depoimentos" className="bg-slate-900 border-y border-slate-800">
      <Section className="relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-white uppercase tracking-wide">
            Histórias de quem já viveu
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-slate-950 p-8 rounded-2xl relative border border-slate-800 hover:border-brand-teal/30 transition-all">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-800" />
              <p className="text-slate-300 mb-6 relative z-10 italic font-light">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold font-display">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">{item.name}</h4>
                  <p className="text-slate-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden h-64 relative shadow-2xl">
          <img 
            src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/gelera.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9nZWxlcmEuanBlZyIsImlhdCI6MTc2ODQ5ODk0NiwiZXhwIjoxODAwMDM0OTQ2fQ.aoZ7-OuCBXU_gIFUeWFqerG6V4eTr74z_LUnloW36l4" 
            alt="Grupo DBK Camp" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="bg-slate-950/90 text-white px-8 py-3 rounded-full backdrop-blur-md text-sm font-bold uppercase tracking-[0.2em] font-display border border-white/10">
               Junte-se à Família
             </span>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          onClick={scrollToNext}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </Section>
    </div>
  );
};

export default Testimonials;
