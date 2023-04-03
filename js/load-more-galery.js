let btnLoadMore = document.getElementById('btn-more-galery');
let images = document.querySelectorAll('.img-galery');
let currentImg = 3;

btnLoadMore.addEventListener('click', function () {
    for (let i = currentImg; i < currentImg + 3; i++) {
        if (images[i]) {
            images[i].style.display = 'inline-block';
        }
    }
    currentImg += 3;

    if(currentImg >= images.length){
        btnLoadMore.style.display = 'none';
    }
})