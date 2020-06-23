// Question 1:
// var firstName = prompt("What is your first name? ")
// var lastName = prompt("What is your second name? ")
// var fullName = firstName.concat(lastName)
// alert("Welcome to my website " + fullName )

// Question 2: 
// var favphone = prompt("What is your favourite phone model?")
// var favPhoneLength = favphone.length;
// document.write("My favorite phone is: " + favphone)
// document.write("<br>Length of string: " + favPhoneLength)

// Question 3:
// var string = "Pakistani"
// document.write("String: " + string);
// var n = string.indexOf("n");
// document.write("<br>Index of 'n': " + n)

// Question 4:
// var hello = "Hello World"
// document.write("String: " + hello)
// var last = hello.lastIndexOf("l")
// document.write("<br>Last index of 'l': " + last );

// question 5
// var string = "Pakistani"
// document.write("String: " + string);
// var index3 = string.charAt(3)
// document.write("<br>Character at index 3: " + index3)

// Question 7:
// var city = "Hyderabad";
// document.write("City: " + city);
// var city2 = city.replace("Hyder", "Islam");
// document.write("<br>After replacement: " + city2)

// Question 8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message.replace(/and/g, "&")
// document.write("original: " + message)
// document.write("<br>updated: " + message2)

// Question 9:
// var value = "472"
// document.write("Value: 472 <br>")
// document.write("Type:" + typeof value +"<br>")
// document.write("Value: " + parseInt(value) + "<br>")
// document.write("Type:" + typeof parseInt(value))

// Question 10:
// var lowerCase = "peanuts";
// document.write("User input: " + lowerCase);
// var lowerCase2 = lowerCase.toUpperCase();
// document.write("<br>Upper case: " + lowerCase2);

// Question 11: 
// var message = prompt("Enter a word")
// var firstLetter = message.slice(0, 1);
// var restofString = message.slice(1);
// firstLetter = firstLetter.toUpperCase();
// restofString = restofString.toLowerCase() ;
// document.write("User input " + message);
// document.write("Title case: " + firstLetter + restofString);

// Question 12:
// var num = 35.36;
// var newNum = num * 100;
// newNum = newNum.toString()
// document.write("Number: " + num + "<br>")
// document.write("Result: " + newNum)

// Question 13:
var username = prompt("Enter a username.")
var pos = 0 
var chngAscii= username.codePointAt(pos)
if((chngAscii === 33 )||chngAscii === 44 || chngAscii === 46 || chngAscii === 64 ){
alert("Please enter a valid username")
}

// Question 14:
// var items = ["cake", "apple pie", "cookie", "chips","patties"]
// var item = prompt("Welcome to ABC Bakery. What do you want to order")
// var item2 = item.toLowerCase;
// var length = items.length;
//     for(var i=0; i <= length; i++){
//           if(items[i] === item){
//                  alert(items[i] + " is available at index " + i + " in our bakery")
//                  break;
//           }
//           else{
//                alert("Sorry, your item is not available")
//                break;
//           } }

// Question 15:
// var password = prompt("Enter a password.")
// var pos = 0 
// var chngAscii= password.codePointAt(pos)
// if(chngAscii >=48 && chngAscii <= 57 ){
//     document.write("Entered password: " + password)
//     document.write("<br> Password can't begin with a number <br> Please enter a valid number.")
// }
// var length = password.length
// if(password.length < 6){
//     document.write("Entered password: " + password)
//     document.write("<br> Password can't be shorter than 6 characters <br> Please enter a valid number.")
// }

// Question 16:

// var university = "University of Karachi";
// var split = university.split("");
// for(i=0; i < university.length; i++){
//      document.write(split[i] + "<br>")
// }

// Question 17:
// var message = prompt("Enter a word")
// var lastCharacter = message.charAt(message.length-1)
// document.write("User input " + message);
// document.write("<br> Last character of input: " + lastCharacter);