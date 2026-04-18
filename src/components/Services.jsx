import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Mic, Ear, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Linguagem Infantil',
    desc: 'Estimulando o desenvolvimento com ludicidade e carinho. Foco em atrasos de fala, leitura e escrita.',
    icon: <Baby size={32} />,
    color: 'bg-blue-500/10 text-blue-600',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1972',
    id: 'infantil'
  },
  {
    title: 'Voz Profissional',
    desc: 'Aperfeiçoamento e saúde vocal para quem usa a voz como ferramenta: professores, cantores e palestrantes.',
    icon: <Mic size={32} />,
    color: 'bg-indigo-500/10 text-indigo-600',
    image: 'https://images.unsplash.com/photo-1551712702-4b7335dd8706?auto=format&fit=crop&q=80&w=2070',
    id: 'voz'
  },
  {
    title: 'Reabilitação Auditiva',
    desc: 'Tecnologia e acompanhamento especializado para reconectar você ao mundo dos sons com qualidade.',
    icon: <Ear size={32} />,
    color: 'bg-sky-500/10 text-sky-600',
    image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=1974',
    id: 'auditivo'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6"
          >
            Nossas Especialidades
          </motion.h2>
          <p className="text-clinical-muted max-w-2xl mx-auto text-lg">
            Oferecemos soluções personalizadas para cada necessidade de comunicação, sempre com foco na excelência e no acolhimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-secondary/20" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${service.color} flex items-center justify-center shadow-lg backdrop-blur-md`}>
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">{service.title}</h3>
                <p className="text-clinical-muted leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 text-brand-primary font-bold group-hover:gap-3 transition-all">
                  <span>Saiba mais</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
