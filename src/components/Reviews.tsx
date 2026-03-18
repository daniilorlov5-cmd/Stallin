import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Corrected mapping based on user feedback:
// 1st photo (8.png) -> ЮНИСИЛА-Юг
// 2nd photo (6.jpg) -> ООО Велес
// 3rd photo (7.png) -> МосСтройИнжиниринг
const reviews = Array.from({ length: 15 }, (_, i) => {
  const items = [
    { image: "/8.png", title: "Отзыв от ЮНИСИЛА-Юг" },
    { image: "/6.jpg", title: "Рекомендательное письмо от ООО Велес" },
    { image: "/7.png", title: "Рекомендательное письмо от МосСтройИнжиниринг" }
  ];
  return { 
    id: i, 
    title: items[i % 3].title, 
    image: items[i % 3].image 
  };
});

const BackgroundPattern = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] z-0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="review-grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#review-grid)" />
  </svg>
);

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisible = () => {
    return [
      reviews[currentIndex],
      reviews[(currentIndex + 1) % reviews.length],
      reviews[(currentIndex + 2) % reviews.length],
    ];
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      <BackgroundPattern />
      
      {/* Decorative Quote Mark */}
      <Quote className="absolute top-10 right-10 md:top-20 md:right-32 w-48 h-48 text-[#2589b4] opacity-[0.03] rotate-12 pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-[#2589b4] rounded-sm rotate-45"></div>
            <h2 className="text-4xl md:text-5xl font-medium text-cw-dark tracking-tight">Отзывы</h2>
            <div className="w-3 h-3 bg-[#2589b4] rounded-sm rotate-45"></div>
          </div>
          <p className="text-gray-500 max-w-2xl text-lg">
            Нам доверяют крупнейшие строительные компании и промышленные предприятия.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex gap-8 overflow-hidden py-12 min-h-[600px]">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {getVisible().map((review) => (
                <motion.div
                  layout
                  key={review.id}
                  custom={direction}
                  variants={{
                    enter: (dir) => ({ x: dir > 0 ? 400 : -400, opacity: 0, scale: 0.9 }),
                    center: { x: 0, opacity: 1, scale: 1 },
                    exit: (dir) => ({ x: dir < 0 ? 400 : -400, opacity: 0, scale: 0.9 })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                  className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21px)] shrink-0 flex flex-col"
                >
                  <div className="flex flex-col h-full group cursor-pointer bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,137,180,0.12)] transition-all duration-500 border border-gray-100 relative">
                    
                    {/* Hover Accent Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#2589b4] rounded-t-3xl group-hover:w-1/2 transition-all duration-500"></div>

                    <div className="mb-8 flex-grow flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img 
                        src={review.image} 
                        alt={review.title} 
                        className="max-h-[400px] w-auto object-contain shadow-sm group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-500 relative z-10" 
                      />
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-gray-50">
                      <h3 className="text-lg font-bold text-[#2589b4] leading-snug text-center px-2 group-hover:text-[#1e7399] transition-colors">
                        {review.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-12 mt-4">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full bg-white border-2 border-[#2589b4]/20 text-[#2589b4] flex items-center justify-center hover:bg-[#2589b4] hover:text-white hover:border-[#2589b4] transition-all duration-300 shadow-lg hover:shadow-[#2589b4]/30 hover:-translate-x-1 group"
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <div className="flex flex-col items-center">
            <div className="text-[#2589b4] font-black text-3xl tracking-widest tabular-nums">
              {currentIndex + 1}
              <span className="text-gray-300 text-xl font-medium mx-1">/</span>
              <span className="text-gray-400 text-xl font-medium">15</span>
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full bg-white border-2 border-[#2589b4]/20 text-[#2589b4] flex items-center justify-center hover:bg-[#2589b4] hover:text-white hover:border-[#2589b4] transition-all duration-300 shadow-lg hover:shadow-[#2589b4]/30 hover:translate-x-1 group"
          >
            <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
