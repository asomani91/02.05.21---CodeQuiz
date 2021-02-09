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
        questions: "Where do The Hobbits live?",
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
    }
]


function showScore(){}

makeQuiz();

lotrScore.addEventListener("click", showScore);