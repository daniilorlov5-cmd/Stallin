import { ArrowRight } from "lucide-react";

const certs = [
  { title: "ГОСТ 24045-2016", desc: "Профили стальные листовые гнутые с трапециевидными гофрами для строительства.", bg: "bg-cw-card2" },
  { title: "ISO 9001:2015", desc: "Система менеджмента качества применительно к производству.", bg: "bg-cw-card3" },
  { title: "Сертификат пожарной безопасности", desc: "Группа горючести НГ (негорючие материалы).", bg: "bg-cw-card1" },
  { title: "Испытания ЦНИИСК", desc: "Подтвержденная несущая способность профилей СТ153-СТ206.", bg: "bg-cw-card4" },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-medium mb-16">Стандарты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <div key={i} className={`${cert.bg} rounded-3xl p-8 flex flex-col justify-between aspect-square group cursor-pointer`}>
              <div>
                <h3 className="text-xl font-medium mb-4 uppercase tracking-wide">{cert.title}</h3>
                <p className="text-sm text-gray-700">{cert.desc}</p>
              </div>
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full bg-cw-accent text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
