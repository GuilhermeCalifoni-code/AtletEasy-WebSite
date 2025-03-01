import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-gradient-to-r from-custom-black to-custom-gray text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conectando Atletas, Clubes e Federações
          </h1>
          <p className="text-xl mb-8">
            A AtletEasy é a plataforma que facilita a divulgação de peneiras para atletas e 
            simplifica a administração de processos seletivos para clubes e federações esportivas.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center">
              Sou Atleta
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-gold text-gold font-bold rounded-md hover:bg-gold hover:text-custom-black flex items-center justify-center">
              Sou Clube/Federação
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Atletas em campo" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;