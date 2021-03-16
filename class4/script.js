// Single line comment

/* Multi-line
    comment
*/
// Day 1 Homework
var user = { firstname: 'Alex', lastname: 'Leon' };

console.log(user);
function myfunction() {
  document.getElementsByName(0).innerHTML = 'Can you give me your name';
}
// Day 2 Homework

// Day 3 Daily and Homework

function getAge() {
  var today = new Date();
  var nowYear = today.getFullYear();
  var nowMonth = today.getMonth();
  var nowDay = today.getDate();

  var birth = prompt('When were you born?', 'YYYY-MM-DD');
  var birth = new Date(
    parseInt(birth.substring(0, 4)),
    parseInt(birth.substring(5, 7)) - 1,
    parseInt(birth.substring(8, 10))
  );

  var birthYear = birth.getFullYear();
  var birthMonth = birth.getMonth();
  var birthDay = birth.getDate();

  var compBirth = birthMonth.toString() + birthDay.toString();
  var compToday = nowMonth.toString() + nowDay.toString();

  if (compBirth == compToday) {
    alert('Today is your birthday!');
  } else if (compBirth > compToday) {
    alert('Your birthday is coming!');
  } else {
    alert('Happy b-lated day!');
  }
}
