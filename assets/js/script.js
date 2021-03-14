var lotrQuiz = document.getElementById("quiz");
var lotrSumbit = document.getElementById("submit");
var lotrScore = document.getElementById("score");
var startButton = document.getElementById("start");
var timeDisplay = document.getElementById("time");
var timeLeft = 60;
var questionNumber = 0
var score = 0
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
    console.log("Clicked")
    var time = setInterval(function () {
        timeLeft -= 1
        timeDisplay.innerHTML = timeLeft
        if (questionNumber <= lotrQuestions.length - 1) {
            lotrQuiz.innerHTM = lotrQuestions[questionNumber]["question"] + "<br>" +
                '<button value="a" onclick="clicks(this.value)">' + lotrQuestions[questionNumber]["answers"]["a"] + '</button><br>' +
                '<button value="b" onclick="clicks(this.value)">' + lotrQuestions[questionNumber]["answers"]["b"] + '</button><br>' +
                '<button value="c" onclick="clicks(this.value)">' + lotrQuestions[questionNumber]["answers"]["c"] + '</button><br>' +
                '<button value="d" onclick="clicks(this.value)">' + lotrQuestions[questionNumber]["answers"]["d"] + '</button><br>';
        }
        else {
            lotrQuiz.innerHTML = "Your Total Score Is: " + score;
            clearInterval(time);
        }
        if (timeLeft == 0) {
            clearInterval(time)
            console.log("Time Count");
        }
    }, 1000);
}

function clicks(val) {
    if (lotrQuestions [questionNumber]["rightAnswer"] == val) {
        questionNumber += 1;
        score += 1;
        console.log(questionNumber);
    }
    else {
        questionNumber += 1;
        timeLeft -= 5;
        console.log("This Answer Is Not Correct". questionNumber)
    }
}

function makeQuiz() {
    startButton.style.visibility = "Hideen";
    countDown();
}


startButton.addEventListener("click", makeQuiz)



function showScore() { }

//lotrScore.addEventListener("click", showScore);