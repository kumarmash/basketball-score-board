/*Algorithm
1) create a variable which holds the score in both of the team
2) create three functions (for score 1 ,2 ,3) to update the score for both teamwhen clicked
*/
//variables to grab the display field
let homeScore = document.getElementById("home-score") ;
let guestScore = document.getElementById("guest-score") ;

//variables for counting the score
let countHomeScore = 0 ;
let countGuestScore = 0 ;

//Home Score Functions:

function incrementHomeScoreOne(){
    countHomeScore += 1 ;
    homeScore.textContent = countHomeScore ;
}

function incrementHomeScoreTwo(){
    countHomeScore += 2 ;
    homeScore.textContent = countHomeScore ;
}

function incrementHomeScoreThree(){
    countHomeScore += 3 ;
    homeScore.textContent = countHomeScore ;
}

//Guest Score Functions

function incrementGuestScoreOne(){
    countGuestScore += 1 ;
    guestScore.textContent = countGuestScore ;
}

function incrementGuestScoreTwo(){
    countGuestScore += 2 ;
    guestScore.textContent = countGuestScore ;
}

function incrementGuestScoreThree(){
    countGuestScore += 3 ;
    guestScore.textContent = countGuestScore ;
}

// function for clearing the score

function clearScore(){
    countHomeScore = 0;
    countGuestScore = 0 ;
    homeScore.textContent = countHomeScore ;
    guestScore.textContent = countGuestScore;
    
}