'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  let abSum = a + b;
  let str = (`The sum of ${a} and ${b} is ${abSum}.`);
  return [abSum, str];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  let product = a * b;
  let str = (`The product of ${a} and ${b} is ${product}.`);
  return [product, str];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  let sumOfAB = sum(a, b); 
  sumOfAB = sumOfAB[0];
  let sumOfABC = sum(sumOfAB, c);
  sumOfABC = sumOfABC[0];
  let productOfAB = multiply(a, b);
  productOfAB = productOfAB[0];
  let productOfABC = multiply(productOfAB, c);
  productOfABC = productOfABC[0];
  let sumStr = (`${a} and ${b} and ${c} sum to ${sumOfABC}.`);
  let productStr = (`The product of ${a} and ${b} and ${c} is ${productOfABC}.`)
  console.log(`sum: ${sumOfABC}, product: ${productOfABC}`)
  return [sumOfABC, productOfABC, sumStr, productStr];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  let a = sumArr[0];
  let b = sumArr[1];
  let c = sumArr[2];
  let sumOfAB = sum(a, b);
  sumOfAB = sumOfAB[0];
  let sumOfABC = sum(sumOfAB, c);
  sumOfABC = sumOfABC[0];
  let str = `${sumArr} was passed in as an array of numbers, and ${sumOfABC} is their sum.`
  return [sumOfABC, str];
}
// input: array of nums 
// output: array, 1st el: sum of nums, 2nd el: concat str
  // let a = array[0];
  // let b = array[1];
  // let c = array[2];
  // let sumOfAB = sum(a, b)
  // 

  

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
  let a = multArr[0];
  let b = multArr[1];
  let c = multArr[2];
  let productAB = multiply(a, b);
  productAB = productAB[0];
  let productABC = multiply(productAB, c);
  productABC = productABC[0];
  let str = `The numbers ${multArr} have a product of ${productABC}.`
  return [productABC, str];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

// function multiplyAnyArray(dynamicArray) { //eslint-disable-line
//   let even = true;
//   if (dynamicArray.length % 2 !== 0) even = false;
//   let lastEl;
//   if (even === false) {
//     lastEl = dynamicArray[dynamicArray.length-1];
//     dynamicArray.pop();
//   }
  
//   const subProducts = dynamicArray.slice();
//   console.log(subProducts);
//   while (subProducts.length > 1) {
//     for (let i = 0; i < subProducts.length; i++) {
//       if (subProducts.length > 1) {
//         let subProduct = multiply(subProducts[i], subProducts[i+1])
//         subProduct = subProduct[0];
//         subProducts.push(subProduct);
//         subProducts.shift();
//         subProducts.shift();
//       }
//       break;
//     }
//   }
//   console.log(subProducts)
//   let finalProduct;
//   if (even === false) {
//     finalProduct = multiply(subProducts[0], lastEl);
//     finalProduct = finalProduct[0];
//   }
//   else finalProduct = subProducts[0]
// }
// input: array of any length
// output: array: el1 prodcut of array els el2: str
  // cb func takes 2 args and returns array, we want only array[0]
  // first find out if even or odd # of els in array
    // let even = true
    // if (array.length % 2 !== 0) even = false;
    // if even === false, lastEl = array[array.length-1], array.pop();
    // numPairs = [];
    // for loop to iterate thru array, make pairs
      // if array[i+1] exists
        // numPairs.push([array[i], array[i+1]])
    // subProducts = numPairs
    // subProducts = [2, 12, 4, 2]
    // while (subProducts.length > 1)
      // for loop to iterate thru subProducts
      // let subProduct = mulitiply(subProducts[i], subProducts[i+1])
      // subProduct = subProduct[0];
      // subProducts.push(subProduct)
      // subProducts.splice(0, 1)
      // subProducts.splice(1, 1)
    // return subProducts


// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
