import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Tucumán Travel</h3>
            <p className="text-background/80 mb-6 max-w-md">
              Tu guía digital para descubrir todos los secretos y maravillas 
              que Tucumán tiene para ofrecerte.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('recommendations')}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Destinos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('bot-action')}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Chatbot
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('travel-enjoy')}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Experiencias
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/80">
              <li>info@tucumantravel.com</li>
              <li>+54 381 123-4567</li>
              <li>San Miguel de Tucumán</li>
              <li>Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            Sitio desarrollado por{' '}
            <span className="text-background font-semibold">Koi Studio</span>
            {' '}en colaboración con{' '}
            <span className="text-background font-semibold">SSIT Group</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;