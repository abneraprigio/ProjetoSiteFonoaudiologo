import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent to-transparent -z-10" />
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
              <span>Atendimento humanizado e especializado</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight">
              Sua <span className="text-gradient">voz</span> é sua identidade.
            </h1>
            
            <p className="text-xl md:text-2xl text-clinical-muted mb-10 max-w-xl leading-relaxed">
              Vamos cuidar da sua comunicação juntos. Atendimento fonoaudiológico de ponta para todas as idades, focado no seu bem-estar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5500000000000" className="btn-primary">
                <span>Agendar Consulta</span>
                <ArrowRight size={20} />
              </a>
              <button className="px-8 py-4 rounded-2xl border-2 border-brand-accent text-clinical-text font-semibold hover:bg-brand-soft transition-all flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                <span>Nossos Serviços</span>
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main Visual Element (Abstract Glass Card) */}
            <div className="relative z-10 glass-card aspect-square max-w-[500px] mx-auto overflow-hidden p-8 flex flex-col justify-center items-center text-center">
              <div className="w-24 h-24 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-brand-primary rounded-full animate-pulse shadow-lg shadow-brand-primary/30" />
              </div>
              <h2 className="text-3xl font-bold text-brand-secondary mb-4 italic underline decoration-brand-accent !decoration-4 underline-offset-8">Qualidade de Vida</h2>
              <p className="text-clinical-muted text-lg">Integrando tecnologia e carinho para transformar sua forma de se conectar com o mundo.</p>
              
              {/* Decorative Floating Elements */}
              <motion.div 
                className="absolute top-10 right-10 glass p-4 rounded-2xl shadow-lg border border-white/40"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-8 h-1.5 bg-brand-primary rounded-full mb-2" />
                <div className="w-12 h-1.5 bg-brand-accent rounded-full" />
              </motion.div>
            </div>
            
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
