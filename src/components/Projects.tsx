import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import image17 from "./17.jpg";
import image18 from "./18.jpg";
import image19 from "./19.jpg";
import image20 from "./20.jpg";
import image21 from "./21.jpg";

const projects = [
  { 
    year: "2019", 
    title: "Основание компании и запуск первой линии Hennecke (Германия) в Талдоме.", 
    desc: "Разработаны ключевые профили СТ135–СТ160. Первый проект — ТРЦ «Грозный Молл» (4 500 м²).",
    image: image17
  },
  { 
    year: "2020", 
    title: "Запуск линии BudMasz (Польша), сертификация ISO 9001:2015, начало экспортных поставок.", 
    desc: "Объекты: Leroy Merlin, Globus, Почта России.",
    image: image18
  },
  { 
    year: "2021", 
    title: "Вступление в АРСС, открытие новых офисов, партнёрства с Технониколь и Евраз Стил Билдинг.", 
    desc: "Поставки для Wildberries, OZON, X5 Retail Group, Yandex.",
    image: image19
  },
  { 
    year: "2022", 
    title: "Выход на рынки Казахстана и Узбекистана, контракты с Северсталью и ММК.", 
    desc: "STALLIN — основной поставщик профлиста для Wildberries и OZON.",
    image: image20
  },
  { 
    year: "2023", 
    title: "Создание службы R&D, внедрение BIM-моделей, испытания в ЦНИИСК им. Кучеренко, запуск нового СТО.", 
    desc: "Расширение коммуникации с клиентами через бизнес-завтраки STALLIN.",
    image: image21
  },
  { 
    year: "2024", 
    title: "Запуск площадки в Челябинске с линией W+K Industrie Technik.", 
    desc: "Вывод на рынок уникальных профилей СТ200-840 и СТ206-750." 
  },
  { 
    year: "2025", 
    title: "Запуск инновационного кровельного пирога STALLIN и расширение линейки решений.", 
    desc: "Неотапливаемые здания, кровельные системы, сэндвич-панели, стеллажные конструкции." 
  },
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section id="history" ref={targetRef} className="relative h-[400vh] bg-gradient-to-b from-gray-50 to-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12 mb-20 lg:mb-32 z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-cw-accent rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-medium text-cw-dark tracking-tight">
                Вехи развития
              </h2>
              <div className="w-3 h-3 bg-cw-accent rounded-full"></div>
            </div>
            <p className="text-gray-600 max-w-4xl text-lg leading-relaxed">
              Сегодня STALLIN — это две производственные площадки, развитая партнёрская сеть и сотни объектов по всей России и СНГ. Мы объединяем инженерию, технологии и опыт, превращая сложные задачи в надёжные решения.
            </p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-[10vw]">
          {projects.map((project, index) => (
            <div
              key={project.year}
              className="w-[85vw] md:w-[50vw] lg:w-[35vw] flex-shrink-0 bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group hover:shadow-[0_20px_40px_rgb(37,137,180,0.12)] transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-6 py-2 bg-[#2589b4] text-white rounded-full text-xl font-bold tracking-wider shadow-md shadow-[#2589b4]/20 group-hover:scale-105 transition-transform">
                  {project.year}
                </span>
              </div>
              <div className="aspect-[16/9] bg-gray-50 rounded-2xl overflow-hidden mb-8 relative">
                <img
                  src={project.image || `https://images.unsplash.com/photo-1541888086925-920a0b414631?q=80&w=1200&auto=format&fit=crop&sig=${index}`}
                  alt={project.year}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#2589b4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-cw-dark mb-4 leading-snug group-hover:text-[#2589b4] transition-colors">{project.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed mt-auto">{project.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
