<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Правила разработки

## Стек

- Next.js App Router
- React и TypeScript
- SCSS Modules
- TanStack Query для серверного состояния
- Zustand для хранения глобальных состояний, например user
- Axios для HTTP-запросов
- React Hook Form и Zod для сложных форм

## Архитектура

- Использовать Feature-Sliced Design.
- `app/` использовать только для маршрутизации и конфигурации Next.js.
- Бизнес-логику и компоненты размещать в соответствующих слоях FSD.
- Соблюдать правила импортов между слоями.
- Не создавать лишние слои, сущности и абстракции.
- Не создавать слой feature для каждой простой кнопки или UI-элемента. Например если есть кнопка в карточке, оставляем ее в карточке.

## Правила работы

- Перед изменением изучать только относящиеся к задаче файлы.
- Не переписывать работающий код без необходимости.
- Не устанавливать новые зависимости без обоснования.
- Не менять архитектуру без согласования.
- После реализации проверять TypeScript и линтер.
- Не придумывать API-контракты и бизнес-логику: при недостатке информации перечислять вопросы.

## Работа с SVG

- Хранить SVG-иконки и векторные логотипы в `src/shared/assets/svg/`.
- Подключать SVG как React-компоненты через SVGR, если это поддерживается текущей конфигурацией сборщика.
- Использовать SVG через именованный импорт по умолчанию не нужно: импортировать компонент напрямую, например `import Cross from '@/shared/assets/svg/cross.svg'`.
- Передавать `className`, `width` и `height` компоненту SVG, когда это необходимо.
- Не вставлять SVG-код непосредственно в JSX, если его можно вынести в отдельный файл.
- Не дублировать одинаковые иконки под разными именами.
- Если подходящей иконки нет, создать отдельный SVG-файл в `shared/assets/svg/`.
- Не заменять предоставленные в проекте SVG случайными Unicode-символами или эмодзи.

## Правила подключения ресурсов

- Для SVG, используемых как React-компоненты, применять настроенный SVGR.
- Для обычных растровых изображений использовать `public/` или подходящий механизм Next.js Image.
- Не менять конфигурацию сборщика ради SVG без необходимости.
- Перед использованием нового способа импорта проверить существующую конфигурацию проекта.
