import { motion } from 'motion/react';
import { ArrowRight, MapPin, Maximize, Layers, Calendar } from 'lucide-react';

const objects = [
  {
    title: "Москва, ТРЦ «ГОРОД Косино»/Leroy Merlin",
    address: "Москва",
    volume: "20 000 м2",
    type: "в спец.цвете RAL9010 – Leroy Merlin",
    year: undefined,
    image: "/1.jpeg"
  },
  {
    title: "Завод Stadler",
    address: "республика Беларусь, г. Фаниполь",
    volume: "6 500 м2",
    type: "СТ 135-930-0,8",
    year: "2021",
    image: "/2.jpeg"
  },
  {
    title: "ТЦ Globus",
    address: "мкрн Митино",
    volume: "22 000 м2",
    type: "СТ 150-840-1,0 в спец цвете RAL 9001",
    year: undefined,
    image: "/3.jpg"
  },
  {
    title: "Агропромышленный комплекс «Лебедянь»",
    address: "Липецкая область, г. Лебедянь",
    volume: "23 860 м2",
    type: "СТ 150-840-1,0",
    year: "2021",
    image: "/4.jpg"
  },
  {
    title: "Индустриальный парк «Русич-Шушары»",
    address: "п. Шушары, г. Санкт-Петербург",
    volume: "50 000 м2",
    type: undefined,
    year: undefined,
    image: "/5.jpg"
  }
];

const ProfileSketch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 80 L50 20 L90 20 L120 80 L150 80 L180 20" strokeDasharray="4 4" />
    <path d="M20 90 L50 30 L90 30 L120 90 L150 90 L180 30" />
    <line x1="10" y1="50" x2="190" y2="50" strokeDasharray="2 4" opacity="0.5" />
    <circle cx="50" cy="30" r="3" fill="currentColor" />
    <circle cx="90" cy="30" r="3" fill="currentColor" />
    <circle cx="120" cy="90" r="3" fill="currentColor" />
  </svg>
);

export function ImplementedObjects() {
  return (
    <section id="implemented-objects" className="py-24 bg-gray-50/50 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <div className="w-3 h-3 bg-[#2589b4] rounded-sm"></div>
            <h2 className="text-3xl md:text-4xl font-medium text-cw-dark">Реализованные объекты</h2>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto md:mx-0 text-lg">
            Гордимся каждым проектом. Надежность, проверенная временем и сотнями тысяч квадратных метров поставленной продукции.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {objects.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col relative overflow-hidden group"
            >
              {/* Background Sketch & Grid */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: 'linear-gradient(#2589b4 1px, transparent 1px), linear-gradient(90deg, #2589b4 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <ProfileSketch className="absolute -top-4 -right-4 w-48 h-48 text-[#2589b4] opacity-[0.04] pointer-events-none transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 z-0" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-cw-dark mb-8 leading-tight min-h-[3.5rem]">
                  {obj.title}
                </h3>

                <div className="space-y-5 mb-8 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2589b4]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#2589b4]" />
                    </div>
                    <div className="mt-0.5">
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Локация</p>
                      <p className="text-sm text-gray-700 font-medium leading-snug">{obj.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2589b4]/10 flex items-center justify-center shrink-0">
                      <Maximize className="w-5 h-5 text-[#2589b4]" />
                    </div>
                    <div className="mt-0.5">
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Объем поставки</p>
                      <p className="text-sm text-gray-700 font-medium leading-snug">{obj.volume}</p>
                    </div>
                  </div>

                  {obj.type && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#2589b4]/10 flex items-center justify-center shrink-0">
                        <Layers className="w-5 h-5 text-[#2589b4]" />
                      </div>
                      <div className="mt-0.5">
                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Вид профнастила</p>
                        <p className="text-sm text-gray-700 font-medium leading-snug">{obj.type}</p>
                      </div>
                    </div>
                  )}

                  {obj.year && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#2589b4]/10 flex items-center justify-center shrink-0">
                        <Calendar className="w-5 h-5 text-[#2589b4]" />
                      </div>
                      <div className="mt-0.5">
                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Год реализации</p>
                        <p className="text-sm text-gray-700 font-medium leading-snug">{obj.year}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <div className="h-56 w-full rounded-2xl overflow-hidden mb-6 relative shadow-sm">
                    <img src={obj.image} alt={obj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2589b4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 text-[#2589b4] font-bold text-sm hover:text-[#1e7399] transition-colors group/link w-full justify-between bg-gray-50 p-4 rounded-xl hover:bg-[#2589b4]/5 border border-gray-100">
                    Подробнее об объекте
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* 6th Card - CTA / See More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#2589b4] rounded-[2rem] p-8 shadow-[0_4px_20px_rgb(37,137,180,0.2)] hover:shadow-[0_8px_30px_rgb(37,137,180,0.3)] transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group text-center min-h-[500px]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <ProfileSketch className="absolute -bottom-10 -left-10 w-64 h-64 text-white opacity-10 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 z-0" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 backdrop-blur-sm">
                <ArrowRight className="w-12 h-12 text-white group-hover:translate-x-1 transition-transform" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Больше объектов
              </h3>
              
              <p className="text-white/80 text-base mb-10 max-w-[250px]">
                В нашем портфолио более 100 успешно реализованных проектов по всей России и СНГ.
              </p>

              <a href="#" className="bg-white text-[#2589b4] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2 group/btn">
                Смотреть все проекты
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
