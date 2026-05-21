# Лабораторная работа №4 ("Cозданию бэкенда на Express.js")
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
lab5-frontend/
├── index.html
├── main.js
├── modules/
│   ├── ajax.js
│   └── stockUrls.js
├── pages/
│   ├── main/
│   │   └── index.js
│   └── product/
│       └── index.js
├── components/
│   ├── course-card/
│   │   └── index.js
│   ├── course-detail/
│   │   └── index.js
│   └── back-button/
│       └── index.js
├── package.json
└── .gitignore

```

## Защита
В качестве доп. задания для этой лабораторной было сделано создание отдельного слоя modules/ с классами Ajax (обёртка над XMLHttpRequest с методами GET/POST/PATCH/DELETE) и StockUrls (централизованное хранение URL-эндпоинтов). Это позволило заменить хардкоденные данные на получение с сервера через асинхронные запросы, а при изменении базового URL менять его только в одном месте.

```
class Ajax {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                this._handleResponse(xhr, callback);
            }
        };
    }
}

class StockUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }
    getStocks() {
        return `${this.baseUrl}/stocks`;
    }
}

```
