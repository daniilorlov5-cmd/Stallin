export function Facts() {
  return (
    <section id="facts" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-medium mb-16">Факты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-cw-card3 rounded-3xl p-8 flex flex-col justify-between col-span-1 md:col-span-1 aspect-square md:aspect-auto">
            <div>
              <h3 className="text-6xl md:text-7xl font-medium text-cw-accent mb-4">2</h3>
              <p className="text-lg font-medium">современных завода<br/>в Талдоме и Челябинске</p>
            </div>
          </div>
          <div className="bg-cw-card1 rounded-3xl p-8 flex flex-col justify-between col-span-1 md:col-span-2">
            <p className="text-lg mb-8 max-w-md text-gray-700">Мы не просто производим металл. Мы создаем основу для надежных зданий по всей России, контролируя каждый этап.</p>
            <div>
              <h3 className="text-6xl md:text-7xl font-medium text-cw-accent">0.03 мм</h3>
              <p className="text-gray-600 mt-2 font-medium">максимальное отклонение от ГОСТ</p>
            </div>
          </div>
          <div className="bg-cw-card2 rounded-3xl p-8 flex flex-col justify-between col-span-1 md:col-span-2">
            <h3 className="text-6xl md:text-7xl font-medium text-cw-accent mb-4">320+</h3>
            <p className="text-lg max-w-md text-gray-700">марка стали для высоких профилей, обеспечивающая феноменальную несущую способность.</p>
          </div>
          <div className="bg-cw-card4 rounded-3xl p-8 flex flex-col justify-between col-span-1 md:col-span-1 aspect-square md:aspect-auto">
            <div>
              <h3 className="text-6xl md:text-7xl font-medium text-cw-accent mb-4">100%</h3>
              <p className="text-lg font-medium">входной контроль<br/>сырья в лаборатории</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
