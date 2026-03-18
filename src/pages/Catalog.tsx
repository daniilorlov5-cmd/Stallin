import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Building2, PhoneCall, Info, FileText } from "lucide-react";

const catalogItems = [
  { title: "Профнастил несущий", count: 9, image: "/22.jpg", link: "/catalog/load-bearing" },
  { title: "Профнастил для сталебетонных перекрытий", count: 3, image: "/22.jpg" },
  { title: "Профнастил для больших пролетов", count: 5, image: "/22.jpg" },
  { title: "Оцинкованный профлист для кровли", count: 3, image: "/22.jpg" },
  { title: "Профнастил для кровли", count: 6, image: "/22.jpg" },
  { title: "Профнастил оцинкованный", count: 6, image: "/22.jpg" },
  { title: "Промышленный профнастил", count: 6, image: "/22.jpg" },
  { title: "Крепеж для профнастила", count: 6, image: "/32.jpg" }
];

const catalogFeatures = [
  { icon: Info, text: "О компании", href: "/#company" },
  { icon: FileText, text: "Прайс-лист", href: "/#price" },
  { icon: Building2, text: "Наши объекты", href: "/#objects" },
  { icon: PhoneCall, text: "Контакты", href: "/#contacts" },
];

export default function Catalog() {
  return (
    <div className="bg-white min-h-screen">
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
          <span className="text-gray-600">Каталог товаров</span>
        </nav>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-medium text-cw-dark mb-12 tracking-tight">
          Каталог профнастила
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-100 mb-20">
          {catalogItems.map((item, index) => (
            <Link 
              key={index}
              to={item.link || "#"}
              className="group border-r border-b border-gray-100 p-10 flex flex-col items-center text-center transition-all duration-300 cursor-pointer h-full hover:bg-gray-50"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="w-full flex flex-col items-center"
              >
                <div className="h-40 flex items-center justify-center mb-8">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg font-medium text-cw-dark group-hover:text-cw-accent transition-colors leading-snug">
                  {item.title} ({item.count})
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Text Content Sections */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm space-y-12 mb-20">
          <div className="prose prose-slate max-w-none marker:text-cw-accent">
            <h2 className="text-2xl font-bold text-cw-accent mb-6">Что такое профнастил?</h2>
            <p className="text-gray-600 leading-relaxed">
              Профлист - это листовой материал, изготовленный методом холодного проката из оцинкованной стали. Наличие защитного покрытия делает продукцию устойчивой к возникновению коррозии, что продлевает срок службы изделия. Все листы готовой продукции имеют волнистую, профилированную или гофрированную форму. Наличие профиля необходимо для придания жесткости. Без этого свойства невозможно использовать материал для обустройства кровли или несъемной опалубки, где требуется надежная степень фиксации.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Продукция компании STALLIN - это профнастил, изготовленный в соответствии с ГОСТ 24045-94. Небольшой вес и толщина сочетаются с прочностью и высокой надежностью. Наш профлист регулярно проходит испытания на подтверждение качества, благодаря чему заслуженно пользуется признанием строителей.
            </p>

            <h2 className="text-2xl font-bold text-cw-accent mt-12 mb-6">Выбор профнастила</h2>
            <p className="text-gray-600 leading-relaxed">
              Перед покупкой листов профнастила необходимо учитывать индивидуальные характеристики проекта, по которым мы подберем наиболее удачные решения в части выбора профилированного листа. Различают следующие виды:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-4 text-gray-600">
              <li>
                <span className="font-bold">Кровельный.</span> Предназначен для обустройства крыши на различных зданиях и сооружениях - гаражи, ангары, склады, частные дома, дачи и другие постройки. Отличается высокими показателями прочности и жесткости. Способен выдержать большие нагрузки, включая град, сильные порывы ветра и другие. Преимущества профнастила перед черепицей заключаются в монолитности конструкции, что исключает преждевременное разрушение кровли.
              </li>
              <li>
                <span className="font-bold">Несущий.</span> Считается универсальным строительным материалом благодаря возможности построить внешнюю стену, обустроить фасад дома и применить при заливке бетона. Высота профиля начинается от 35 мм. Срок службы такого профлиста - более 60 лет.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              В зависимости от целей и задач мы предлагаем два типа профлиста различных марок:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>«Н» - несущий.</li>
              <li>«СТ» - несущие, фирменная маркировка компании STALLIN.</li>
            </ul>

            <h2 className="text-2xl font-bold text-cw-accent mt-12 mb-6">Профнастил различной толщины в компании STALLIN</h2>
            <p className="text-gray-600 leading-relaxed">
              Мы производим профлист для сталебетонных перекрытий, для больших пролетов и кровли с различных размеров. Толщина стального листа находится в промежутке от 0,5 до 1,5 мм, что влияет на использование материала в различных целях. Так, для обустройства кровли частного дома можно брать лист толщиной от 0,5 мм. При строительстве различных конструкций толщина металла профлиста не должна быть ниже 0,8 мм.
            </p>

            <h2 className="text-2xl font-bold text-cw-accent mt-12 mb-6">Преимущества профнастила</h2>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
              <li>Большой срок службы - свыше 50 лет.</li>
              <li>Легкий вес одного листа и конструкции в целом. Не оказывает давление на несущие элементы строения.</li>
              <li>Профлист можно купить по низкой цене за лист.</li>
              <li>Устойчивость к различным неблагоприятным факторам окружающей среды - влаге, морозу, ультрафиолетовому излучению и другим.</li>
              <li>Простой и быстрый монтаж.</li>
              <li>Высокая прочность на изгиб.</li>
              <li>Низкая цена.</li>
            </ul>

            <h2 className="text-2xl font-bold text-cw-accent mt-12 mb-6">Преимущества покупки профнастила от компании STALLIN</h2>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
              <li>Европейские профили, помогающие оптимизировать бюджет строительства.</li>
              <li>Самое скоростное производство в России - до 20 000 м2 в сутки.</li>
              <li>Собственные стандарты качества. Мы контролируем многие параметры, включая отклонения по толщине, строже, чем ГОСТ.</li>
              <li>Предлагаем много технических решений каждому клиенту - расчет, раскладка, консультация.</li>
              <li>Продаем не тонны металла, а готовые решения.</li>
            </ul>

            <h2 className="text-2xl font-bold text-cw-accent mt-12 mb-6">Технические характеристики и особенности профнастила</h2>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
              <li>Материал - сталь высокого качества.</li>
              <li>Способ изготовления - холодный прокат листов на специальном оборудовании.</li>
              <li>Толщина листа стали в основании профнастила - от 0,5 до 1,5 мм.</li>
              <li>Наличие полимерного покрытия - полиэфир, ПВДФ, полиуретан, пластизоль.</li>
              <li>Способность к возгоранию - негорючий материал.</li>
              <li>Цена за м2 - от 744 рублей.</li>
              <li>Наличие антикоррозийного покрытия - цинковый слой средней толщиной от 200 г/м2.</li>
              <li>Вес листа - от 7 кг за м2.</li>
            </ul>

            <h2 className="text-2xl font-bold text-cw-accent mt-12 mb-6">Применение профнастила</h2>
            <p className="text-gray-600 leading-relaxed">
              Высокие потребительские характеристики позволяют купить профлист в Москве для различных целей в строительстве и в быту. Оцинкованный профлист применяют для строительства:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
              <li>Промышленных зданий.</li>
              <li>Ангаров.</li>
              <li>Логистических центров.</li>
              <li>Торгово-развлекательных центров.</li>
              <li>Складов.</li>
            </ul>
          </div>
        </div>

        {/* Catalog Features Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-gray-100 mb-20">
          {catalogFeatures.map((feature, i) => (
            <a key={i} href={feature.href} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-cw-accent shrink-0 group-hover:bg-cw-accent group-hover:text-white transition-all duration-300">
                <feature.icon size={24} />
              </div>
              <span className="font-medium text-sm md:text-base text-cw-dark group-hover:text-cw-accent transition-colors">{feature.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
