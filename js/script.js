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
*/
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


//2

let promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'Драма';

//3




/*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.*/

//1

const conf = document.querySelector('.add'),
      lastFilm = document.querySelector('.adding__input'),
      check = conf.querySelector('[type = "checkbox"]'),
      promoADV = document.querySelectorAll('.promo__adv img'),
      promoBG = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list');


      



let sortFilms = movieDB.movies.sort();
    
createMovieList(movieDB.movies, movieList);
removeAD();
changeBackground('img/bg.jpg');

 function addFilm(event){
    event.preventDefault();
    if(lastFilm.value){
    movieDB.movies.push(lastFilm.value);
    sortFilms = movieDB.movies.sort(compareFunction);
    createMovieList(movieDB.movies, movieList);
    if(check.checked == true){
        console.log("Добавляем любимый фильм");
    }
    }
    
    event.target.reset();
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

 function createMovieList(films, parent){
    parent.innerHTML = "";   
    films.forEach(function(item, i){
        if(films[i].length > 21){
        sortFilms[i] = `${films[i].slice(0, 21)}...`;
        }
    movieList.innerHTML +=`<li class="promo__interactive-item">${i+1} ${sortFilms[i]} 
    <div class="delete"></div>
    </li>`;
    });
    document.querySelectorAll('.delete').forEach(function(del, i){
        del.addEventListener('click', function(){
            del.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent);
        });

 });
}

 function removeAD(){
    promoADV.forEach(item =>{
    item.remove();
    });
 }

 function changeBackground(url){
    promoBG.style.backgroundImage = `url(${url})`;
 }
 
 conf.addEventListener('submit', addFilm);











