const card = document.querySelectorAll(' .memory-card');

function flipCard() {
    this.classList.toggle('flip');
}
CanvasCaptureMediaStreamTrack.forEach(card => card.addEventListener('click', flipCard));

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = flase;
let firstcard, secondCard;

function flipCard() {
    if (lockBoard) return;
    this.classList.toggle('flip');
    this.classList.add('flip');
    if(this === firstcard) return;
}
if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
}
secondCard = this;
hasFlippedCard = false;

function checkForMatch() {
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return
    }
    unflipCards();
}
function disableCards() {
    firstcard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstcard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = flase;
    }, 1500);
}

function restBoard(){
    [hasFlippedCard , lockBoard] = [false, false];
    [firstCard, secondCard] = [null , null];
}
function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() *12);
        card.style.order = ramdomPos;
    });
        
}

if (firstCard.dataset.name === secondCard.dataset.name) {
    disableCards();
    return;
}

unflipCards();

let isMatch = firstcard.dataset.name === secondCard.dataset.name;
isMatch ? disableCards() : unflipCards();
 
card.forEach(card => card.addEventListener('click', flipCard));