//  var city = prompt("What city are you going to?")
//  if (city === "Karachi") {
//      alert("Welcome to the city of Light")
//  }

// var gender = prompt("What is your gender")
// if (gender === "male") {
//     alert("Good Morning Sir")
// }
// if (gender === "female") {
//     alert("Good Morning Madam")
// }

// var trafficColour = prompt("What is the traffic signal colour?")
// if (trafficColour === "red") {
//     alert("Stop")
// }
// if (trafficColour === "Yellow") {
//     alert("Get ready to move")
// }
// if (trafficColour === "Amber") {
//     alert("Get ready to move")
// }
// if (trafficColour === "Green") {
//     alert("Go Now")
// }

// var fuel = prompt("How much fuel (in litres) )do you have left in your car?")
// if (fuel >= "0.25") {
//     alert("Please refill the fuel in your car")
// }

// var sub1 = prompt("Enter a first subject")
// var sub2 = prompt("Enter a second subject")
// var sub3 = prompt("Enter a third subject")
// var totalMarks = 100;
// var sub1Marks = prompt("How many much did you score in " + sub1)
// var sub2Marks = prompt("How many much did you score in " + sub2)
// var sub3Marks = prompt("How many much did you score in " + sub3)
// if (sub1>="80") {
//     document.write("For " + sub1 + "you got an A-one which is excellent")
// }
// if (sub1>="70"){
//     document.write("For " + sub1 + "you got an A which is good <br>")
// }

// if (sub1>="60"){
//     document.write("For " + sub1 + "you got a B so you need to improve <br>")
// }

// if (sub1<="60"){
//     document.write("For " + sub1 + "you Failed,sorry <br>")
// }

// var secretNum = 3;
// var guess = +prompt("Try and guess my secret number");
// if (guess===secretNum){
//     alert("Bingo! Correct answer")
// }
// if (guess===++secretNum){
//     alert("Close enough to the correct answer")
// }

// var num = +prompt("Enter a number?")
// if(num%3 === 0){
//     alert("Number is divisible by 3")
// }

// var num = +prompt("Enter a number?")
// if(num%2 === 0){
//      alert("Number is even")
// }
// if(num%2 === 1){
//     alert("Number is odd")
// }

// var temperature = +prompt("What is the weather?")
// if(temperature > 40 &  temperature > 30){
//     alert("It is too hot ")
// }
// if(temperature > 30 &  temperature > 20 & temperature < 40){
//     alert("The Weather is normal today")
// }
// if(temperature > 20 &  temperature < 10){
//     alert("The weather is cool today")
// }
// if(temperature > 10 & temperature < 0){
//     alert("OMG! Today's weather is so Cool")
// }

var firstNum = +prompt("Enter a number");
var secondNum = +prompt("Enter another number");
var operator = prompt("Enter an operator");
if(operator === "+"){
           var result1 = firstNum + secondNum
           document.write(firstNum + " " + operator + " " + secondNum + " = " + result1);
}

if(operator === "-"){
    var result2 = firstNum - secondNum
    document.write(firstNum + " " + operator + " " + secondNum + " = " + result2);
}

if(operator === "*"){
    var result3 = firstNum * secondNum
    document.write(firstNum + " " + operator + " " + secondNum + " = " + result3);
}

if(operator === "/"){
    var result4 = firstNum / secondNum
    document.write(firstNum + " " + operator + " " + secondNum + " = " + result4);
}

if(operator === "%"){
    var result4 = firstNum % secondNum
    document.write(firstNum + " " + operator + " " + secondNum + " = " + result4);
}