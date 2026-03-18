import { motion } from 'motion/react';

const newsItems = [
  {
    id: 1,
    date: "03.03.2026",
    title: "Инженерия, которая снижает металлоёмкость",
    description: "На Конференции EVRAZ STEEL BUILDING компания STALLIN представит комплексный подход к проектированию и поставке профнастила",
    image: "/15.jpg.pagespeed.ic.5D_RM9r86E.jpeg",
  },
  {
    id: 2,
    date: "25.02.2026",
    title: "Снегопады продолжаются. Нагрузка на кровлю растет",
    description: "Сегодня фактическая снеговая нагрузка в отдельных зонах существенно превышает средние нормативные значения.",
    image: "/14.jpg",
  }
];

export function News() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-3 h-3 bg-[#2589b4] rounded-sm"></div>
          <h2 className="text-4xl md:text-5xl font-medium text-cw-dark tracking-wide">Новости</h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {newsItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 group cursor-pointer"
            >
              {/* Image Half */}
              <div className="w-full md:w-1/2 overflow-hidden relative aspect-[4/3] md:aspect-auto md:min-h-[200px]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Text Half */}
              <div className="w-full md:w-1/2 flex flex-col justify-start py-2">
                <span className="text-sm text-gray-400 mb-3 font-medium tracking-wide">{item.date}</span>
                <h3 className="text-xl font-bold text-[#2589b4] mb-4 group-hover:text-[#1e7399] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-[#2589b4] text-sm font-medium group-hover:text-[#1e7399] transition-colors">
                    Подробнее
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-start"
        >
          <button 
            type="button"
            className="px-8 py-3 border border-[#2589b4] text-[#2589b4] font-bold hover:bg-[#2589b4] hover:text-white transition-all duration-300"
          >
            Все новости
          </button>
        </motion.div>

      </div>
    </section>
  );
}
