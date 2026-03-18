import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="values" className="py-32 bg-cw-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-serif leading-tight tracking-tight text-cw-dark">
              Качество, <br />
              <span className="text-cw-dark/40">надежность и</span> <br />
              <span className="italic">точность.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <h3 className="text-2xl font-serif text-cw-dark">Наши ценности</h3>
            <p className="text-lg md:text-xl text-cw-dark/60 leading-relaxed max-w-xl">
              Мы производим профнастил на наших заводах в Талдоме и Челябинске. 
              Наша приверженность строгим стандартам ГОСТ гарантирует максимальное отклонение всего 0,03 миллиметра от номинала.
            </p>
            <p className="text-lg md:text-xl text-cw-dark/60 leading-relaxed max-w-xl">
              Для низких профилей мы используем сталь марки 280, а для высоких — от 320. 
              Мы создаем материалы, которые служат надежным фундаментом для передовой инфраструктуры.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
