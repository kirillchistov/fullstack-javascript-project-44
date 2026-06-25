Задача 7 — asciinema и README

Запись:
asciinema rec brain-even.cast

В записи покажите:
установку: make install (или npm ci)
sudo npm link
победу: три правильных ответа → Congratulations, ...!
поражение: неверный ответ → '...' is wrong answer ;(... и Let's try again, ...!
Завершите запись: Ctrl+D
Загрузите:
asciinema upload brain-even.cast
Получите id, например abc123xyz.
Добавить в README
В секцию HW-6 (или отдельный блок «Демо»):

[![asciicast](https://asciinema.org/a/abc123xyz.svg)](https://asciinema.org/a/abc123xyz)
Подставьте свой id вместо abc123xyz.

Ожидаемый вывод (эталон)
Победа:

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!
Поражение:

Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!
Итоговая структура файлов
fullstack-javascript-project-44/
├── bin/
│   ├── brain-games.js    ← без изменений
│   └── brain-even.js     ← новый
├── src/
│   ├── cli.js            ← без изменений
│   ├── index.js          ← новый (движок)
│   └── games/
│       └── even.js       ← новый (логика игры)
├── package.json          ← bin + version 1.2.0
└── Makefile              ← brain-even (опционально)
Чеклист перед коммитом
make lint          # 0 ошибок
make brain-even    # игра работает
make brain-games   # старая команда не сломалась
make publish       # + @hexlet/code@1.2.0
sudo npm link
brain-even         # глобально работает
git add src/index.js src/games/even.js bin/brain-even.js package.json package-lock.json Makefile README.md
git commit -m "Add brain-even game"
git push