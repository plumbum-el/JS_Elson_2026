import { CourseCardComponent } from "../../components/course-card/index.js";
import { CoursePage } from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    getHTML() {
        return `
            <div class="p-3">
                <h2 class="mb-3">📚 Курсы оценки сложности рефакторинга</h2>
                <div class="mb-3">
                    <select id="level-filter" class="form-select" style="max-width: 300px;">
                        <option value="all">Все уровни</option>
                        <option value="Начальный">Начальный</option>
                        <option value="Средний">Средний</option>
                        <option value="Продвинутый">Продвинутый</option>
                    </select>
                </div>
                <div id="avg-duration" class="alert alert-secondary" style="max-width: 300px;"></div>
                <div id="main-page" class="d-flex flex-wrap gap-3"></div>
            </div>
        `;
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://cdn-icons-png.flaticon.com/512/4616/4616734.png",
                title: "Code Smells: Основы",
                text: "Выявление запахов кода и оценка сложности исправления",
                level: "Начальный",
                duration: "4 недели",
                fullText: "Курс посвящен выявлению 'запахов кода' (Code Smells). Вы научитесь определять проблемные участки, классифицировать их и оценивать сложность рефакторинга в Story Points."
            },
            {
                id: 2,
                src: "https://cdn-icons-png.flaticon.com/512/2920/2920291.png",
                title: "Чистый код: базовые принципы",
                text: "Именование, функции, комментарии",
                level: "Начальный",
                duration: "3 недели",
                fullText: "Курс по принципам чистого кода Роберта Мартина. Правила именования, самодокументируемый код, форматирование."
            },
            {
                id: 3,
                src: "https://cdn-icons-png.flaticon.com/512/2920/2920230.png",
                title: "Введение в тестирование",
                text: "Unit-тесты для безопасного рефакторинга",
                level: "Начальный",
                duration: "4 недели",
                fullText: "Unit-тесты, TDD и покрытие кода для оценки рисков при рефакторинге."
            },
            {
                id: 4,
                src: "https://cdn-icons-png.flaticon.com/512/2721/2721620.png",
                title: "Метрики сложности кода",
                text: "Цикломатическая сложность, Cognitive Complexity",
                level: "Средний",
                duration: "6 недель",
                fullText: "SonarQube, ESLint, Cyclomatic Complexity и Maintainability Index."
            },
            {
                id: 5,
                src: "https://cdn-icons-png.flaticon.com/512/2920/2920297.png",
                title: "Технический долг: оценка",
                text: "Измерение и приоритизация техдолга",
                level: "Средний",
                duration: "5 недель",
                fullText: "Матрица влияния, SonarQube и CodeClimate для оценки качества кода."
            },
            {
                id: 6,
                src: "https://cdn-icons-png.flaticon.com/512/2920/2920258.png",
                title: "SOLID и архитектура",
                text: "Профилактика сложного рефакторинга",
                level: "Средний",
                duration: "6 недель",
                fullText: "Пять принципов SOLID. Как нарушения ведут к усложнению кода."
            },
            {
                id: 7,
                src: "https://cdn-icons-png.flaticon.com/512/4238/4238877.png",
                title: "Продвинутый рефакторинг",
                text: "Паттерны рефакторинга Фаулера",
                level: "Продвинутый",
                duration: "8 недель",
                fullText: "Каталог рефакторингов, оценка рисков, планирование спринтов."
            },
            {
                id: 8,
                src: "https://cdn-icons-png.flaticon.com/512/2920/2920245.png",
                title: "Рефакторинг легаси-систем",
                text: "Стратегии работы с унаследованным кодом",
                level: "Продвинутый",
                duration: "10 недель",
                fullText: "Метод 'Разделяй и властвуй', характеризационные тесты Физерса."
            },
            {
                id: 9,
                src: "https://cdn-icons-png.flaticon.com/512/2920/2920214.png",
                title: "Рефакторинг баз данных",
                text: "Миграции схем данных",
                level: "Продвинутый",
                duration: "7 недель",
                fullText: "Рефакторинг схем БД, оптимизация SQL, миграции без даунтайма."
            }
        ];
    }

    getAverageDuration(courses) {
        if (courses.length === 0) return 0;
        let totalWeeks = 0;
        for (let course of courses) {
            totalWeeks += parseInt(course.duration);
        }
        return Math.round(totalWeeks / courses.length);
    }

    filterByLevel(level) {
        const allCourses = this.getData();
        const filtered = [];
        let i = 0;
        do {
            if (allCourses[i].level === level) {
                filtered.push(allCourses[i]);
            }
            i++;
        } while (i < allCourses.length);
        return filtered;
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const coursePage = new CoursePage(this.parent, cardId);
        coursePage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const allCourses = this.getData();
        this.renderCards(allCourses);
        this.updateAverage(allCourses);

        document.getElementById('level-filter').addEventListener('change', (e) => {
            const level = e.target.value;
            const filtered = level === 'all' ? this.getData() : this.filterByLevel(level);
            this.renderCards(filtered);
            this.updateAverage(filtered);
        });
    }

    renderCards(courses) {
        const container = this.pageRoot;
        container.innerHTML = '';
        courses.forEach((item) => {
            const card = new CourseCardComponent(container);
            card.render(item, this.clickCard.bind(this));
        });
    }

    updateAverage(courses) {
        const avg = this.getAverageDuration(courses);
        document.getElementById('avg-duration').innerHTML =
            `📊 Курсов: <strong>${courses.length}</strong> | Средняя длительность: <strong>${avg} недель</strong>`;
    }
}
