'use client';

import { useEffect, useRef } from 'react';

const InteractiveCard = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    const card = cardRef.current;
    const shine = shineRef.current;

    if (!cardContainer || !card || !shine) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cardContainer.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate rotation based on mouse position
      const rotateY = ((mouseX - cardCenterX) / window.innerWidth) * 30;
      const rotateX = -((mouseY - cardCenterY) / window.innerHeight) * 30;

      cardContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Calculate light position for the glow effect
      const x = ((mouseX - rect.left) / rect.width) * 100;
      const y = ((mouseY - rect.top) / rect.height) * 100;

      card.style.setProperty('--x', `${x}%`);
      card.style.setProperty('--y', `${y}%`);
      
      // Position the light gradient
      card.style.background = `
        radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #dc2626 0%, #1f2937 100%)
      `;

      // Update shine position
      const angle = Math.atan2(mouseY - cardCenterY, mouseX - cardCenterX) * 180 / Math.PI;
      shine.style.background = `linear-gradient(${angle}deg, 
        transparent 30%, 
        rgba(255, 255, 255, 0.2) 50%, 
        transparent 70%)`;

      card.classList.add('lit');
    };

    const handleMouseLeave = () => {
      if (cardContainer && card) {
        cardContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
        card.classList.remove('lit');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <style jsx>{`
        body {
          perspective: 1000px;
        }
        
        .card-container {
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
        }

        .card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.1s ease-out;
          pointer-events: none;
        }

        .card.lit::before {
          opacity: 1;
        }

        .shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, 
            transparent 30%, 
            rgba(255, 255, 255, 0.1) 50%, 
            transparent 70%);
          opacity: 0;
          transition: opacity 0.1s ease-out;
          pointer-events: none;
        }

        .card.lit .shine {
          opacity: 1;
        }
      `}</style>
      <div 
        ref={cardContainerRef}
        className="card-container w-96 h-64 mx-auto mb-8"
        style={{ perspective: '1000px' }}
      >
        <div 
          ref={cardRef}
          className="card relative w-full h-full bg-gradient-to-br from-red-600 to-gray-900 rounded-3xl shadow-2xl p-8 overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div ref={shineRef} className="shine" />
          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <div className="w-12 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg relative overflow-hidden">
              <div className="absolute top-1 left-1 right-1 bottom-1 bg-gradient-to-br from-red-300 to-red-500 rounded" />
            </div>
            <div className="text-2xl tracking-widest font-light my-5">•••• •••• •••• ••••</div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col items-start">
                <div className="text-lg font-semibold uppercase tracking-wide">Dom Gaulton</div>
                <div className="text-xs opacity-90 mt-1 tracking-wide">Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
