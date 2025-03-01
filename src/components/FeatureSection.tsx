import React from 'react';
import { Search, Calendar, Trophy, Users, Building2, Activity } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-black mb-4">Como a AtletEasy funciona</h2>
          <p className="text-xl text-custom-gray max-w-3xl mx-auto">
            Nossa plataforma conecta atletas, clubes e federações esportivas, facilitando o processo de seleção de talentos.
          </p>
        </div>

        <div id="atletas" className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gold mb-12">Para Atletas</h3>
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

        <div id="clubes" className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gold mb-12">Para Clubes</h3>
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

        <div id="federacoes">
          <h3 className="text-2xl font-bold text-center text-gold mb-12">Para Federações Esportivas</h3>
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
      </div>
    </section>
  );
};

export default FeatureSection;