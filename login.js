const captchaQuestion = document.getElementById("captchaQuestion");
const captchaInput = document.getElementById("captchaInput");
let correctAnswer;

// Function to generate a new captcha
function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ["+", "-", "*"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  switch (operation) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
  }
  captchaQuestion.innerText = `${num1} ${operation} ${num2}`;
}

// Function to play audio captcha
function playAudioCaptcha() {
  const captchaText = `${captchaQuestion.innerText.replace("*", "times")}`;
  const msg = new SpeechSynthesisUtterance(
    `Please solve the following: ${captchaText}`
  );
  window.speechSynthesis.speak(msg);
}

// Event listeners
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userAnswer = parseInt(captchaInput.value);
    if (userAnswer !== correctAnswer) {
      alert("Incorrect captcha answer. Please try again.");
      generateCaptcha();
      captchaInput.value = "";
    } else {
      alert("Captcha correct. Proceeding with login...");
    }
  });

document
  .getElementById("refreshCaptcha")
  .addEventListener("click", function () {
    generateCaptcha();
    captchaInput.value = "";
  });

// Listen for Hear Captcha button click
document
  .getElementById("hearCaptcha")
  .addEventListener("click", playAudioCaptcha);

// Generate an initial captcha on page load
generateCaptcha();
