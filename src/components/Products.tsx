import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const products = [
  { 
    name: "Профнастил", 
    namePrep: "профнастилу",
    desc: "Надежный кровельный и стеновой материал для промышленных и гражданских объектов.", 
    img: "/22.jpg" 
  },
  { 
    name: "Кровельный пирог", 
    namePrep: "кровельному пирогу",
    desc: "Комплексное решение для утепления, гидро- и пароизоляции крыши.", 
    img: "/sandwich.jpg" 
  },
  { 
    name: "Сэндвич-панели", 
    namePrep: "сэндвич-панелям",
    desc: "Энергоэффективные панели с высокими теплоизоляционными свойствами.", 
    img: "/pirog.jpg" 
  },
  { 
    name: "Складские стеллажи", 
    namePrep: "складским стеллажам",
    desc: "Прочные металлические конструкции для оптимизации складского пространства.", 
    img: "/prof.jpg" 
  },
];

export function Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lastHovered, setLastHovered] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredIndex(index);
    setLastHovered(index);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 5000);
  };

  const handlePanelMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePanelMouseLeave = () => {
    handleMouseLeave();
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="products" className="py-16 bg-gray-50/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-3 h-3 bg-cw-accent rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-cw-dark">Продукция</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <Link 
              to="/catalog"
              key={i} 
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-between group cursor-pointer border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden min-h-[320px]"
            >
              <div className="w-3/5 relative z-10">
                <h3 className="text-2xl font-medium text-cw-dark mb-4 group-hover:text-cw-accent transition-colors">{product.name}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">{product.desc}</p>
              </div>

              <div className="mt-12 relative z-10">
                <span className="text-cw-accent font-medium flex items-center gap-2 transition-all group-hover:gap-3">
                  Подробнее <ArrowRight className="w-5 h-5" />
                </span>
              </div>

              <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-end p-6 pointer-events-none">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="max-w-full max-h-[80%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 origin-bottom-right" 
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link to="/catalog" className="bg-cw-accent text-white px-8 py-4 rounded-full font-medium hover:bg-cw-accent/90 transition-colors shadow-lg shadow-cw-accent/20">
            Весь каталог
          </Link>
        </div>
      </div>

      {/* Mascot Panel - Always rendered to prevent image loading lag */}
      <motion.div
        initial={{ x: "120%" }}
        animate={{ x: hoveredIndex !== null ? 0 : "120%" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        onMouseEnter={handlePanelMouseEnter}
        onMouseLeave={handlePanelMouseLeave}
        className="fixed bottom-10 right-0 z-50 flex items-end pointer-events-none"
      >
        {/* Speech Bubble */}
        <div
          className={`bg-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 mb-24 mr-[-20px] relative z-10 pointer-events-auto flex flex-col gap-2 max-w-[240px] transition-opacity duration-300 ${hoveredIndex !== null ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="text-sm font-medium text-cw-dark leading-tight">
            Нужна консультация по <span className="text-cw-accent font-bold">{products[lastHovered].namePrep}</span>?
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Наш специалист поможет с расчётом материалов и стоимости.
          </p>
          <button className="mt-1 bg-cw-accent text-white text-xs px-4 py-2.5 rounded-xl font-medium hover:bg-cw-accent/90 transition-colors shadow-md shadow-cw-accent/20 w-full">
            Оставить заявку
          </button>
        </div>

        {/* Mascot Image */}
        <img
          src="/Mascot.png"
          alt="Mascot"
          className="w-24 md:w-28 h-auto object-contain pointer-events-auto"
          style={{ filter: "drop-shadow(-10px 10px 20px rgba(0,0,0,0.2))" }}
        />
      </motion.div>
    </section>
  );
}
