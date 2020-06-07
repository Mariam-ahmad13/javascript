var character = prompt("Enter a character")

if(character === String.fromCharCode(65)|| String.fromCharCode(90)){
    alert("It's a capital letter")
}

if(character ===  String.fromCharCode(97) ||  String.fromCharCode(122)){
    alert("It's a loewr case letter")
}
   

// var num1 = +prompt("Enter an integer")
// var num2 = +prompt("Enter another integer")

// if (num1 > num2){
//     alert(num1 + " is bigger than " + num2)
// }

// else if(num2 > num1){
//     alert(num2 + " is bigger than " + num1)
// }

// else{
//     alert("Both numbers are equal")
// }

// if(num1 > 0){
//      alert("Number is positive")
// }

// else if(num1 < 0){
//      alert("Number is negative")
// }

// else{
//      alert("Number is 0")
// }

// var word = prompt("Enter a word");
// if(word[0] === "a" || "e" || "i" || "o" || "u"){
//     alert(true)
// }
// else{
//     alert(false)
// }

// var password = "Mariam123"
// var password2 = prompt("Enter your password")
// if(password2 === ""){
//     alert("Please enter your password")
// }
// else if(password === password2){
//     alert("Correct the password you entered matches the original password.")
// }
// else{
//     alert("Incorrect Password")
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }

// var time = prompt("Enter time in 24 hour format")
// if(time >= 0000 && time < 1200 === true){
//     alert("Good morning")
// }

// else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon")
// }

// else if(time >= 1700 && time < 2100){
//     alert("Good Evening")
// }

// else if(time >= 2100 && time <= 2359){
//     alert("Good night")
// }