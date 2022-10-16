/* Practice Assignment 6:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create an array named myPizzaOrder that cannot be reassigned and
// contains the 3 elements: "Pepperoni", 12.99, false

const myPizzaOrder = ["Pepperoni", 12.99, false];

// 2) Create a function named getPizzaType that will accept an array
// as a parameter and returns the 1st element from the array.
function getPizzaType(arr){
    return arr[0];
}

// 3) Create a function named addTax that will accept an array
// like your myPizzaOrder array as a parameter. The function will
// insert an element into the array between the 2nd and 3rd
// element in the array that is equal to the 2nd element multiplied
// by 0.0925 and rounded to the nearest penny (ie 0.95, 0.79, 0.42, etc).
// The function should return the array.
// ===========
// Hint: find the method that will allow you to set the decimals.

//to fixed

function addTax(arr1){
    let newval = arr1[1] * 0.0925;
    arr1.splice(2, 0, parseFloat(newval.toFixed(2)));
    return arr1;
}

// 4) Create a function named completeOrder that will accept an array
// as a parameter. The function will change the value of the 4th
// element in the array to true and return the array.

function completeOrder(arr1){
    arr1[3] = true;
    return arr1;
}

// 5) Create a function named allTheNumbers that accepts a number as
// a parameter. The function will create an array that contains all of
// the numbers from 1 to whatever number the parameter is. The array
// should not include the parameter number. The function returns
// the array.

function allTheNumbers(num){
    let arr1 = [];
    for(i = 1; i < num; i++){
        arr1.push(i);
    }
    return arr1;
}

// console.log(allTheNumbers(9));

// 6) Create a function named getEvens that accepts 2 parameters:
// startNum and endNum. The function should return an array that
// includes the even numbers from startNum to endNum. If the startNum
// or endNum are even, they should be included in the returned array.
function getEvens(startNum, endNum){
    let arr1 = [];
    for(i = startNum; i <= endNum; i++){
        if((i % 2) === 0){
            arr1.push(i);
        }
    }
    return arr1;
}
// console.log(getEvens(1,17));

// 7) Create a function named getLastElement that accepts an array
// as a parameter and returns the last element of the array. The
// array can have any number of elements. The function should always
// return the last element.

function getLastElement(arr1){
    return arr1[arr1.length - 1];
}
let testarray = ["john", "jerry", "bob"];
// console.log(getLastElement(testarray));

// 8) Create a function named combineArrays that accepts two arrays
// as parameters and combines them into one array. The function
// should return the new combined array.

function combineArrays(arr1, arr2){
    let newarray = [].concat(arr1, arr2);
    return newarray;
}
let testarray2 = ["juno", "jeff", "jack"];

// console.log(combineArrays(testarray, testarray2));

// 9) Create a function named isPalindrome that accepts a string as
// a parameter. The function will return true if the string is a
// palindrome and false if the string is not. To check for a
// palindrome, remove all spaces and set to lowercase. The string
// will be identical both forward and reverse if it is a palindrome.
// For example: Taco Cat is a palindrome. tacocat is the same both
// forward and reverse.
// ==========
// Hints: There are several possible solutions for this. I use a
// combination of string and array methods. You can turn the string
// into an array, use arrays methods, and turn the array back into
// a string. This is also a challenge on freeCodeCamp. Check the
// help forums there if you get stuck!

function isPalindrome(str){
    let bool = true;
    let word = [];
    let strhold = str;

    for(i = 0; i < strhold.length; i++){
        let strC = strhold.slice(i, i + 1);
        if(strC != " ") word.push(strC.toLowerCase());

    }
    let wordLen = Math.round(word.length / 2); 
    for(i = 0; i < wordLen; i++){
        let j = word.length - i - 1;
        if(word[i] != word[j]){
            bool = false;
            console.log(wordLen);
            console.log(word[i] + "===" + word[j]);
        }
    }
    return bool;
}