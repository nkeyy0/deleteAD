/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту *//* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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
const promoADV = document.querySelectorAll('.promo__adv img');


promoADV.forEach(item =>{
    item.remove();
});

//2

let promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'Драма';

//3

const promoBG = document.querySelector('.promo__bg');

promoBG.style.backgroundImage = "url('img/bg.jpg')";
//console.log(promoBG);



/*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.*/

const conf = document.querySelector('.add'),
      lastFilm = document.querySelector('.adding__input'),
      check = conf.querySelector('[type = "checkbox"]'),
      movieList = document.querySelector('.promo__interactive-list');


let sortFilms = movieDB.movies.sort();
    
createMovieList();

 function addFilm(event){
    event.preventDefault();
    movieDB.movies.push(lastFilm.value);
    sortFilms = movieDB.movies.sort(compareFunction);
    createMovieList();
    if(check.checked == true){
        console.log("Добавляем любимый фильм");
    }
 }

 function compareFunction(a , b){
         if(a.toLowerCase() > b.toLowerCase()){
             return 1;
         }
         if (a.toLowerCase() < b.toLowerCase()){
             return -1;
         }
         return 0;
        }

 function createMovieList(){
    movieList.innerHTML = "";   
    movieDB.movies.forEach(function(item, i){
        if(movieDB.movies[i].length > 21){
        sortFilms[i] = `${movieDB.movies[i].slice(0, 21)}...`;
        }
    movieList.innerHTML +=`<li class="promo__interactive-item">${i+1} ${sortFilms[i]} 
    <div class="delete"></div>
    </li>`;
    });
 }
 
 conf.addEventListener('submit', addFilm);











