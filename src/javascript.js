// GIVEN I am taking a code quiz
//TODO WHEN I click the start button

var startbtn = document.querySelector("#startbtn")
var timehtml = document.querySelector("#time")
var scorehtml = document.querySelector("#score")
const quizquestions = [{
    Question: "Hydrogen is an element?",
    Answer: true,
}, {
    Question: "Helium is a nobel gas?",
    Answer: true,
}]

function quizApp() {

    let startTime = 10;
    let score = 0;
    startbtn.setAttribute("style", "display:none")

    // THEN a timer starts and I am presented with a question
    //counter that starts from 120 counts down; if user gets a question wrong subtract -5
    //timer starts when startbtn is clicked

    var timer = setInterval(() => {
        startTime--;
        timehtml.textContent = `${startTime} seconds remaining`
        scorehtml.textContent = `Score: ${score}`
        if (startTime < 0) {


            clearInterval(timer);
            timehtml.textContent = "TIME'S UP";
            // timehtml.textContent = 120,
            startbtn.setAttribute("style", "display:block")
            startbtn.textContent = "Restart!"
        }

    }, 1000);


    //When start is pressed, a question is given in a display box
    //when answer is given display if correct or wrong; loop to next question
    //if question is wrong substract -5seconds from Timer
    function questiondisplay() {

    }

}
//TODO WHEN I answer a question
// THEN I am presented with another question
//TODO WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
//TODO WHEN all questions are answered or the timer reaches 0
// THEN the game is over
//TODO WHEN the game is over
// THEN I can save my initials and my score


function start() {
    console.log("uwu")
}

startbtn.addEventListener("click", quizApp)

