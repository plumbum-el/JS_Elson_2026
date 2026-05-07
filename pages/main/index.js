import { CourseCardComponent } from "../../components/course-card/index.js";
import { CoursePage } from "../product/index.js";
import { ajax } from "../../modules/ajax.js";
import { stockUrls } from "../../modules/stockUrls.js";

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
                <div id="main-page" class="d-flex flex-wrap gap-3"></div>
            </div>
        `;
    }

    // до: ajax.get(url, (data) => { this.renderData(data); });
    // после: async/await - без колбэка
    async getData() {
        try {
            const data = await ajax.get(stockUrls.getStocks());
            this.renderData(data);
        } catch (e) {
            console.error('Ошибка загрузки курсов:', e);
        }
    }

    renderData(items) {
        items.forEach((item) => {
            const courseCard = new CourseCardComponent(this.pageRoot);
            courseCard.render(item, this.clickCard.bind(this));
        });
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
        this.getData(); // вызов асинхронный - JS не зависает
    }
}