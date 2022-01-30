// const clients = ["Mango", "Poly", "Ajax"];

// // Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients.length); // 3

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const numbers = [];

// numbers.push(13);
// console.log(numbers); // [1]

// numbers.push(7);
// console.log(numbers); // [1, 2]

// numbers.push(1);
// console.log(numbers); // [1, 2]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]



// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]
// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]
// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]
// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]
// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-3)); // ["Poly", "Kiwi"]

// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]


// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// function slugify(title) {
//   // Change code below this line
//     let string;
    
//     string = title.toLowerCase().split(" ");
    
// return string.join("-");
//   // Change code above this line
    
// // }

// // function calculateTotal(number) {
// //  // Change code below this line
// // let sum = 0;
// // for (let i = 1; i <= number; i += 1){
// // sum += i;
// // }
// // return sum;
// //   // Change code above this line
// // }


// // // 21
// // function findLongestWord(string) {
// //   // Change code below this line
// // const stringSplit = string.split(' ');
// // let longestWord = "";
// // for (const word of stringSplit) {
// //   if (word.length > longestWord.length) {
// //     longestWord = word;
// //   }
// // }
// // return longestWord;

// //   // Change code above this line
// // }

// // 25
// // function getCommonElements(array1, array2) {
// //   // Change code below this line
// //   let arr = [];
// //   for (let i of array1) {
// //     if (array2.includes(i)) {
// //       arr.push(i);
// //     }
// //   }
// //   return arr;
// //  // Change code above this line
// // }

// // function calculateTotalPrice(order) {
// //   let total = 0;
// //   // Change code below this line
// //   for (let i of order){
// //   total += i;
// // }
// // console.log(i);
// //   // Change code above this line
// //   return total;
// // }


// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   for (let number of numbers) {
//   if (number > value){ 
//   filteredNumbers.push(number);
//   }
// }
//   return filteredNumbers;
//   // Change code above this line

// }



//  modul 3
// tast 12
function countProps(object) {
    // Change code below this line
let propCount = 0;
let keys = Object.keys(object)

for (const key of keys) {
  if (object.hasOwnProperty(key)) {
    propCount += 1;
  }
}
  // Change code above this line
  return propCount;
}

// 14
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];

// Change code below this line

const keys = Object.keys(apartment);

for (const key of keys){
  values.push(apartment[key])
  console.log(key);
  console.log(apartment[key]);
 
}
for (const value of values){
  console.log(values)
}

// 18
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (let i of products) {
    if (i.name === productName) {
      return i.price;
    }
  }
  return null;
}

  // Change code above this line



  // 19 
  const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
 let allValues = [];
for (const product of products) {
  for (const key in product) {
if (propName === key) {
    allValues.push(product[propName])
  }
 }
}
return allValues;


  // Change code above this line

 }
