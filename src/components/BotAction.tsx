import { useEffect, useRef } from 'react';
import { MessageCircle, MapPin, Calendar, Star } from 'lucide-react';

const BotAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-up');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('revealed');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="bot-action" 
      ref={sectionRef}
      className="py-20 bg-muted"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Chat Mockup */}
          <div className="lg:col-span-3 reveal-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500 ml-4">Tucumán Travel Bot</span>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">¡Hola! Soy tu guía virtual. ¿Qué te gustaría conocer de Tucumán?</p>
                </div>
                
                <div className="bg-primary text-white rounded-lg p-3 max-w-xs ml-auto">
                  <p className="text-sm">Quiero visitar lugares históricos</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">¡Perfecto! Te recomiendo la Casa de la Independencia y las Ruinas de Quilmes. ¿Te ayudo a planear la ruta?</p>
                </div>

                <div className="bg-primary text-white rounded-lg p-3 max-w-xs ml-auto">
                  <p className="text-sm">¡Sí, por favor!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="lg:col-span-2 space-y-8">
            <div className="reveal-up">
              <h2 className="text-4xl font-bold text-primary mb-8">
                Tu guía personal las 24 horas
              </h2>
            </div>

            <div className="space-y-6">
              <div className="reveal-up flex items-start space-x-4">
                <div className="bg-secondary text-white p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sugerencias personalizadas</h3>
                  <p className="text-muted-foreground">Recomendaciones basadas en tus intereses y tiempo disponible</p>
                </div>
              </div>

              <div className="reveal-up flex items-start space-x-4">
                <div className="bg-secondary text-white p-3 rounded-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Reservas y eventos</h3>
                  <p className="text-muted-foreground">Organiza tu itinerario y no te pierdas ningún evento especial</p>
                </div>
              </div>

              <div className="reveal-up flex items-start space-x-4">
                <div className="bg-secondary text-white p-3 rounded-lg">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tips locales</h3>
                  <p className="text-muted-foreground">Descubre secretos y lugares únicos que solo los locales conocen</p>
                </div>
              </div>
            </div>

            {/* Chatbase Integration */}
            <div className="reveal-up mt-12">
              <div id="chatbase-container" className="w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotAction;