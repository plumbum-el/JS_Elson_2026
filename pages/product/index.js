import { CourseDetailComponent } from "../../components/course-detail/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { MainPage } from "../main/index.js";

export class CoursePage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    getData() {
        const allCourses = [
            { id: 1, title: "Code Smells: Основы", level: "Начальный", duration: "4 недели", src: "https://cdn-icons-png.flaticon.com/512/4616/4616734.png", fullText: "Курс посвящен выявлению 'запахов кода' (Code Smells). Вы научитесь определять проблемные участки, классифицировать их и оценивать сложность рефакторинга в Story Points." },
            { id: 2, title: "Чистый код: базовые принципы", level: "Начальный", duration: "3 недели", src: "https://cdn-icons-png.flaticon.com/512/2920/2920291.png", fullText: "Курс по принципам чистого кода Роберта Мартина." },
            { id: 3, title: "Введение в тестирование", level: "Начальный", duration: "4 недели", src: "https://cdn-icons-png.flaticon.com/512/2920/2920230.png", fullText: "Unit-тесты, TDD и покрытие кода." },
            { id: 4, title: "Метрики сложности кода", level: "Средний", duration: "6 недель", src: "https://cdn-icons-png.flaticon.com/512/2721/2721620.png", fullText: "SonarQube, ESLint, Cyclomatic Complexity." },
            { id: 5, title: "Технический долг: оценка", level: "Средний", duration: "5 недель", src: "https://cdn-icons-png.flaticon.com/512/2920/2920297.png", fullText: "Матрица влияния, SonarQube и CodeClimate." },
            { id: 6, title: "SOLID и архитектура", level: "Средний", duration: "6 недель", src: "https://cdn-icons-png.flaticon.com/512/2920/2920258.png", fullText: "Пять принципов SOLID на практике." },
            { id: 7, title: "Продвинутый рефакторинг", level: "Продвинутый", duration: "8 недель", src: "https://cdn-icons-png.flaticon.com/512/4238/4238877.png", fullText: "Каталог рефакторингов Мартина Фаулера." },
            { id: 8, title: "Рефакторинг легаси-систем", level: "Продвинутый", duration: "10 недель", src: "https://cdn-icons-png.flaticon.com/512/2920/2920245.png", fullText: "Стратегия 'Разделяй и властвуй', тесты Физерса." },
            { id: 9, title: "Рефакторинг баз данных", level: "Продвинутый", duration: "7 недель", src: "https://cdn-icons-png.flaticon.com/512/2920/2920214.png", fullText: "Рефакторинг схем БД, миграции без даунтайма." }
        ];
        let found = null;
        let i = 0;
        do {
            if (allCourses[i].id == this.id) found = allCourses[i];
            i++;
        } while (i < allCourses.length && !found);
        return found || allCourses[0];
    }

    get pageRoot() {
        return document.getElementById('product-page');
    }

    getHTML() {
        return `<div id="product-page"></div>`;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        const data = this.getData();
        const detail = new CourseDetailComponent(this.pageRoot);
        detail.render(data);
    }
}
