let btnLoadServices = document.getElementById('btn-more-services');
let cards = document.querySelectorAll('.hide-service');
let currentCard = 3;

btnLoadServices.addEventListener('click', function () {
    for (let i = currentCard; i < currentCard + 3; i++) {
        if (cards[i]) {
            cards[i].style.display = 'inline-block';
        }
    }
    currentCard += 3;

    if(currentCard >= cards.length){
        btnLoadServices.style.display = 'none';
    }
})