import { motion } from 'motion/react';

const partners = [
  { id: 1, image: '/9.png', alt: 'АПСС' },
  { id: 2, image: '/10.png', alt: 'Партнер 2' },
  { id: 3, image: '/11.jpg', alt: 'ЦНИИСК' },
  { id: 4, image: '/12.jpeg', alt: 'ММК' },
  { id: 5, image: '/13.jpg', alt: 'ТехноНИКОЛЬ' },
];

export function Partners() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16 border-l-4 border-[#2589b4] pl-6 md:pl-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-cw-dark mb-6 tracking-tight"
          >
            Наши партнеры
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg md:text-xl max-w-4xl leading-relaxed"
          >
            Мы сотрудничаем с признанными лидерами отрасли. Такое партнёрство подтверждает качество нашей продукции, делает наши решения надёжными и технологичными.
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 flex items-center justify-center aspect-[4/3] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgb(37,137,180,0.1)] hover:border-[#2589b4]/30 hover:-translate-y-1 transition-all duration-500 group"
            >
              <img 
                src={partner.image} 
                alt={partner.alt} 
                className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
