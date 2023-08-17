var startScreen = document.querySelector(".startScreen")
var questionScreen = document.querySelector(".questionScreen")
var initialSumbit = document.querySelector(".initialSubmit")
var startBtn = document.querySelector(".startBtn")
var questionText = document.querySelector("#questionBox")
var answerText = document.querySelector(".answerText")
var initialValue = document.querySelector(".initialValue")
var initialScreen = document.querySelector(".initialScreen")
var submitBtn = document.querySelector(".submitBtn")
var timer = document.querySelector(".timer")
var timeInterval
var timeLeft = 15
var score = 0
var qIndex = 0
var questionArray = [
    {
        question: "What is 1+1?",
        choices: [2, 5, 7, "Spaghetti"],
        correct: 2
    },
    {
        question: "What is 1+5?",
        choices: [6, 5, 7, "Spaghetti"],
        correct: 6
    },
    {
        question: "What is the meaning of life?",
        choices: [6, 5, 7, "Spaghetti"],
        correct: "Spaghetti"
    }
]



//function questionScreen()
//function startTimer() {

//}

function displayQuestions() {
    console.log('func-called-display')
    startScreen.classList.add('hide');
    questionScreen.classList.remove('hide');
    questionText.textContent = questionArray[qIndex].question;
    // questionArray[qIndex].choices; 
    answerText.textContent=""
    for (let i = 0; i < questionArray[qIndex].choices.length; i++) {
        var choiceBtn = document.createElement("button")
        choiceBtn.textContent = questionArray[qIndex].choices[i]
        answerText.appendChild(choiceBtn)

        choiceBtn.onclick = checkQuestion
    }
}

function checkQuestion() {
    if(qIndex < questionArray.length - 1) {
        qIndex++
        displayQuestions()
    }
    console.log(this.textContent)
    var choiceValue=this.textContent
    if(choiceValue==questionArray[qIndex].correct) {
    score++
    console.log(score)
    } else {
        timeLeft -= 5
        console.log(timeLeft)
    }
}

function startTimer() {
    timeInterval=setInterval(function(){
        timeLeft--
        timer.textContent=timeLeft
        if(timeLeft <= 0 || qIndex == questionArray - 1) {
            gameOver()
        }
    }, 1000) 
    
}

function gameOver() {
    clearInterval(timeInterval)
    initialScreen.classList.remove('hide');
    questionScreen.classList.add('hide');
}

startBtn.addEventListener("click", function () {
    startTimer()
    displayQuestions()

})
submitBtn.addEventListener("click", function () {


})