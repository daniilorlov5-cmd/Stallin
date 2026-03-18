import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="contact" className="bg-cw-dark text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <svg width="56" height="56" viewBox="0 0 100 100" fill="currentColor" className="text-white">
                <path d="M 12 85 L 45 85 C 45 75, 49 65, 49 45 C 49 25, 35 15, 15 10 C 28 15, 37 28, 37 45 C 37 65, 25 77, 12 77 Z" />
                <path d="M 88 15 L 55 15 C 55 25, 51 35, 51 55 C 51 75, 65 85, 85 90 C 72 85, 63 72, 63 55 C 63 35, 75 23, 88 23 Z" />
              </svg>
              <div className="flex flex-col">
                <div className="text-4xl font-serif font-bold tracking-[0.1em] leading-none text-white">
                  STALLIN
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] mt-2 font-serif text-white/80">
                  С Т А Л Ь Н А Я &nbsp; Л И Н И Я
                </div>
              </div>
            </div>
            <p className="text-white/60 max-w-xs">
              Российский производитель премиального профнастила. Талдом и Челябинск.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6">Навигация</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/catalog" className="hover:text-cw-accent transition-colors">Каталог</Link></li>
              <li><a href="/#company" className="hover:text-cw-accent transition-colors">Компания</a></li>
              <li><a href="/#objects" className="hover:text-cw-accent transition-colors">Объекты</a></li>
              <li><a href="/#contacts" className="hover:text-cw-accent transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6">Контакты</h4>
            <ul className="space-y-4 text-white/60">
              <li>info@stallin.ru</li>
              <li>+7 (800) 333-18-53</li>
              <li>+7 (499) 322-31-21</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6">Офисы</h4>
            <ul className="space-y-4 text-white/60">
              <li>Москва, Отрадная 2Б, стр 6, офис 206</li>
              <li>Талдом, Загородная 1а</li>
              <li>Челябинск, Героев Танкограда 39П</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6">Соцсети</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-cw-accent transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ВКонтакте</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} STALLIN. Все права защищены.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
