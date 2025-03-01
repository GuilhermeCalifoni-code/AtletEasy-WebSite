import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const ContatoPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-black to-custom-gray text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl mb-8">
              Estamos prontos para responder suas dúvidas e ajudar você a transformar o processo de seleção de talentos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-custom-black mb-6">Envie uma mensagem</h2>
              <p className="text-custom-gray mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-custom-black font-medium mb-2">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-custom-black font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-custom-black font-medium mb-2">Assunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-custom-black font-medium mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full px-4 py-3 border border-custom-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center"
                >
                  Enviar mensagem
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-custom-black mb-6">Informações de contato</h2>
              <p className="text-custom-gray mb-8">
                Você também pode entrar em contato conosco diretamente através dos canais abaixo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-custom-black p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-custom-black">Email</h3>
                    <p className="text-custom-gray">contato@atleteasy.com.br</p>
                    <p className="text-custom-gray">suporte@atleteasy.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-custom-black p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-custom-black">Telefone</h3>
                    <p className="text-custom-gray">+55 (11) 9999-8888</p>
                    <p className="text-custom-gray">+55 (11) 9999-7777</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-custom-black p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-custom-black">Endereço</h3>
                    <p className="text-custom-gray">Av. Paulista, 1000</p>
                    <p className="text-custom-gray">Bela Vista, São Paulo - SP</p>
                    <p className="text-custom-gray">CEP: 01310-100</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-custom-black mb-4">Horário de atendimento</h3>
                <p className="text-custom-gray mb-2">Segunda a Sexta: 8h às 18h</p>
                <p className="text-custom-gray">Sábado: 9h às 13h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-custom-gray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre a AtletEasy.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-custom-black p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-2">Como funciona o cadastro na plataforma?</h3>
              <p>O cadastro é simples e gratuito para atletas. Basta clicar em "Cadastrar", preencher seus dados e criar seu perfil. Para clubes e federações, oferecemos planos específicos com diferentes funcionalidades.</p>
            </div>
            
            <div className="bg-custom-black p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-2">Quais modalidades esportivas são atendidas?</h3>
              <p>Atualmente atendemos diversas modalidades como futebol, basquete, vôlei, natação, atletismo, entre outras. Estamos constantemente expandindo para novas modalidades.</p>
            </div>
            
            <div className="bg-custom-black p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-2">Como os clubes podem divulgar suas peneiras?</h3>
              <p>Os clubes podem criar eventos de peneira diretamente na plataforma, definindo critérios, datas, locais e vagas disponíveis. A divulgação é automática para atletas que se encaixam no perfil buscado.</p>
            </div>
            
            <div className="bg-custom-black p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gold mb-2">Existe algum custo para os atletas?</h3>
              <p>O cadastro e a busca por peneiras são totalmente gratuitos para atletas. Alguns eventos específicos podem ter taxas de inscrição definidas pelos clubes organizadores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-custom-red to-custom-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Junte-se à comunidade AtletEasy e transforme sua experiência com processos seletivos esportivos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center mx-auto sm:mx-0">
              Criar conta gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-bold rounded-md hover:bg-gold hover:text-custom-black flex items-center justify-center mx-auto sm:mx-0">
              Fale com um consultor
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatoPage;