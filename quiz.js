
//variables
const mytest = document.getElementById("submit-answer");

//event listeners
mytest.addEventListener("click",checkAnswer);

//functions

function checkAnswer() {
    // Function body
    let correctAnswer = "4";
    const myFeedback = document.getElementById("feedback");
    let checkedRadio = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = checkedRadio.value;
    if (userAnswer == correctAnswer) {
        myFeedback.innerHTML = "Correct! Well done.";
    } else {
        myFeedback.textContent = "That's incorrect. Try again!";
    }
}
