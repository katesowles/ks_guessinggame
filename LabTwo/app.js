var pointsResults = document.getElementById('pointsResults');
var score         = 0;

var userName = prompt('Before we get started, what is your first name?');
console.log('User\'s name is ' + userName);

//question one though five - refactored
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
