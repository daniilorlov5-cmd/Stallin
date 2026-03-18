import { ArrowRight } from "lucide-react";

const services = [
  { num: "1", title: "Производство профнастила", desc: "Изготавливаем премиальный профнастил марок СТ62 - СТ206 из стали высоких грейдов (280-320+)." },
  { num: "2", title: "Проектирование", desc: "Помогаем с расчетами несущей способности и подбором оптимального профиля для вашего объекта." },
  { num: "3", title: "Доставка на объект", desc: "Организуем логистику с наших заводов в Талдоме и Челябинске точно в срок." },
  { num: "4", title: "Контроль качества", desc: "Собственная лаборатория проверяет каждую партию. Гарантируем отклонение не более 0,03 мм." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-medium mb-16">С чем поможем</h2>
        <div className="flex flex-col">
          {services.map((service, i) => (
            <div key={i} className="group flex flex-col md:flex-row md:items-center py-8 border-b border-gray-200 hover:bg-cw-card3/30 transition-colors px-4 -mx-4 rounded-xl cursor-pointer">
              <div className="w-full md:w-1/3 flex items-start gap-4 mb-4 md:mb-0">
                <span className="text-cw-accent font-medium">{service.num}.</span>
                <h3 className="text-xl font-medium">{service.title}</h3>
              </div>
              <div className="w-full md:w-1/2 pr-8">
                <p className="text-gray-600">{service.desc}</p>
              </div>
              <div className="w-full md:w-1/6 flex justify-start md:justify-end mt-4 md:mt-0">
                <span className="text-cw-accent flex items-center gap-2 font-medium">
                  Подробнее <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
