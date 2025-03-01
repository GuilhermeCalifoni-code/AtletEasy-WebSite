import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, CheckCircle } from 'lucide-react';

const CadastroPage = () => {
  const [userType, setUserType] = useState('atleta');

  return (
    <div className="min-h-screen bg-custom-gray py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-custom-black p-6 text-center">
            <h2 className="text-2xl font-bold text-gold">Cadastre-se na AtletEasy</h2>
            <p className="text-white mt-2">Crie sua conta e comece a transformar o esporte</p>
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <div className="flex justify-center space-x-4">
                <button 
                  className={`px-6 py-3 rounded-md font-medium ${userType === 'atleta' ? 'bg-gold text-custom-black' : 'bg-custom-gray text-white'}`}
                  onClick={() => setUserType('atleta')}
                >
                  Sou Atleta
                </button>
                <button 
                  className={`px-6 py-3 rounded-md font-medium ${userType === 'clube' ? 'bg-gold text-custom-black' : 'bg-custom-gray text-white'}`}
                  onClick={() => setUserType('clube')}
                >
                  Sou Clube
                </button>
                <button 
                  className={`px-6 py-3 rounded-md font-medium ${userType === 'federacao' ? 'bg-gold text-custom-black' : 'bg-custom-gray text-white'}`}
                  onClick={() => setUserType('federacao')}
                >
                  Sou Federação
                </button>
              </div>
            </div>
            
            {userType === 'atleta' && (
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-custom-black font-medium mb-2">Nome Completo</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-custom-gray" />
                      </div>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full pl-10 pr-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="birth" className="block text-custom-black font-medium mb-2">Data de Nascimento</label>
                    <input 
                      type="date" 
                      id="birth" 
                      className="w-full px-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-custom-black font-medium mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-custom-gray" />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full pl-10 pr-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="password" className="block text-custom-black font-medium mb-2">Senha</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-custom-gray" />
                      </div>
                      <input 
                        type="password" 
                        id="password" 
                        className="w-full pl-10 pr-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Sua senha"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block text-custom-black font-medium mb-2">Confirmar Senha</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-custom-gray" />
                      </div>
                      <input 
                        type="password" 
                        id="confirm-password" 
                        className="w-full pl-10 pr-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Confirme sua senha"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="sport" className="block text-custom-black font-medium mb-2">Modalidade Esportiva</label>
                  <select 
                    id="sport" 
                    className="w-full px-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="">Selecione uma modalidade</option>
                    <option value="futebol">Futebol</option>
                    <option value="basquete">Basquete</option>
                    <option value="volei">Vôlei</option>
                    <option value="natacao">Natação</option>
                    <option value="atletismo">Atletismo</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="h-4 w-4 text-gold focus:ring-gold border-custom-gray rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-custom-gray">
                    Concordo com os <a href="#" className="text-gold hover:text-opacity-80">Termos de Uso</a> e <a href="#" className="text-gold hover:text-opacity-80">Política de Privacidade</a>
                  </label>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className="w-full px-4 py-3 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center"
                  >
                    Criar Conta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
            
            {userType === 'clube' && (
              <form className="space-y-6">
                <div>
                  <label htmlFor="club-name" className="block text-custom-black font-medium mb-2">Nome do Clube</label>
                  <input 
                    type="text" 
                    id="club-name" 
                    className="w-full px-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Nome do clube"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cnpj" className="block text-custom-black font-medium mb-2">CNPJ</label>
                    <input 
                      type="text" 
                      id="cnpj" 
                      className="w-full px-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="00.000.000/0000-00"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-custom-black font-medium mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="club-email" className="block text-custom-black font-medium mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-custom-gray" />
                    </div>
                    <input 
                      type="email" 
                      id="club-email" 
                      className="w-full pl-10 pr-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="clube@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="club-password" className="block text-custom-black font-medium mb-2">Senha</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-custom-gray" />
                      </div>
                      <input 
                        type="password" 
                        id="club-password" 
                        className="w-full pl-10 pr-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Sua senha"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="club-confirm-password" className="block text-custom-black font-medium mb-2">Confirmar Senha</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-custom-gray" />
                      </div>
                      <input 
                        type="password" 
                        id="club-confirm-password" 
                        className="w-full pl-10 pr-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Confirme sua senha"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="club-terms" 
                    className="h-4 w-4 text-gold focus:ring-gold border-custom-gray rounded"
                  />
                  <label htmlFor="club-terms" className="ml-2 block text-sm text-custom-gray">
                    Concordo com os <a href="#" className="text-gold hover:text-opacity-80">Termos de Uso</a> e <a href="#" className="text-gold hover:text-opacity-80">Política de Privacidade</a>
                  </label>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className="w-full px-4 py-3 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center"
                  >
                    Solicitar Cadastro
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                
                <p className="text-sm text-custom-gray text-center mt-4">
                  Um de nossos consultores entrará em contato para finalizar seu cadastro e apresentar nossos planos.
                </p>
              </form>
            )}
            
            {userType === 'federacao' && (
              <form className="space-y-6">
                <div>
                  <label htmlFor="federation-name" className="block text-custom-black font-medium mb-2">Nome da Federação</label>
                  <input 
                    type="text" 
                    id="federation-name" 
                    className="w-full px-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Nome da federação"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="federation-cnpj" className="block text-custom-black font-medium mb-2">CNPJ</label>
                    <input 
                      type="text" 
                      id="federation-cnpj" 
                      className="w-full px-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="00.000.000/0000-00"
                    />
                  </div>
                  <div>
                    <label htmlFor="federation-phone" className="block text-custom-black font-medium mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      id="federation-phone" 
                      className="w-full px-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="federation-email" className="block text-custom-black font-medium mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-custom-gray" />
                    </div>
                    <input 
                      type="email" 
                      id="federation-email" 
                      className="w-full pl-10 pr-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="federacao@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="sport-type" className="block text-custom-black font-medium mb-2">Modalidade Esportiva</label>
                  <select 
                    id="sport-type" 
                    className="w-full px-4 py-2 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="">Selecione uma modalidade</option>
                    <option value="futebol">Futebol</option>
                    <option value="basquete">Basquete</option>
                    <option value="volei">Vôlei</option>
                    <option value="natacao">Natação</option>
                    <option value="atletismo">Atletismo</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="federation-terms" 
                    className="h-4 w-4 text-gold focus:ring-gold border-custom-gray rounded"
                  />
                  <label htmlFor="federation-terms" className="ml-2 block text-sm text-custom-gray">
                    Concordo com os <a href="#" className="text-gold hover:text-opacity-80">Termos de Uso</a> e <a href="#" className="text-gold hover:text-opacity-80">Política de Privacidade</a>
                  </label>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className="w-full px-4 py-3 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center"
                  >
                    Solicitar Cadastro
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                
                <p className="text-sm text-custom-gray text-center mt-4">
                  Um de nossos consultores entrará em contato para finalizar seu cadastro e apresentar nossos planos.
                </p>
              </form>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-custom-gray">
                Já tem uma conta?{' '}
                <Link to="/login" className="font-medium text-gold hover:text-opacity-80">
                  Entrar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroPage;