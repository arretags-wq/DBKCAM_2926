
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Activity, CheckCircle, Users, Globe, ChevronDown } from 'lucide-react';

const Solution: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('pousada')?.scrollIntoView({ behavior: 'smooth' });
  };

  const experienceCards = [
    { 
      icon: Users, 
      title: "Aberto a Todos", 
      desc: "Integrantes de qualquer equipe e graduação são bem-vindos para evoluir e trocar experiências valiosas." 
    },
    { 
      icon: Activity, 
      title: "Evolução Real", 
      desc: "Metodologia DBK focada em resultados práticos, refinamento técnico e consciência corporal profunda." 
    },
    { 
      icon: Globe, 
      title: "Conexão Global", 
      desc: "Uma jornada de transformação pessoal e esportiva que conecta você com a essência da família DBK." 
    }
  ];

  const bulletPoints = [
    "Treinos técnicos intensivos com metodologia clara.",
    "Desenvolvimento mental, foco e disciplina.",
    "Contato direto com a natureza (recuperação física).",
    "Momentos de troca e convivência fora do tatame."
  ];

  return (
    <div id="experiencia" className="bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      
      <Section className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 px-4">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-10 uppercase leading-tight tracking-tighter">
            O que é o <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">DBK Jiu-Jitsu Camp</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-light">
            Uma imersão projetada para quem busca evoluir no tatame enquanto recarrega as energias em um cenário paradisíaco.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <h3 className="text-4xl md:text-6xl font-display text-white uppercase mb-10 leading-tight tracking-tight">Como funciona <br/><span className="text-brand-orange">a experiência</span></h3>
            
            <ul className="space-y-6 mb-12">
              {bulletPoints.map((text, i) => (
                <li key={i} className="flex items-center gap-5 group">
                  <div className="bg-brand-orange/20 p-2 rounded-full group-hover:bg-brand-orange/40 transition-colors shrink-0">
                    <CheckCircle className="w-5 h-5 text-brand-orange" />
                  </div>
                  <span className="text-slate-300 text-base md:text-lg font-medium leading-snug">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-6">
              {experienceCards.map((item, i) => (
                <div key={i} className="bg-slate-950/60 p-8 rounded-2xl border border-white/5 hover:border-brand-orange/20 transition-all backdrop-blur-sm group">
                  <div className="flex items-center gap-5 mb-4">
                    <div className="bg-brand-orange/10 p-3 rounded-xl group-hover:bg-brand-orange/20 transition-colors">
                      <item.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h5 className="text-white font-display text-2xl uppercase tracking-wider leading-none">{item.title}</h5>
                  </div>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Galeria Harmonizada */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl aspect-[16/10]"
            >
              <img 
                src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/fun_atividades.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9mdW5fYXRpdmlkYWRlcy5qcGVnIiwiaWF0IjoxNzY4NTExNzE4LCJleHAiOjE4MDAwNDc3MTh9.AMvkQQc1N7xN2StMCvi9G1SvIakIG0wmXK147UNeqgo" 
                alt="Treino Técnico" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
              >
                <img 
                  src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/ministrada.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9taW5pc3RyYWRhLndlYnAiLCJpYXQiOjE3Njg1MTE1MDMsImV4cCI6MTgwMDA0NzUwM30.Ls3FGF9VtvQohTztdLaLCPQCpFfyNo8Dtk8OqDgwUQQ" 
                  alt="Natureza Itarema" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
              >
                <img 
                  src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/fun_pratica.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9mdW5fcHJhdGljYS5qcGVnIiwiaWF0IjoxNzY4NTExNjUwLCJleHAiOjE4MDAwNDc2NTB9.AH8komFvoTRMnfNdyIdvNd6vrukM1bGJ1ALV8ErvRKk" 
                  alt="Pousada Kiriri" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl aspect-[21/9]"
            >
              <img 
                src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/tarma2.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi90YXJtYTIuanBlZyIsImlhdCI6MTc2ODUxMTE2MywiZXhwIjoxODAwMDQ3MTYzfQ.XweOfoxGc2-ldlyGBgL-DybpVvvCsO0nd6iPWadoekQ" 
                alt="Experiência DBK Camp" 
                className="w-full h-full object-cover brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div className="absolute bottom-6 right-6 bg-brand-orange px-8 py-4 rounded-2xl font-display text-white uppercase tracking-[0.1em] text-center shadow-2xl">
                <span className="block text-4xl leading-none font-bold">100%</span>
                <span className="text-[10px] font-bold opacity-90 tracking-widest">IMERSÃO</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* AUTORIDADE REFINADA */}
        <div className="bg-slate-950/80 rounded-2xl p-10 md:p-20 border border-white/5 relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="w-full lg:w-[450px] shrink-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-orange/20 rounded-2xl blur-3xl group-hover:bg-brand-orange/30 transition-all opacity-40"></div>
                <img 
                  src="https://pxiwhxadrcsnnrkzkjtp.supabase.co/storage/v1/object/sign/DBKCAMP2026/fotoricardo.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYjU2Y2I0OC04YjBjLTRlMGUtYWVlZi1lOWM0MmRhMTNmN2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJEQktDQU1QMjAyNi9mb3RvcmljYXJkby53ZWJwIiwiaWF0IjoxNzY4NDk3OTY5LCJleHAiOjE4MDAwMzM5Njl9.0HfAIIWsIm2RQx0GKgcyL1O-HobNJCsHKSsKOeeM1u0" 
                  alt="Ricardo Costa" 
                  className="w-full aspect-[4/5] object-cover rounded-2xl border border-white/10 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs z-20 shadow-2xl border border-white/20 whitespace-nowrap">
                  Faixa Preta 5º Grau
                </div>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <span className="text-brand-orange font-bold tracking-[0.4em] uppercase text-xs mb-6 block font-display">Liderança Especializada</span>
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-display text-white uppercase mb-10 leading-none tracking-tighter">Prof. Ricardo <br className="hidden md:block"/> Costa de Sousa</h3>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-12 text-slate-400 text-base border-l-4 border-brand-orange/40 pl-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>30+ anos dedicados à arte suave</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Graduado em Educação Física</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Fundador da Escola DBK (23 anos)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Presença no Brasil, Itália e Alemanha</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 italic text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                "O DBK Camp é a síntese de uma vida inteira dedicada ao tatame: formar pessoas resilientes através de uma metodologia que integra corpo, mente e ambiente."
              </p>
            </div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="flex justify-center cursor-pointer opacity-30 hover:opacity-100 transition-opacity mt-20"
          onClick={scrollToNext}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </Section>
    </div>
  );
};

export default Solution;
