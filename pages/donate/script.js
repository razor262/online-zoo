
const donateRangeSum = document.querySelector('.donate-range-input');
const dollarsDesktop = document.querySelector('.range-dollars-desktop');
const dollarsDesktopSmall = document.querySelector('.range-dollars-desktop-small');
const dollarsTablet = document.querySelector('.range-dollars-tablet');
let donateDollarsSum;
let points;

const rangeBg = document.querySelectorAll('.feed-days-range-background');
const rangeDollars = document.querySelectorAll('.feed-days-range-dollars');
const window1600 = window.matchMedia('(min-width: 1281px)');
const rangeBgDesktop = document.querySelector('.range-background-desktop');
const rangeDollarsDesktop = document.querySelector('.range-dollars-desktop');
const window1280 = window.matchMedia('(max-width: 1280px)');
const rangeBgDesktopSmall = document.querySelector('.range-background-desktop-small');
const rangeDollarsDesktopSmall = document.querySelector('.range-dollars-desktop-small');
const window640 = window.matchMedia('(max-width: 980px)');
const rangeBgTablet = document.querySelector('.range-background-tablet');
const rangeDollarsTablet = document.querySelector('.range-dollars-tablet');
const selfInput = document.querySelector('.self-sum-input');



function lengthCheck() {
    if (selfInput.value.length > 4)
        selfInput.value = selfInput.value.slice(0, 4)
}



function setSelfSumActive(range, self, sums, dots) {

    for (let item of sums) {
        item.classList.remove('active-summ');
    }

    for (let dot of dots) {
        dot.classList.remove('range-point-active');
    }

    for (let i = 0; i < sums.length; i++) {
        if (self.value === sums[i].lastElementChild.textContent) {

            range.value = i;
            range.classList.add('x');
            sums[i].classList.add('active-summ');
            dots[i].classList.add('range-point-active');
        }
    }
}



function media() {
    if (window1600.matches) {
        points = rangeBgDesktop.getElementsByTagName('li');

        for (let item of rangeBg) {
            item.classList.add('range-disabled');
        }

        for (let item of rangeDollars) {
            item.classList.add('range-disabled');
        }

        rangeBgDesktop.classList.remove('range-disabled');
        rangeDollarsDesktop.classList.remove('range-disabled');
        donateRangeSum.setAttribute('max', '7');
        donateRangeSum.setAttribute('value', '5');

        donateDollarsSum = dollarsDesktop.querySelectorAll('.feed-days-range-donate-summ ');

        function setDonateSumActive() {

            for (let item of donateDollarsSum) {
                item.classList.remove('active-summ');
            }

            for (let point of points) {
                point.classList.remove('range-point-active');
            }

            points[donateRangeSum.value].classList.add('range-point-active');
            donateDollarsSum[donateRangeSum.value].classList.add('active-summ');
            selfInput.value = donateDollarsSum[donateRangeSum.value].lastElementChild.textContent;

        }

        donateRangeSum.addEventListener('change', setDonateSumActive);
        donateRangeSum.addEventListener('click', setDonateSumActive);
        selfInput.addEventListener('input', () => setSelfSumActive(donateRangeSum, selfInput, donateDollarsSum, points));
        setDonateSumActive();

    } else if (window1280.matches && !window640.matches) {
        points = rangeBgDesktopSmall.getElementsByTagName('li');

        for (let item of rangeBg) {
            item.classList.add('range-disabled');
        }

        for (let item of rangeDollars) {
            item.classList.add('range-disabled');
        }

        rangeBgDesktopSmall.classList.remove('range-disabled');
        rangeDollarsDesktopSmall.classList.remove('range-disabled');
        donateRangeSum.setAttribute('max', '6');
        donateRangeSum.setAttribute('value', '4');

        donateDollarsSum = dollarsDesktopSmall.querySelectorAll('.feed-days-range-donate-summ ');

        function setDonateSumActive() {
            for (let item of donateDollarsSum) {
                item.classList.remove('active-summ')
            }

            for (let point of points) {
                point.classList.remove('range-point-active');
            }

            points[donateRangeSum.value].classList.add('range-point-active');
            donateDollarsSum[donateRangeSum.value].classList.add('active-summ');
            selfInput.value = donateDollarsSum[donateRangeSum.value].lastElementChild.textContent;
        }

        donateRangeSum.addEventListener('change', setDonateSumActive);
        donateRangeSum.addEventListener('click', setDonateSumActive);
        selfInput.addEventListener('input', () => setSelfSumActive(donateRangeSum, selfInput, donateDollarsSum, points));
        setDonateSumActive();

    } else if (window640.matches) {
        points = rangeBgTablet.getElementsByTagName('li');

        for (let item of rangeBg) {
            item.classList.add('range-disabled');
        }

        for (let item of rangeDollars) {
            item.classList.add('range-disabled');
        }

        rangeBgTablet.classList.remove('range-disabled');
        rangeDollarsTablet.classList.remove('range-disabled');
        donateRangeSum.setAttribute('max', '4');
        donateRangeSum.setAttribute('value', '2');

        donateDollarsSum = dollarsTablet.querySelectorAll('.feed-days-range-donate-summ ');

        function setDonateSumActive() {
            for (let item of donateDollarsSum) {
                item.classList.remove('active-summ')
            }

            for (let point of points) {
                point.classList.remove('range-point-active');
            }

            points[donateRangeSum.value].classList.add('range-point-active');
            donateDollarsSum[donateRangeSum.value].classList.add('active-summ');
            selfInput.value = donateDollarsSum[donateRangeSum.value].lastElementChild.textContent;
        }

        donateRangeSum.addEventListener('change', setDonateSumActive);
        donateRangeSum.addEventListener('click', setDonateSumActive);
        selfInput.addEventListener('input', () => setSelfSumActive(donateRangeSum, selfInput, donateDollarsSum, points));
        setDonateSumActive();
    }
}


window.addEventListener('resize', media);
media();
selfInput.addEventListener('input', lengthCheck);