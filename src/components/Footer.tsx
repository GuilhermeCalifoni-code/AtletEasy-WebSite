import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-custom-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="AtletEasy Logo" className="h-8" />
            </div>
            <p className="text-custom-gray max-w-md">
              Conectando atletas, clubes e federações para transformar o processo de seleção de talentos esportivos.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-gold">Plataforma</h4>
              <ul className="space-y-2">
                <li><Link to="/atletas" className="text-custom-gray hover:text-gold">Para Atletas</Link></li>
                <li><Link to="/clubes" className="text-custom-gray hover:text-gold">Para Clubes</Link></li>
                <li><Link to="/federacoes" className="text-custom-gray hover:text-gold">Para Federações</Link></li>
                <li><a href="#" className="text-custom-gray hover:text-gold">Preços</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-gold">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-custom-gray hover:text-gold">Sobre nós</a></li>
                <li><a href="#" className="text-custom-gray hover:text-gold">Carreiras</a></li>
                <li><a href="#" className="text-custom-gray hover:text-gold">Blog</a></li>
                <li><Link to="/contato" className="text-custom-gray hover:text-gold">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-gold">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-custom-gray hover:text-gold">Termos de Uso</a></li>
                <li><a href="#" className="text-custom-gray hover:text-gold">Privacidade</a></li>
                <li><a href="#" className="text-custom-gray hover:text-gold">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-custom-gray text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-custom-gray">
            &copy; {new Date().getFullYear()} AtletEasy. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-custom-gray text-white py-2 px-4 rounded border border-gold">
              <option value="pt-br">Português (Brasil)</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;