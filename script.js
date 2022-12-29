const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.card){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remov('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

