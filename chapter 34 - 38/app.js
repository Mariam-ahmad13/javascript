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
// function calculator() {
//     var firstNum = +prompt("Enter a number");
// var secondNum = +prompt("Enter another number");
// var operator = prompt("Enter an operator");
// if(operator === "+"){
//            var result1 = firstNum + secondNum
//            document.write(firstNum + " " + operator + " " + secondNum + " = " + result1);
// }

// if(operator === "-"){
//     var result2 = firstNum - secondNum
//     document.write(firstNum + " " + operator + " " + secondNum + " = " + result2);
// }

// if(operator === "*"){
//     var result3 = firstNum * secondNum
//     document.write(firstNum + " " + operator + " " + secondNum + " = " + result3);
// }

// if(operator === "/"){
//     var result4 = firstNum / secondNum
//     document.write(firstNum + " " + operator + " " + secondNum + " = " + result4);
// }
// }
// calculator()

// Question 5:
// function squared () {
//     var num = +prompt("Enter a number")
//     var squared = num * num
//     alert(num + " squared is " + squared)
// }
// sqaured()

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

// Question 10:
function palindrome () {
     var reverse = "eye".reverse
     if("eye"  === reverse){
         document.write("It is a palindrome")
     }
}

palindrome()