const jokeContainer = document.getElementById('jokes_container');
const jokeForm = document.getElementById('joke_form');

let currentLength = 0;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/jokes');
xhr.send();
xhr.responceType = 'json';
// xhr.onload = () => {
//     const jokes = xhr.responce;
//     if(jokes.length) {
//         jokesContainer.innerHTML = '';
//         jokes.forEach(joke => {
//             jokesContainer.innerHTML += getJokeHTML(joke);
//         });
//         currentLength = jokes.length;
//     }
// };
xhr.onload = () => console.log(xhr.responce);