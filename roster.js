document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid');

    const render = list => {
        grid.innerHTML = '';
        for (let i = 0; i < list.length; i += 6) {
            const row = document.createElement('div');
            row.className = 'row';
            const rowPlayers = list.slice(i, i + 6);
            rowPlayers.forEach(p => {
                const col = document.createElement('div');
                col.className = 'col-2';

                const badgeImgs = (p.badges || [])
                    .map(b => `<img src="${b}" class="img-fluid" alt="badge">`)
                    .join('');

                col.innerHTML = `
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
                            <div class="card-body text-center">
                                <h5 class="card-title mb-0">${p.firstName} ${p.lastName}</h5>
                                <p class="small text-muted mb-0">Heritage: ${p.heritage}</p>
                                <p class="small text-muted mb-0">Series: ${p.series}</p>
                                <div class="badgeImgs">${badgeImgs}</div>
                                <button class="btn btn-primary btn-sm btn-flip" onclick="flipCard(this)">Flip Card</button>
                            </div>
                        </div>
                        <div class="card-back">
                            <div class="card-body text-center">
                                <textarea>${p.info ? p.info : ''}</textarea>
                                <button class="btn btn-primary btn-sm btn-flip" onclick="flipCard(this)">Flip Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

                row.appendChild(col);
            });
            grid.appendChild(row);
        }
    };


    render(players);
});

function flipCard(button) {
    const cardInner = button.closest('.card-inner');
    cardInner.classList.add('flipping');
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    setTimeout(() => {
        cardInner.classList.remove('flipping');
    }, 800);
}