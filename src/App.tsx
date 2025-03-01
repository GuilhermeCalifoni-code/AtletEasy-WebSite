import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AtletasPage from './pages/AtletasPage';
import ClubesPage from './pages/ClubesPage';
import FederacoesPage from './pages/FederacoesPage';
import ContatoPage from './pages/ContatoPage';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/atletas" element={<AtletasPage />} />
            <Route path="/clubes" element={<ClubesPage />} />
            <Route path="/federacoes" element={<FederacoesPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;