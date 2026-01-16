
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToContent = () => {
    document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroImageUrl = "https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/abertura.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9hYmVydHVyYS53ZWJwIiwiaWF0IjoxNzY4NDg3NzM4LCJleHAiOjE4MDAwMjM3Mzh9.tYHydJ-0_A_kDV3UVAOak2mjg2JkfzLPm_z6-KrA1Y4";

  return (
    <>
      <div className="relative w-full h-[90vh] md:h-[calc(100vh-88px)] flex flex-col justify-between overflow-hidden bg-slate-950">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img 
            src={heroImageUrl} 
            alt="DBK Camp Experience" 
            // @ts-ignore
            fetchpriority="high"
            loading="eager"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-60' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>

        {/* Top: Logo Area */}
        <div className="relative z-10 w-full pt-6 md:pt-12 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <img 
              src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/dbk_camp.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9kYmtfY2FtcC5zdmciLCJpYXQiOjE3Njg0MTYzODksImV4cCI6MTc5OTk1MjM4OX0.L-vYydtGQmmYY7E6_zZ3JyHQO3ffiN19C5q9s1Me7O0" 
              alt="DBK Camp 2026 Logo" 
              className="h-40 md:h-64 lg:h-72 w-auto object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
        </div>

        {/* Middle/Bottom: Main Text */}
        <div className="relative z-10 container mx-auto px-6 pb-12 flex flex-col items-center text-center mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-5xl"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-tight md:leading-[1.1] uppercase mb-6 drop-shadow-xl">
              Desperte seu potencial.<br />
              Reconecte sua essência.<br />
              Renove sua energia.
            </h2>

            <p className="text-lg md:text-2xl text-slate-200 font-light mb-8 tracking-wide drop-shadow-md max-w-3xl mx-auto">
              Integre o alto desempenho dos tatames ao equilíbrio físico e mental que só o contato com a natureza pode oferecer.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-brand-orange font-bold uppercase tracking-widest text-xs md:text-base">
              <span className="bg-brand-orange/10 px-3 py-1 rounded-lg">Base técnica sólida</span>
              <span className="bg-brand-orange/10 px-3 py-1 rounded-lg">Mente blindada</span>
              <span className="bg-brand-orange/10 px-3 py-1 rounded-lg">Natureza exuberante</span>
            </div>

            <div className="mb-8">
              <Button onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })} className="bg-brand-orange hover:bg-orange-500 text-white border-none text-lg px-12 py-5 rounded-2xl">
                GARANTIR MINHA VAGA
              </Button>
            </div>
            
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
              onClick={scrollToContent}
            >
              <ChevronDown className="w-8 h-8 text-white mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fixed Bottom Info Bar - Ultra-compact on Mobile */}
      <div className="fixed bottom-0 left-0 z-50 bg-brand-teal text-white w-full border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.4)] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-1.5 md:py-3">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-8">
            
            {/* Left/Center Group: Date, Location and Contact side-by-side */}
            <div className="flex flex-row items-center gap-2.5 md:gap-8 flex-1 min-w-0">
              {/* Compact Date Box */}
              <div className="border-r border-white/10 pr-2.5 md:pr-10 shrink-0">
                <span className="font-display text-xl md:text-4xl leading-none block">06-08</span>
                <span className="text-[7px] md:text-[10px] tracking-widest uppercase font-light opacity-80 block whitespace-nowrap text-center">Mar | 2026</span>
              </div>
              
              {/* Info Group: Location and Contact integrated */}
              <div className="min-w-0 flex-1">
                <strong className="font-bold text-[9px] md:text-base leading-none uppercase tracking-wide truncate block">Pousada Kiriri – Itarema/CE</strong>
                <div className="flex items-center gap-2 mt-0.5 md:mt-1">
                  <span className="text-brand-orange font-bold text-[11px] md:text-lg leading-none whitespace-nowrap">(85) 98850.7496</span>
                  <span className="hidden xs:inline text-[8px] md:text-xs opacity-50 uppercase tracking-tighter whitespace-nowrap">Ricardo Costa</span>
                </div>
              </div>
            </div>
            
            {/* Right Group: Logo */}
            <div className="shrink-0">
               <img 
                 src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/dbk_logo_wbg.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9kYmtfbG9nb193Ymcuc3ZnIiwiaWF0IjoxNzY4NDE1MjQ3LCJleHAiOjE3OTk5NTEyNDd9._Wa5ZtDJ8TzScGHv2-vntYEJpgGDYhSv772_rehs3VU" 
                 alt="DBK" 
                 className="h-7 md:h-12 w-auto object-contain opacity-90"
                 onError={(e) => { e.currentTarget.style.display = 'none'; }}
               />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
