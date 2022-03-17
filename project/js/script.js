'use strict';
let adv = document.querySelectorAll('.promo__adv img');
let input;
let btn = document.querySelector('.add').lastElementChild;
let check = document.querySelector('[type = "checkbox"]');
let moviesList = document.querySelector('.promo__interactive-list');
adv.forEach(item => {
    item.remove();
});

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelector('.promo__genre').innerHTML = 'Драма';
let backDiv = document.querySelector('.promo__bg');
backDiv.style.backgroundImage = 'url("img/bg.jpg")';
let bin = document.querySelectorAll('.delete');

function createList(film, parent) {
    parent.innerHTML = '';
    film.forEach((film, i) => {
        parent.innerHTML = parent.innerHTML + `<li class="promo__interactive-item">${i + 1}. ${film}<div class="delete"></div>
    </li>`;
    });
    bin.forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            console.log('click');
            movieDB.movies.splice(i, 1);
            createList(movieDB.movies, moviesList);

        });

    });
};

createList(movieDB.movies, moviesList);

check.addEventListener('change', () => {
    check.checked == true;
});
btn.addEventListener('click', (event) => {
    event.preventDefault();
    input = document.querySelector('.adding__input').value;
    if (input.length > 21) {
        input = input.slice(0, 21) + '...';
    };
    if (input) {
        movieDB.movies.push(input);
        moviesList.innerHTML = '';
        movieDB.movies.sort();
        movieDB.movies.forEach((item, i) => {
            moviesList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${item}<div class="delete"></div>
    </li>`
        });

    };
    if (check.checked == true) {
        console.log('Checked');
    };
    movieDB.movies.sort();
});










