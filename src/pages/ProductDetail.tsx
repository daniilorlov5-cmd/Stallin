import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ShoppingCart, Download, ChevronRight } from "lucide-react";
import drawingImg from "../components/33.jpg";

const productData = {
  id: 8,
  title: "Профнастил СТ 200 - 840",
  image: "/30.jpg",
  drawing: drawingImg,
  specs: [
    { label: "Рабочая ширина", value: "840 мм" },
    { label: "Габаритная ширина, мм", value: "880 мм" },
    { label: "Покрытие", value: "оцинкованная, оцинкованная с покрытием, нержавеющая" },
    { label: "Толщина", value: "0.8, 0.9, 1.0, 1.2, 1.5 мм" },
    { label: "Высота профиля", value: "200 мм" },
    { label: "Марки стали по ГОСТ", value: "Р 52246: 220, 280, 320, 350" },
    { label: "Сталь с покрытием RAL", value: "Полиэфир, ПВДФ, Полиуретан, Пластизоль" },
    { label: "Производится по", value: "ГОСТ Р 24045-2016, ТУ 24.33.20- 001-41384308-2019" },
    { label: "Окраска", value: "в любой цвет по каталогу RAL" },
  ],
  colors: [
    { name: "Цинк", color: "#E5E7EB", active: true },
    { name: "RAL 7004", color: "#9CA3AF" },
    { name: "RAL 9002", color: "#D1D5DB" },
    { name: "RAL 9003", color: "#F3F4F6" },
    { name: "RAL 9006", color: "#A1A1AA" },
  ]
};

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState("Сторона А");
  const [selectedColor, setSelectedColor] = useState("Цинк");

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Video Header (Same as Catalog) */}
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

      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-8">
        {/* Breadcrumbs - Exactly as in screenshot */}
        <nav className="flex items-center gap-2 text-[13px] text-gray-400 mb-16">
          <Link to="/" className="hover:text-[#2589B4] transition-colors">Главная</Link>
          <span className="text-gray-300">/</span>
          <Link to="/catalog/load-bearing" className="hover:text-[#2589B4] transition-colors">Профнастил несущий</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#2589B4]">Профнастил СТ 160-750</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Left Side: Image and Tabs */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 flex items-center justify-center min-h-[400px] w-full mb-12">
              <img 
                src={productData.image} 
                alt={productData.title} 
                className="max-w-[450px] w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Tabs - Centered under image */}
            <div className="w-full max-w-[350px]">
              <div className="flex justify-between border-b border-gray-100 mb-6">
                {["Сторона А", "Сторона Б", "Чертеж"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-[13px] font-medium transition-all relative px-4 ${
                      activeTab === tab ? "text-[#2589B4]" : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#2589B4]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Colors - Centered under tabs */}
              <div className="flex justify-center gap-3">
                {productData.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex flex-col w-[64px] h-[58px] rounded-[4px] overflow-hidden transition-all border ${
                      selectedColor === c.name ? "border-[#2589B4]" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Top part: Text */}
                    <div className="flex-1 bg-white flex items-center justify-center">
                      <span className={`text-[11px] font-bold uppercase tracking-tight ${
                        selectedColor === c.name ? "text-[#2589B4]" : "text-gray-400"
                      }`}>
                        {c.name}
                      </span>
                    </div>
                    {/* Bottom part: Color */}
                    <div 
                      className="h-[22px] w-full" 
                      style={{ backgroundColor: c.color }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Info and Specs */}
          <div className="space-y-10">
            <h1 className="text-[42px] font-bold text-[#2589B4] tracking-tight leading-tight">
              {productData.title}
            </h1>

            <div className="flex gap-4">
              <button className="flex-1 h-[54px] bg-[#F0F7FA] text-[#2589B4] font-bold rounded-[4px] hover:bg-[#E1F0F7] transition-colors flex items-center justify-center gap-3 text-[15px]">
                Добавить в корзину
                <ShoppingCart size={18} />
              </button>
              <button className="flex-1 h-[54px] bg-[#2589B4] text-white font-bold rounded-[4px] hover:bg-[#1E7399] transition-colors text-[15px]">
                Быстрый заказ
              </button>
            </div>

            <div className="space-y-[14px] pt-4">
              {productData.specs.map((spec, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4">
                  <span className="text-[14px] text-gray-400 shrink-0">{spec.label}</span>
                  <div className="flex-1 border-b border-dotted border-gray-200 mb-[4px]" />
                  <span className={`text-[14px] text-right font-medium ${
                    spec.label === "Покрытие" || 
                    spec.label === "Марки стали по ГОСТ" || 
                    spec.label === "Сталь с покрытием RAL" || 
                    spec.label === "Производится по" || 
                    spec.label === "Окраска" 
                    ? "text-[#2589B4]" : "text-gray-700"
                  }`}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Characteristics Section */}
        <div className="space-y-16 text-center pt-10">
          <h2 className="text-[42px] font-bold text-[#2589B4] tracking-tight">
            Технические характеристики
          </h2>

          <div className="max-w-[1000px] mx-auto py-10">
            <img 
              src={productData.drawing} 
              alt="Чертеж" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex justify-center pb-20">
            <button className="px-12 py-5 bg-[#F0F7FA] text-[#2589B4] font-bold rounded-[4px] hover:bg-[#E1F0F7] transition-colors text-[16px]">
              Скачать техническую информацию по профлисту СТ 160-750
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
