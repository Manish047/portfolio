var backdrop = document.querySelector('.backdrop');
var mobileNav = document.querySelector('.mobile-nav');
var toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block';
    setTimeout(() => {
        mobileNav.classList.add('open');
        backdrop.classList.add('open');
    }, 200);
})

const closeMobileNav = () => {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');

    setTimeout(() => {
        backdrop.style.display = 'none';
        mobileNav.style.display = 'none';
    }, 200);
}

mobileNav.addEventListener('click', closeMobileNav);
backdrop.addEventListener('click', closeMobileNav);
