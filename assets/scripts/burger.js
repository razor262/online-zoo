const burger = document.querySelector('.burger');
const navMenuMobile = document.querySelector('.logo_and_menu');
const logoMobile = document.querySelector('.logo-mobile');
const pageFader = document.querySelector('.page-fade');

function navSwitcher(el) {

    let target = el.target;

    if (target === burger) {

        burger.classList.toggle('burger-x')
        navMenuMobile.classList.toggle('burger-open');
        logoMobile.classList.toggle('logo-fader');
        pageFader.classList.toggle('displayed');
        pageFader.classList.toggle('page-fader');

    } else if ((target.closest('.nav-item') || target.closest('.designed-text')) && !target.closest('.active-page')) {

        burger.classList.remove('burger-x')
        navMenuMobile.classList.remove('burger-open');
        logoMobile.classList.remove('logo-fader');
        pageFader.classList.remove('displayed', 'page-fader');

    } else if (target != navMenuMobile && !target.closest('.nav-and-designed') && !target.closest('.nav-wrapper')) {

        burger.classList.remove('burger-x')
        navMenuMobile.classList.remove('burger-open');
        logoMobile.classList.remove('logo-fader');
        pageFader.classList.remove('displayed', 'page-fader');

    }

}

document.addEventListener('click', navSwitcher);