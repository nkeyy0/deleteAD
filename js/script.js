/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1
const promoADV = document.querySelectorAll('.promo__adv');

promoADV[0].remove();

//2
const drama  = document.createElement('div');
drama.classList.add('promo__genre');
drama.textContent = 'Драма';

let promoGenre = document.querySelector('.promo__genre');

promoGenre.replaceWith(drama);

//3

const promoBG = document.querySelector('.promo__bg');

promoBG.style.backgroundImage = "url('../img/bg.jpg')";
console.log(promoBG);

//4



const sortFilms = movieDB.movies.sort();

const films = document.querySelectorAll('.promo__interactive-item');
const replaceFilms = document.createElement('div');

console.log(films);

films.forEach((item, i) => {
    item.textContent = `#${i+1} ${sortFilms[i]}`;
});

