# Brain Games Web

Веб-версия Brain Games: выбор игры и сессия из вопросов с проверкой ответа. Стек — React, TypeScript и Vite. Маршруты идут через `HashRouter`, поэтому обновление страницы на GitHub Pages не требует отдельного `404.html`.

Сайт публикуется как project site:

https://kirillchistov.github.io/brain-games-web/

## Локальный запуск

Из каталога `brain-games-web`:

```bash
npm install
npm run dev
```

Сборка и локальный просмотр продакшен-версии:

```bash
npm run build
npm run preview
```

## Что уже настроено для GitHub Pages

- В `vite.config.ts` задан `base: '/brain-games-web/'`. Префикс совпадает с именем репозитория, из которого GitHub Pages отдаёт сайт.
- В `package.json` поле `homepage` указывает на тот же адрес.
- Скрипт `predeploy` запускает `npm run build`, скрипт `deploy` публикует каталог `dist` через пакет `gh-pages`.
- `gh-pages` сам кладёт в ветку файл `.nojekyll`, чтобы GitHub не прогонял сборку через Jekyll.

Имя репозитория, `base` и `homepage` должны совпадать. Если репозиторий называется иначе, поменяйте все три места сразу.

## Первый деплой

Каталог `brain-games-web` лежит внутри git-репозитория `fullstack-javascript-project-44`. Пакет `gh-pages` публикует ветку в тот репозиторий, который находит по `.git`. Для адреса `/brain-games-web/` нужен отдельный репозиторий с таким именем, и его URL нужно передать явно.

1. Создайте на GitHub пустой публичный репозиторий `brain-games-web`. README, `.gitignore` и лицензию при создании не добавляйте: первую ветку `gh-pages` создаст деплой.
2. Установите зависимости, если ещё не ставили: `npm install`.
3. Опубликуйте сборку в этот репозиторий:

```bash
npm run deploy -- -r git@github.com:kirillchistov/brain-games-web.git
```

`npm run deploy` сначала собирает проект (`predeploy`), затем пушит содержимое `dist` в ветку `gh-pages`. Флаг `-r` задаёт remote. Без него ветка уйдёт в `fullstack-javascript-project-44`, сайт откроется по адресу `https://kirillchistov.github.io/fullstack-javascript-project-44/`, а браузер будет запрашивать скрипты и стили из `/brain-games-web/`.

4. Дождитесь, пока в репозитории `brain-games-web` появится ветка `gh-pages`.
5. Откройте **Settings → Pages**. В блоке **Build and deployment** выберите **Deploy from a branch**, ветку `gh-pages` и папку `/ (root)`, затем сохраните.
6. Через одну-две минуты откройте https://kirillchistov.github.io/brain-games-web/. Статус сборки Pages виден на той же вкладке Settings → Pages.

Проверьте главную и переход в игру. Адрес партии выглядит так: `https://kirillchistov.github.io/brain-games-web/#/play/even`.

## Следующие деплои

Повторяйте ту же команду после изменений:

```bash
npm run deploy -- -r git@github.com:kirillchistov/brain-games-web.git
```

Чтобы не передавать `-r` каждый раз, можно дописать remote в скрипт `deploy` в `package.json`:

```json
"deploy": "gh-pages -d dist -r git@github.com:kirillchistov/brain-games-web.git"
```

После этого достаточно `npm run deploy`.

## Если страница пустая

Откройте DevTools и посмотрите, откуда грузятся `/assets/...`. Рабочий путь начинается с `/brain-games-web/`. Запросы к корню домена означают, что в `vite.config.ts` потерялся `base`, и нужна повторная сборка с деплоем. Запросы к `/fullstack-javascript-project-44/` означают, что ветка `gh-pages` запушена в родительский репозиторий: повторите деплой с `-r`.
