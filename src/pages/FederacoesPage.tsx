import React from 'react';
import { Building2, Users, Trophy, ArrowRight } from 'lucide-react';

const FederacoesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-black to-custom-gray text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Para Federações Esportivas</h1>
            <p className="text-xl mb-8">
              Centralize e otimize os processos de seleção de talentos em toda a sua região.
            </p>
            <button className="px-8 py-4 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center mx-auto">
              Solicitar demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-black mb-4">Como a AtletEasy ajuda federações</h2>
            <p className="text-xl text-custom-gray max-w-3xl mx-auto">
              Nossa plataforma foi desenvolvida para centralizar e otimizar os processos de seleção de talentos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gold">
              <div className="bg-custom-black p-4 rounded-full inline-flex mb-6">
                <Building2 className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-custom-black">Gestão Centralizada</h4>
              <p className="text-custom-gray">
                Centralize a gestão de peneiras e processos seletivos de múltiplos clubes filiados.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gold">
              <div className="bg-custom-black p-4 rounded-full inline-flex mb-6">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-custom-black">Banco de Talentos</h4>
              <p className="text-custom-gray">
                Acesse um banco de dados de atletas avaliados, facilitando a identificação de talentos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gold">
              <div className="bg-custom-black p-4 rounded-full inline-flex mb-6">
                <Trophy className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-custom-black">Relatórios Detalhados</h4>
              <p className="text-custom-gray">
                Obtenha relatórios e estatísticas sobre os processos seletivos realizados na sua região.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-custom-gray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Benefícios para federações</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Veja como a AtletEasy pode transformar a gestão de talentos na sua federação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="mr-4 bg-custom-black p-3 h-min rounded-full">
                <div className="text-gold text-2xl font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gold">Visão ampla de talentos</h3>
                <p className="text-white">
                  Tenha uma visão completa dos talentos disponíveis em toda a sua região ou estado.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 bg-custom-black p-3 h-min rounded-full">
                <div className="text-gold text-2xl font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gold">Padronização de processos</h3>
                <p className="text-white">
                  Estabeleça padrões de avaliação consistentes entre todos os clubes filiados.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 bg-custom-black p-3 h-min rounded-full">
                <div className="text-gold text-2xl font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gold">Análise de dados</h3>
                <p className="text-white">
                  Utilize dados estatísticos para identificar tendências e melhorar processos seletivos.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 bg-custom-black p-3 h-min rounded-full">
                <div className="text-gold text-2xl font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gold">Desenvolvimento regional</h3>
                <p className="text-white">
                  Promova o desenvolvimento esportivo em toda a região com processos mais eficientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-custom-red to-custom-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar a gestão de talentos?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Junte-se a outras federações que já estão usando a AtletEasy para otimizar seus processos seletivos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center mx-auto sm:mx-0">
              Solicitar demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-bold rounded-md hover:bg-gold hover:text-custom-black flex items-center justify-center mx-auto sm:mx-0">
              Ver planos para federações
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FederacoesPage;