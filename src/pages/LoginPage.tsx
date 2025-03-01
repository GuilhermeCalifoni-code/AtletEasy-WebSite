import React from 'react';
import { Activity, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-custom-gray py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-custom-black p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Activity className="h-8 w-8 text-gold" />
              <span className="text-2xl font-bold text-white">AtletEasy</span>
            </div>
            <h2 className="text-xl font-bold text-white">Bem-vindo de volta</h2>
            <p className="text-custom-gray">Entre na sua conta para continuar</p>
          </div>
          
          <div className="p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-custom-black font-medium mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-custom-gray" />
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full pl-10 pr-4 py-3 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-custom-black font-medium">Senha</label>
                  <Link to="/recuperar-senha" className="text-sm text-gold hover:underline">Esqueceu a senha?</Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-custom-gray" />
                  </div>
                  <input 
                    type="password" 
                    id="password" 
                    className="w-full pl-10 pr-4 py-3 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="********"
                  />
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="h-4 w-4 text-gold focus:ring-gold border-custom-gray rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-custom-gray">
                  Lembrar de mim
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center"
              >
                Entrar
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-custom-gray">
                Não tem uma conta? <Link to="/cadastro" className="text-gold hover:underline">Cadastre-se</Link>
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-custom-gray">
              <p className="text-center text-sm text-custom-gray mb-4">Ou entre com</p>
              <div className="grid grid-cols-2 gap-4">
                <button className="px-4 py-2 border border-custom-gray rounded-md hover:bg-custom-gray hover:text-white transition-colors">
                  Google
                </button>
                <button className="px-4 py-2 border border-custom-gray rounded-md hover:bg-custom-gray hover:text-white transition-colors">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;