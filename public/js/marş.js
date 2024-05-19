let counter = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    counter++;
    if (counter === slides.length) {
        counter = 0;
    }
    updateSlidePosition();
}

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - counter)}%)`;
    });
}
