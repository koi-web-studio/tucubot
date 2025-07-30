import { Button } from './ui/button';

const FinalCTA = () => {
  const scrollToBot = () => {
    document.getElementById('bot-action')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta-final" className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-8 max-w-4xl mx-auto">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Planeá tu aventura
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Dejá que nuestro bot te ayude a descubrir la magia de Tucumán
            </p>
            <Button 
              onClick={scrollToBot}
              variant="outline"
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 border-white text-xl px-8 py-4"
            >
              Comenzar ahora
            </Button>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <img 
                src="/lovable-uploads/0c0a65d7-41a3-4c72-bba7-0bdf1bf1473c.png" 
                alt="Tapir mascot with headphones" 
                className="w-32 h-32 object-contain floating"
              />
              <div className="absolute -bottom-4 -right-4 bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ¡Vamos!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;