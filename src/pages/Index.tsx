import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DestinationRecommendations from '@/components/DestinationRecommendations';
import BotAction from '@/components/BotAction';
import TravelEnjoy from '@/components/TravelEnjoy';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Chatbase script integration
    const script = document.createElement('script');
    script.innerHTML = `
      (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...a)=>{(window.chatbase.q=window.chatbase.q||[]).push(a)};window.chatbase=new Proxy(window.chatbase,{get(t,p){return p==="q"?t.q:(...a)=>t(p,...a)}})}const onLoad=()=>{const s=document.createElement("script");s.src="https://www.chatbase.co/embed.min.js";s.id="e0v61zj4YxVNM4nCpl2q9";s.domain="www.chatbase.co";document.body.appendChild(s)};document.readyState==="complete"?onLoad():window.addEventListener("load",onLoad)})();
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DestinationRecommendations />
      <BotAction />
      <TravelEnjoy />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
