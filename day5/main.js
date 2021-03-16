// Home Challenge

function validatePassword(password) {
  const firstLetter = password[0].match(/[a-zA-z]/);
  const shortEnough = password.length < 21;
  const longEnough = password.length > 5;
  if (!longEnough) {
    alert('Password is Not Long Enough');
  }
  if (!shortEnough) {
    alert('Password is too Long');
  }
  if (!firstLetter) {
    alert('Password does NOT start with a letter!');
  }
  if (longEnough && shortEnough && firstLetter) {
    alert('Your Password is Great!');
  }
}
validatePassword('helllo');
