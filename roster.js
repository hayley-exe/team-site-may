document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementById('rosterGrid');

    const render = list => {
        grid.innerHTML = '';

        list.forEach(p => {
            const col = document.createElement('div');
            col.className = 'col-6 col-lg-2';

            const badgeImgs = (p.badges || [])
                .map(b => `<img src="${b}" class="img-fluid me-1 mb-1" style="width:60px; height:60px; border:none;" alt="badge">`)
                .join('');
            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${p.photo || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
                         <p class="small text-muted mb-0">Heritage: ${p.heritage}</p>
                        <p class="small text-muted mb-0">Series: ${p.series}</p>
                         <div class="d-flex justify-content-center flex-wrap mt-2 badgeImgs">
                            ${badgeImgs}
                        </div>
                    </div>
                </div>
            `;

            grid.appendChild(col);
        });
    };

    render(players); // Ensure `players` is defined before this runs

});
