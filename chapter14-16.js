var literal = ["",""]
var object = [ , ]
var strings = ["A", "B", "C"]
var numbers = [1, 2, 3]
var boolean = [true, false]
var mixed = ["A", 1, false]

// var qualifications = ["SSC" , "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.",  "PhD"];
// var count = "0"
// document.write(++count + ")" + qualifications[0] + "<br>")
// document.write(++count + ")" + qualifications[1] + "<br>")
// document.write(++count + ")" + qualifications[2] + "<br>")
// document.write(++count + ")" + qualifications[3] + "<br>")
// document.write(++count + ")" + qualifications[4] + "<br>")
// document.write(++count + ")" + qualifications[5] + "<br>")
// document.write(++count + ")" + qualifications[6] + "<br>")
// document.write(++count + ")" + qualifications[7] + "<br>")
// document.write("<br><br><br><br><br><br><br>")

// var students = ["Michael", "John", "Tony"];
// var score = ["320", "230", "480"];
// document.write("Score of Michael is " + score[0] + ". Percentage: " + score[0]/ 500 * 100 + "%<br>" )
// document.write("Score of John is " + score[1] + ". Percentage: " + score[1]/ 500 * 100 + "%<br>" )
// document.write("Score of Tony is " + score[2] + ". Percentage: " + score[2]/ 500 * 100 + "%<br>" )

var colours = []
colours[0] = prompt("What do you want the first colour to be")
document.write("<br>Now the first colour in the array is: " + colours)
colours[3] = prompt("<br>What colour do you want to add to the end of the array")
document.write("<br>Now The last colour in your array is: " + colours[3])
colours[1] = prompt("<br>Add another colour to the beginning of the array")
colours[2] = prompt("<br>Add another colour to the beginning of the array")
document.write("<br>Now your array consists of " + colours);
colours.shift();
document.write("<br>after removing the first element in the array you are left with the array " + colours)
colours.splice(2)
document.write(colours)
var num1 = +prompt("<br>At which index do you want to add a colour at")
var colour1 = prompt("<br>And what colour do you want to add")
document.write(colours)

// var scores2 = [320,230,480,120]
// scores2.sort
// alert(scores2)
// document.write("Scores of Students : " + scores2 + "<br>")
// document.write("Ordered Scores of Students : " + scores2.sort())

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// var selectedCities = [cities[1], cities[2], cities[4]]
// document.write("Cities list: <br>" + cities )
// document.write("<br> <br> <br> <br> Selected cities list: <br> " + selectedCities)

// var cat = ["This", "is", "my", "cat"]
// document.write("Array: <br>" + cat )
// document.write("<br> <br> <br> <br> String: <br> " + cat.join(' '))

// var devices = [""]
// devices[0] = "keyboard"
// devices[1] = "mouse"
// devices[2] = "printer" 
// devices[3] = "monitor"
// document.write("Devices: <br>" + devices + "<br> <br> <br>")
// document.write("Out: <br>" + devices[0])
// document.write("Out: <br>" + devices[1])
// document.write("Out: <br>" + devices[2])
// document.write("Out: <br>" + devices[3])

// document.write("Devices: <br>" + devices + "<br> <br> <br>")
// document.write("Out: <br>" + devices.pop() + "<br>")
// document.write("Out: <br>" + devices.pop() + "<br>")
// document.write("Out: <br>" + devices.pop() + "<br>")
// document.write("Out: <br>" + devices.pop() + "<br>")

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
alert(phones)
document.write("<select><option>"+ phones[0]+ "</option><option>"+phones[1]+"</option><option>"+phones[2]+"</option><option>"+phones[3]+"</option><option>"+phones[4]+"</option><option>"+phones[5]+"</option></select>")