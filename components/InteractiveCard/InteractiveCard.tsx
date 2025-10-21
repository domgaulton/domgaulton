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

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = cardContainer.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      let clientX: number, clientY: number;
      
      if (e instanceof TouchEvent) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Calculate rotation based on pointer position
      const rotateY = ((clientX - cardCenterX) / window.innerWidth) * 30;
      const rotateX = -((clientY - cardCenterY) / window.innerHeight) * 30;

      cardContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Calculate light position for the glow effect
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;

      card.style.setProperty('--x', `${x}%`);
      card.style.setProperty('--y', `${y}%`);
      
      // Position the light gradient
      card.style.background = `
        radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #dc2626 0%, #1f2937 100%)
      `;

      // Update shine position
      const angle = Math.atan2(clientY - cardCenterY, clientX - cardCenterX) * 180 / Math.PI;
      shine.style.background = `linear-gradient(${angle}deg, 
        transparent 30%, 
        rgba(255, 255, 255, 0.2) 50%, 
        transparent 70%)`;

      card.classList.add('lit');
    };

    const handlePointerLeave = () => {
      if (cardContainer && card) {
        cardContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
        card.classList.remove('lit');
      }
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener('mousemove', handlePointerMove);
    document.addEventListener('touchmove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    document.addEventListener('touchend', handlePointerLeave);

    return () => {
      document.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.removeEventListener('touchend', handlePointerLeave);
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
        className="card-container w-72 sm:w-96 h-48 sm:h-64 mx-auto mb-8"
        style={{ perspective: '1000px' }}
      >
        <div 
          ref={cardRef}
          className="card relative w-full h-full bg-gradient-to-br from-red-600 to-gray-900 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div ref={shineRef} className="shine" />
          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <div className="w-8 h-6 sm:w-12 sm:h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg relative overflow-hidden">
              <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 sm:top-1 sm:left-1 sm:right-1 sm:bottom-1 bg-gradient-to-br from-red-300 to-red-500 rounded" />
            </div>
            <div className="text-lg sm:text-2xl tracking-widest font-light my-3 sm:my-5">•••• •••• •••• ••••</div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col items-start">
                <div className="text-sm sm:text-lg font-semibold uppercase tracking-wide">Dom Gaulton</div>
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
