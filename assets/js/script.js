var lotrQuiz = document.getElementById("quiz");
var lotrSumbit = document.getElementById("submit");
var lotrScore = document.getElementById("score");
var startButton = document.getElementById("start");
var timeDisplay = document.getElementById("time");
var timeLeft = 60;
var lotrQuestions = [
    {
        question: "How many Rings of Power are in existence?",
        answers: {
            a: "4",
            b: "9",
            c: "10",
            d: "20"
        },
        rightAnswer: "d"
    },
    {
        question: "How many characters are there in the Fellowship of the Ring?",
        answers: {
            a: "10",
            b: "9",
            c: "11",
            d: "8"
        },
        rightAnswer: "b"
    },
    {
        question: "Gimli, son of _____.",
        answers: {
            a: "Thorin",
            b: "Gloin",
            c: "Dwalin",
            d: "Balin"
        },
        rightAnswer: "b"
    },
    {
        question: "Aragon is the heir of _______.",
        answers: {
            a: "Rohan",
            b: "Elrond",
            c: "Elendil",
            d: "Isildur"
        },
        rightAnswer: "d"
    },
    {
        question: "What does Aragorn say right before charging into the last battle in Mordor?",
        answers: {
            a: "Death",
            b: "For Frodo",
            c: "It Is Not This Day",
            d: "You Look Awful"
        },
        rightAnswer: "b"
    },
]

function countDown() {
    console.log("clicked")
    var time = setInterval(function () {
        timeLeft -= 1
        timeDisplay.innerHTML = timeLeft
        if (timeLeft <= 0) {
            clearInterval(time)
        }
    }, 1000);
}



function makeQuiz() {

}



startButton.addEventListener("click", makeQuiz)



function showScore() { }

makeQuiz();

//lotrScore.addEventListener("click", showScore);