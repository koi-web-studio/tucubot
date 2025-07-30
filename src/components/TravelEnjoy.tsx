import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';

const TravelEnjoy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-up');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('revealed');
              }, index * 300);
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
    <>
      <section 
        id="travel-enjoy" 
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/60">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="reveal-up text-5xl md:text-6xl font-bold mb-8">
              VIAJÁ Y DISFRUTÁ
              <br />
              TUS VACACIONES
            </h2>
            
            <div className="reveal-up">
              <Button
                onClick={() => setShowModal(true)}
                variant="outline"
                size="lg"
                className="bg-white/20 border-white text-white hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm"
              >
                <Play className="w-8 h-8 mr-3" />
                Ver experiencias
              </Button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="reveal-up grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Naturaleza tucumana"
                    className="w-full h-40 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Paisajes de montaña"
                    className="w-full h-40 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Experiencias en Tucumán</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Video de experiencias en Tucumán</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TravelEnjoy;