// console.log(1);
// console.log(2);
// console.log(3);

// for (i = 100; i >= 1; i -= 1) {
//     console.log(i);
// }
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// console.log(arr1);
// console.log(arr2);
// console.log(arr1 === arr2);

// // Change code below this line
// function add(...args) {
//   let total = 0;
//   total += args;
//   console.log(args);
//   // Change code above this line
// }



// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);

// };

// const add = function (x, y) {
//   return x + y;

// };

// doMath(3, 5, add);

// const numbers = [5, 10, 15, 20, 25];
// //  for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, znachenie ${numbers[i]}`)
// }

// console.log(`hello world`)

// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, znachenie ${number}`)
// });


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
    
//   }

//   // Change code above this line
  
//   return totalPrice;
  
// }


// function changeEven(numbers, value) {
//   //   // Change code below this line
//   const newArray = [];
//   numbers.forEach((numbers % 2 === 0) => newArray.push(numbers + value));
// }
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }
//   // Change code above this line
// }

// changeEven(5, 4, 3, 2, 1);

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]


// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(`numbers`, numbers);

// const letters = [`b`, `B`, `a`, `A`];
// letters.sort();
// console.log(`letters`, letters);
// numbers.sort((curEl, nextEl) => { return nextEl - curEl })
// console.log(numbers)

// const copy = [...numbers];
// console.log(copy === numbers)
// copy.sort();
// console.log(copy)

// const newCopy = [...numbers].sort((a, b) => b -a );
// console.log(newCopy)

// const players = [
//   { id: `player-1`, name: `Mango`, timePlayed: 310, online: false },
//   { id: `player-2`, name: `Poly`, timePlayed: 470, online: true },
//   { id: `player-3`, name: `Kiwi`, timePlayed: 230, online: true },
//   { id: `player-4`, name: `Ajax`, timePlayed: 150, online: false },
//   { id: `player-5`, name: `Chelsey`, timePlayed: 800, online: true },
// ];

// console.table(players)

// const newPlayers = [...players];

// newPlayers.sort((prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed );
// console.table(newPlayers);



// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
    
//   },
//   };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer)); // Будет ошибка при вызове функции


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity;
// if (customerCredits < totalPrice) {
  
//   message = `Insufficient funds!`;
// }
// else {
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
// }
//   // Change code above this line
//   return message;
// }


// console.log(makeTransaction(3000, 5, 23000));


// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);



const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem);
