# Микроразметка Schema.org и JSON-LD

> [Ссылка на рабочий сайт на GitHub Pages](https://razorqa666.github.io/site/)

# Описание

Образовательный сайт на тему «Использование микроразметки (Schema.org, JSON-LD)» — тема №22 по учебному плану. Сайт состоит из 9 страниц и покрывает историю, форматы, типы, SEO-эффект и практику применения структурированных данных в веб-разработке.

# Информация о студенте

- ФИО: Жуковский Даниил Константинович
- Тема проекта: Использование микроразметки (Schema.org, JSON-LD) — тема №22
- CSS-фреймворк: Open Props (open-props.style) — №38 по списку
- Ссылка на сайт: https://razorqa666.github.io/site/
- Репозиторий: https://razorqa666.github.io/site/

# Технологии

- HTML5 — семантическая разметка, `<header>`, `<main>`, `<aside>`, `<footer>`, `<nav>`
- CSS3 — кастомные переменные, flexbox, grid, media queries
- Open Props — CSS-фреймворк (переменные дизайн-токены)
- JavaScript (нативный) — бургер-меню, активные ссылки, форма подписки
- JSON-LD — собственная микроразметка WebSite на главной странице

# Страницы сайта

| Файл | Раздел |
|------|--------|
| `index.html` | Главная |
| `what-is.html` | Что такое микроразметка |
| `schema.html` | Schema.org — словарь типов |
| `json-ld.html` | JSON-LD |
| `microdata.html` | Microdata и RDFa |
| `types.html` | Основные типы Schema.org |
| `seo.html` | Влияние на SEO |
| `tools.html` | Инструменты |
| `examples.html` | Примеры кода |

# Запуск проекта

Сайт состоит из статических файлов — достаточно открыть `index.html` в браузере или разместить папку на любом HTTP-сервере.

bash
# С помощью Live Server (VS Code)
# Просто откройте папку и нажмите Go Live

# Или через Python
python -m http.server 8080
# Откройте http://localhost:8080


# Деплой на GitHub Pages

1. Создайте репозиторий на GitHub
2. Загрузите все файлы проекта
3. Перейдите в Settings → Pages
4. Выберите Source: Deploy from branch → main → / (root)
5. Нажмите Save — сайт будет доступен по адресу https://razorqa666.github.io/site/

# Адаптивность

Сайт поддерживает три контрольные точки:
- Мобильные (< 768px) — скрытый сайдбар, бургер-меню
- Планшеты (768–991px) — сайдбар по нажатию бургера
- Десктоп (≥ 992px) — постоянный боковой сайдбар

# Ссылки

- [Open Props](https://open-props.style)
- [Schema.org](https://schema.org)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [JSON-LD спецификация W3C](https://www.w3.org/TR/json-ld11/)
