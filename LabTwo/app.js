/*
DAY ONE TECHNICAL REQUIREMENTS
X - Create a new branch (call it 'day2' or 'about-me' or some other meaningful name) in the repo you created for labwork.
X - Write clean HTML and JavaScript -- use correct indentation and syntax.
X - Make sure your one of your three guessing game questions accept user input that is either y/n or yes/no, with either .toUpperCase() or .toLowerCase() used to validate user input.
X - Useful and descriptive console.log messages are well written and correctly displaying to the browser console for each question of the guessing game.
X - Add, Commit, Push process is being followed; evident in GitHub that commits are made regularly, and with good commit messages.

DAY ONE USER STORIES
X - As a student, I want to create an About Me page as a demonstration of my skills with HTML.
X - As an eventual jobseeker, I want to get practice in creating a portfolio page so that I can make myself appealing to potential employers.
X - As a fun-loving human being, I want to give the visitors to my profile page a guessing game that shows how fun-loving and interesting I am, and maybe include things about myself that would not ordinarily appear in a portfolio page.
X - As a developer, I want to use markup to structure my index.html page, so the layout is in the order of assembly I prefer, with effective use of the markup possibilities offered by HTML.
X - As a developer, I want to carefully design my scripts, so I can understand how to organize and write my code to achieve my goals in interactivity.
X - As a developer, I want to create a simple script for my index.html page using JavaScript, so that I can use the browser to send a response to the user
X - As a developer, I want to provide three (3) questions to the user, so that they can guess the answers and get to know me.
X - As a developer, I want to be able to debug my code by using well structured console messages.
X - As a developer, I want to manage my code through an online version control system, so I have the ability to work with others, manage my revisions, and keep a thorough record of my progress.
X - As a developer, I want to receive and use the user's name, so that the program is personalized to their experience.
X - As a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers.
  - As an eventual jobseeker, I would like for potential employers to quickly learn a few things about me, such as a short bio, my education, an overview of my job experience, and my goals.

DAY ONE STRETCH GOALS
X - As a developer, I want to add a 4th question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user multiple opportunities to get the correct answer.
X - As a developer, I want to keep a tally of correct answers given by the user, and at the end of the game, tell them how well they did, e.g. "You got 4 out of 5 questions correct! Good job!"
   - As a developer, I want to add a 5th question that accepts multiple possible correct answers that are stored in an array.
   - As a developer, I want to refactor my JS code to make it more D.R.Y.

DAY TWO REQUIREMENTS
X - As a prospective jobseeker, I want to use a tasteful color scheme that demonstrates my sensibility toward design plus provides readable contrast between the text and the background.
   - As a developer, to keep my work organized, I want to make a new Git branch for today's work (say, 'day-4'), make some changes and git a-c-p. Then I want to create a new branch and add one question, then merge that branches into my 'day-4' branch.
   - As a developer, I want to convert some of my appropriate biographical elements into unordered lists, such as my education summary and/or my work experience.
   - As a prospective job seeker, I want to make myself more personable by adding a Top Ten list to the bottom of my About Me page with an ordered list in HTML, for instance, my Top Ten Favorite Movies or my Top Ten Places I Want to Visit, or something along those lines.
   - As a developer, I want to add a 4th question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer. I will use the isNan() function to ensure that the user is providing valid numeric input.
   - As a developer, I want to add a 5th question to my guessing game that accepts multiple possible correct answers that are stored in an array, for instance, "Can you guess a state that I have lived in besides Washington?"
   - As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell them how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 5 questions correct, Bobbi! You can do even better next time."
   - As a developer, I want to use CSS to add some color to my About Me page, by changing the background color of the page to something besides white, then making all the header elements one color, the paragraph elements a different color, and lists yet a different color.

DAY TWO STRETCH GOALS
   - As a developer, I want to make my code more DRY by putting all of the questions, answers, and responses to my guessing game into arrays (or even one huge multidimensional array), and modifying the game logic such that a 'for' loop will control the flow from question to question. (This will take some planning... here's a hint on how to approach it!)
*/

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
