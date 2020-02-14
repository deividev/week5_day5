
/*
Es un array que contiene en cada posición el id de la carta. Su longitud será el doble
que el número de cartas distintas en el juego. Por ejemplo en el caso de 2 cartas distintas
un posible valor del array seria [0,1,1,0] 
*/
let cards;
// Numero de parejas que habrá en el juego
let numPairs = 0;

let selectedCard = -1;

// Numero de movimientos realizados
let moves = 0;
// Numero de parejas encontradas
let findedPairs = 0;

// Contador
let timeCounter = null;

// Este método inicializa de forma aleatoria las cartas para que despues se puedan mostrar.
function initCards() {
    cards = new Array(numPairs * 2);
    let indices = Array.from(Array(numPairs * 2).keys());
    let i = 0;
    while (indices.length > 0) {
        let indexPair = i++ % numPairs;
        const posRandom = Math.floor(Math.random() * indices.length);
        const posResult = indices.splice(posRandom, 1)[0];
        cards[posResult] = indexPair;
    }


}

// Este método pintará las cartas según la disposición en el array cards
function paintCards() {
    cards.forEach(element => {
       const idCard = element;
       $('.board').append(generateHtmlCard(idCard));
      })
      $('.front').click(function(){
        const card = $(this).parent().parent();
        selectCard(card);
    });
    
}

/*
Este método genera y devuelve el html de una card para el valor de carta pasado como parametro
Además añade un atributo "data-value" para poder identificar la carta cuando el usuario clique 
en ella
*/
function generateHtmlCard(value) {
    const html = `<div class="card" data-value="${value}">
        <div class="card-inner">
            <div class="side front">
                <img src="assets/imgs/back-pokemon.png">
            </div>
            <div class="side back">
                <img src="assets/imgs/${value}.png">
            </div>
        </div>
    </div>`;
    return html;
}
/* 
Este método comprueba si el juego ha finalizado. Habrá finalizado cuando el número de parejas
encontradas sea igual al número de parejas 
*/
function hasFinishedGame() {
    return findedPairs === numPairs;
}

// Este método tendra la logica a ejecutar cuando el juego finalice
function finishGame() {
   setTimeout(function(){
    $('.popup-win').addClass('show');
}, 100);
}
// Este método contendrá la lógica cuando se pincha en una carta.
function selectCard(card) {
    // Aqui tendremos el código de mostrar la carta, si ya teniamos una seleccionada chequear si 
    // iguales y realizar las acciones necesarias en el caso de que lo sean o no lo sean.
    
    card.addClass('active')
    if (selectedCard === card.data('value')) {
        // coinciden
        findedPairs++;
        selectedCard = -1;
    } else if(selectedCard > -1) {
        const selector = `.card[data-value=${selectedCard}]`;
        selectedCard = -1;
        setTimeout(function(){
            card.removeClass('active');
            $(selector).removeClass('active');
        }, 1000);
    } else {
        selectedCard = card.data('value');
    }
    
    if(hasFinishedGame()) {
        finishGame();
    }
    
    moves++;

    $('#counter-moves.odometer').text(moves);
}

function initCounters() {
    selectedCard = -1;
    moves = 0;
    findedPairs = 0;
    seconds = 0;

    
}

function startGame(level) {
    numPairs = level;
    initCounters();
    initCards();
    paintCards();
}



/*$(document).ready(function () {
   startGame(numPairs);
});*/


//Start Game

let btnStart = $('#start');

btnStart.click(function () {
    btnStart.attr('disabled', true)
    //Select == number pairs
    let numPairs = parseInt($('select').val());
    startGame(numPairs);

    //Counter moves and seconds with odometer
    $('#counter-seconds, #counter-moves').addClass('odometer odometer-theme-digital');
    $('#counter-moves.odometer').text(moves);
    $('#counter-seconds.odometer').text(seconds);
    timeCounter = setInterval(function () {
        seconds++;
        $('#counter-seconds.odometer').text(seconds);
    }, 1000);
})


//Start Game without selecting level




//Reset Game

const resetGame = () => location.reload();
$('#resetear').click(() => setTimeout(resetGame, 100));



/*function resetGame() {
    location.reload();
}
const resetGame = function () {
    location.reload();
};*/

