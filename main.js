let home= document.getElementById("homeScore");
let homeScore = 0;
// let guestScore = 0;
let homeScoreButton1 = document.getElementById('homeBtn1');
let homeScoreButton2 = document.getElementById('homeBtn2');
let homeScoreButton3 = document.getElementById('homeBtn3');

let guest = document.getElementById("guestScore");
let guestScore = 0;

const increaseHomeScoreOne= () => {
    homeScore += 1;
    home.textContent = homeScore;
}

const increaseHomeScoreTwo= () => {
    homeScore += 2;
    home.textContent = homeScore;
}

const increaseHomeScoreThree= () => {
    homeScore += 3;
    home.textContent = homeScore;
}

const increaseGuestScoreOne = () => {
    guestScore +=1;
    guest.textContent = guestScore;
}

const increaseGuestScoreTwo = () => {
    guestScore +=2;
    guest.textContent = guestScore;
}

const increaseGuestScoreThree = () => {
    guestScore +=3;
    guest.textContent = guestScore;
}