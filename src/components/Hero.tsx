export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-start overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 blur-[6px] scale-110"
      >
        <source src="/Video1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Dark semi-transparent box behind text */}
        <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 max-w-[850px] border-l-4 border-cw-accent relative overflow-hidden">
          {/* Decorative graphic element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cw-accent/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-cw-accent"></div>
            <span className="text-cw-accent font-medium tracking-widest uppercase text-sm">Надежность и качество</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
            Производственно-<br />
            инжиниринговая<br />
            компания
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-10 font-medium tracking-wide drop-shadow-md max-w-2xl">
            производственная мощность <span className="text-cw-accent font-bold">60 метров/минуту</span>
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-cw-dark bg-white hover:bg-gray-100 transition-colors shrink-0 shadow-lg hover:shadow-xl"
            >
              Перейти в каталог
            </a>
            <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
              <svg className="w-5 h-5 text-cw-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              ГОСТ стандарты
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
