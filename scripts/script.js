'use strict'

let button = document.querySelector('#button');
let input = document.querySelector('#number');
let picture = document.querySelector("answer-img__item");

let num = Math.floor(Math.random() * 20 + 1);
let attempts = 9



let numUser = ''

input.addEventListener('input', (e) => {
    numUser = e.target.value.trim();
})


const gameBot = () => {

    function declOfNum(number, words) {  
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    }
            
    let word = attempts + declOfNum(1, [' попыток', ' попытки', ' попытка']);
        

    const gameBotTwo = () => {

        if (num < numUser) {
            document.getElementById("answer").innerHTML = `Загаданное число меньше! Осталось ${word}`;
            getattempts();      
        } else if (num > numUser && numUser > 0) {
            document.getElementById("answer").innerHTML = `Загаданное число больше! Осталось ${word}`;
            getattempts();            
        } else if (isNaN(numUser)) {
            document.getElementById("answer").innerHTML = `Введи число! Осталось ${word}`;
            getattempts();           
        } else if (num = numUser) {
            document.getElementById("answer").innerHTML = `Поздравляю, Ты победил!!!`;
            document.querySelector("#joker").src = './images/joker.gif';
            setTimeout(function(){
                location.reload();
            }, 10000);
        } 
    }

    const getattempts = () => {
        attempts--;
        if (attempts < 0) {
            document.getElementById("answer").innerHTML = `Ты проиграл...`;
            document.querySelector("#joker").src = './images/Joker-Villain-PNG-Pic.png';
            document.querySelector("#joker").style.width = '800px';
            document.querySelector("#joker").style.marginLeft = '-230px';
            document.body.style.background = `red`
            setTimeout(function(){
                location.reload();
            }, 10000);
        } else {
            return;
        }
    }
    gameBotTwo();


}

button.addEventListener('click', (e) => {
    e.preventDefault();
    gameBot();
})