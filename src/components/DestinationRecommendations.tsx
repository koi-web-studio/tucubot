import { useEffect, useRef } from 'react';
import tafiDelValle from '@/assets/tafi-del-valle.jpg';
import quilmes from '@/assets/quilmes.jpg';
import casaIndependencia from '@/assets/casa-independencia.jpg';
import amaicha from '@/assets/amaicha.jpg';

const destinations = [
  {
    id: 1,
    name: "Tafí del Valle",
    location: "Valle sagrado",
    image: tafiDelValle,
    description: "Paisajes montañosos y lagos cristalinos"
  },
  {
    id: 2,
    name: "Ruinas de Quilmes",
    location: "Amaicha del Valle", 
    image: quilmes,
    description: "Sitio arqueológico precolombino"
  },
  {
    id: 3,
    name: "Casa de la Independencia",
    location: "San Miguel de Tucumán",
    image: casaIndependencia,
    description: "Cuna de la independencia argentina"
  },
  {
    id: 4,
    name: "Amaicha del Valle",
    location: "Valles Calchaquíes",
    image: amaicha,
    description: "Formaciones rocosas únicas"
  }
];

const DestinationRecommendations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.reveal-up');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="recommendations" 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-4">¿Confundido? Estas son nuestras</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            recomendaciones de destinos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="reveal-up card-hover bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full">
                  <span className="text-2xl font-bold">{destination.id}</span>
                  <span className="text-sm ml-2">° lugar</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {destination.location}
                </p>
                <p className="text-foreground/80">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationRecommendations;