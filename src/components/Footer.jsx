import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      )
    },
    {
      name: 'Linkedin',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    }
  ];

  return (
    <footer className="bg-brand-secondary pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                <span className="text-xl font-bold italic">V</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Voz<span className="text-brand-primary">&Vida</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Transformando vidas através da comunicação com excelência clínica e atendimento humanizado para todas as idades.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  aria-label={social.name}
                  className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-all hover:-translate-y-1 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-brand-primary transition-colors">Nossos Serviços</a></li>
              <li><a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre a Profissional</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-primary transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Especialidades</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Linguagem Infantil</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Voz Profissional</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Reabilitação Auditiva</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Fonoaudiologia Estética</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contato</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-primary shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-primary shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-primary shrink-0" />
                <span>contato@fonoclinica.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-xs text-center md:text-left">
          <p>© 2026 FONOCLÍNICA - DRA. ELIANA SILVA. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
