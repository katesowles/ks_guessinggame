// question one
var userName = prompt('What is your first name?');
console.log('User\'s Name is ' + userName);

//question two (call them by nickname if they had one)
var userCity = prompt('Hey, ' + userName + ' what city do you live in currently?');
console.log(userName + ' currently lives in ' + userCity);

//question three
var userOrigin = confirm('Huh, not sure I\'ve ever been there before, is that where you grew up?');
console.log(userName + ' grew up here?: ' + userOrigin);

//question four
var userWander = confirm('That\'s pretty sweet. Were you eager to get out of there when you were a kid?');
console.log(userName + ' was eager to leave?: ' + userWander);

//question five
var userJob = prompt('So what do you do for work?');
console.log(userName + '\'s Job is ' + userJob);

//question six
var userHappy = confirm('Ohh okay, do you like that job?');
console.log(userName + ' likes their job as ' + userJob + ': ' + userHappy);
