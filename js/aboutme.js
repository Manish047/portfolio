var aboutMeLink = document.getElementById('aboutMeLink');
var aboutHeader = document.querySelector('.about-header');
var aboutSubHeader = document.querySelector('.about-sub-header');
var skillTitle = document.querySelectorAll('.skill-title')
var skillDetail = document.querySelectorAll('.skill-detail')
var exploreButton = document.getElementById('explore');


const playAboutAnimation = () => {
    aboutHeader.classList.add('fadein-animation');
    aboutSubHeader.classList.add('fadein-animation');
    for (let index = 0; index < skillTitle.length; index++) {
        skillTitle[index].classList.add('scrollin-animation');
        skillDetail[index].classList.add('scrollin-animation');
    }
    setTimeout(() => {
        aboutHeader.classList.remove('fadein-animation');
        aboutSubHeader.classList.remove('fadein-animation');
        for (let index = 0; index < skillTitle.length; index++) {
            skillTitle[index].classList.remove('scrollin-animation');
            skillDetail[index].classList.remove('scrollin-animation');
        }
    }, 3000);
}


aboutMeLink.addEventListener('click', playAboutAnimation);
exploreButton.addEventListener('click', playAboutAnimation);