// выполнение первого условия
for (a=1; a<100; a++) {
    if (a%3 === 0){
      console.log ('Fizz');
    } else if (a%5 === 0){
      console.log ('Buzz');
    }
   else { console.log (a);}}

   //выполнение второго условия 
   for (a=1; a<100; a++) {
    if (a%5 === 0 && a%3 === 0){
       console.log ('FizzBuzz');
     }
    else { console.log (a);}}