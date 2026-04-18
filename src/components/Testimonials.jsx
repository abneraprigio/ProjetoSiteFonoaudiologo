import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Cláudia R.',
    role: 'Mãe do Pedro (6 anos)',
    text: "O progresso do meu filho foi impressionante. A paciência e o carinho da Dra. Eliana fizeram toda a diferença no desenvolvimento da fala dele. Hoje ele se comunica com confiança!",
    rating: 5
  },
  {
    name: 'Ricardo M.',
    role: 'Executivo Comercial',
    text: "Como profissional de vendas, minha voz é meu instrumento. O trabalho de reabilitação vocal me ajudou a recuperar a potência e a evitar o cansaço ao falar por longas horas.",
    rating: 5
  },
  {
    name: 'Dona Maria S.',
    role: 'Aposentada',
    text: "Voltar a ouvir os passarinhos e a conversa dos meus netos foi um presente. O atendimento especializado na reabilitação auditiva foi fundamental para minha qualidade de vida.",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="py-24 bg-brand-soft overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6"
          >
            Histórias de <span className="text-gradient">Sucesso</span>
          </motion.h2>
          <p className="text-clinical-muted text-lg">A satisfação de nossos pacientes é o nosso maior reconhecimento.</p>
        </div>

        <div className="max-w-4xl mx-auto relative px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-12 md:p-16 text-center shadow-2xl bg-white/80"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-brand-primary fill-brand-primary" />
                ))}
              </div>

              <Quote className="w-12 h-12 text-brand-primary/20 mx-auto mb-8" />
              
              <p className="text-2xl md:text-3xl text-brand-secondary font-medium leading-relaxed mb-10 italic">
                "{testimonials[current].text}"
              </p>
              
              <div>
                <p className="text-xl font-bold text-brand-secondary">{testimonials[current].name}</p>
                <p className="text-brand-primary font-medium mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-white transition-all shadow-lg -translate-x-1/2"
            aria-label="Anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-white transition-all shadow-lg translate-x-1/2"
            aria-label="Próximo"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-3 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ${idx === current ? 'w-10 bg-brand-primary shadow-sm shadow-brand-primary/50' : 'w-2.5 bg-brand-accent'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
