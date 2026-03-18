import React from 'react';
import { motion } from 'motion/react';

export function ConsultationBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#7a9ebf] text-white min-h-[240px] flex items-center">
      {/* Base Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* We use a placeholder image that looks industrial/warehouse */}
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8ed7c50800?q=80&w=2070&auto=format&fit=crop" 
          alt="Warehouse Background" 
          className="w-full h-full object-cover opacity-25 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        
        {/* Base light blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7a9ebf]/90 to-[#5a809e]/80"></div>
      </div>

      {/* Animated Background Polygons */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Middle darker blue polygon */}
        <div 
          className="absolute top-0 right-0 w-[55%] h-full bg-[#3a6082]/90" 
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
        ></div>
        
        {/* Dark blue polygon on the far right */}
        <div 
          className="absolute top-0 right-0 w-[35%] h-full bg-[#1c355e]/95" 
          style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
        ></div>

        {/* Decorative white diagonal lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Line separating middle and right */}
          <div className="absolute top-[-50%] right-[35%] w-[3px] h-[200%] bg-white rotate-[20deg] shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
          {/* Thin accent lines */}
          <div className="absolute top-[-50%] right-[45%] w-[1px] h-[200%] bg-white/30 rotate-[20deg]"></div>
          <div className="absolute top-[-50%] right-[55%] w-[1px] h-[200%] bg-white/20 rotate-[20deg]"></div>
        </div>
      </motion.div>

      {/* Animated Bottom White Edge */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[4px] bg-white z-30"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between py-12 gap-8 lg:gap-4">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 max-w-2xl lg:pr-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold mb-4 drop-shadow-md leading-tight tracking-tight">
            Нужна консультация или расчёт?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/95 max-w-xl font-medium leading-snug drop-shadow-sm">
            Наши специалисты готовы проконсультировать по бесплатному номеру 8 (800) 333-10-53 или по заявке на обратный звонок.
          </p>
        </motion.div>

        {/* Center Button */}
        <motion.div 
          className="flex-shrink-0 z-20 lg:mx-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="bg-[#f26522] hover:bg-[#d9581b] text-black font-semibold px-8 py-3.5 rounded-md transition-colors text-lg shadow-lg">
            Заказать звонок
          </button>
        </motion.div>

        {/* Right Logo */}
        <motion.div 
          className="flex-shrink-0 flex flex-col items-center lg:items-start lg:pl-16 relative z-20"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-2">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="white" className="drop-shadow-md">
              <path d="M 12 85 L 45 85 C 45 75, 49 65, 49 45 C 49 25, 35 15, 15 10 C 28 15, 37 28, 37 45 C 37 65, 25 77, 12 77 Z" />
              <path d="M 88 15 L 55 15 C 55 25, 51 35, 51 55 C 51 75, 65 85, 85 90 C 72 85, 63 72, 63 55 C 63 35, 75 23, 88 23 Z" />
            </svg>
            <div className="flex flex-col">
              <div className="text-[38px] font-serif font-bold tracking-wider leading-none drop-shadow-md">
                STALLIN
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] mt-1.5 text-white font-medium">
                ПРОФНАСТИЛ ЛИДЕР
              </div>
            </div>
          </div>
          <div className="text-[22px] font-bold tracking-[0.15em] w-full text-center lg:text-left drop-shadow-md mt-1">
            СТАЛЬНАЯ ЛИНИЯ
          </div>
        </motion.div>

      </div>
    </section>
  );
}
