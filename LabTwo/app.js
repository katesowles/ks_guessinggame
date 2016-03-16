var yes           = 'yes';
var no            = 'no';
var yesCorrect    = 'You answered "Yes", that is correct!';
var yesIncorrect  = 'You answered "Yes", that is incorrect.';
var noCorrect     = 'You answered "No", that is correct!';
var noIncorrect   = 'You answered "No", that is incorrect.';
var pointsResults = document.getElementById('pointsResults');


//question one
var pointsOne = 0;
var earnedOne = 0;
while (questionOne !== yes && questionOne !== no) {
  var questionOne = prompt('Was Kate born in Portland? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q1: Was Kate born in Portland? ' + questionOne);
  //this is the correct answer
  console.log(questionOne === yes)
}
if (questionOne === yes) {
  answerOne.textContent = yesCorrect;
  earnedOne = 1;
}
else if (questionOne === no) {
  answerOne.textContent = noIncorrect;
  earnedOne = 0;
}

//question two
var pointsTwo = 0;
var earnedTwo = 0;
while (questionTwo !== yes && questionTwo !== no) {
  var questionTwo = prompt('Does Kate have a large grey cat? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q2: Does Kate have a large grey cat? ' + questionTwo);
  //this is the correct answer
  console.log(questionTwo === no)
}
if (questionTwo === yes) {
  answerTwo.textContent = yesIncorrect;
  earnedTwo = 0;
}
else if (questionTwo === no) {
  answerTwo.textContent = noCorrect;
   earnedTwo = 1;
}

//question three
var pointsThree = 0;
var earnedThree = 0;
while (questionThree !== yes && questionThree !== no) {
  var questionThree = prompt('Did Kate study Photography in college? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q3: Did Kate study Photography in college? ' + questionThree);
  //this is the correct answer
  console.log(questionThree === yes);
}
if (questionThree === yes) {
  answerThree.textContent = yesCorrect;
   earnedThree = 1;
}
else if (questionThree === no) {
  answerThree.textContent = noIncorrect;
  earnedThree = 0;
}

//question four
var pointsFour = 0;
var earnedFour = 0;
while (questionFour !== yes && questionFour !== no) {
  var questionFour = prompt('Does Kate live in Portland currently? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q4: Does Kate live in Portland currently? ' + questionFour);
  //this is the correct answer
  console.log(questionFour === no);
}
if (questionFour === yes) {
  answerFour.textContent = yesIncorrect;
  earnedFour = 0;

}
else if (questionFour === no) {
  answerFour.textContent = noCorrect;
  earnedFour = 1;
}

//question five
var pointsFive = 0;
var earnedFive = 0;
while (questionFive !== yes && questionFive !== no) {
  var questionFive = prompt('Is Kate the youngest of three girls? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q5: Is Kate the youngest of three girls? ' + questionFive);
  //this is the correct answer
  console.log(questionFive === no);
}
if (questionFive === yes) {
  answerFive.textContent = yesIncorrect;
  earnedFive = 0;
}
else if (questionFive === no) {
  answerFive.textContent = noCorrect;
  earnedFive = 1;
}

//question six
//add a question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user multiple opportunities to get the correct answer.
var pointsSix = 0;
var earnedSix = 0;
var isCorrect = false;
for (i = 0; i < 3 && !isCorrect; i++) {
  var questionSix = prompt('How old is Kate? Please answer with a whole number.');
  //user's answer
  console.log('Q6: How old is Kate? ' + questionSix);
  //this is the correct answer
  console.log(questionSix === 27);
  switch(true) {
   case questionSix > 25 && questionSix < 30:
     answerSix.textContent = 'You answered ' + questionSix + '. That\'s close enough, a lady never reveals her age.';
     isCorrect = true;
     earnedSix = 1;
   break;
   case questionSix <= 24 || questionSix >= 30:
     answerSix.textContent = 'Thank you, I guess?';
     earnedSix = 0;
   break;
   case questionSix <= 20 || questionSix >= 35:
     answerSix.textContent = 'Yeah...no.';
     earnedSix = 0;
   break;
   case questionSix <= 15 || questionSix >= 40:
     answerSix.textContent = 'That\'s just rude.';
     earnedSix = 0;
   break;
   case isNaN:
     answerSix.textContent = 'Nooooo...';
     earnedSix = 0;
   default:
     answerSix.textContent = 'Really?!';
     earnedSix = 0;
     break;
  }
}

//question seven
// As a developer, I want to add a 5th question that accepts multiple possible correct answers that are stored in an array.
// var pointsSeven = 0;
// var earnedSeven = 0;

// As a developer, I want to refactor my JS code to make it more D.R.Y. (don't repeat yourself)

//count up them points!
console.log(earnedOne + earnedTwo + earnedThree + earnedFour + earnedFive + earnedSix)
var resultsTotal = earnedOne + earnedTwo + earnedThree + earnedFour + earnedFive + earnedSix /*+ earnedSeven*/;
pointsResults.textContent = resultsTotal;
