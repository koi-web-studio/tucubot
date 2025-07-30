import { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Tucumán Travel
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('recommendations')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Destinos
            </button>
            <button 
              onClick={() => scrollToSection('bot-action')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Bot
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contacto
            </button>
          </div>

          <Button 
            variant="outline" 
            size="sm"
            onClick={() => scrollToSection('cta-final')}
            className="hidden md:block"
          >
            Comenzar
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;