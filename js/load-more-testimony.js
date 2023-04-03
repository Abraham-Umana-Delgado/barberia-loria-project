let btnLoadTestimony = document.getElementById('btn-more-testimony');
let testimony = document.querySelectorAll('.hide-testimony');
let currentTestimony = 3;

btnLoadTestimony.addEventListener('click', function () {
    for (let i = currentTestimony; i < currentTestimony + 3; i++) {
        if (testimony[i]) {
            testimony[i].style.display = 'inline-block';
        }
    }
    currentTestimony += 3;

    if(currentTestimony >= testimony.length){
        btnLoadTestimony.style.display = 'none';
    }
})