const btn_read = document.querySelector('.btn-read-mobile');
const hide_text = document.querySelector('hide-text');

btn_read.addEventListener('click', () => {
    hide_text.classList.toggle('.show-text');
})