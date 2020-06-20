// var multi = [[], []  ];
// multi[0] = [0 , 1 , 2 , 3]
// multi[1] = [1, 0, 1, 2]
// multi[2] = [2, 1, 0, 1]
// document.write(multi[0].join(' ') + "<br>")
// document.write(multi[1].join(' ') + "<br>")
// document.write(multi[2].join(' ') + "<br>")

// for(i = 1; i <= 10; ++i){
//     document.write(i + "<br>")
// }

// var num1 = +prompt("Enter a number to show its multiplication table")
// var num2 = +prompt("Enter length multiplication table")
// document.write("Multiplication table of " + num1)
// document.write("<br> Length: " + num2 + "<br> <br> <br>")
// var count = 1;
// for(i = 1; i <= num2; ++i){
//     document.write(num1 + " X " + count + " = " + num1 * count++ + "<br>")
// }

// var fruits = ["apple", "banana", "mango", "orange","strawberry"]
// for(i = 0; i <=4; ++i){
//     document.write(fruits[i] + "<br>")
// }
// document.write("<br> <Br>")
// for(i = 0; i <=4; ++i){
//     document.write("Element at index " + i + " is "  + fruits[i] + "<br>")
// }


// document.write("<b>Counting:</b> <br>")
// for(var i=1; i <= 15; ++i){
//     document.write( i + ",")
// }
// document.write("<br><br><b>Reverse:</b> <br>")
// for(var i = 10; i > 1; i -= 1){
//     document.write( i + ",")
// } 
// document.write("<br><br><b>Even: </b><br>")
// for(var i=0 ; i <= 20; i += 2){
//     document.write( i + ",")
// }
// document.write("<br><br><b>Odd: </b><br>")
// for(var i=1 ; i <= 19; i += 2){
//     document.write( i + ",")
// }
// document.write("<br><br><b>Series:</b> <br>")
// for(var i=2 ; i <= 20; i += 2){
//     document.write( i + "k,")
// }

var items = ["cake", "apple pie", "cookie", "chips","patties"]
var item = prompt("Welcome to ABC Bakery. What do you want to order")
for(var i=0; i < items.length; i++){
      if(items[i] === item){
             alert(items[i] + " is available at index " + i + " in our bakery")
             break 
      }
      else{
           alert("Sorry, your item is not available")
           break
      }
    }
// var numbers = [ 24, 53, 78, 91, 12 ]
// var largest = 0;

// for(i=0; i<=largest; i++){
//     if (numbers[i]>largest){
//         largest = numbers[i];
//     }
    
// }
// document.write("Array items: " + numbers + "<br>")
// document.write("The largest number is " + largest)

// for(var i=5 ; i <= 100; i += 5){
//     document.write( i + ", ")}