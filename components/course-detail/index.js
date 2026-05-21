export class CourseDetailComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="card mb-3" style="max-width: 700px;">
                <div class="row g-0 align-items-center">
                    <div class="col-md-4 text-center p-3 bg-light">
                        <img src="${data.src || 'https://via.placeholder.com/300x180?text=Нет+картинки'}" 
                             class="img-fluid rounded" alt="${data.title}" style="max-height: 180px;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">${data.title}</h3>
                            <p class="card-text">${data.fullText || data.text}</p>
                            <hr>
                            <p><strong>Уровень:</strong> <span class="badge bg-info text-dark">${data.level || '—'}</span></p>
                            <p><strong>Длительность:</strong> ${data.duration || '—'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    render(data) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}