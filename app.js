
var userName = prompt('Hello friend, what is your name?');
console.log('The users name is ' + userName);

alert('What\'s up ' + userName + '? Let\'s play a guessing game about me! please answer yes or no to the following questions.');

var numberTally = 0;

var userQuestions = ['Do I have a brother?', userName + ' , Do I have a belly button?', userName + ' , Do I love ice cream?', userName + ' , is Los Angeles my favorite city?', userName + ' , Is purple my favorite color?'];

for (var i = 0; i < userQuestions.length; i++) {
  var userResponse = prompt(userQuestions[i]);
  console.log('The users response is: ' + userResponse);
  if (userResponse.toLowerCase() === 'y' || userResponse.toUpperCase() === 'YES') {
    alert('Right on ' + userName + '! :)');
    numberTally += 1;
  } else if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {
    alert('Try Again ' + userName + '! :/');
  } else {
    alert('That is not an acceptable answer ' + userName + '! :/');
  }
};

alert('Okay, see now that wasn\'t to hard. But you\'re not finished yet.' );

var funFactor = prompt('Are you having fun yet? yes or no?');
console.log('The users answer is ' + funFactor);

if (funFactor.toLowerCase() === 'y' || funFactor.toUpperCase() === 'YES') {
  alert('Great! ' + userName + ' I\'m so glad you\'re enjoying yourself.');
} else if (funFactor.toLowerCase() === 'n' || funFactor.toUpperCase() === 'NO') {
  alert('Aww ' + userName + ' I\'m sorry to hear that.');
} else {
  alert('Please follow directions ' + userName + ', and put an acceptable answer.');
}

var i = 0;
while (i <= 3) {
  var userQuestion2 = parseInt(prompt('What is my favorite number? Hint: it\'s a number between 1-10.'));
  console.log('The users favorite answer is ' + userQuestion2);
  if (userQuestion2 === 3){
    alert(userName + ' , you got it right!');
    numberTally += 1;
    break;
  } else if (userQuestion2 > 3) {
    alert(userName + ' , your guess is to high.');
  } else if (userQuestion2 < 3) {
    alert(userName + ' , your guess is to low.');
  } else {
    alert('Please enter a real number.');
  }
  i++;
}

alert('Now, for your final question.');

var finalQuestion = prompt('Are you ready?');
console.log('The users response is: ' + finalQuestion);
if (funFactor.toLowerCase() === 'y' || funFactor.toUpperCase() === 'YES') {
  alert('Drum roll please!!!!');
} else if (funFactor.toLowerCase() === 'n' || funFactor.toUpperCase() === 'NO') {
  alert('Don\'t be afraid you got this.');
} else {
  alert('Please enter a yes or no.');
}

var myEthnicity = ['AFRICAN-AMERICAN', 'PUERTO RICAN', 'GERMAN'];
var i = 0;
while (i <= 5) {
  var userQuestion3 = prompt('Can you guess what ethnicity I am?');
  console.log('The users response is: ' + userQuestion3);
  if (userQuestion3.toUpperCase() === myEthnicity[0]){
    alert('you got it right.');
    numberTally += 1;
    break;
  } else if (userQuestion3.toUpperCase() === myEthnicity[1]){
    alert('you got it right.');
    numberTally += 1;
    break;
  } else if (userQuestion3.toUpperCase() === myEthnicity[2]){
    alert('you got it right.');
    numberTally += 1;
    break;
  } else {
    alert('please try again.');
  }
  i++;
}

alert('I am racially mixed with ' + myEthnicity[0] + ', ' + myEthnicity[1] + ', ' + myEthnicity[2]);

if (numberTally >= 5){
  alert('Good job, ' + userName + ' your results are ' + numberTally + ' out of 7 questions correct. You know me pretty well.');
} else {
  alert('Your results are ' + numberTally + ' out of 7 questions, you don\'t know me at all!!');
}
