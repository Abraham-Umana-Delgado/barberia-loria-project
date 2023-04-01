const btn_read = document.getElementById('btnHideTxt');
const hide_text = document.getElementById('hideTxt');

btn_read.addEventListener('click', hideText);

function hideText() {
    hide_text.classList.toggle('show');

    if (hide_text.classList.contains('show')) {
        btn_read.innerHTML = 'Leer menos';
    } else {
        btn_read.innerHTML = 'Leer más';
    }
}