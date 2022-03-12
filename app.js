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
    movies: function () {
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
    genres: function () {
        let arr = []
        for (let i = 1; i <= 3; i++) {
            let input = prompt(`What is your favourite genre ${i}?`);
            if (input === null || input === '') {
                i--;
            };
            personalMovieDB.genres[i - 1] = input;
            arr.push(input);
            console.log(personalMovieDB);
            console.log(arr);
        };
    },
    privat: function () {
        privatStatus = prompt("Is it true?");
        privatBoolean = privatStatus.toLowerCase() == true ? true : false;
        personalMovieDB.privat = privatBoolean;
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
personalMovieDB.movies();
personalMovieDB.genres();
personalMovieDB.privat();
toggleVisibleMyDB();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("You are a newbie")
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 15) {
//         console.log("You are an average")
//     } else {
//         console.log("You are a pro")
//     };
// };



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