var startScreen = document.querySelector(".startScreen")
var questionScreen = document.querySelector(".questionScreen")
var initialSumbit = document.querySelector(".initialSubmit")
var startBtn = document.querySelector(".startBtn")
var questionText = document.querySelector(".questionText")
var answerText = document.querySelector(".answerText")
var initialValue = document.querySelector(".initialValue")
var submitBtn = document.querySelector(".submitBtn")
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
    }
]
function startTimer() {

}
function displayQuestions() {
questionText.textContent= questionArray [qIndex].question
questionArray [qIndex].choices; 
for(let qIndex = 0; qIndex < 5; qIndex++) {
console.log("nextQuestion")
}}

startBtn.addEventListener("click", function() {
    startTimer()
    displayQuestions()
    
})