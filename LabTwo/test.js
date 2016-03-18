var score = 0;

var pointsResults = document.getElementById('pointsResults');

var userName = prompt('Before we get started, what is your first name?');
console.log('User\'s name is ' + userName);

//testing fucntion refactor

var htmlResponseId = ['answerOne', 'answerTwo', 'answerThree', 'answerFour', 'answerFive'];
var questionText   = ['Was Kate born in Portland?', 'Does Kate have a large grey cat?', 'Did Kate study graphic design in college?', 'Does Kate live within Portland city limits currently?', 'Is Kate the youngest of three girls?'];
var answerKey = ["yes", "no", "yes", "no", "no"];

function ask(htmlResponseId, questionText, answerKey) {
  var askQ = prompt(questionText).toLowerCase();
  var correct       = 'You anwered ' + askQ + ' that is correct';
  var incorrect     = 'You ansered ' + askQ + ' that is incorrect';
  console.log("user ansered: " + askQ);
  var responseTag = document.getElementById(htmlResponseId);
  if (answerKey == askQ) {
    score++;
    alert(correct);
    console.log("correct!");
    responseTag.textContent =  correct;
  } else if (askQ !== answerKey) {
    score += 0;
    alert(incorrect);
    console.log("incorrect!");
    responseTag.textContent = incorrect;
  } else if (askQ !== "yes" && askQ !== "no") {
    score +=0;
    alert("you didn't answer yes or no");
  }
  console.log(score);
}
for (var i = 0; i < 5; i++) {
  ask(htmlResponseId[i], questionText[i], answerKey[i]);
}

console.log('total score: ' + score)
pointsResults.textContent = score ;


// //question one
// while (questionOne !== yes && questionOne !== no) {
//   var questionOne = prompt('Hey ' + userName + ', can you guess whether or not Kate was born in Portland? Please answer with YES or NO.').toLowerCase();
//   //user's answer
//   console.log('Q1: Was Kate born in Portland? ' + questionOne);
//   //this is the correct answer
//   console.log(questionOne === yes)
// }
// if (questionOne === yes) {
//   answerOne.textContent = yesCorrect;
//   score++
//   alert('Great work! Correct!');
// }
// else if (questionOne === no) {
//   answerOne.textContent = noIncorrect;
//   alert('Eh, not quite. You got that one wrong.');
// }
// console.log('score after Q1: ' + score);
