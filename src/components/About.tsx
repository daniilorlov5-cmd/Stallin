import { Handshake, Coins, Star, Award } from "lucide-react";

const features = [
  { icon: Handshake, text: "Индивидуальный подход" },
  { icon: Coins, text: "Выгодное ценообразование" },
  { icon: Star, text: "Высокое качество" },
  { icon: Award, text: "Квалифицированная команда" },
];

export function About() {
  return (
    <section id="about" className="bg-white pt-12 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Features Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-200 mb-16">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-cw-accent shrink-0">
                <feature.icon size={24} />
              </div>
              <span className="font-medium text-sm md:text-base text-cw-dark">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-medium mb-4 text-cw-dark">Компания STALLIN</h2>
            <p className="text-xl font-medium mb-8 text-cw-dark">Стальная линия к деталям</p>
            <div className="border-l-2 border-cw-dark pl-6 py-2">
              <p className="text-lg text-gray-700">
                Выбирая STALLIN,<br />
                вы работаете с инженерным партнёром,<br />
                который отвечает за результат проекта.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-gray-700 mb-6">
              STALLIN — одна из лидирующих в России компаний по производству несущего профнастила.
            </p>
            <p className="text-gray-700 mb-6">
              Мы объединяем собственное производство, инженерную экспертизу и комплексный подход к проектам, предлагая решения для кровли, фасадов, перекрытий и складского хранения.
            </p>
            <p className="text-gray-700 mb-8">
              Наши специалисты помогают снижать риски и оптимизировать стоимость строительства.
            </p>
            <div>
              <button className="border border-cw-accent text-cw-accent px-6 py-3 rounded-full font-medium hover:bg-cw-accent hover:text-white transition-colors">
                Подробнее о компании
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
