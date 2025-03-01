import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Atleta',
    quote: 'Graças à AtletEasy consegui encontrar uma peneira que mudou minha carreira. A plataforma é intuitiva e me manteve informado durante todo o processo.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 2,
    name: 'Fernanda Oliveira',
    role: 'Coordenadora de Base - Clube Atlético',
    quote: 'A AtletEasy revolucionou nossa forma de organizar peneiras. Reduzimos o tempo de administração em 70% e aumentamos a qualidade dos atletas selecionados.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 3,
    name: 'Roberto Mendes',
    role: 'Diretor - Federação Estadual',
    quote: 'Como federação, conseguimos ter uma visão ampla dos talentos da região e ajudar os clubes filiados a encontrar os melhores atletas através da plataforma.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80'
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-custom-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">O que dizem sobre nós</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Veja como a AtletEasy tem transformado a experiência de atletas, clubes e federações.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-custom-gray p-8 rounded-lg shadow-md border border-gold">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-gold"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gold">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;