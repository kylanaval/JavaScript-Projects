//a function that uses the += operator to concatenate two strings together and display the result in an HTML element with the id "Concatenate"
function myFunction() {
    var text = "Hello";                         // Declare a variable named "text" and assign it the value "Hello"
    text += " Kyla! Welcome to JavaScript.";    // Use the += operator to concatenate the string " Kyla! Welcome to JavaScript." to the existing value of "text"
    document.getElementById("Concatenate").innerHTML = text; // Use the getElementById method to select the HTML element with the id "Concatenate" and set its innerHTML property to the value of "text"
}