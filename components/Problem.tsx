
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { BatteryLow, FlameKindling, TrendingUp, AlertCircle, ChevronDown } from 'lucide-react';

const Problem: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="problema" className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white mb-8 uppercase tracking-wide leading-tight">
            A rotina está <br/> <span className="text-brand-orange">drenando sua energia?</span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10">
            Você ama o Jiu-Jitsu, mas sente que algo ficou para trás? Todo praticante sério passa por esse momento de questionamento.
          </p>

          <div className="space-y-6">
            {[
              { icon: BatteryLow, text: "O treino virou obrigação, não paixão?" },
              { icon: FlameKindling, text: "Sente falta daquele fogo dos primeiros dias no tatame?" },
              { icon: TrendingUp, text: "Busca evolução real, mas sem desgaste físico excessivo?" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="bg-red-500/10 p-2.5 rounded-full group-hover:bg-red-500/20 transition-colors">
                  <item.icon className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-slate-300 text-base md:text-lg">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-slate-900/50 border-l-4 border-brand-orange rounded-r-2xl backdrop-blur-sm border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-brand-orange" />
              <h3 className="text-white font-bold text-xl uppercase font-display tracking-wide">Você não está sozinho.</h3>
            </div>
            <p className="text-slate-300 italic text-lg leading-relaxed">
              "Imagine quebrar a rotina, renovar a mente e elevar seu nível técnico em um ambiente inspirador que conecta corpo e espírito."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[650px] rounded-2xl overflow-hidden group shadow-2xl shadow-black/50 order-1 md:order-2 border border-white/5"
        >
          <img 
            src="https://vmkiafrmwcbvlxpzcctq.supabase.co/storage/v1/object/public/imagnes/aulainterna.webp" 
            alt="Treino Interno DBK" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-8 left-8 right-8">
             <span className="text-sm font-bold tracking-[0.3em] text-brand-orange uppercase">A Resposta</span>
             <p className="text-3xl font-display uppercase text-white mt-2 leading-none">Sua jornada de reconexão começa aqui.</p>
          </div>
        </motion.div>
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

export default Problem;
