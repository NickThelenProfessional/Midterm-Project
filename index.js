document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const homeContent = document.getElementById('homeContent');
        const galleryContent = document.getElementById('galleryContent');

        const makeCard = (item) => `
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.text}</p>
                    </div>
                </div>
            </div>
        `;

        if (homeContent) homeContent.innerHTML = data.homepage.map(makeCard).join('');
        if (galleryContent) galleryContent.innerHTML = data.gallery.map(makeCard).join('');

    } catch (err) {
        console.error("Error loading JSON:", err);
    }
});
