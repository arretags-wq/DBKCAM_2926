
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Waves, Utensils, Wind, MapPin, Coffee, ChevronDown, Globe } from 'lucide-react';

const Venue: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="pousada" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Coluna de Texto */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Hospedagem Exclusiva</span>
            <h2 className="text-5xl md:text-7xl font-display text-white mt-4 mb-8 uppercase leading-tight tracking-tight">
              Pousada Kiriri: <br/> Seu Santuário
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-xl font-light">
              Localizada na paradisíaca <strong>Praia de Torrões – Itarema/CE</strong>, a Pousada Kiriri é parte essencial da experiência DBK. Um ambiente de paz, conforto e sofisticação projetado para sua total renovação.
            </p>
            
            <div className="grid grid-cols-2 gap-x-10 gap-y-12 mb-16">
              {[
                { icon: Waves, label: "Vista Mar", detail: "Suítes exclusivas" },
                { icon: Wind, label: "Lazer", detail: "Piscina e áreas comuns" },
                { icon: Utensils, label: "Restaurante", detail: "Alta gastronomia local" },
                { icon: Coffee, label: "Conexão", detail: "Tranquilidade total" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <item.icon className="w-8 h-8 text-brand-orange" />
                  <div>
                    <h4 className="text-white font-bold uppercase font-display tracking-widest text-lg">{item.label}</h4>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-semibold">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-10 border-t border-white/10">
              <div className="flex items-center gap-4 text-brand-orange">
                 <MapPin className="w-6 h-6 shrink-0" />
                 <span className="font-bold uppercase tracking-[0.2em] text-sm leading-tight">Praia de Torrões, Itarema - CE</span>
              </div>
              <a 
                href="https://pousadakiriri.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-4 text-white/50 hover:text-brand-orange transition-all group"
              >
                 <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform shrink-0" />
                 <span className="font-bold tracking-[0.3em] text-xs uppercase border-b border-white/10 group-hover:border-brand-orange pb-1 transition-all">POUSADAKIRIRI.COM.BR</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Galeria Harmonizada 1-Top-2-Bottom */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl border border-white/5">
               <img 
                src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/abertura.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9hYmVydHVyYS53ZWJwIiwiaWF0IjoxNzY4NTAyNjc5LCJleHAiOjE4MDAwMzg2Nzl9.stvSJycXLOZyHa3KgQwR2P8lKhlyB03HnmcilOCMD1U" 
                alt="Vista da Ponte Kiriri" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-white/5">
                 <img 
                  src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/pousada-kiriri-entrada.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9wb3VzYWRhLWtpcmlyaS1lbnRyYWRhLmpwZyIsImlhdCI6MTc2ODUwMDU2NSwiZXhwIjoxODAwMDM2NTY1fQ.DzINARfp7WsXjhe7nJf6tDlHgWdN4QRr_CNfMdCUHLM" 
                  alt="Entrada Pousada" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                />
              </div>

              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-white/5">
                 <img 
                  src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/Pousada-Kiriri-3009_3.1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9Qb3VzYWRhLUtpcmlyaS0zMDA5XzMuMS5wbmciLCJpYXQiOjE3Njg0OTk5OTAsImV4cCI6MTgwMDAzNTk5MH0.TGxBihsdS-RH4wiEbzy7g_APXfWHTuonFQUuagVUQFU" 
                  alt="Pousada à Noite" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity"
        onClick={scrollToNext}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </Section>
  );
};

export default Venue;
