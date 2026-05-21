# Лабораторная работа №1 ("Calculator. HTML/CSS")
## Содержание 
1. [Цель](#цель)
2. [План](#план-выполнения)
3. [Структура](#структура-проекта)
4. [Защита](#защита)

## Цель
Создание калькулятора. Верстка на HTML, CSS. Копировать 3-5 основных цветов кодами с сайта по вашей теме (хедер, фон, карточки, кнопки, hover) и еще 2-3 свойства (padding и тд).
объяснить все стили и теги, которые потребовалось добавить для повторения стилистики выбранного сайта (коды цветов с сайта через Inspect и в вашем CSS, hover и тд)

## План выполнения
1. HTML- разметка
2. Базовая структура HTML-документа
3. Создание проекта
4. Верстка калькулятора
5. CSS
6. Применение CSS к HTML-документу
7. Стилизация верстки калькулятора с помощью CSS
8. Задание

## Структура проекта
```
Volozhenkova-JS-Labs-4-Sem
├─ README.md
├─ index.html
├─ second.html
└─ style.css

```

## Защита
При защите лабораторной работы было необходимо добавить "Гамбургер" с гипер-ссылками на другие страницы кода (основанные на оформлении исходного сайта-ориентира)

```
<div class="header">
  <a href="index.html" class="logo-link">
    <img src="round.png" alt="логотип" class="logo">
  </a>
  <div class="menu-container">
    <div class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="dropdown-menu">
      <a href="#" class="menu-item">career center</a>
      <a href="#" class="menu-item">for business clients</a>
      <a href="#" class="menu-item">referal program</a>
      <a href="#" class="menu-item">our blog</a>
      <a href="second.html" class="menu-item calculator-link">calculator</a>
    </div>
  </div>
</div>
```
