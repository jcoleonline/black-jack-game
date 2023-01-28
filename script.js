const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const playButton = document.getElementById("play-again");
var deck;
const playerArray = [];
const dealerArray = [];
let playerPointTally = document.getElementById('player-points')
let dealerPointTally = document.getElementById('dealer-points')
let playerText = document.getElementById('result')
let dealerText = document.getElementById('dealer-result')


function buildDeck() {
    let values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    let types = ["clubs", "diamonds", "hearts", "spades"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "_of_" + types[i]);
        }
    }
}

buildDeck()


function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    
}
shuffleDeck()

function randomCards(finalCard){ //places random card in dealer hand
    const cardImg = document.createElement('img');
    const card = deck.pop();
    cardImg.src = "./images/" + card + ".png";
    finalCard.appendChild(cardImg);
    const value = getValue(card)
    playerArray.push(value)
    const playerPoints = playerArray.reduce(
        (acc, curr) => acc + curr,
        0
      );
      playerPointTally.textContent = playerPoints
      console.log(playerPoints);
    // console.log(playerArray);
}


function randomCards2(finalCard){ //places random card in dealer hand
    const cardImg = document.createElement('img');
    const card = deck.pop();
    cardImg.src = "./images/" + card + ".png";
    finalCard.appendChild(cardImg);
    const value = getValue(card)
    dealerArray.push(value)
    const dealerPoints = dealerArray.reduce(
        (acc, curr) => acc + curr,
        0
      );
      dealerPointTally.textContent = dealerPoints
      console.log(dealerPoints);
    //  console.log(dealerArray);
}


function dealCards() {
     randomCards(playerHand)
     randomCards(playerHand)
}

function dealCards2() {
    randomCards2(dealerHand)
    randomCards2(dealerHand)
}



dealButton.addEventListener('click', () => {
    dealCards()
    dealCards2()
    dealButton.setAttribute('disabled', true);
    
})

hitButton.addEventListener('click', () => {
      overTwentyOne();
        
})

standButton.addEventListener('click', () => {
    if (dealerPointTally.textContent > playerPointTally.textContent){
        standButton.setAttribute('disabled',true)

    }
    dealerBust();
    dealerBust();
    dealerBust();
    dealerBust();
    dealerBust();
    dealerBust();
    dealerBust();
    dealerBust();
    dealerBust();
    dealerBust();
    whoWon();

   
      
})


function getValue(cardString) {
    let data = cardString.split("_of_");
    let value = data[0];

    if(isNaN(value)) {
        if (value == "ace") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
    
}

function overTwentyOne(){
    if(playerPointTally.textContent<21){
        randomCards(playerHand)
    }  else if (playerPointTally.textContent==21){
        hitButton.setAttribute('disabled',true)
        let winner = " Winner"
        playerText.textContent = winner 
    }
     else {hitButton.setAttribute('disabled',true)
    let busted = " busted"
    playerText.textContent = busted
}};


function dealerBust(){
    if (dealerPointTally.textContent<17){
        randomCards2(dealerHand)
                // standButton.setAttribute('disabled', true) 
    }
}

function whoWon(){
    if(dealerPointTally.textContent > playerPointTally.textContent && dealerPointTally.textContent <=21)
    { let Winner = " Winner"
      let Loser = " Loser"
    dealerText.textContent = Winner
    playerText.textContent = Loser}
    else if (dealerPointTally.textContent > playerPointTally.textContent && dealerPointTally.textContent > 21){
        let Winner = " Winner"
        let Loser = " Loser"
        dealerText.textContent = Loser
        playerText.textContent = Winner}
    }

playButton.addEventListener('click', () =>{
    window.location.reload()
})


