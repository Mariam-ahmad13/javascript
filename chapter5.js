// var num1 = +prompt("Enter a random number ");
// var num2 = +prompt("Enter a second random number")
// var result = num1+num2
// var result2 = num1-num2
// var result3 = num1*num2
// var result4 = num1/num2
// var result5 = num1%num2
// document.write("The sum of " + num1 + " and " + num2 + " is " + result + "." + "<br />" 
// +num1 + " subtracted by " + num2 + " is equal to " + result2 + "." + "<br />"
// + "The product of " + num1 + " and " + num2  + " is " + result3 + "." + "<br />"
// + num1 + " divided by " + num2 + " is " + result4 + "." + "<br/>"
//  + "The remainder of " + num1 + " and " + num2 + " after division is " + result5)

// var num = 
// document.write ("Value after variable declaration is " + num);
// var initialValue = +prompt("Add an initial value");
// document.write ("<br />" + "Initial value: " + initialValue  );
// var increment =  ++initialValue;
// document.write ("<br />" + "Value after increment is: " + increment);
// var newNum = increment + 7;
// document.write("<br />" + "Value after addition of 7 is: " + newNum )
// var decrement = --newNum
// document.write ("<br />" + "Value after decrement is: " + decrement);
// var remainder = decrement % 12
// document.write ("<br />" + "The remainder is: " + remainder)

// var cost = 600;
// var price = cost * 5;
// document.write("The total price of 5 tickets is " + price + "PKR" );

// var num4 = 4;
// document.write ("Table of 4")
// document.write("<br />" + num1 + " x 1 = 4")
// document.write("<br />" + num1 + " x 2 = 8")
// document.write("<br />" + num1 + " x 3 = 12")
// document.write("<br />" + num1 + " x 4 = 16")
// document.write("<br />" + num1 + " x 5 = 20")
// document.write("<br />" + num1 + " x 6 = 24")
// document.write("<br />" + num1 + " x 7 = 28")
// document.write("<br />" + num1 + " x 8 = 32")
// document.write("<br />" + num1 + " x 9 = 36")
// document.write("<br />" + num1 + " x 10 = 40")

// var farenheit1 = 36 
// var celsius1 = farenheit1 - 32 * 5/9
// document.write(celsius1 + "°C is " + farenheit1 + "°F")
// document.write( "<br />" + farenheit1 + "°C is " + celsius1 + "°F")
// var farenheit2 = 95
// var celsius2 = farenheit2 

// var item1 = +prompt("What is the price of your first item?");
// var quantity1 = +prompt("What is the quantity?");
// var item2 = +prompt("What is the price of your second item?");
// var quantity2 = +prompt("What is the quantity?");
// var shippingCharges = +prompt("What are the shipping Charges")
// document.write("<h1> Shopping List </h1>");
// document.write("Price of item 1 is " + item1)
// document.write ("<br />" + "Quantity of item 1 is " + quantity1 )
// document.write("<br />" + "Price of item 2 is " + item2)
// document.write ("<br />" + "Quantity of item 2 is " + quantity2 )
// document.write ("<br />" + "Shipping charges are " + shippingCharges )
// var totalPrice = item1 * quantity1 + item2 * quantity2 + shippingCharges;
// document.write (" <br /> <br />" + "Total cost is " + totalPrice)

// var totalMarks = +prompt("What were the total marks in your test")
// var score = +prompt("How much did you score?")
// var percentage = score/totalMarks * 100;
// document.write("<h1> Marks Sheet </h1>");
// document.write("<br />Total marks: " + totalMarks)
// document.write("<br />Marks Obtained: " + score)
// document.write("<br />Percentage: " + percentage + "%")

// var dollar = 10;
// var riyal = 25;
// var exchangeDollar = 104.80;
// var exchangeRiyal = 28;
// var totalPrice = dollar * exchangeDollar + riyal * exchangeRiyal;
// document.write("<h1>Currency in PKR </h1>")
// document.write("Total Currency in PKR: " + totalPrice)

// var variable = +prompt("Pick a random number")
// var finalNumber = variable + 5 * 10 / 2
//  document.write("final number is: " + finalNumber)

// alert("Let me guess your age?");
// var currentYear = +prompt("What year is it");
// var birthYear = +prompt ("Which year were you born in?");
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// document.write("<h1>Age Calculator </h1>")
// document.write("Current year: " + currentYear)
// document.write("<br />Birth Year: " + birthYear)
// document.write(" <br /> You are either " + age2 + " or " + age1 )

// var radius =  prompt("Give a random radius to find out the circumference and area");
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;
// document.write("<h1>The Geometrizer </h1>");
// document.write ("<br /> Radius of a circle: " + radius)
// document.write(" <br />The circumference is: " + circumference)
// document.write("<br />The area is: " + area)

var favSnack = prompt("What is your favourite snack");
var CurrentAge = prompt("What is your current age");
var maxAge = prompt("What do you think your maximum age will be");
var perDay = prompt("Estimate how many " + favSnack + " you eat per day")
var totalperLife = 365 * maxAge * perDay ;
document.write("<h1>The Leftime Supply Calculator </h1>");
document.write("Favourite Snack" + favSnack)
document.write ("<br />Current age: " + CurrentAge)
document.write(" <br />Estimated Maximum Age: " + maxAge)
document.write("<br /> Amount of " + favSnack + " per day: " + perDay)
document.write("<br />You will need " + totalperLife + " " + favSnack + " to last you until the ripe old age of 65")