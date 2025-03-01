import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-custom-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="AtletEasy Logo" 
            className="h-10"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-gold font-medium">Início</Link>
          <Link to="/atletas" className="text-white hover:text-gold font-medium">Para Atletas</Link>
          <Link to="/clubes" className="text-white hover:text-gold font-medium">Para Clubes</Link>
          <Link to="/federacoes" className="text-white hover:text-gold font-medium">Para Federações</Link>
          <Link to="/contato" className="text-white hover:text-gold font-medium">Contato</Link>
        </nav>
        
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="px-4 py-2 text-gold font-medium hover:text-white">Entrar</Link>
          <Link to="/cadastro" className="px-4 py-2 bg-gold text-custom-black font-medium rounded-md hover:bg-opacity-80">Cadastrar</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-custom-gray py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-gold font-medium">Início</Link>
            <Link to="/atletas" className="text-white hover:text-gold font-medium">Para Atletas</Link>
            <Link to="/clubes" className="text-white hover:text-gold font-medium">Para Clubes</Link>
            <Link to="/federacoes" className="text-white hover:text-gold font-medium">Para Federações</Link>
            <Link to="/contato" className="text-white hover:text-gold font-medium">Contato</Link>
          </nav>
          <div className="mt-4 flex space-x-4">
            <Link to="/login" className="px-4 py-2 text-gold font-medium hover:text-white">Entrar</Link>
            <Link to="/cadastro" className="px-4 py-2 bg-gold text-custom-black font-medium rounded-md hover:bg-opacity-80">Cadastrar</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;