// Mobile menu
const mobileMenu = document.querySelector('.menu-mobile__container');
const mobileMenuContent = document.querySelector('.hero__mobile');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuContent.classList.toggle('active');
})
// end

// Catalog function
    const data = {
        france: [
            { img: "./img/catalog/cards-france/01.jpg", author: "Марсель Руссо", title: "Охота Амура", medium: "Холст, масло (50x80)", price: "14 500 руб" },
            { img: "./img/catalog/cards-france/02.jpg", author: "Анри Селин", title: "Дама с собачкой", medium: "Акрил, бумага (50х80)", price: "16 500 руб" },
            { img: "./img/catalog/cards-france/03.jpg", author: "Франсуа Дюпон", title: "Процедура", medium: "Цветная литография (40x60)", price: "20 000 руб" },
            { img: "./img/catalog/cards-france/04.jpg", author: "Луи Детуш", title: "Роза", medium: "Холст, масло (50x80)", price: "12 000 руб" },
            { img: "./img/catalog/cards-france/05.jpg", author: "Франсуа Дюпон", title: "Птичья трапеза", medium: "Цветная литография (40x60)", price: "22 500 руб" },
            { img: "./img/catalog/cards-france/06.jpg", author: "Пьер Моранж", title: "Пейзаж с рыбой", medium: "Цветная литография (40x60)", price: "20 000 руб" }
        ],
        germany: [
            { img: "./img/catalog/cards-germany/01.jpg", author: "Курт Вернер", title: "Над городом", medium: "Цветная литография (40х60)", price: "16 000 руб" },
            { img: "./img/catalog/cards-germany/02.jpg", author: "Макс Рихтер", title: "Птенцы", medium: "Холст, масло (50х80)", price: "14 500 руб" },
            { img: "./img/catalog/cards-germany/03.jpg", author: "Мартин Майер", title: "Среди листьев", medium: "Цветная литография (40х60)", price: "20 000 руб" },
            { img: "./img/catalog/cards-germany/04.jpg", author: "Герман Беккер", title: "Яркая птица", medium: "Цветная литография (40х60)", price: "13 000 руб" },
            { img: "./img/catalog/cards-germany/05.jpg", author: "Вульф Бауэр", title: "Дятлы", medium: "Бумага, акрил (50х80)", price: "20 000 руб" },
            { img: "./img/catalog/cards-germany/06.jpg", author: "Вальтер Хартманн", title: "Большие воды", medium: "Бумага, акрил (50х80)", price: "23 000 руб" }
        ],
        england: [
            { img: "./img/catalog/cards-england/01.jpg", author: "Пол Смит", title: "Дикий зверь", medium: "Акварель, бумага (50х80)", price: "19 500 руб" },
            { img: "./img/catalog/cards-england/02.jpg", author: "Джон Уайт", title: "Скалистый берег", medium: "Цветная литография (40х60)", price: "17 500 руб" },
            { img: "./img/catalog/cards-england/03.jpg", author: "Джим Уотсон", title: "Река и горы", medium: "Акварель, бумага (50х80)", price: "20 500 руб" },
            { img: "./img/catalog/cards-england/04.jpg", author: "Юджин Зиллион", title: "Белый попугай", medium: "Цветная литография (40х60)", price: "15 500 руб" },
            { img: "./img/catalog/cards-england/05.jpg", author: "Эрик Гиллман", title: "Ночная рыба", medium: "Бумага, акрил (50х80)", price: "12 500 руб" },
            { img: "./img/catalog/cards-england/06.jpg", author: "Альфред Барр", title: "Рыжий кот", medium: "Цветная литография (40х60)", price: "21 000 руб" }
        ]
    }

    // Создаем карточку
    function createCard(item) {
        const card = document.createElement('li');
        card.className = 'catalog__item';
        
        const baseImg = item.img.replace('.jpg', '');

        card.innerHTML = `
                <article class="product">
                    <picture>
                        <source srcset="${baseImg}-mobile.jpg"
                        media="(max-width: 480px)">
                        <source srcset="${baseImg}-mini.jpg"
                        media="(max-width: 700px)">
                        <source srcset="${baseImg}-tablet.jpg"
                        media="(max-width: 768px)">
                        <img src="${baseImg}.jpg" alt="Охота Амура" 
                        class="product__image"> 
                    </picture>
                    <div class="product__content">
                        <span class="product__author">
                            ${item.author}</span>
                        <h3 class="product__title">
                            ${item.title}</h3>
                        <span class="product__props">
                            ${item.medium}</span>
                        <div class="product__price">
                            ${item.price}</div>
                        <button class="btn product__btn">
                            В корзину</button>
                    </div>
                </article>
            </li>
        `;
        return card;
    };

    // Отрисовка карточек
    function renderCards(country) {
        const  container = document.getElementById('cards');
        container.innerHTML = '';

        data[country].forEach(item => {
            const card = createCard(item);
            card.classList.add('visible');
            container.appendChild(card);
        });
    };

    // Переключение табов
    const buttonsCatalog = document.querySelectorAll('.catalog__btn');

    buttonsCatalog.forEach(button => {
        button.addEventListener('click', () => {
            buttonsCatalog.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            const country = button.dataset.country;
            renderCards(country);
        });
    });

    // Загружаем при загрузке странице Францию
    document.addEventListener('DOMContentLoaded', () => {
        renderCards('france');
        document.querySelector('.catalog__btn[data-country="france"]').classList.add('active');
    });
// end