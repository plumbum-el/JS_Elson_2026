# Лабораторная работа № 4 ("Cозданию бэкенда на Express.js")
## Содержание 
1. [Цель](#цель)
2. [План](#план-выполнения)
3. [Структура](#структура-проекта)
4. [Защита](#защита)

## Цель
Реализация на Node.js собственного веб-сервиса для API, данные хранятся в json файле. Тестирование через Postman/Insomnia 5 методов: список с фильтрацией, получение одной записи, добавление, редактирование, удаление. Показать коллекцию запросов в Postman, показать список, добавить новую запись, получить по id, удалить, показать в списке с фильтрацией.

## План выполнения
1. Введение в Express.js
2. Сравнение Express.js с чистым Node.js и NestJS
3. Создание проекта и базовая настройка
4. Архитектура приложения
5. Реализация REST API для карточек `Stock`
6. Тестирование работоспособности сервиса с помощью `Postman`
7. Дополнительные материалы

## Структура проекта
```
lab4-api/
├── src/
│   ├── index.js
│   ├── routes/
│   │   └── stocks.js
│   ├── controllers/
│   │   └── stocksController.js
│   ├── services/
│   │   ├── stocksService.js
│   │   └── fileService.js
│   └── data/
│       └── stocks.json
├── package.json
└── .gitignore

```

## Защита
В качестве доп. задания для этой лабораторной было сделано расширение API дополнительными полями level, duration, fullText и настройка CORS-заголовков вручную для обхода блокировки браузера при кросс-доменных запросах.

```
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

const createStock = (req, res) => {
    const { src, title, text, level, duration } = req.body;
    const newStock = stocksService.create({ src, title, text, level, duration });
    res.status(201).json(newStock);
};

```
