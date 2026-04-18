import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-brand-soft/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              {/* Using a high-end placeholder design since we don't have the photo yet */}
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-accent to-brand-primary/30 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-32 h-32 bg-clinical-white/80 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart className="text-brand-primary" size={48} fill="currentColor" />
                  </div>
                  <p className="text-brand-secondary font-bold text-xl italic underline decoration-brand-accent underline-offset-4">Dra. Eliana Silva</p>
                  <p className="text-clinical-muted text-sm mt-2">Fonoaudióloga | CRFa 0000</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary rounded-3xl -z-10 rotate-12 opacity-20" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-accent rounded-full -z-10 opacity-40 blur-xl" />
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-8">
              Compromisso com a sua <span className="text-gradient">evolução</span>
            </h2>
            
            <p className="text-clinical-muted text-lg leading-relaxed mb-8">
              Olá! Sou a Dra. Eliana Silva, fonoaudióloga apaixonada por ajudar pessoas a se comunicarem melhor. Acredito que a comunicação é a ponte que nos conecta ao mundo e às pessoas que amamos.
            </p>
            
            <p className="text-clinical-muted text-lg leading-relaxed mb-10">
              Com sólida formação acadêmica e anos de prática clínica, meu foco é oferecer um atendimento humanizado, onde cada paciente é único. Utilizo técnicas modernas e científicas, sempre com um olhar acolhedor e integrativo.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-primary shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary">Especialista</h4>
                  <p className="text-clinical-muted text-sm">Pós-graduada em Motricidade Orofacial.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-primary shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary">Atualizada</h4>
                  <p className="text-clinical-muted text-sm">Participação constante em congressos e cursos.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a href="https://wa.me/5500000000000" className="btn-primary w-fit">
                <span>Conheça minha trajetória</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
