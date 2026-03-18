export function Hero() {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-6xl md:text-8xl lg:text-[130px] font-medium leading-[0.9] tracking-tight text-cw-dark max-w-6xl mb-12">
          Стальной <br />
          характер.
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-16">
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-medium">
            Производство премиального профнастила. 
            Строгое соответствие ГОСТ с максимальным отклонением 0,03 мм.
          </p>
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-cw-accent rounded-full hover:bg-cw-accent/90 transition-colors shrink-0"
          >
            Смотреть продукцию
          </a>
        </div>

        {/* Video Placeholder */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden relative group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
            alt="Производство STALLIN" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-2 shadow-xl">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-cw-accent border-b-[12px] border-b-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
