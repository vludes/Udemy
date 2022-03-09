let numberOfFilms = prompt('How many movies have you watched already?', '');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What movies have you watched already ?'),
    b = prompt('How do you like it?'),
    c = prompt('What movies have you watched already ?'),
    d = prompt('How do you like it?');


personalMovieDB.count = numberOfFilms;
personalMovieDB.movies.a = b;
personalMovieDB.movies.c = d;
console.log(personalMovieDB);

const genre = prompt("Genres?")
personalMovieDB.genres[0] = genre;