
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

let n = 0;
let i = 0;
var highScoreName = []
var highScoreNum = []
var score = 0;
let startTime = 60;

// Questions Array
const quizquestions = [{
    question: "Hydrogen is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "????",
    answer: "a",
}, {
    question: "How many protons are in hydrogen",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    answer: "b",
}, {
    question: "AgCl is a compound?",
    a: "Yes",
    b: "No",
    c: "It's a mixture",
    d: "It's a solution",
    answer: "a",
}, {
    question: "What is the symbol for Chlorine?",
    a: "Ce",
    b: "Cl",
    c: "Chl",
    d: "Cie",
    answer: "b",
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
}, {
    question: "How many rows does a Periodic Table have?",
    a: "9",
    b: "8",
    c: "7",
    d: "6",
    answer: "c",
}, {
    question: "Balance: _ Na + _ Cl2 => _ NaCl?",
    a: "1, 2, 1",
    b: "2, 1, 2",
    c: "0 0 0",
    d: "2, 2, 2",
    answer: "b",
}, {
    question: "How many siginificant figures does 2.10cm have?",
    a: "None",
    b: "1",
    c: "2",
    d: "3",
    answer: "d",
}, {
    question: "What is the atomic number for Uranium",
    a: "94",
    b: "93",
    c: "92",
    d: "91",
    answer: "d",
}, {
    question: "Chemistry is fun",
    a: "True!!",
    b: "FALSE!",
    c: "??????",
    d: ".",
    answer: "a",
}, {
    question: "Name this compound: CaO",
    a: "OxiCalcide",
    b: "Potato",
    c: "Calcium Oxide",
    d: "Calcium Acetate",
    answer: "c",
}, {
    question: "Which one these is an Acid",
    a: "LiCl",
    b: "MgS",
    c: "MgO",
    d: "HCl",
    answer: "d",
}, {
    question: "Which of these have the highest molecular weight?",
    a: "H",
    b: "Fr",
    c: "Al",
    d: "Fe",
    answer: "b",
}, {
    question: "What is the second column of the periodic table called?",
    a: "Alkali Metals",
    b: "Alkaline Earth Metals",
    c: "Nobel Gases",
    d: "None of the above",
    answer: "d",
}, {
    question: "Which of these is a Halogen",
    a: "I",
    b: "Cl",
    c: "Br",
    d: "All of the above",
    answer: "d",
}]

// initializes the game
function startGame() {

    startTime = 60;
    score = 0;
    i = 0;
    timehtml.textContent = `60 seconds remaining`
    scorehtml.textContent = `Score: 0`
    question.setAttribute("style", "visibility:visible")
    answerA.setAttribute("style", "visibility:visible")
    answerB.setAttribute("style", "visibility:visible")
    answerC.setAttribute("style", "visibility:visible")
    answerD.setAttribute("style", "visibility:visible")
    quizApp()
}

// quiz function to start timer and switch questions
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
                questionDisplay.textContent = `Question: ${quizquestions[i].question} `;
                answerA.textContent = `A. ${quizquestions[i].a} `;
                answerB.textContent = `B. ${quizquestions[i].b} `;
                answerC.textContent = `C. ${quizquestions[i].c} `;
                answerD.textContent = `D. ${quizquestions[i].d} `;
            }
        })
    }
    questionDisplay.textContent = `Question: ${quizquestions[i].question} `;
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
        highScoreName.push(scoreName)
        highScoreNum.push(score)
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
    if (scoreHi === null) { return }
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

