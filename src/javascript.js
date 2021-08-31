// GIVEN I am taking a code quiz
//TODO WHEN I click the start button

var startbtn = document.querySelector("#startbtn")
var timehtml = document.querySelector("#time")
var scorehtml = document.querySelector("#score")
var questionDisplay = document.querySelector("#question")
var nextquestion = document.querySelector("#questionDisplay")
var answerA = document.querySelector("#answer-a")
var answerB = document.querySelector("#answer-b")
var answerC = document.querySelector("#answer-c")
var answerD = document.querySelector("#answer-d")
var scoreRecorder = document.querySelector("#scoreRecord")
var scoreInput = document.querySelector("#names")

// Used to display the question

let startTime = 30
let score = 0;
let i = 0

const quizquestions = [{
    question: "Hydrogen is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "????",
    answer: "a",
}, {
    question: "Lol is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "????",
    answer: "b",
}, {
    question: "AgCl is a compound?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "????",
    answer: "c",
}, {
    question: "Chlorine is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "????",
    answer: "d",
}, {
    question: "Sodium is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "????",
    answer: "d",
}, {
    question: "Helium is a nobel gas?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "????",
    answer: "a",
}]

// initializes the game


// TODO
function bgColorChanger() {


}


function quizApp() {
    // THEN a timer starts and I am presented with a question
    //counter that starts from 120 counts down; if user gets a question wrong subtract -5
    //timer starts when startbtn is clicked
    questionDisplay.textContent = `Question #${i + 1}: ${quizquestions[i].question} `;
    answerA.textContent = `A. ${quizquestions[i].a} `;
    answerB.textContent = `B. ${quizquestions[i].b} `;
    answerC.textContent = `C. ${quizquestions[i].c} `;
    answerD.textContent = `D. ${quizquestions[i].d} `;


    var timer = setInterval(() => {
        startTime--;
        timehtml.textContent = `${startTime} seconds remaining`
        startbtn.setAttribute("style", "display:none")


        if (startTime < 0) {


            clearInterval(timer);
            timehtml.textContent = "GAME_OVER";
            // timehtml.textContent = 120,
            // startbtn.setAttribute("style", "display:block")
            // startbtn.textContent = "Restart!"
            questionDisplay.textContent = "GAME OVER"
            answerA.textContent = ``;
            answerB.textContent = ``;
            answerC.textContent = ``;
            answerD.textContent = ``;
        }

    }, 1000);

    //When start is pressed, a question is given in a display box
    //when answer is given display if correct or wrong; loop to next question
    //if question is wrong substract -5seconds from Timer
    nextquestion.addEventListener("click", function (event) {
        var answerbox = event.target;
        var dataAnswer = answerbox.getAttribute("data-answer")

        if (quizquestions[i].answer === dataAnswer) {
            score++;
            scorehtml.textContent = `Score: ${score}`
            alert("correct!")
        } else {
            alert(`wrong! ${startTime}s -5s`)
            startTime -= 5;

        }

        if (answerbox.matches(".answer")) {
            console.log(i)
            i++;
            if (i >= quizquestions.length) { startTime = 0 };
            questionDisplay.textContent = `Question #${i + 1}: ${quizquestions[i].question} `;
            answerA.textContent = `A. ${quizquestions[i].a} `;
            answerB.textContent = `B. ${quizquestions[i].b} `;
            answerC.textContent = `C. ${quizquestions[i].c} `;
            answerD.textContent = `D. ${quizquestions[i].d} `;


        }
    });
    //TODO WHEN I answer a question
    // THEN I am presented with another question
    //TODO WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    //TODO WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    //TODO WHEN the game is over
    // THEN I can save my initials and my score

}
var highScoreArr = []
scoreRecorder.addEventListener("submit", function (event) {
    event.preventDefault()
    var scoreName = scoreInput.value

    console.log(scoreInput.value)
    if (scoreName === "") { return; }
    else {

        highScoreArr.push(scoreName)
        localStorage.setItem("names", JSON.stringify(highScoreArr))
    }

})





startbtn.addEventListener("click", quizApp)

