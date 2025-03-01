import React from 'react';
import { Search, Calendar, Trophy, ArrowRight } from 'lucide-react';

const AtletasPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-black to-custom-gray text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Para Atletas</h1>
            <p className="text-xl mb-8">
              Encontre as melhores oportunidades para mostrar seu talento e avançar na sua carreira esportiva.
            </p>
            <button className="px-8 py-4 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center mx-auto">
              Criar conta gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-black mb-4">Como a AtletEasy ajuda atletas</h2>
            <p className="text-xl text-custom-gray max-w-3xl mx-auto">
              Nossa plataforma foi desenvolvida pensando em facilitar sua jornada esportiva.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gold">
              <div className="bg-custom-black p-4 rounded-full inline-flex mb-6">
                <Search className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-custom-black">Encontre Peneiras</h4>
              <p className="text-custom-gray">
                Acesse um catálogo completo de peneiras e testes em diversos clubes e modalidades esportivas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gold">
              <div className="bg-custom-black p-4 rounded-full inline-flex mb-6">
                <Calendar className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-custom-black">Inscreva-se Facilmente</h4>
              <p className="text-custom-gray">
                Processo de inscrição simplificado, com notificações e lembretes sobre datas importantes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gold">
              <div className="bg-custom-black p-4 rounded-full inline-flex mb-6">
                <Trophy className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-custom-black">Acompanhe Resultados</h4>
              <p className="text-custom-gray">
                Receba feedback e acompanhe os resultados dos processos seletivos em que participou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-custom-gray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Como funciona</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Siga estes passos simples para começar sua jornada com a AtletEasy.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-custom-black h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <span className="text-2xl font-bold text-gold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gold">Crie sua conta</h3>
              <p>Registre-se gratuitamente e complete seu perfil de atleta.</p>
            </div>
            <div className="text-center">
              <div className="bg-custom-black h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <span className="text-2xl font-bold text-gold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gold">Busque oportunidades</h3>
              <p>Encontre peneiras e testes de acordo com sua modalidade e localização.</p>
            </div>
            <div className="text-center">
              <div className="bg-custom-black h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <span className="text-2xl font-bold text-gold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gold">Inscreva-se</h3>
              <p>Faça sua inscrição e receba todas as informações necessárias.</p>
            </div>
            <div className="text-center">
              <div className="bg-custom-black h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold">
                <span className="text-2xl font-bold text-gold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gold">Acompanhe</h3>
              <p>Receba notificações e acompanhe os resultados diretamente na plataforma.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-custom-red to-custom-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para mostrar seu talento?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Junte-se a milhares de atletas que já estão usando a AtletEasy para encontrar oportunidades.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center mx-auto sm:mx-0">
              Criar conta gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-bold rounded-md hover:bg-gold hover:text-custom-black flex items-center justify-center mx-auto sm:mx-0">
              Ver peneiras disponíveis
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AtletasPage;