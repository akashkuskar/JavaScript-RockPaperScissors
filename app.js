let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const userChoice="";
const compChoice=0;

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

    // generate number from 0 to less than one number which is multiply the math.random() funciton     
    // math.floor is used to remove the decimal values

};

let i=0;
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});









const drawGame = () => {
  
    msg.innerText="Game was draw,Try Again !";
    msg.style.backgroundColor="purple";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        comScore++;
        compScorePara.innerText=comScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    // Generate computer choice -> modular programming (create one function for one task)
    const compChoice = gencompChoice();
    console.log("comp choice = ", compChoice);

if (userChoice === compChoice) {
    drawGame();
    // draw game
}
else {
    let userWin = true;
    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    }
    else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

