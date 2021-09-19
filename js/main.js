// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuCloseItem = document.querySelector('.burger-close');

    burgerItem.addEventListener('click', () => {
            menu.classList.add('menu-active');
            burgerItem.style.visibility = 'hidden';
            menuCloseItem.style.visibility = 'unset';
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('menu-active');
        burgerItem.style.visibility = 'unset';
        menuCloseItem.style.visibility = 'hidden';
    });
}());

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuCloseItem = document.querySelector('.burger-close');

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                menu.classList.remove('menu-active');
                burgerItem.style.visibility = 'unset';
                menuCloseItem.style.visibility = 'hidden';        
                smoothScroll(currentTarget, 500);
            });
        });
    };
    scrollTo();
}());

// Самооценка проекта

let mark = `1. вёрстка валидная +10
2. вёрстка семантическая +20
3. для оформления СV используются css-стили +10
4. контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10
5. вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
6. есть меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10
7. на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10
8. контакты для связи и перечень навыков оформлены в виде списка ul > li +10
9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
10. CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10
11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
12. CV выполнено на английском языке +10
13. выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10
14. A это уже решать тебе, проверяющий :)\nдизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать)

Мой итоговый вердикт:
140/150

Надеюсь тебе понравится моя работа :)

Желаю успехов в учебе!`;

console.log(mark);