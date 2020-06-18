var contactLink = document.getElementById('contactLink');
var contactHeader = document.querySelector('.contact-header');
var txtName = document.querySelector('#txtNameCtrl');
var txtEmail = document.querySelector('#txtEmailCtrl');
var txtComments = document.querySelector('#txtCommentsCtrl');
var buttonSub = document.getElementById('btnSub')
const playContactAnimation = () => {
    contactHeader.classList.add('fadein-animation');
    txtName.classList.add('animate-name');
    txtEmail.classList.add('animate-quote');
    txtComments.classList.add('animate-name');
    buttonSub.classList.add('scrollin-animation');
    setTimeout(() => {
        contactHeader.classList.remove('fadein-animation');
        txtName.classList.remove('animate-name');
        txtEmail.classList.remove('animate-quote');
        txtComments.classList.remove('animate-name');
        buttonSub.classList.remove('scrollin-animation');
    }, 3000);
}
contactLink.addEventListener('click', playContactAnimation);