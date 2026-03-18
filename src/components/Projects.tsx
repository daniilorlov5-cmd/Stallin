import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  { year: "2021", title: "Расширение в Талдоме", desc: "Расширение основной производственной линии." },
  { year: "2022", title: "Завод в Челябинске", desc: "Открытие нового завода по производству высоких профилей." },
  { year: "2023", title: "Сертификация ГОСТ", desc: "Достижение стандарта отклонения 0,03 мм." },
  { year: "2024", title: "Запуск СТ206", desc: "Представляем наш самый прочный профиль." },
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh] bg-cw-bg">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 absolute top-32 left-0 right-0 z-10">
          <h2 className="text-5xl md:text-7xl font-serif text-cw-dark tracking-tight text-center">
            История развития
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-[10vw] mt-24">
          {projects.map((project, index) => (
            <div
              key={project.year}
              className="w-[80vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="px-6 py-2 bg-cw-dark text-white rounded-full text-sm font-medium">
                  {project.year}
                </span>
              </div>
              <div className="aspect-[16/9] bg-cw-bg rounded-2xl overflow-hidden mb-8 relative">
                <img
                  src={`https://images.unsplash.com/photo-1541888086925-920a0b414631?q=80&w=1200&auto=format&fit=crop&sig=${index}`}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-serif text-cw-dark mb-4">{project.title}</h3>
              <p className="text-lg text-cw-dark/60">{project.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
