import { Button } from './ui/button';
import heroImage from '@/assets/hero-tucuman.jpg';

const Hero = () => {
  const scrollToBot = () => {
    document.getElementById('bot-action')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-bg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-hero font-bold text-white mb-6 tracking-tight">
            VISIT
            <br />
            TUCUMÁN
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubrí la cuna del Jardín de la República con ayuda de nuestro guía digital 24/7
          </p>
          
          <Button 
            onClick={scrollToBot}
            className="btn-primary text-xl"
          >
            Hablar con el bot
          </Button>
        </div>

        {/* Floating Mascot */}
        <div className="absolute bottom-20 right-10 md:right-20 floating">
          <img 
            src="/lovable-uploads/0c0a65d7-41a3-4c72-bba7-0bdf1bf1473c.png" 
            alt="Tapir mascot with headphones" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </div>
      </div>

      {/* Hero Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="hero-separator"></div>
      </div>
    </section>
  );
};

export default Hero;