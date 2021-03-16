// Daily Challenge

let price = 3;
let quantity = 14;
 function getTotal(price, quantity); {
   alert(getTotal(price * quantity));
   if (getTotal % 2 == 0){
     alert("the number is even.");
   }
   else {
     alert("The number is odd.");
   }
 }
 document.getElementById('test').innerHTML = getTotal(price, quantity);
// Take Home Challenge
