"use strict";
// 1
// const productName = 'Droid'
// console.log(productName);
// const pricePerItem = 2000;
// console.log(pricePerItem);

// 2

// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem = 3500;

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(productName);
// console.log(pricePerItem);

// 3

// const message = "JavaScript is awesome!";
// alert(message);



// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"


// const x = 10;
// const y = 5;

// // Сложение
// console.log(x + y); // 15

// // Вычитание
// console.log(x - y); // 5

// // Умножение
// console.log(x * y); // 50

// // Деление
// console.log(x / y); // 2

// // Остаток от деления
// console.log(x % y); // 0

// // Сложение с заменой (также есть для всех других операторов)
// let value = 5;

// // Аналогично записи value = value + 10;
// value += 10;
// console.log(value); // 15


// Метод Number.parseInt() парсит из строки целое число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// Метод Number.parseFloat() парсит из строки дробное число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// const validNumber = Number("44"); // 44
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("sonic"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(4)); // 0.4100
// console.log((0.24 + 0.17).toFixed(2)); // 0.41

// // Math.floor(num) - возвращает наибольшее целое число,
// // меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа,
// // округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy




// const hours = 14;
// const minutes = 26;
// let timeString;

// if (minutes === 0) {
//     console.log("${hours} ч.");
// }
// else {
//     console.log("${hours}ч. ${minutes} мин.")
// }

// const max = 100;
// const min = 20;
// for (; ;) {
//     console.log(`Booom`);
// }

// Change code below this line
// const pricePerDroid = 800;
// let orderedQuantity = 6;
// const deliveryFee = 50;
// let totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);

// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
  
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
 

// function add(a, b, c) {
//   // Change code below this line
// return a + b + c;




//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// let totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   // Change code above this line
//   return message;
// }



// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
  
// if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
    
//   }
  
// else {
//     // мы должны отнять от наших кредитов общую стоимость и тогда будет работать
// customerCredits -= totalPrice
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
    
//   }
//   // Change code above this line
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password = null) { // Change this line
//     console.log('Canceled by user!');
//   }
//   else {
//     console.log('Access denied, wrong password!');
//   }
// //   } else if (password === ADMIN_PASSWORD) { // Change this line
// //     message = 'Welcome!';
// //   } else {
// //     message = 'Access denied, wrong password!';
//   }

//   console.log(message);
// }

// function isNumberInRange(start, end, number) {
//   const isInRange = (number >= start && number <=end); // Change this line

//   return isInRange;
// }



// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !(number >= start && number <= end); // Change this line

//   return isNotInRange;
// }


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent < 5000)
// discount = BASE_DISCOUNT

// else if (totalSpent >= 5000 && totalSpent < 20000){
//   discount = BRONZE_DISCOUNT
// }
// else if (totalSpent >= 20000 && totalSpent < 50000)
// {
//   discount = SILVER_DISCOUNT
// }
// else if (totalSpent >= 50000)
// discount = GOLD_DISCOUNT

//   // Change code above this line
//   return discount;
// }



// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// function formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) {
//   let result;
//   // Change code below this line
// // if (message.length <= maxLength){
// //   result = message;
// // }
// // else
// //   result = message.slice(0, message.length) + "..."

// //   /// Change code above this line
// //   return result;
//   console.log(result)

//  }

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// //
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// const productName = "Repair droid";

// console.log(productName.includes("a")); // true
// console.log(productName.includes("A")); // false
// console.log(productName.includes("droid")); // true
// console.log(productName.includes("Droid")); // false
// console.log(productName.includes("Repair")); // true
// console.log(productName.includes("repair")); // false
// //

// function checkForSpam(message) {
//     let result;
//     // Change code below this line

//     if (
//         message.toLowerCase().includes('spam') ||
//         message.toLowerCase().includes('sale')
//     ) {
//         result = true;
//     } else {
//         result = false;
//     }
//     // Change code above this line
//     return result;
// }

