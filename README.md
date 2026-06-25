### Hexlet tests and linter status:
[![Actions Status](https://github.com/kirillchistov/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kirillchistov/fullstack-javascript-project-44/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=kirillchistov_fullstack-javascript-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=kirillchistov_fullstack-javascript-project-44)

### HW-9 Игра "Арифметическая прогрессия"
* Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

* Рекомендуемая длина прогрессии – 10 чисел. Длина может генерироваться случайным образом, но должна содержать не менее 5 чисел
Позиция спрятанного элемента каждый раз изменяется (выбирается случайным образом)

* Пример:
```
brain-progression

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```

В случае, если пользователь даст неверный ответ, необходимо вывести:
```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!
```

Задачи:
* [x] Добавьте в директорию bin новый исполняемый файл с названием brain-progression.js
* [x] Реализуйте необходимую логику для работы игры
* [x] Добавьте ещё одну запись в секцию bin в package.json
* [x] Проверьте работоспособность новой игры
* [x] Добавьте в README.md аскинему с запуском и демонстрацией различных исходов игры
* [x] [Asciinema](https://asciinema.org/a/7gtQl7AcmxjQ9xTu)

Подсказки
* Чтобы создать последовательность, лучше сделать отдельную функцию. Она будет рассчитывать числа по такой формуле::
```
currentElement = start + index * step
```

### HW-8
* [x] Реализовать игру "наибольший общий делитель (НОД)". Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Вывод должен получиться следующий:
```
brain-gcd

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!
```
В случае, если пользователь даст неверный ответ, необходимо вывести:
```
Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!
```
Задачи:
* [x] Добавьте в директорию bin новый исполняемый файл с названием brain-gcd.js.
* [x] Реализуйте необходимую логику для работы игры.
* [x] Добавьте ещё одну запись в секцию bin в package.json.
* [x] Проверьте работоспособность новой игры.
* [x] Добавьте в README.md аскинему с запуском и демонстрацией различных исходов игры.
* [x] [Asciinema](https://asciinema.org/a/FnjDn2pTID2SM91B)

### HW-7 Игра: "Калькулятор"
Суть игры: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

Вывод должен получиться следующий:
```
brain-calc

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
```

Достаточно реализовать следующие операции: +, - и *.
Операции, как и числа, выбираются случайным образом.
В случае, если пользователь даст неверный ответ, необходимо вывести:
```
Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Sam!
```
и завершить игру.

На данном этапе можно заметить, что игры имеют общий порядок выполнения (задать вопрос, получить ответ, сравнить ответ и т.д.). Эту логику можно вынести в одно место и переиспользовать внутри конкретных игр для устранения дублирования кода.

BP: hexlet-pairs (если нужно)
Принцип открытости закрытости
Интерфейс
Побочные эффекты
Построение правильной архитектуры
### Задачи: 
* [x] Добавьте в директорию bin новый исполняемый файл с названием brain-calc.js.
* [x] Реализуйте необходимую логику для работы игры.
* [x] Добавьте ещё одну запись в секцию bin в package.json.
* [x] Проверьте работоспособность новой игры.
* [x] Добавьте в README.md аскинему с запуском и демонстрацией различных исходов игры.
* [Asciinema HW-7](https://asciinema.org/a/35balr9IBMdgssFB)

### HW-6 Игра: "Проверка на чётность"
* [x] Необходимо реализовать игру "Проверка на чётность". Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное:
```
Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
```

В случае, если пользователь даст неверный ответ, необходимо завершить игру и вывести сообщение:
```
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!
```
В случае, если пользователь ввел верный ответ, нужно отобразить:
```
Correct!
```
и приступить к следующему числу.

Пользователь должен дать правильный ответ на три вопроса подряд. После успешной игры нужно вывести:
```
Congratulations, Bill!
```
Вывод должен получиться следующий:
```
brain-even

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
```
Любой некорректный ввод считается ошибкой (например, n) и равносилен неправильному ответу.
Помним про BP: Don’t repeat yourself, YAGNI, KISS, Магические числа, Предикаты

* [x] Добавьте в директорию bin новый исполняемый файл с названием brain-even.
* [x] Реализуйте необходимую логику для работы игры.
Файлы, которые мы добавили ранее (src/cli.js, bin/brain-games.js), оставьте, как есть, и не смешивайте с остальным кодом. cli.js не предназначен для описания логики игр.
* [x] Добавьте ещё одну запись в секцию bin в package.json:
```
"bin": {
    "brain-games": "bin/brain-games.js",
    "brain-even": "bin/brain-even.js"
  }
```
* [x] Выполните отладку публикации и убедитесь, что после установки пакета команда brain-even в терминале запускает игру.
* [x] Запишите аскинему с примером установки пакета, запуска игры, победой и поражением игрока. Опубликуйте её в сервисе и добавьте ссылку в README.md. 
* [Asciinema HW-6](https://asciinema.org/a/TDmH5kMz1joyBzWD)

### HW-5
* [x] Зарегистрируйтесь в [SonarQube](https://www.sonarsource.com/products/sonarcloud/) и добавьте в него проект
* [x] Добавьте в README бейджи
* [x] Установите и настройте eslint. [Документация](https://eslint.org/docs/user-guide/configuring). Сверяйтесь с [nodejs-package](https://github.com/hexlet-boilerplates/nodejs-package)
* [x] Создайте задачу make lint, которая должна запускать npx eslint .
* [x] Подключите eslint к своему редактору, убедитесь что все работает. Скорее всего, понадобится поставить eslint глобально
* [x] Исправьте все ошибки, которые выдает линтер

### HW-4
* [x] Подключите [библиотеку readline-sync](https://github.com/anseki/readline-sync).
* [x] Поприветствуйте пользователя в игре. Спросите у пользователя его имя и поприветствуйте его по имени:
```
brain-games
Welcome to the Brain Games!
May I have your name? John
Hello, John!
```
После чего программа завершается.
Код, реализующий этот функционал, должен быть в файле src/cli.js относительно директории проекта, а в исполняемом файле bin/brain-games.js сделайте вызов. Для этого код нужно поместить в функцию и импортировать ее в исполняемый файл.
* [x] Проведите отладку публикации новой версии пакета.

### HW-3
* [x] Пропишите в начале файла brain-games.js шебанг с правильно указанным интерпретатором (node) — #!/usr/bin/env node. 
* [x] Добавьте запись в секцию bin в package.json:
```
"bin": {
  "brain-games": "bin/brain-games.js"
}
```
* [x] Добавьте файлу bin/brain-games.js права на исполнение, выполнив в корневой директории проекта команду chmod +x bin/brain-games.js.
* [x] Добавьте в Makefile команду publish, которая выполнит npm publish --dry-run.
* [x] Проведите отладку публикации пакета. Если в процессе выполнения будут получены ошибки или предупреждения, исправьте их.
* [x] Установите пакет в систему с помощью npm link и убедитесь в том, что он работает, запустив brain-games в терминале. Команда npm link может потребовать запуск с sudo.
* [x] Запушьте изменения в репозиторий на гитхабе и переходите к следующему шагу.

### HW-2
* [x] Убедитесь, что у вас установлена последняя (свежая) версия Node.js.
* [x] Добавьте в package.json секцию "type" со значением "module". Она активирует возможность использовать модули без Babel.
* [x] Создайте Makefile с командой install, выполняющей npm ci. Эта команда полезна при первом клонировании репозитория (или после удаления node_modules).
* [x] Добавьте директорию node_modules в файл .gitignore. Зависимости не хранят в репозитории.
* [x] Добавьте в Makefile команду brain-games:
```
node bin/brain-games.js
```
Набирать эту команду руками довольно долго, а make brain-games быстро и просто и позволит запускать игру без глобальной установки.

### HW-1
* [x] Прочитайте наши советы по прохождению проектов — они помогут настроиться на правильный лад и расскажут что делать в трудных ситуациях.
* [x] Установите Node.js последней версии в систему глобально (Установка JavaScript).
* [x] Склонируйте созданный репозиторий проекта локально. В результате клонирования репозитория в вашей файловой системе появится корневая директория проекта — в ней будем размещать все файлы проекта. По умолчанию, имя этой директории будет таким же, как имя репозитория. Но, если захотите, вы сами можете выбрать имя (переименовать) для корневой директории.
* [x] Инициализируйте ваш npm-пакет внутри корневой директории проекта, используя команду npm init. При инициализации задайте имя пакета - @hexlet/code.
* [x] Создайте директорию bin и добавьте в неё файл brain-games.js.
* [x] Сделайте так, чтобы запуск файла bin/brain-games.js выводил на экран строку:
```
node bin/brain-games.js
Welcome to the Brain Games!
```