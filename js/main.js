var body = document.querySelector('body');
var loadingscreen = document.getElementById('loadingscreen');
var homeLink = document.getElementById('homeLink');
var personName = document.querySelector('.person-name');
var quote = document.querySelector('.quote');
var buttonExplore = document.getElementById('explore');

const playAnimation = () => {
    body.style.display = 'block';
    loadingscreen.style.display = 'none';
    personName.classList.add('animate-name');
    quote.classList.add('animate-quote');
    buttonExplore.classList.add('animate-button');
    setTimeout(() => {
        personName.classList.remove('animate-name');
        quote.classList.remove('animate-quote');
        buttonExplore.classList.remove('animate-button');
    }, 2000);
}
window.onload = playAnimation;
homeLink.addEventListener('click', playAnimation);