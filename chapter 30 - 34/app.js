// Question 1:
var date = new Date();
// document.write(date)

// Question 2:
// var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var month = months[date.getMonth()];
// document.write("Current Month: " + month)

// Question 3:
// var days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var day = days[date.getDay()]
// document.write("Today is " + day)

// Question 4:
// var day = date.getDay()
// if(day === 5 || 6){
//     alert("It's fun day")
// }

// Question 5:
// if (16 > date.getDate()) {
//     document.write("First fifteen days of the month")
//     }
// else {
//     var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//     alert("Last fifteen days of the month")
//     }

// Question 6:
// document.write("Current Date: " + date + "<br>")
// document.write("Elapsed milliseconds since January 1,1970: " + date.getTime() + "<br>")
// document.write("Elapsed minutes since January 1,1970: " + date.getTime()/60000 + "<br>")

// Question 7:
// var hours = date.getHours()
// if(hours < 12){
//     alert("It's AM")
// }

// Question 8:
// var laterDate = new Date("December 31, 2020")
// document.write(laterDate)

// Question 9:
// var Ramadan = new Date("June 18, 2015").getTime();
// var Current = date.getTime()
// var Diff = Ramadan - Current;
// var dayDiff = Math.floor(Diff / (1000 * 60 * 60 * 24));
// document.write(dayDiff + " days have passed since 1st Ramadan 2015" )

// Question 10:
// var reference = new Date("December 5, 2015")
// var referenceTime = reference.getTime();
// var date2005 = new Date("January 1, 2015").getTime();
// var diff = referenceTime - date2005;
// var seconddiff = Math.floor(diff / 1000)
// document.write("On reference date " + reference + " " + seconddiff + " seconds had passed since beginning of 2015.");

// Question 12:
// document.write("Current Date: " + date)
// date.setFullYear(1920)
// document.write("<br> 100 years back, it was " + date)

// Question 13:
// var age = +prompt("How old are you?")
// var year = date.getFullYear()
// var birthYear = year - age;
// document.write("Your age is " + age)
// document.write("<br> Your birth year is " + birthYear)

// Question 14:
var name = prompt("What is your name?")
var noOfUnits = prompt("How many units do you have")
var chargesUnit = prompt("How much charges per unit")
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month =  months[date.getMonth()];
document.write("<h1> K-Electric Bill </h1>")
document.write("Customer Name: " + name + "<br>")
document.write("Month: " + month + "<br>")
document.write("Number of units: " + noOfUnits + "<br>")
document.write("Charges per unit " + chargesUnit + "<br> <br>")
document.write("Net Amount Payable (within Due Date): 6560 <br>")
document.write("Late payment subcharge: 350 <br>")
var dueDate = new Date("June 21, 2020")
if(date >= dueDate) {
    document.write("Gross Amount Payable (after Due Date): 6910")
}