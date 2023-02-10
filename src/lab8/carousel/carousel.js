//select elements
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");

let currentSlide = 0;
let maxNumOfSlides = slides.length - 1;

// next button functionality
next.addEventListener("click", function () {
if (currentSlide === maxNumOfSlides) {
    currentSlide = 0;
} else {
    currentSlide++;
}

slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
});
});

// previous button functionality
prev.addEventListener("click", function () {
if (currentSlide === 0) {
currentSlide = maxNumOfSlides;
} else {
currentSlide--;
}

slides.forEach((slide, index) => {
slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
});
});