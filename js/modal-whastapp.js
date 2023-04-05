const whatsappBtn = document.querySelector('.whatsapp-btn');
const modal = document.querySelector('#modal-whatsapp');
const closeBtn = document.querySelector('.close-btn');

whatsappBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});