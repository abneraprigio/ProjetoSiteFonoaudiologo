import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
          alt="Clínica Moderna" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/30 to-transparent -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-soft rounded-full text-brand-secondary font-semibold text-sm mb-6 border border-brand-accent shadow-sm">
              <Star size={16} fill="currentColor" />
              <span>Referência em fonoaudiologia em 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight">
              Sua <span className="text-gradient">voz</span>, seu maior elo com o mundo.
            </h1>
            
            <p className="text-xl md:text-2xl text-clinical-muted mb-10 max-w-xl leading-relaxed">
              Na Voz & Vida, unimos ciência e empatia para transformar sua comunicação. Atendimento especializado de Dra. Eliana Silva.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5500000000000" className="btn-primary">
                <span>Agendar Minha Consulta</span>
                <ArrowRight size={20} />
              </a>
              <button className="px-8 py-4 rounded-2xl border-2 border-brand-accent text-clinical-text font-semibold hover:bg-brand-soft transition-all flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                <span>Ver Especialidades</span>
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main Visual Element */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/50 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2070" 
                alt="Atendimento Fonoaudiológico" 
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Qualidade de Vida</h3>
                <p className="text-white/80">Tecnologia e carinho para sua melhor forma de se conectar.</p>
              </div>
            </div>
            
            {/* Decorative Floating Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 glass p-6 rounded-3xl shadow-xl border border-white/40 z-20"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="flex items-center gap-4 text-brand-secondary">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                  <Heart className="text-brand-primary" fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold">+1000</p>
                  <p className="text-xs font-medium">Pacientes Felizes</p>
                </div>
              </div>
            </motion.div>
            
            {/* Background blobs */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-accent rounded-full blur-2xl -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
