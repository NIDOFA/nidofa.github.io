let currentIndex = 0;
let prevIndex;

function showSlide(index) {
    const slides = document.querySelectorAll('.item-highlights');
    prevIndex = currentIndex;
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.images-highlights').style.transform = `translateX(${offset}%)`;
    document.querySelectorAll('.index-image')[currentIndex].style.backgroundColor = "#248fba";
    if(prevIndex != currentIndex) document.querySelectorAll('.index-image')[prevIndex].style.backgroundColor = "#808080";
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}