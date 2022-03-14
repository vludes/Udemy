let numberOfFilms;
let a, b;
let privatStatus;

let personalMovieDB = {
    count: function () {
        numberOfFilms = +prompt('How many movies have you watched already?');
        personalMovieDB.count = numberOfFilms;
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('How many movies have you watched already?');
        };
    },
    movies: [],
    moviesMethod: function () {
        for (let i = 0; i < 2; i++) {
            a = prompt("What movie did you watch?");
            b = prompt("How did you like it?");
            personalMovieDB.movies[a] = b;
            if (a === null || b === null || a === "" || b === "" || a.length > 50) {
                console.log("error");
                i--;
            } else {
                console.log("done");
            };

        };
        console.log(personalMovieDB)
    },
    actors: {},
    genres: [],
    genresMethod: function () {
        for (let i = 1; i <= 3; i++) {
            let input = prompt(`What is your favourite genre ${i}?`);
            if (input === null || input === '') {
                i--;
            };
            personalMovieDB.genres[i - 1] = input;
            personalMovieDB.genres.forEach(function () {
                console.log(`Favourite genre #${i} is ${input}`)
            });
        };

    },
    privat: function () {
        privatStatus = prompt("Is it true?");
        privatBoolean = privatStatus.toLowerCase() == true ? true : false;
        personalMovieDB.privat = privatBoolean;
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("You are a newbie")
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 15) {
            console.log("You are an average")
        } else if (personalMovieDB.count > 15) {
            console.log("You are a pro")
        };
    }
};

function toggleVisibleMyDB() {
    if (personalMovieDB.privat === false || personalMovieDB.privat === null) {
        console.log(personalMovieDB.privat);
        personalMovieDB.privat = true;
        console.log(personalMovieDB);
    } else {
        console.log(personalMovieDB.privat);
        personalMovieDB.privat = false;
        console.log(personalMovieDB);

    }
};



personalMovieDB.count();
personalMovieDB.moviesMethod();
personalMovieDB.genresMethod();
personalMovieDB.privat();
personalMovieDB.detectPersonalLevel();
toggleVisibleMyDB();







// ----------------------------------------------------------------------------------------------

// rememberMyFilms();


// const Vludes = {
//     age: 21,
//     height: 180,
//     hair: 'brown',
//     skills: {
//         programming: 'beginner',
//         sports: 'amateur'
//     }
// };

// console.log(Object.values(Vludes));

// console.log(Vludes[key]);

// for (let key in Vludes) {
//     if (typeof (Vludes[key]) === 'object') {
//         for (let i in Vludes[key]) {
//             console.log(`${i}: ${Vludes[key][i]}`)
//         };
//     };
// };

// let arr = [1, 3, 5, 2, 6.5, 3];
// arr.map(function (a) {
//     return a + 2;
// });

// console.log(arr);


// const a = [1, 2, 3, 4, 5];
// const b = [6, 7, 8, 9];
// const c = [...a, ...b, 'vk', 'fb'];
// console.log(c);

// let q = '15px'
// console.log(parseInt(q));

// let body = document.querySelector('body');
// body.style.height = '100%';
// let div = document.createElement('div');
// div.classList.add('first');
// div.style.width = '50%';
// div.style.height = '150px';
// div.style.textAlign = 'center';
// div.style.lineHeight = '150px';
// div.style.backgroundColor = 'rgb(123, 200, 150)';
// document.body.append(div);
// div.innerHTML = '<h1>Henlo</h1>'

// let div2 = document.createElement('div');
// div2.style.cssText = "width: 300px; height: 100px; background-color: pink;";
// document.body.prepend(div2);

// let div3 = document.createElement('div');
// div3.style.cssText = "width: 500px; height: 100px; background-color: purple;";
// div2.after(div3);