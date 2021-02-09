var lotrQuiz = document.getElementById("quiz");
var lotrSumbit = document.getElementById("submit");
var lotrScore = document.getElementById("score");

function makeQuiz(){}
var lotrQuestions = [
    {
        question: "Who is the director of The Lord of the Rings trilogy?",
        answers: {
            a: "Steven Spielberg",
            b: "Michael Bay",
            c: "Peter Jackson",
            d: "Robert Zemeckis"
        },
        rightAnswer: "c"
    },
    {
        question: "Where do The Hobbits live?",
        answers: {
            a: "The Shire",
            b: "The Mire",
            c: "The Fire",
            d: "The Dire"
        },
        rightAnswer: "a"
    },
    {
        question: "Gimli, son of _____",
        answers: {
            a: "Thorin",
            b: "Gloin",
            c: "Dwalin",
            d: "Balin"
        },
        rightAnswer: "b"
    },
    {
        question: "Who is Frod Baggins related to?",
        answers: {
            a: "Bilbo",
            b: "Merry",
            c: "Pippin",
            d: "Samwise"
        },
        rightAnswer: "a"
    },
    {
        question: "Aragon is the heir of _______",
        answers: {
            a: "Rohan",
            b: "Elrond",
            c: "Elendil"
            d: "Isildur"
        },
        rightAnswer: "d"
    }
]


function showScore(){}

makeQuiz();

lotrScore.addEventListener("click", showScore);