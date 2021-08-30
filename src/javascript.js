// GIVEN I am taking a code quiz
//TODO WHEN I click the start button



var startbtn = document.querySelector("#startbtn")
var timehtml = document.querySelector("#time")
var scorehtml = document.querySelector("#score")
var questionDisplay = document.querySelector("#question")
var answerA = document.querySelector("#answer-a")
var answerB = document.querySelector("#answer-b")
var answerC = document.querySelector("#answer-c")
var answerD = document.querySelector("#answer-d")
// Used to display the question

const quizquestions = [{
    question: "Hydrogen is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "",
}, {
    question: "Lol is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "",
}, {
    question: "Apple is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "",
}, {
    question: "Chlorine is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "",
}, {
    question: "Sodium is an element?",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "",
}, {
    question: "Helium is a nobel gas?",
    a: "True",
}]

let i = 0

function quizApp() {

    let startTime = 10;
    let score = 0;




    // THEN a timer starts and I am presented with a question
    //counter that starts from 120 counts down; if user gets a question wrong subtract -5
    //timer starts when startbtn is clicked
    var timer = setInterval(() => {
        startTime--;
        // questionAnswers.textContent = `apple`
        timehtml.textContent = `${startTime} seconds remaining`
        startbtn.setAttribute("style", "display:none")
        scorehtml.textContent = `Score: ${score} `

        questionDisplay.textContent = `Question #${i + 1}: ${quizquestions[i].question} `;
        answerA.textContent = `A.${quizquestions[i].a} `;
        answerB.textContent = `B.${quizquestions[i].b} `;
        answerC.textContent = `C.${quizquestions[i].c} `;
        answerD.textContent = `D.${quizquestions[i].d} `;

        if (startTime < 0) {


            clearInterval(timer);
            timehtml.textContent = "TIME'S UP";
            // timehtml.textContent = 120,
            startbtn.setAttribute("style", "display:block")
            startbtn.textContent = "Restart!"
            questionDisplay.textContent = ``
            answerA.textContent = ``;
            answerB.textContent = ``;
            answerC.textContent = ``;
            answerD.textContent = ``;
        }

    }, 1000);


    //When start is pressed, a question is given in a display box
    //when answer is given display if correct or wrong; loop to next question
    //if question is wrong substract -5seconds from Timer








    //TODO WHEN I answer a question
    // THEN I am presented with another question
    //TODO WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    //TODO WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    //TODO WHEN the game is over
    // THEN I can save my initials and my score
    return ""
}



startbtn.addEventListener("click", quizApp)
answerA.addEventListener("click", function nextquestion() {
    i++; if (i > quizquestions.length) { i = 0 }
})

