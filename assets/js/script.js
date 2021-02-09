var lotrQuiz = document.getElementById("quiz");
var lotrSumbit = document.getElementById("submit");
var lotrScore = document.getElementById("score");

function makeQuiz() {
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
            question: "Who is the composer of The Lord of the Rings trilogy?",
            answers: {
                a: "John Williams",
                b: "Hanz Zimmer",
                c: "Howard Shore",
                d: "Danny Elfman"
            },
            rightAnswer: "c"
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
            question: "Fool of a ____!",
            answers: {
                a: "Nook",
                b: "Fook",
                c: "Took",
                d: "Book"
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
    ]
},



function showScore() { }

makeQuiz();

lotrScore.addEventListener("click", showScore);