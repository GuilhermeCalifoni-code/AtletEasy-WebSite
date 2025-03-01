import React from 'react';
import { Users, Calendar, Activity, ArrowRight } from 'lucide-react';

const ClubesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-black to-custom-gray text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Para Clubes</h1>
            <p className="text-xl mb-8">
              Simplifique o processo de seleção de talentos e encontre os melhores atletas para o seu clube.
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
            <h2 className="text-3xl md:text-4xl font-bold text-custom-black mb-4">Como a AtletEasy ajuda clubes</h2>
            <p className="text-xl text-custom-gray max-w-3xl mx-auto">
              Nossa plataforma foi desenvolvida para otimizar seu processo de seleção de talentos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gold">
              <div className="bg-custom-black p-4 rounded-full inline-flex mb-6">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-custom-black">Gerencie Inscrições</h4>
              <p className="text-custom-gray">
                Administre facilmente as inscrições, com filtros e ferramentas para organizar os candidatos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gold">
              <div className="bg-custom-black p-4 rounded-full inline-flex mb-6">
                <Calendar className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-custom-black">Organize Avaliações</h4>
              <p className="text-custom-gray">
                Crie cronogramas, divida grupos e registre resultados das avaliações em uma única plataforma.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gold">
              <div className="bg-custom-black p-4 rounded-full inline-flex mb-6">
                <Activity className="h-8 w-8 text-gold" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-custom-black">Análise de Desempenho</h4>
              <p className="text-custom-gray">
                Ferramentas para registro e análise de desempenho dos atletas durante os testes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-custom-gray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Benefícios para seu clube</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Veja como a AtletEasy pode transformar seu processo de seleção de talentos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="mr-4 bg-custom-black p-3 h-min rounded-full">
                <div className="text-gold text-2xl font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gold">Economia de tempo e recursos</h3>
                <p className="text-white">
                  Reduza em até 70% o tempo gasto com processos administrativos de peneiras e avaliações.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 bg-custom-black p-3 h-min rounded-full">
                <div className="text-gold text-2xl font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gold">Maior alcance</h3>
                <p className="text-white">
                  Atraia mais atletas qualificados com divulgação eficiente das suas peneiras.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 bg-custom-black p-3 h-min rounded-full">
                <div className="text-gold text-2xl font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gold">Dados estruturados</h3>
                <p className="text-white">
                  Mantenha todos os dados de avaliações organizados e acessíveis para análises futuras.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 bg-custom-black p-3 h-min rounded-full">
                <div className="text-gold text-2xl font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gold">Processo transparente</h3>
                <p className="text-white">
                  Ofereça feedback estruturado aos atletas, aumentando a credibilidade do seu processo seletivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-custom-red to-custom-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para otimizar seu processo de seleção?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Junte-se a dezenas de clubes que já estão usando a AtletEasy para encontrar os melhores talentos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gold text-custom-black font-bold rounded-md hover:bg-opacity-80 flex items-center justify-center mx-auto sm:mx-0">
              Solicitar demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-bold rounded-md hover:bg-gold hover:text-custom-black flex items-center justify-center mx-auto sm:mx-0">
              Ver planos e preços
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubesPage;