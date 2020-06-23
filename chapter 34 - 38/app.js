// Question 1:
// function currentTime (){
// document.write(new Date())
// }
// currentTime()

// Question 2:
// function fullname (){
//     var first = prompt("What's your first name?");
//     var second = prompt("What's your last name?");
//     var full = first.concat( second );
//     document.write("Welcome to my website " + full)
// }
// fullname ()

// Question 3:
// function sum(){
//     var firstNum = +prompt("Enter a first number")
//     var secondNum = +prompt("Enter a second number")
//     var sum = firstNum + secondNum 
//     document.write(firstNum + "+" + secondNum + "=" + sum)
// }
// sum()

// Question 4:
// function calculator(first,second,operator) {
// if(operator === "+"){
//            var result1 = first + second
//            return first + " " + operator + " " + second + " = " + result1
// }

// if(operator === "-"){
//     var result2 = first - second
//     return first + " " + operator + " " + second + " = " + result2
// }

// if(operator === "*"){
//     var result3 = first * second
//     return first + " " + operator + " " + second + " = " + result3;
// }

// if(operator === "/"){
//     var result4 = first / second
//     return first + " " + operator + " " + second + " = " + result4;
// }
// }
// var firstNum = +prompt("Enter a number");
// var secondNum = +prompt("Enter another number");
// var operator = prompt("Enter an operator");
// document.write(calculator(firstNum,secondNum,operator))

// Question 5:
// function squared (num) {
//     var squared = num * num
//     alert(num + " squared is " + squared)
// }
// sqaured(5)

// Question 6:
// var num  = +prompt("Enter a number")
// var num2 = +prompt("Enter a second number")
// function counting (){

//     for (var i = num; i <= num2; i++) {
//       document.write(i + "<br>")
//     }
// }

// counting()


// Question 8: 
// function hypotenuse(base,perpindicular){
//     return base + perpindicular;
// }
// function square(){
//     var squared = hypotenuse(3*3, 4*4)
//     return Math.sqrt(squared)
// }
// document.write(square())

// Question 9:
// function area(w,h){
//     return w * h;
// }
// var width = 34;
// var height = 50;
// console.log(area(20,3))
// console.log(area(width,height))

// Question 10:
// function palindrome(str) {
//   var length = str.length;
//      for ( var i = 0; i < length; i++ ) {
//         if (str[i] === str[length - 1 - i]) {
//             return true;
//         }
//     }
//   return false;
// }
// console.log(palindrome("eye"))

// Question 11:
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];  
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// Question 12:
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// console.log(longestWord('Web Development Tutorial'));

// Question 14:
function calcCircumference(r) {
           var circumference =  2 * 3.14 * r;
           return ("The circumference is " + circumference)
}


function calcArea(r){
            var area = 3.14 * (r *r)
            return ("The area is " + area)
}

console.log(calcCircumference(3))
console.log(calcArea(4))