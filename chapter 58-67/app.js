// // Task 1: 
//     // Question 1: 
//         var mainContent = document.getElementById('main-content'); 
//     // Question 2: 
//         var child = mainContent.childNodes; 
//     // Question 3: 
//         var render = document.getElementsByClassName("content"); 
//         document.write(render.innerHTML);
//     // Question 4:
//         var firstName = document.getElementById("first-name");
//         firstName.value = "Mariam";
//     // Question 5:
//         var lastName = document.getElementById("last-name")
//         lastName.value = "Ahmad"
//         var email = document.getElementById("email")
//         email.value = "email@example.com"

// Task 2
    // Question 1:
    //     var formContent = document.getElementById("form-content")
    //     document.write("Node Type of the element having the id 'form-content' is" + formContent.nodeType)
    // Question 2:
        // var lastName = document.getElementById("lastName")
        // document.write("Node type of last Name is " + lastName.nodeType + "and child node is" + lastName.childNodes)
    // Question 3:
        // var newNode = document.createElement('p')
        // var lNode = lastName.childNodes = newNode
        // document.write("New value of child node is "+ lNode)
    // Question 4:
        // var mainContent = document.getElementById("main-content")
        // document.write("First Node of main-content is " + mainContent.firstChild + ". Second Node is " + mainContent.lastChild)
    // Question 5:
        // document.write("Next Node of main-content is " + mainContent.firstChild.nextSibling + ". Previous sibling is " +  mainContent.lastChild.previousSibling)
    // Question 6:
        var email = document.getElementById("email")
        document.write("Parent Node of email is " + email.parentNode + "Node type of element is " + email.nodeType)