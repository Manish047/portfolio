var showcaseLink = document.getElementById('showcaseLink');
var showcaseHeader = document.querySelector('.showcase-header');
var mobileItems = document.querySelectorAll('.showcase-container__mobile-item')

const playShowcaseAnimation = () => {
    for (let index = 0; index < mobileItems.length; index++) {
        mobileItems[index].classList.add('animateMobile');
    }
    showcaseHeader.classList.add('fadein-animation');
    setTimeout(() => {
        for (let index = 0; index < mobileItems.length; index++) {
            mobileItems[index].classList.remove('animateMobile');
        }
        showcaseHeader.classList.remove('fadein-animation');
    }, 3200);

};
showcaseLink.addEventListener('click', playShowcaseAnimation);