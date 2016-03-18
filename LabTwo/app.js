var yes           = 'yes';
var no            = 'no';
var yesCorrect    = 'You answered "Yes", that is correct!';
var yesIncorrect  = 'You answered "Yes", that is incorrect.';
var noCorrect     = 'You answered "No", that is correct!';
var noIncorrect   = 'You answered "No", that is incorrect.';
var pointsResults = document.getElementById('pointsResults');
var score         = 0;

var userName = prompt('Before we get started, what is your first name?');
console.log('User\'s name is ' + userName);
//question one
while (questionOne !== yes && questionOne !== no) {
  var questionOne = prompt('Hey ' + userName + ', can you guess whether or not Kate was born in Portland? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q1: Was Kate born in Portland? ' + questionOne);
  //this is the correct answer
  console.log(questionOne === yes)
}
if (questionOne === yes) {
  answerOne.textContent = yesCorrect;
  score++
  alert('Great work! Correct!');
}
else if (questionOne === no) {
  answerOne.textContent = noIncorrect;
  alert('Eh, not quite. You got that one wrong.');
}
console.log('score after Q1: ' + score);

//question two
while (questionTwo !== yes && questionTwo !== no) {
  var questionTwo = prompt('Alright alright, ' + userName + ' can you guess whether or not Kate has a large grey cat? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q2: Does Kate have a large grey cat? ' + questionTwo);
  //this is the correct answer
  console.log(questionTwo === no)
}
if (questionTwo === yes) {
  answerTwo.textContent = yesIncorrect;
  alert('Eh, not quite. You got that one wrong.');
}
else if (questionTwo === no) {
  answerTwo.textContent = noCorrect;
   score++
   alert('Great work! Correct!');
}
console.log('score after Q2: ' + score);

//question three
while (questionThree !== yes && questionThree !== no) {
  var questionThree = prompt('Cruising right along there ' + userName + ', can you guess whether or not Kate studied graphic design in college? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q3: Did Kate study graphic design in college? ' + questionThree);
  //this is the correct answer
  console.log(questionThree === yes);
}
if (questionThree === yes) {
  answerThree.textContent = yesCorrect;
   score++
   alert('Great work! Correct!');
}
else if (questionThree === no) {
  answerThree.textContent = noIncorrect;
  alert('Eh, not quite. You got that one wrong.');
}
console.log('score after Q3: ' + score);

//question four
while (questionFour !== yes && questionFour !== no) {
  var questionFour = prompt('Alright ' + userName + ', here\'s a tricky one: Does Kate live in Portland currently? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q4: Does Kate live in Portland currently? ' + questionFour);
  //this is the correct answer
  console.log(questionFour === no);
}
if (questionFour === yes) {
  answerFour.textContent = yesIncorrect;
  alert('Eh, not quite. You got that one wrong.');
}
else if (questionFour === no) {
  answerFour.textContent = noCorrect;
  score++
  alert('Great work! Correct!');
}
console.log('score after Q4: ' + score);

//question five
while (questionFive !== yes && questionFive !== no) {
  var questionFive = prompt('Not too shabby so far, and we\'re getting close to the end, ' + userName + '. Is Kate the youngest of three girls? Please answer with YES or NO.').toLowerCase();
  //user's answer
  console.log('Q5: Is Kate the youngest of three girls? ' + questionFive);
  //this is the correct answer
  console.log(questionFive === no);
}
if (questionFive === yes) {
  answerFive.textContent = yesIncorrect;
  alert('Eh, not quite. You got that one wrong.');
}
else if (questionFive === no) {
  answerFive.textContent = noCorrect;
  score++
  alert('Great work! Correct!');
}
console.log('score after Q5: ' + score);

//question six
//add a question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user multiple opportunities to get the correct answer.
var sixIsCorrect = false;
for (i = 0; i < 4 && !sixIsCorrect; i++) {
  var questionSix = prompt('Second to last question ' + userName + ', no pressure! Keep in mind that you\'ll get up to four attempts to get it right: How old is Kate? Please answer with a whole number.');
  //user's answer
  console.log('Q6: How old is Kate? ' + questionSix);
  switch(true) {
   case questionSix > 25 && questionSix < 30:
     answerSix.textContent = 'You answered ' + questionSix + '. That\'s close enough, a lady never reveals her age.';
     sixIsCorrect = true;
     console.log(sixIsCorrect === true);
     score++
     alert('Great work! Correct!');
     questionSix = true;
   break;
   case questionSix <= 24 || questionSix >= 30:
     answerSix.textContent = 'Thank you, I guess?';
     alert('Eh, not quite. You got that one wrong.');
   break;
   case questionSix <= 20 || questionSix >= 35:
     answerSix.textContent = 'Yeah...no.';
     alert('Eh, not quite. You got that one wrong.');
   break;
   case questionSix <= 15 || questionSix >= 40:
     answerSix.textContent = 'That\'s just rude.';
     alert('Eh, not quite. You got that one wrong.');
   break;
   case isNaN:
     answerSix.textContent = 'Nooooo...';
     alert('Eh, not quite. You got that one wrong.');
   default:
     answerSix.textContent = 'Really?!';
     alert('Eh, not quite. You got that one wrong.');
     break;
  }
}
console.log('score after Q6: ' + score);

//question seven
var sevenTotal = document.getElementById('sevenTotal');
var seven = 0;
var cities = ['portland', 'vancouver', 'beaverton', 'st. helens', 'saint helens', 'deer island', 'goble'];
for (i = 0; i < 5; i++) {
  var questionSeven = prompt('Alright ' + userName + ', here\'s a tricky one: Name as many of the cities/towns that Kate has lived in as possible. You have five tries to name as many as you can. Please answer city names only, no state names required').toLowerCase();
  //user's answer
  console.log('Q7: Cities/towns that Kate has lived in? ' + questionSeven);
  switch(questionSeven) {
  case cities[0]:
   console.log(cities[0]);
   score++
   seven++
   alert('You answered ' + cities[0] + ', that\'s correct!');
  break;
  case cities[1]:
   console.log(cities[1]);
   score++
   seven++
   alert('You answered ' + cities[1] + ', that\'s correct!');
  break;
  case cities[2]:
   score++
   seven++
   alert('You answered ' + cities[2] + ', that\'s correct!');
  break;
  case cities[3]:
   score++
   seven++
   alert('You answered ' + cities[3] + ', that\'s correct!');
  break;
  case cities[4]:
   score++
   seven++
   alert('You answered ' + cities[4] + ', that\'s correct!');
  break;
  case cities[5]:
   score++
   seven++
   alert('You answered ' + cities[5] + ', that\'s correct!');
  break;
  case cities[6]:
   score++
   seven++
   alert('You answered ' + cities[6] + ', that\'s correct!');
  break;
  default:
   alert('Not in this lifetime.');
   break;
  }
  console.log('score after most recent attempt: ' + score);
}
console.log('score after Q7: ' + score);

sevenTotal.textContent = seven ;

//count up them points!
console.log('total score: ' + score)
pointsResults.textContent = score ;
