var articleLink = document.getElementById('articlesLink');
var container = document.querySelector('.article__image-container');
const playArticleAnimation = () => {
    container.style.animation = 'flip-customers 1s ease-out 300ms forwards';
    setTimeout(() => {
        container.style.animation = null;
    }, 1300)
}
articleLink.addEventListener('click', playArticleAnimation);