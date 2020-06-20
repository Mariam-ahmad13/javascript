var character = prompt("Enter a character")

var myPromopt = prompt("Enter any Number/AlphaSbet & we'll tell you what it is?")
var pos = 0 
var chngAscii=myPromopt.codePointAt(pos)

if (chngAscii >=65 && chngAscii <= 90  ){
    document.write("<h1>" +"You Enter the Capital Letter " + myPromopt + " whose ASCII code is "+ chngAscii + "</h1>")
}
else if(chngAscii >=97  && chngAscii <= 122 ){
    document.write("<h1>" +"You Enter the Small Letter " + myPromopt+ " whose ASCII code is "+ chngAscii + "</h1>")
}
else if(chngAscii >=48 && chngAscii <= 57 ){
    document.write("<h1>" +"You Enter the Number " + myPromopt+ " whose ASCII code is "+ chngAscii + "</h1>")

}
else{
    document.write("<h1>"+ "You may enter something wrong "+ " whose ASCII code is "+ chngAscii + "</h1>")
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