const testimonialsRange = document.querySelector('.testimonials-slider-line');
const testimonialsCards = document.querySelector('.testimonials-cards');
const cardsList = document.querySelectorAll('.card-back');
const testimonialsPopup = document.querySelector('.testimonials-popup');
const testimonialsPopupBox = document.querySelector('.testimonials-popup-box');
const testimonialsPopupCloseBtn = document.querySelector('.testimonials-popup-button');








const petCardsBox = document.querySelector('.cards-box');
const sliderLeft = document.querySelector('.slider-left');
const sliderCenter = document.querySelector('.slider-center');
const sliderRight = document.querySelector('.slider-right');
const slideLeftBtn = document.querySelector('.cards-box-btn-left');
const slideRightBtn = document.querySelector('.cards-box-btn-right');
let petCards = Array.from(sliderCenter.getElementsByClassName('pet-card'));


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
}


slideLeftBtn.addEventListener('click', () => {

    slideLeftBtn.setAttribute('disabled', 'disabled');
    slideRightBtn.setAttribute('disabled', 'disabled');
    let centerClone = sliderCenter.cloneNode(true);
    shuffle(petCards);

    for (let item of petCards) {
        sliderLeft.append(item);
    }

    let leftClone = sliderLeft.cloneNode(true);
    sliderCenter.innerHTML = centerClone.innerHTML;
    petCardsBox.classList.add('cards-box-left', 'cards-box-non-click');

    petCardsBox.addEventListener('animationend', () => {
        petCardsBox.classList.remove('cards-box-left', 'cards-box-non-click');
        sliderCenter.innerHTML = leftClone.innerHTML;
        slideLeftBtn.removeAttribute('disabled');
        slideRightBtn.removeAttribute('disabled');
    })
});

slideRightBtn.addEventListener('click', () => {

    slideLeftBtn.setAttribute('disabled', 'disabled');
    slideRightBtn.setAttribute('disabled', 'disabled');
    let centerClone = sliderCenter.cloneNode(true);
    shuffle(petCards);

    for (let item of petCards) {
        sliderRight.append(item);
    }

    let rightClone = sliderRight.cloneNode(true);
    sliderCenter.innerHTML = centerClone.innerHTML;
    petCardsBox.classList.add('cards-box-right', 'cards-box-non-click');

    petCardsBox.addEventListener('animationend', () => {
        petCardsBox.classList.remove('cards-box-right', 'cards-box-non-click');
        sliderCenter.innerHTML = rightClone.innerHTML;
        slideLeftBtn.removeAttribute('disabled');
        slideRightBtn.removeAttribute('disabled');
    })
});



const window1600 = window.matchMedia('(min-width: 1281px)');
const window1280 = window.matchMedia('(max-width: 1280px)');
const window640 = window.matchMedia('(max-width: 980px)');

/*----------------------------------------testimonials-slider----------------------------------------*/

function testimonialsCardsSlide(width) {
    testimonialsCards.style.left = `-${testimonialsRange.value * width}px`;
}

/*----------------------------------------testimonials-popup----------------------------------------*/

function togglePopup() {

    testimonialsPopup.classList.add('popup-shown', 'displayed');
    testimonialsPopupBox.innerHTML = this.innerHTML;

}

function closePopup() {

    let target = this.target;

    if (target === testimonialsPopup || target === testimonialsPopupCloseBtn) {
        testimonialsPopup.classList.remove('popup-shown', 'displayed');
    }

}

function closePopup(el) {

    let target = el.target;

    if (target === testimonialsPopup || target === testimonialsPopupCloseBtn) {
        testimonialsPopup.classList.remove('popup-shown', 'displayed');
    }

}

function media() {
    if (window1600.matches) {

        testimonialsRange.addEventListener('input', () => testimonialsCardsSlide(297));

        for (let item of cardsList) {
            item.removeEventListener('click', togglePopup);
        }

    } else if (window1280.matches && !window640.matches) {

        testimonialsRange.addEventListener('input', () => testimonialsCardsSlide(323));

        for (let item of cardsList) {
            item.removeEventListener('click', togglePopup);
        }

    } else if (window640.matches) {

        for (let item of cardsList) {
            item.addEventListener('click', togglePopup);
        }

    }
}

testimonialsPopup.addEventListener('click', (el) => closePopup(el));
window.addEventListener('resize', media);
media();