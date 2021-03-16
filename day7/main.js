console.log(document.getElementsById('item'));
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByClassName('.cool'));

console.log(document.querySelector('#item'));
console.log(document.querySelector('div'));
console.log(document.querySelector('div'));

console.log(document.querySelectorAll('#item'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('.cool'));

// i for 0-9
for (let i = 0; i < 10; i++) {
  console.log('i', 'for', i);
}

// i do while 1-10
let i = 0;
do {
  console.log('i', 'do while', i);
  i++;
} while (i < 10);

// i do while 10
let b = 0;
while (b < 10) {
  console.log('b', 'while', b);
  b++;
}
