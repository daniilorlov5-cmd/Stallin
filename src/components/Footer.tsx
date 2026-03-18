export function Footer() {
  return (
    <footer id="contact" className="bg-cw-dark text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div>
            <div className="text-3xl font-bold tracking-tighter mb-8">
              STALLIN
            </div>
            <p className="text-white/60 max-w-xs">
              Российский производитель премиального профнастила. Талдом и Челябинск.
            </p>
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
