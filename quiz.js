function checkAnswer() {
  const correctAnswer = "4" // Function body

    const selectedoption = document.querySelector('input[name="quiz"]:checked');

    const feedback = document.getElementById(feedback)

    if (!selectedoption) {
      feedback.textContent = "please select an answer.";
      feedback.style.color = "orange";
      return;
    }

    const userAnswer = selectedoption.Value;

    if(userAnswer=== correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green"
    }else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);