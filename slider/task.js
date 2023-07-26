let clickLeft = document.querySelector(".slider__arrow_next");
let clickRight = document.querySelector(".slider__arrow_prev");
let sliderImagesArray = Array.from(document.getElementsByClassName('slider__item'));

clickLeft.onclick = goToLeft;
clickRight.onclick = goToRight;

function goToLeft() {
    let indexSlide = sliderImagesArray.findIndex(searchActiveSlide);
    sliderImagesArray[indexSlide].classList.remove('slider__item_active');
    let nextIndex = (indexSlide === sliderImagesArray.length - 1) ? 0 : indexSlide + 1;
    sliderImagesArray[nextIndex].classList.add('slider__item_active');
}

function goToRight() {
    let indexSlide = sliderImagesArray.findIndex(searchActiveSlide);
    sliderImagesArray[indexSlide].classList.remove('slider__item_active');
    let nextIndex = (indexSlide === 0) ? sliderImagesArray.length - 1 : indexSlide - 1;
    sliderImagesArray[nextIndex].classList.add('slider__item_active');
}

function searchActiveSlide(i) {
    return (i.className === "slider__item slider__item_active");
}