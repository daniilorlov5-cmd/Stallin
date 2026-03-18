import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  LayoutGrid, 
  List, 
  BarChart3, 
  Eye, 
  ChevronDown,
  PaintBucket,
  MessageSquare,
  Calculator,
  Map,
  Truck,
  Handshake,
  Banknote,
  Star,
  Users,
  X
} from "lucide-react";

const categories = [
  { name: "Профнастил", active: true },
  { name: "Кровельный пирог", active: false },
  { name: "Сэндвич-панели", active: false },
  { name: "Складские стеллажи", active: false },
];

const services = [
  { icon: PaintBucket, text: "Покраска по RAL" },
  { icon: MessageSquare, text: "Техническая консультация" },
  { icon: Calculator, text: "Расчет и подбор профнастила" },
  { icon: Map, text: "Раскладка профнастила по КМ" },
  { icon: Truck, text: "Доставка" },
];

const products = [
  {
    id: 1,
    title: "Профнастил СТ 62-785",
    image: "/23.jpg",
    specs: [
      { label: "Рабочая ширина", value: "785 мм" },
      { label: "Габаритная ширина", value: "~815 мм" },
      { label: "Высота профиля", value: "61 мм" },
      { label: "Ширина полки", value: "118 мм" },
    ]
  },
  {
    id: 2,
    title: "Профнастил СТ 90-945",
    image: "/24.jpg",
    specs: [
      { label: "Рабочая ширина", value: "945 мм" },
      { label: "Габаритная ширина", value: "~985 мм" },
      { label: "Высота профиля", value: "87 мм" },
      { label: "Ширина полки", value: "140 мм" },
    ]
  },
  {
    id: 3,
    title: "Профнастил СТ 135-930",
    image: "/25.jpg",
    specs: [
      { label: "Рабочая ширина", value: "930 мм" },
      { label: "Габаритная ширина", value: "~968 мм" },
      { label: "Высота профиля", value: "136 мм" },
      { label: "Ширина полки", value: "" },
    ]
  },
  {
    id: 4,
    title: "Профнастил СТ 144-860",
    image: "/26.jpg",
    specs: [
      { label: "Рабочая ширина", value: "860 мм" },
      { label: "Габаритная ширина", value: "~920 мм" },
      { label: "Высота профиля", value: "144 мм" },
      { label: "Ширина полки", value: "119 мм" },
    ]
  },
  {
    id: 5,
    title: "Профнастил СТ 150-840",
    image: "/27.jpg",
    specs: [
      { label: "Рабочая ширина", value: "840 мм" },
      { label: "Габаритная ширина", value: "~878 мм" },
      { label: "Высота профиля", value: "153 мм" },
      { label: "Ширина полки", value: "108 мм" },
    ]
  },
  {
    id: 6,
    title: "Профнастил Н 60-845",
    image: "/28.jpg",
    specs: [
      { label: "Рабочая ширина", value: "845 мм" },
      { label: "Габаритная ширина", value: "~902 мм" },
      { label: "Высота профиля", value: "60 мм" },
      { label: "Ширина полки", value: "122 мм" },
    ]
  },
  {
    id: 7,
    title: "Профнастил СТ 160-750",
    image: "/29.jpg",
    specs: [
      { label: "Рабочая ширина", value: "750 мм" },
      { label: "Габаритная ширина", value: "~788 мм" },
      { label: "Высота профиля", value: "159 мм" },
      { label: "Ширина полки", value: "108 мм" },
    ]
  },
  {
    id: 8,
    title: "Профнастил СТ 200 - 840",
    image: "/30.jpg",
    specs: [
      { label: "Рабочая ширина", value: "840 мм" },
      { label: "Габаритная ширина", value: "880 мм" },
      { label: "Высота профиля", value: "200 мм" },
      { label: "Ширина полки", value: "220 мм" },
    ]
  },
  {
    id: 9,
    title: "Профнастил СТ 206 - 750",
    image: "/31.jpg",
    specs: [
      { label: "Рабочая ширина", value: "750 мм" },
      { label: "Габаритная ширина", value: "790 мм" },
      { label: "Высота профиля", value: "206 мм" },
      { label: "Ширина полки", value: "220 мм" },
    ]
  }
];

export default function LoadBearingProf() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" 
                  style={{ 
                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, 
                    backgroundSize: '24px 24px' 
                  }} 
                />
                {/* Large Background Text */}
                <div className="absolute -bottom-10 -right-10 text-[200px] font-black text-black/[0.02] select-none leading-none">
                  {selectedProduct.title.split(' ').slice(1, 3).join(' ')}
                </div>
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-cw-accent" />
              </div>

              {/* Modal Header */}
              <div className="flex items-center justify-between px-8 py-8 border-b border-gray-100 relative z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cw-accent font-bold mb-1">Технические характеристики</span>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-800">{selectedProduct.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400 hover:text-cw-accent"
                >
                  <X size={32} strokeWidth={1} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left: Image */}
                  <div className="relative group">
                    <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-100 shadow-inner relative overflow-hidden">
                      {/* Blueprint Corner Accents */}
                      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gray-300" />
                      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gray-300" />
                      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gray-300" />
                      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gray-300" />
                      
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.title} 
                        className="max-w-full h-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Technical Label */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-gray-100 shadow-sm text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      Вид профиля 01
                    </div>
                  </div>

                  {/* Right: Specs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 py-4">
                    <div className="space-y-8">
                      <div className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cw-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ширина</span>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Рабочая ширина - {selectedProduct.specs.find(s => s.label === "Рабочая ширина")?.value}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cw-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Покрытие</span>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Покрытие - оцинкованная, оцинкованная с покрытием, нержавеющая
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cw-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Высота</span>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Высота профиля - {selectedProduct.specs.find(s => s.label === "Высота профиля")?.value}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cw-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Класс цинкования</span>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Класс Zn - 100, 140, 200, 275 г/м2
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cw-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Стандарт</span>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            ГОСТ Р 24045-2016, ТУ 24.33.20- 001-41384308-2019
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cw-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Габаритная ширина</span>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Габаритная ширина, мм - {selectedProduct.specs.find(s => s.label === "Габаритная ширина")?.value}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cw-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Толщина</span>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Толщина - 0.8, 0.9, 1.0, 1.2, 1.5 мм
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cw-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Марка стали</span>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Марки стали по ГОСТ - Р 52246: 220, 280, 320, 350
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cw-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Покрытие RAL</span>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Полиэфир, ПВДФ, Полиуретан, Пластизоль
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cw-accent mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Цвет</span>
                          <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            Окраска - в любой цвет по каталогу RAL
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Video Header */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 blur-[4px] scale-105"
        >
          <source src="/Video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center">
            Каталог продукции
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-16 pb-20">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-12">
          <Link to="/" className="hover:text-cw-accent transition-colors">Главная</Link>
          <span className="text-gray-300">/</span>
          <Link to="/catalog" className="hover:text-cw-accent transition-colors">Каталог товаров</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">Профнастил несущий</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-medium text-cw-dark mb-12 tracking-tight">Профнастил несущий</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className={`w-full flex items-center justify-between px-5 py-4 text-sm transition-all ${
                    cat.active 
                      ? "text-cw-accent font-semibold bg-gray-50/50" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-cw-dark"
                  } border-b border-gray-50 last:border-0`}
                >
                  {cat.name}
                  <ChevronRight size={14} className={cat.active ? "opacity-100" : "opacity-30"} />
                </button>
              ))}
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg border border-gray-100 p-5 shadow-sm space-y-4">
              {services.map((service) => (
                <a
                  key={service.text}
                  href="#"
                  className="flex items-center space-x-3 text-xs text-cw-accent hover:text-cw-dark transition-colors group"
                >
                  <service.icon size={14} className="shrink-0" />
                  <span className="underline underline-offset-4 decoration-cw-accent/30 group-hover:decoration-cw-dark/30">
                    {service.text}
                  </span>
                </a>
              ))}
              
              {/* Decorative Graphic Element */}
              <div className="pt-4 mt-4 border-t border-gray-50">
                <div className="h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i} 
                        className="h-full w-px bg-cw-dark absolute" 
                        style={{ left: `${i * 10}%`, transform: 'skewX(-20deg)' }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Стальной профиль</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-6">
                <button className="flex items-center text-xs text-gray-400 hover:text-cw-accent transition-colors group">
                  По популярности <ChevronDown size={12} className="ml-1 group-hover:translate-y-0.5 transition-transform" />
                </button>
                <button className="flex items-center text-xs text-gray-400 hover:text-cw-accent transition-colors group">
                  По названию <ChevronDown size={12} className="ml-1 group-hover:translate-y-0.5 transition-transform" />
                </button>
                <button className="flex items-center text-xs text-gray-400 hover:text-cw-accent transition-colors group">
                  По цене <ChevronDown size={12} className="ml-1 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
              <div className="flex items-center space-x-3 border-l border-gray-100 pl-4">
                <button className="p-1.5 text-gray-300 hover:text-cw-accent transition-colors">
                  <List size={18} />
                </button>
                <button className="p-1.5 text-cw-accent bg-gray-50 rounded">
                  <LayoutGrid size={18} />
                </button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all group h-full flex flex-col"
                >
                  {/* Card Header Icons - Always open modal */}
                  <div className="flex justify-center space-x-6 mb-8">
                    <BarChart3 
                      size={20} 
                      className="text-gray-300 hover:text-[#2589B4] cursor-pointer transition-colors" 
                      onClick={() => setSelectedProduct(product)}
                    />
                    <Eye 
                      size={20} 
                      className="text-gray-300 hover:text-[#2589B4] cursor-pointer transition-colors" 
                      onClick={() => setSelectedProduct(product)}
                    />
                  </div>

                  {/* Wrap the rest of the card in a Link if it's ST 200 - 840 */}
                  {product.id === 8 ? (
                    <Link to="/catalog/load-bearing/st-200-840" className="flex-1 flex flex-col">
                      <div className="flex-1 flex flex-col">
                        {/* Placeholder for Image */}
                        <div className="aspect-[4/3] bg-gray-50 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-100 transition-colors">
                          {product.image ? (
                            <div className="w-full h-full p-8 flex items-center justify-center">
                              <img 
                                src={product.image} 
                                alt={product.title}
                                className="max-w-full max-h-full object-contain"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ) : (
                            /* Stylized CSS Corrugated Sheet Graphic */
                            <div className="flex space-x-1 opacity-20 group-hover:opacity-30 transition-opacity">
                              {[...Array(8)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className="w-4 h-20 bg-cw-dark rounded-full"
                                  style={{ 
                                    transform: i % 2 === 0 ? 'translateY(-10px)' : 'translateY(10px)',
                                    opacity: 1 - (i * 0.1)
                                  }}
                                />
                              ))}
                            </div>
                          )}
                          <div className="absolute bottom-4 right-4">
                            <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                              <ChevronRight size={14} className="text-[#2589B4]" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="font-bold text-cw-dark mb-4 group-hover:text-cw-accent transition-colors">
                          {product.title}
                        </h3>

                        <div className="space-y-2">
                          {product.specs.map((spec) => (
                            <div key={spec.label} className="flex flex-col">
                              <span className="text-[11px] text-gray-400 leading-tight">{spec.label}:</span>
                              <span className="text-sm text-gray-600 font-medium">
                                {spec.value || "\u00A0"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex-1 flex flex-col cursor-pointer" onClick={() => setSelectedProduct(product)}>
                      {/* Placeholder for Image */}
                      <div className="aspect-[4/3] bg-gray-50 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-100 transition-colors">
                        {product.image ? (
                          <div className="w-full h-full p-8 flex items-center justify-center">
                            <img 
                              src={product.image} 
                              alt={product.title}
                              className="max-w-full max-h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ) : (
                          /* Stylized CSS Corrugated Sheet Graphic */
                          <div className="flex space-x-1 opacity-20 group-hover:opacity-30 transition-opacity">
                            {[...Array(8)].map((_, i) => (
                              <div 
                                key={i} 
                                className="w-4 h-20 bg-cw-dark rounded-full"
                                style={{ 
                                  transform: i % 2 === 0 ? 'translateY(-10px)' : 'translateY(10px)',
                                  opacity: 1 - (i * 0.1)
                                }}
                              />
                            ))}
                          </div>
                        )}
                        <div className="absolute bottom-4 right-4">
                          <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                            <ChevronRight size={14} className="text-cw-accent" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-bold text-cw-dark mb-4 group-hover:text-cw-accent transition-colors">
                        {product.title}
                      </h3>

                      <div className="space-y-2">
                        {product.specs.map((spec) => (
                          <div key={spec.label} className="flex flex-col">
                            <span className="text-[11px] text-gray-400 leading-tight">{spec.label}:</span>
                            <span className="text-sm text-gray-600 font-medium">
                              {spec.value || "\u00A0"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Text Content Sections */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm space-y-12 mb-20">
              <div className="prose prose-slate max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Профнастил - один из популярных материалов, применяемых для организации и строительства несущих перегородок и перекрытий. Уникальная особенность - высокие профили, которые обеспечивают повышенную жесткость и позволяют создавать конструкции, обладающие высокой прочностью.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Компания STALLIN занимает ведущую позицию среди российских производителей несущего профнастила, предлагая широкий спектр качественных изделий для различных строительных задач. Высота гофр нашей продукции - от 60 до 206 мм, что позволяет применять материал при строительстве жилых и коммерческих зданий, парковок, складских помещений, стадионов и спортивных сооружений, торговых и общественных зданий.
                </p>

                <h2 className="text-2xl font-bold text-cw-dark mt-12 mb-6">Несущий профнастил для перекрытий</h2>
                <p className="text-gray-600 leading-relaxed">
                  Для обустройства любых перекрытий необходим качественный и надежный материал, способный выдержать серьезные нагрузки. Для этого оптимально подходят листы с высотой гофры от 60 мм и толщиной стали в основании до 1,5 мм. Дополнительные ребра жесткости улучшают характеристики листа, что позволяет использовать его для несъемной опалубки при заливке бетона под фундамент.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Одной из ключевых особенностей профнастила STALLIN является использование листов стали с увеличенной толщиной, достигающей 1,5 мм. Применение тонких профлистов в несущих конструкциях невозможно из-за их недостаточной прочности, а дополнительные меры по увеличению толщины материала ведут к росту затрат. Таким образом, наилучшее решение - купить несущий профнастил, изготовленный на специальном оборудовании с учетом необходимых показателей прочности.
                </p>

                <h2 className="text-2xl font-bold text-cw-dark mt-12 mb-6">Особенности изготовления несущего профлиста</h2>
                <p className="text-gray-600 leading-relaxed">
                  Производственная компания STALLIN выпускает и реализует особо прочные профилированные листы, которые могут использоваться в различных неблагоприятных условиях. Мы поставляем марки листов:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
                  <li>«Н» (несущие) 60-845 и 75-750</li>
                  <li>«СТ» (фирменная марка завода) 62-985, 90-945, 135-930, 144-860, 150-840, 160-750, СТ 200-840, СТ 206-750.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-6">
                  Заготовка для любого профлиста - тонколистовая сталь, привозимая на завод в рулоне. Рулонный материал раскатывается и ложится на специальное оборудование, где станок производит штамповку профилей заданной высоты и формы. Наше европейское современное оборудование позволяет работать с металлом толщиной до 1,5 мм. Большинство производителей предлагают листы до 1 мм, которые имеют сниженную прочность в отличие от наших более толстых аналогов.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Трапециевидная форма профиля добавляет жесткости для выдерживания увеличенных нагрузок. После получения заготовки на нее наносят цинковое антикоррозийное покрытие, грунтовку и, при необходимости, полимерный краситель.
                </p>

                <h2 className="text-2xl font-bold text-cw-dark mt-12 mb-6">Купить несущий профнастил в компании STALLIN</h2>
                <p className="text-gray-600 leading-relaxed">
                  Мы предлагаем приобрести несущий профнастил от производителя компаниям и ИП. Предоставляем специальные условия для подрядных строительных организаций.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Чтобы оформить заказ, оставьте заявку на сайте или позвоните нам по телефону <a href="tel:88003331853" className="text-cw-accent font-bold hover:underline">8-800-333-18-53</a>.
                </p>
              </div>

              {/* Callback Form */}
              <div className="pt-12 border-t border-gray-100">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-cw-dark mb-8">Заказать звонок</h3>
                  <form className="space-y-4 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input 
                        type="text" 
                        placeholder="Имя" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cw-accent/20 transition-all"
                      />
                      <input 
                        type="tel" 
                        placeholder="Телефон" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cw-accent/20 transition-all"
                      />
                      <input 
                        type="text" 
                        placeholder="Город" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cw-accent/20 transition-all"
                      />
                    </div>
                    <textarea 
                      placeholder="Ваш вопрос" 
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cw-accent/20 transition-all resize-none"
                    ></textarea>
                    
                    <div className="flex items-start space-x-3 py-2">
                      <input type="checkbox" id="privacy" className="mt-1 accent-cw-accent" />
                      <label htmlFor="privacy" className="text-[10px] text-gray-400 leading-tight">
                        Нажимая кнопку «Жду звонка», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных *
                      </label>
                    </div>

                    <button className="w-full py-4 bg-[#00AEEF] text-white font-bold rounded-lg hover:bg-[#0096ce] transition-colors shadow-lg shadow-sky-200">
                      Жду звонка
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Bottom Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-gray-100">
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-300">
                  <Handshake size={32} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-cw-dark">Индивидуальный подход</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-300">
                  <Banknote size={32} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-cw-dark">Выгодное ценообразование</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-300">
                  <Star size={32} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-cw-dark">Высокое качество</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-300">
                  <Users size={32} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-cw-dark">Квалифицированная команда</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
