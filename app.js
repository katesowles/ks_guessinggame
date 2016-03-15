var userName = document.getElementById('userName');
var userBirthName = document.getElementById('userBirthName');
var userNickname = document.getElementById('userNickname');
var userPreference = document.getElementById('userPreference');
var userCurrentCity = document.getElementById('userCurrentCity');
var userOrigin = document.getElementById('userOrigin');
var userBirthCity = document.getElementById('userBirthCity');
var userWander = document.getElementById('userWander');
var UserGrownUp = document.getElementById('UserGrownUp');
var userAchieved = document.getElementById('userAchieved');
var userJob = document.getElementById('userJob');
var userGoodbye = document.getElementById('userGoodbye');

// question one
var userName = prompt('What is your first name?');
userName.textContent = 'User\'s Name is ' + userName;
console.log('User\'s name is ' + userName);

if (userName.length >= 10) {
  //question one and a quarter
  var userBirthName = confirm('Wowza, that\'s quite the name you\'ve got there! Is that your birth name?');
  userBirthName.textContent = userName + ' is their birth name?: ' + userBirthName;
  console.log(userName + ' is their birth name?:' + userBirthName);

  //question one and a half
  var userNickname = prompt('Well then, how about a nickname or a super secret spy nickname that you like to go by? Give me something here, I\'ll ever be able to remember your full name.');
  userNickname.textContent = userName + 'has a nickname of ' + userNickname;
  console.log(userName + 'has a nickname of ' + userNickname)

  //question one and three quarters
  var userPreference = confirm('Alright then, ' + userName + ', how about we refer to you by that nickname, capische?');
  userPreference.textContent = userName + ' approves of us using this nickname to address them?: ' + userPreference;
  console.log(userName + ' prefers that we refer to them by their nickname?: ' + userPreference)
}

if (userPreference === true) {
  userName = userNickname;
}

//question two
var userCurrentCity = prompt('Okie dokie, ' + userName + ' tell me a bit more about yourself. What city do you live in currently?');
userCurrentCity.textContent = userName + ' currently lives in ' + userCurrentCity;
console.log(userName + ' currently lives in ' + userCurrentCity);

//question three
var userOrigin = confirm('Huh, not sure I\'ve ever been to ' + userCurrentCity + ' before, bad memory and all that, I\'m sure you understand. Did you grow up there?');
userOrigin.textContent = userName + ' grew up in ' + userCurrentCity + '?: ' + userOrigin;
console.log(userName + ' grew up in ' + userCurrentCity + '?: ' + userOrigin);

if (userOrigin === false) {
  //question three and a half
  var userBirthCity = prompt('Oh, okay. If not in ' + userCurrentCity + ' then where did you grow up?');
  userBirthCity.textContent = userName + ' grew up in ' + userBirthCity;
  console.log(userName + ' grew up in ' + userBirthCity);
}
//question four
var userWander = confirm(userBirthCity + ' Huh, that\'s pretty sweet. Were you eager to get out of there when you were a kid?');
userWander.textContent = userName + ' was eager to leave ' + userBirthCity + '?: ' + userWander;
console.log(userName + ' was eager to leave?: ' + userWander);

//question five
var userGrownUp = prompt('Nice, nice. I was THE MOST EAGER to get out of my hometown backin the day. Speaking of back in the day, what did you want to be when you grew up?');
userGrownUp.textContent = userName + ' wanted to be a/an' + userGrownUp + ' when they were a kid';
console.log(userName + ' wanted to be a/an' + userGrownUp + ' when they were a kid');

//question six
var userAchieved = confirm('You wanted to ' + userGrownUp + ', huh? So is that what you became? Did your dreams come true?!');
userAchieved.textContent = userName + ' achieved their dream of being ' + userGrownUp + '?: ' + userAchieved;
console.log(userName + ' achieved their dream of being ' + userGrownUp + '?: ' + userAchieved);
if (userAchieved === false) {

  //question six and a half
  var userJob = prompt('Well then, if not ' + userGrownUp + ', then what did you become?! Come on now, the suspense is killing me!');
  userJob.textContent = userName + ' became ' + userJob + ' instead';
  console.log(userName + ' became ' + userJob);
}

var userGoodbye = confirm('Well Alright then ' + userName + ', it was great getting to know you! I gotta run but we\'ll speak soon!');
userGoodbye.textContent = 'Bye, Felicia!';
console.log('deuces!');


//In the HTML file, place the six questions within a series of <p> tags so that they are listed on the screen.
