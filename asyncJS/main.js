// console.log(1);
// console.log(2);
// console.log(3);

// console.log(1);
// //callback, cuanto tiempo dura en la pila ms
// setTimeout(() => {
//   console.log(2);
// }, 3000);
// console.log(3);


console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
for (let i = 0; i < 99999999999; i++);
console.log(4);