

function getFormValues() {
  var name = document.getElementById("name").value
  var DOB = document.getElementById("DOB").value
  var email = document.getElementById("email").value
  var pass = document.getElementById("pass").value

alert("Name: " + name)
alert("DOB: " + DOB)
alert("Email: " + email)
alert("Password: " + pass)
}

function readMore(){
    document.getElementById("text").innerHTML = "<ul> <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Pellentesque interdum odio id ornare fringilla.</li><li>Vestibulum ut risus ac turpis suscipit tempor faucibus a lorem.</li><li>Vestibulum sit amet ligula vitae purus dignissim gravida a vel neque.</li><li>Morbi suscipit neque in tellus consectetur vulputate.</li></ul>"
    document.getElementById("anchor").innerHTML = "<a>Read less<a>"
  }

function studentForm(){
    
}