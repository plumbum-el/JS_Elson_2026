export class CourseCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="card" style="width: 300px;">
                <img src="${data.src}" class="card-img-top p-3" alt="${data.title}" 
                     style="height: 180px; object-fit: contain; background-color: #f8f9fa;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text flex-grow-1">${data.text}</p>
                    <p class="mb-1"><span class="badge bg-info text-dark">Уровень: ${data.level}</span></p>
                    <p class="mb-2"><span class="badge bg-secondary">Длительность: ${data.duration}</span></p>
                    <button class="btn btn-primary mt-auto" id="click-card-${data.id}" data-id="${data.id}">
                        Подробнее
                    </button>
                </div>
            </div>
        `;
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener);
    }

    render(data, listener) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listener);
    }
}