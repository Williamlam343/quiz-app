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
var initials = document.querySelector("#initials")
var hiScore = document.querySelector("#hiScore")

// Used to display the question
let n = 0;
let i = 0;
var highScoreName = []
var highScoreNum = []
let score = 0;
let startTime = 60;
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
    answer: "a",
}, {
    question: "Chlorine is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "????",
    answer: "a",
}, {
    question: "Sodium is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "????",
    answer: "a",
}, {
    question: "Helium is a nobel gas?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "????",
    answer: "a",
}]

// initializes the game

function startGame() {
    startTime = 60;
    score = 0
    i = 0
    question.setAttribute("style", "visibility:visible")
    answerA.setAttribute("style", "visibility:visible")
    answerB.setAttribute("style", "visibility:visible")
    answerC.setAttribute("style", "visibility:visible")
    answerD.setAttribute("style", "visibility:visible")
    quizApp()
}

function quizApp() {
    // THEN a timer starts and I am presented with a question
    //counter that starts from 120 counts down; if user gets a question wrong subtract -5
    //timer starts when startbtn is clicked
    startbtn.setAttribute("style", "visibility:hidden")

    var timer = setInterval(() => {
        startTime--;
        timehtml.textContent = `${startTime} seconds remaining`


        if (startTime <= 0) {
            clearInterval(timer);

            timehtml.textContent = "GAME_OVER";
            question.setAttribute("style", "visibility:hidden")
            answerA.setAttribute("style", "visibility:hidden")
            answerB.setAttribute("style", "visibility:hidden")
            answerC.setAttribute("style", "visibility:hidden")
            answerD.setAttribute("style", "visibility:hidden")
            scoreInput.setAttribute("style", "visibility:visible")
            // nextquestion.setAttribute("style", "visibility:hidden")
        }

    }, 1000);

    //When start is pressed, a question is given in a display box
    //when answer is given display if correct or wrong; loop to next question
    //if question is wrong substract -5seconds from Timer
    if (startTime >= 0) {
        nextquestion.addEventListener("click", function (event) {
            var answerbox = event.target;
            var dataAnswer = answerbox.getAttribute("data-answer")

            if (quizquestions[i].answer === dataAnswer) {
                score++;
                scorehtml.textContent = `Score: ${score}`

            } else {

                startTime -= 5;

            }

            if (answerbox.matches(".answer")) {

                i++;

                if (i >= quizquestions.length) { i = 0; };
                questionDisplay.textContent = `Question #${i + 1}: ${quizquestions[i].question} `;
                answerA.textContent = `A. ${quizquestions[i].a} `;
                answerB.textContent = `B. ${quizquestions[i].b} `;
                answerC.textContent = `C. ${quizquestions[i].c} `;
                answerD.textContent = `D. ${quizquestions[i].d} `;
            }
        })
    }

    questionDisplay.textContent = `Question #${i + 1}: ${quizquestions[i].question} `;
    answerA.textContent = `A. ${quizquestions[i].a} `;
    answerB.textContent = `B. ${quizquestions[i].b} `;
    answerC.textContent = `C. ${quizquestions[i].c} `;
    answerD.textContent = `D. ${quizquestions[i].d} `;
}



scoreRecorder.addEventListener("submit", function (event) {
    event.preventDefault()
    var scoreName = scoreInput.value
    scoreInput.setAttribute("style", "visibility:hidden")
    startbtn.setAttribute("style", "visibility:visible")
    if (scoreName === "") { return; }
    else {
        highScoreName.push(scoreName) || 0
        highScoreNum.push(score) || 0
        highScoreAdd();


    }


})


function highScoreAdd() {

    var scoreHi = {
        num: highScoreNum,
        name: highScoreName,
    }
    scoreHi.num.sort
    var numP = document.createElement("p")
    var nameP = document.createElement("p")

    numP.textContent = scoreHi.num[n]
    nameP.textContent = scoreHi.name[n]

    hiScore.appendChild(numP)
    initials.appendChild(nameP)
    n++;

    localStorage.setItem("score", JSON.stringify(scoreHi))


}





function savedHiScore() {
    scoreHi = JSON.parse(localStorage.getItem("score"))

    for (let i = 0; i < scoreHi.name[0].length; i++) {

        scoreHi.num.sort((a, b) => b - a)

        var numP = document.createElement("p")
        var nameP = document.createElement("p")

        numP.textContent = scoreHi.num[i]
        nameP.textContent = scoreHi.name[i]
        hiScore.appendChild(numP)
        initials.appendChild(nameP)

    }
}

savedHiScore()
startbtn.addEventListener("click", startGame)

