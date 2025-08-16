# 📝 Blog Customizer

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-5.81.0-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-1.69.7-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-7.6.10-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

**Проектная работа по курсу "Фронтенд разработчик" от Яндекс Практикума**

</div>

## Описание проекта

Blog Customizer — это интерактивное веб-приложение для настройки и кастомизации блогов. Пользователи могут изменять различные параметры отображения статей, такие как размеры контента, шрифты, цвета и другие стилистические элементы в реальном времени.

### Основные возможности

- **Интерактивная настройка стилей** — изменение параметров блога в реальном времени
- **Адаптивный дизайн** — корректное отображение на всех устройствах
- **Предварительный просмотр** — мгновенное отображение изменений
- **Модульная архитектура** — компонентный подход с использованием React
- **Storybook** — документация и тестирование компонентов

## Технологии

### Frontend
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat) **React 18.2.0** — библиотека для создания пользовательских интерфейсов
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat) **TypeScript 5.0.4** — типизированный JavaScript
- ![Sass](https://img.shields.io/badge/-Sass-CC6699?logo=sass&logoColor=white&style=flat) **Sass** — препроцессор CSS с поддержкой модулей

### Build Tools
- ![Webpack](https://img.shields.io/badge/-Webpack-8DD6F9?logo=webpack&logoColor=black&style=flat) **Webpack 5.81.0** — сборщик модулей
- ![PostCSS](https://img.shields.io/badge/-PostCSS-DD3A0A?logo=postcss&logoColor=white&style=flat) **PostCSS** — инструмент для трансформации CSS
- ![Autoprefixer](https://img.shields.io/badge/-Autoprefixer-CC6699?logo=autoprefixer&logoColor=white&style=flat) **Autoprefixer** — автоматическое добавление вендорных префиксов

### Development Tools
- ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?logo=storybook&logoColor=white&style=flat) **Storybook 7.6.10** — среда для разработки и тестирования компонентов
- ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white&style=flat) **ESLint** — линтер для JavaScript/TypeScript
- ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=black&style=flat) **Prettier** — форматировщик кода
- ![Stylelint](https://img.shields.io/badge/-Stylelint-263238?logo=stylelint&logoColor=white&style=flat) **Stylelint** — линтер для CSS/SCSS

### Git Hooks & Quality
- ![Husky](https://img.shields.io/badge/-Husky-000000?logo=husky&logoColor=white&style=flat) **Husky** — Git hooks
- ![Commitizen](https://img.shields.io/badge/-Commitizen-000000?logo=commitizen&logoColor=white&style=flat) **Commitizen** — стандартизация коммитов
- ![Lint-staged](https://img.shields.io/badge/-Lint--staged-000000?logo=lint-staged&logoColor=white&style=flat) **Lint-staged** — линтинг только измененных файлов

## Быстрый старт

### Предварительные требования

- Node.js (версия 16 или выше)
- Yarn или npm

### Установка

1. **Клонируйте репозиторий**
   ```bash
   git clone https://practicum.gitlab.yandexcloud.net/web-faculty-content/project-drafts/sp10_blogcustomizer.git
   cd sp10_blogcustomizer
   ```

2. **Установите зависимости**
   ```bash
   yarn install
   # или
   npm install
   ```

3. **Запустите проект в режиме разработки**
   ```bash
   yarn start
   # или
   npm start
   ```

4. **Откройте браузер**
   ```
   http://localhost:8080
   ```

## Доступные команды

| Команда | Описание |
|---------|----------|
| `yarn start` | Запуск проекта в режиме разработки |
| `yarn build` | Сборка проекта для продакшена |
| `yarn storybook` | Запуск Storybook для разработки компонентов |
| `yarn build-storybook` | Сборка Storybook |
| `yarn lint` | Проверка кода с помощью ESLint |
| `yarn format` | Форматирование кода с помощью Prettier |
| `yarn test` | Запуск всех проверок качества кода |
| `yarn commit` | Создание коммита с помощью Commitizen |

## Структура проекта

```
src/
├── components/          # React компоненты
│   ├── arrow-button/    # Кнопка со стрелкой
│   ├── article/         # Компонент статьи
│   ├── article-params-form/ # Форма параметров статьи
│   ├── button/          # Базовая кнопка
│   ├── radio-group/     # Группа радио-кнопок
│   ├── select/          # Компонент выбора
│   ├── separator/       # Разделитель
│   ├── spacing/         # Компонент отступов
│   ├── story-decorator/ # Декоратор для Storybook
│   └── text/            # Текстовые компоненты
├── constants/           # Константы приложения
├── fonts/              # Шрифты проекта
├── images/             # Изображения и иконки
├── styles/             # Глобальные стили
└── index.tsx           # Точка входа приложения
```

## Компоненты

Проект включает в себя набор переиспользуемых компонентов:

- **Article** — компонент для отображения статей
- **ArticleParamsForm** — форма для настройки параметров статьи
- **Button** — универсальная кнопка с различными вариантами
- **Select** — выпадающий список с кастомным дизайном
- **RadioGroup** — группа радио-кнопок
- **Text** — текстовые компоненты с различными стилями

Каждый компонент имеет:
- TypeScript типизацию
- SCSS модули для стилизации
- Storybook истории для документации
- Адаптивный дизайн

## Конфигурация

### Webpack
Проект использует кастомную конфигурацию Webpack с поддержкой:
- TypeScript
- SCSS модулей
- SVG как React компонентов
- Hot Module Replacement
- Оптимизация для продакшена

### ESLint & Prettier
Настроены правила для обеспечения качества кода:
- TypeScript правила
- React правила
- Accessibility правила
- Автоматическое форматирование

### Git Hooks
Настроены pre-commit хуки для:
- Автоматического линтинга
- Форматирования кода
- Проверки стилей

## Документация

### Storybook
Для просмотра документации компонентов запустите:
```bash
yarn storybook
```

Storybook доступен по адресу: `http://localhost:6006`

### Компоненты
Каждый компонент имеет:
- Описание назначения
- Примеры использования
- Параметры (props)
- Интерактивные примеры

---

