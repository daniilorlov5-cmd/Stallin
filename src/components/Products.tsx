const products = [
  { name: "Профнастил", img: "/prof.jpg" },
  { name: "Кровельный пирог", img: "/pirog.jpg" },
  { name: "Сэндвич-панели", img: "/sandwich.jpg" },
  { name: "Складские стеллажи", img: "/stellazh.jpg" },
];

export function Products() {
  return (
    <section id="products" className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-3 h-3 bg-cw-accent"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-cw-dark">Продукция</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="border border-[#3b729f] p-6 flex flex-col items-center justify-between group cursor-pointer hover:shadow-2xl transition-all duration-500 bg-white h-56 relative hover:z-50">
              <div className="flex-1 flex items-center justify-center w-full relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="max-w-full max-h-[120px] object-contain transition-all duration-500 ease-out group-hover:scale-[1.65] group-hover:-translate-y-8 group-hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] relative z-10" 
                />
              </div>
              <h3 className="text-lg font-bold text-center mt-4 text-[#3b729f] relative z-20">{product.name}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="bg-cw-accent text-white px-8 py-4 rounded-full font-medium hover:bg-cw-accent/90 transition-colors">
            Весь каталог
          </button>
        </div>
      </div>
    </section>
  );
}
