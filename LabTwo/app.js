var answerOne   = document.getElementById('answerOne');
var answerTwo   = document.getElementById('answerTwo');
var answerThree = document.getElementById('answerThree');
var answerFour  = document.getElementById('answerFour');
var answerFive  = document.getElementById('answerFive');
var pointsResults = document.getElementById('pointsResults');

var earnedOne;
var earnedTwo;
var earnedThree;
var earnedFour;
var earnedFive;

var yes = 'yes'
var no  = 'no'

var yesCorrect    = 'You answered "Yes", that is correct!';
var yesIncorrect  = 'You answered "Yes", that is incorrect.';
var noCorrect     = 'You answered "No", that is correct!';
var noIncorrect   = 'You answered "No", that is incorrect.';

var pointsCorrect   = 1;
var pointsIncorrect = 0;

//question one
while (questionOne !== yes && questionOne !== no) {
  var questionOne = prompt('Was Kate born in Portland? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q1: Was Kate born in Portland? ' + questionOne);
  //this is the correct answer
  console.log(questionOne === yes)
}
if (questionOne === yes) {
  answerOne.textContent = yesCorrect;
  pointsOne.textContent = pointsCorrect;
  earnedOne = pointsCorrect;
}
else if (questionOne === no) {
  answerOne.textContent = noIncorrect;
  pointsOne.textContent = pointsIncorrect;
  earnedOne = pointsIncorrect;
}

//question two
while (questionTwo !== yes && questionTwo !== no) {
  var questionTwo = prompt('Does Kate have a large grey cat? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q2: Does Kate have a large grey cat? ' + questionTwo);
  //this is the correct answer
  console.log(questionTwo === no)
}
if (questionTwo === yes) {
  answerTwo.textContent = yesIncorrect;
  pointsTwo.textContent = pointsIncorrect;
  earnedTwo = pointsIncorrect;
}
else if (questionTwo === no) {
  answerTwo.textContent = noCorrect;
  pointsTwo.textContent = pointsCorrect;
   earnedTwo = pointsCorrect;
}

//question three
while (questionThree !== yes && questionThree !== no) {
  var questionThree = prompt('Did Kate study Photography in college? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q3: Did Kate study Photography in college? ' + questionThree);
  //this is the correct answer
  console.log(questionThree === yes);
}
if (questionThree === yes) {
  answerThree.textContent = yesCorrect;
  pointsThree.textContent = pointsCorrect;
   earnedThree = pointsCorrect;
}
else if (questionThree === no) {
  answerThree.textContent = noIncorrect;
  pointsThree.textContent = pointsIncorrect;
  earnedThree = pointsIncorrect;
}

//question four
while (questionFour !== yes && questionFour !== no) {
  var questionFour = prompt('Does Kate live in Portland currently? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q4: Does Kate live in Portland currently? ' + questionFour);
  //this is the correct answer
  console.log(questionFour === no);
}
if (questionFour === yes) {
  answerFour.textContent = yesIncorrect;
  pointsFour.textContent = pointsIncorrect;
  earnedFour = pointsIncorrect;

}
else if (questionFour === no) {
  answerFour.textContent = noCorrect;
  pointsFour.textContent = pointsCorrect;
  earnedFour = pointsCorrect;
}

//question five
while (questionFive !== yes && questionFive !== no) {
  var questionFive = prompt('Is Kate the youngest of three girls? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q5: Is Kate the youngest of three girls? ' + questionFive);
  //this is the correct answer
  console.log(questionFive === no);
}
if (questionFive === yes) {
  answerFive.textContent = yesIncorrect;
  pointsFive.textContent = pointsIncorrect;
  earnedFive = pointsIncorrect;
}
else if (questionFive === no) {
  answerFive.textContent = noCorrect;
  pointsFive.textContent = pointsCorrect;
  earnedFive = pointsCorrect;
}

//count up them points!
console.log(earnedOne + earnedTwo + earnedThree + earnedFour + earnedFive)
var resultsTotal = earnedOne + earnedTwo + earnedThree + earnedFour + earnedFive;
pointsResults.textContent = resultsTotal;

//REQUIREMENTS
//DONE - Create a new branch (call it 'day2' or 'about-me' or some other meaningful name) in the repo you created for labwork.
//DONE - Write clean HTML and JavaScript -- use correct indentation and syntax.
//DONE - Make sure your one of your three guessing game questions accept user input that is either y/n or yes/no, with either .toUpperCase() or .toLowerCase() used to validate user input.
//DONE - Useful and descriptive console.log messages are well written and correctly displaying to the browser console for each question of the guessing game.
//DONE - Add, Commit, Push process is being followed; evident in GitHub that commits are made regularly, and with good commit messages.

//STRETCH GOALS, 1pt each
// As a developer, I want to add a 4th question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user multiple opportunities to get the correct answer.
// As a developer, I want to add a 5th question that accepts multiple possible correct answers that are stored in an array.
// As a developer, I want to refactor my JS code to make it more D.R.Y.
// As a developer, I want to keep a tally of correct answers given by the user, and at the end of the game, tell them how well they did, e.g. "You got 4 out of 5 questions correct! Good job!"
