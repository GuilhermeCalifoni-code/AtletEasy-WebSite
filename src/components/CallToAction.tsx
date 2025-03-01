import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-custom-red to-custom-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar o esporte?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Junte-se a milhares de atletas, clubes e federações que já estão usando a AtletEasy para 
          revolucionar o processo de seleção de talentos esportivos.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="px-8 py-4 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center mx-auto sm:mx-0">
            Criar conta gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-bold rounded-md hover:bg-gold hover:text-custom-black flex items-center justify-center mx-auto sm:mx-0">
            Solicitar demonstração
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-custom-black bg-opacity-50 p-6 rounded-lg border border-gold">
            <h3 className="text-xl font-bold mb-4 text-gold">Contato</h3>
            <p className="mb-2">contato@atleteasy.com.br</p>
            <p className="mb-2">+55 (11) 9999-8888</p>
            <p>São Paulo, SP - Brasil</p>
          </div>
          
          <div className="bg-custom-black bg-opacity-50 p-6 rounded-lg border border-gold">
            <h3 className="text-xl font-bold mb-4 text-gold">Suporte</h3>
            <p className="mb-2">suporte@atleteasy.com.br</p>
            <p className="mb-2">+55 (11) 9999-7777</p>
            <p>Segunda a Sexta, 8h às 18h</p>
          </div>
          
          <div className="bg-custom-black bg-opacity-50 p-6 rounded-lg border border-gold">
            <h3 className="text-xl font-bold mb-4 text-gold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold">Instagram</a>
              <a href="#" className="hover:text-gold">Facebook</a>
              <a href="#" className="hover:text-gold">LinkedIn</a>
              <a href="#" className="hover:text-gold">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;