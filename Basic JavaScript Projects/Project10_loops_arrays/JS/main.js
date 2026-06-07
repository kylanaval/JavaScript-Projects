function displayArray() {   // Create an array of numbers from 1 to 10
    var Digit = "";     // Use a while loop to iterate through the numbers and concatenate them into a string
    var X = 1;          // Display the concatenated string in an HTML element with the id "arrayOutput"
    while (X < 11) {    // The loop will run as long as X is less than 11, which means it will include numbers from 1 to 10
        Digit += "<br>" + X; // Each number is added to the string with a line break before it for better formatting
        X++;            // Increment X by 1 in each iteration to move to the next number
    }
    document.getElementById("arrayOutput").innerHTML = Digit; // This line updates the inner HTML of the element with id "arrayOutput" to display the concatenated string of numbers
}

let text = "Hello World!"; // Define a string variable named "text" and assign it the value "Hello World!"
let length = text.length; // Use the length property of the string to get the number of characters in "text" and store it in a variable named "length"

document.getElementById("StringsLength").innerHTML = length; // Update the inner HTML of the element with id "StringsLength" to display the value of "length", which is the number of characters in the string "text"

function listInstruments() {    // Create an array named "Instruments" that contains a list of musical instruments
var Instruments = ["Guitar",  "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // Use a for loop to iterate through the "Instruments" array and concatenate each instrument into a string with line breaks for formatting
var Content = "";   // The variable "Content" is initialized as an empty string to store the concatenated list of instruments
var Y;              // The variable "Y" is declared to be used as the loop counter in the for loop
for (Y = 0; Y < Instruments.length; Y++) { // The loop will run from 0 to the length of the "Instruments" array, which means it will iterate through each element in the array
    Content += Instruments[Y] + "<br>"; // In each iteration, the current instrument (Instruments[Y]) is added to the "Content" string followed by a line break for better formatting
}
document.getElementById("List_of_instruments").innerHTML = Content; // This line updates the inner HTML of the element with id "List_of_instruments" to display the concatenated string of instruments from the array
}

function arrayObjects() {   // Create an array named "Cars" that contains a list of car brands
    var Cars = [];          // The variable "Cars" is initialized as an empty array to store the car brands
    Cars[0] = "Tesla";      // The first element of the "Cars" array is assigned the value "Tesla"
    Cars[1] = "BMW";        // The second element of the "Cars" array is assigned the value "BMW"
    Cars[2] = "Audi";       // The third element of the "Cars" array is assigned the value "Audi"
    Cars[3] = "Mercedes";   // The fourth element of the "Cars" array is assigned the value "Mercedes"
    document.getElementById("array_objects").innerHTML = "I like " + Cars[0] + ", " + Cars[1] + ", " + Cars[2] + ", and " + Cars[3] + "."; // This line updates the inner HTML of the element with id "array_objects" to display a sentence that includes the car brands from the "Cars" array
}
function constant() { // Create a constant object named "car" with properties "type" and "color"
    const car = {   // The constant object "car" is defined with two properties: "type" which is set to "Toyota" and "color" which is set to "White"
        type: "Toyota", // The "type" property of the "car" object is assigned the value "Toyota"
        color: "White" // The "color" property of the "car" object is assigned the value "White"
    };

    // Change a property's value
    car.color = "Blue"; // The "color" property of the "car" object is updated to a new value "Blue"

    // Add a new property
    car.year = 2024; // A new property named "year" is added to the "car" object and assigned the value 2024

    // Display the changed and added property values
    document.getElementById("constant").innerHTML = // This line updates the inner HTML of the element with id "constant" to display a sentence that includes the updated color and the newly added year of the car
        "The car color is " + car.color +           // The sentence starts with "The car color is " followed by the value of the "color" property of the "car" object, which is now "Blue"
        " and the car year is " + car.year + ".";   // The sentence continues with " and the car year is " followed by the value of the "year" property of the "car" object, which is 2024, and ends with a period.
}

function showMessage() { // Define a function named "showMessage" that will display a message in an HTML element with the id "message"
    let name = "Kye";   // The variable "name" is declared using the let keyword and assigned the value "Kye"
    let age = 25;       // The variable "age" is declared using the let keyword and assigned the value 25

    age = 26; // Changing the value of a let variable

    document.getElementById("letKeyword").innerHTML = // This line updates the inner HTML of the element with id "letKeyword" to display a message that includes the name and age of the person
        name + " is " + age + " years old.";        // The message is constructed by concatenating the value of the "name" variable, the string " is ", the value of the "age" variable, and the string " years old."
}

function returnStatement() {    // Define a function named "returnStatement" that will calculate the product of two numbers and return the result
    function multiply(a, b) {   // The "multiply" function takes two parameters, "a" and "b", and returns their product
        return a * b;           // The return statement is used to send the result of the multiplication back to the caller of the function
    }
    document.getElementById("return_Statement").innerHTML = "The product is: " + multiply(5, 3); // This line updates the inner HTML of the element with id "return_Statement" to display a message that includes the product of 5 and 3, which is calculated by calling the "multiply" function with arguments 5 and 3
}

function objectWithMethod() { // Define a function named "objectWithMethod" that will create an object with a method to return the full name of a person
    const person = {            // The constant object "person" is defined with properties "firstName", "lastName", and a method "fullName"
        firstName: "Kyla",      // The "firstName" property of the "person" object is assigned the value "Kyla"
        lastName: "Cartalla",   // The "lastName" property of the "person" object is assigned the value "Cartalla"
        fullName: function() {  // The "fullName" property is defined as a function that will return the full name of the person by concatenating the "firstName" and "lastName" properties
            return this.firstName + " " + this.lastName; // The return statement in the "fullName" method concatenates the "firstName" and "lastName" properties of the "person" object, separated by a space, and returns the resulting string as the full name of the person
        }
    };
    document.getElementById("object_Method").innerHTML = "Full Name: " + person.fullName(); // This line updates the inner HTML of the element with id "object_Method" to display a message that includes the full name of the person, which is obtained by calling the "fullName" method of the "person" object
}

function breakStatement() {     // Define a function named "breakStatement" that will demonstrate the use of the break statement in a loop  
    let text = "";              // The variable "text" is initialized as an empty string to store the concatenated numbers that will be generated in the loop
    for (let i = 0; i < 10; i++) { // A for loop is used to iterate from 0 to 9, which means it will generate numbers from 0 to 9
        if (i === 5) {          // The if statement checks if the current value of "i" is equal to 5
            break;          // If the condition is true (i.e., when i is 5), the break statement is executed, which immediately exits the loop and stops any further iterations
        }       
        text += "The number is " + i + "<br>"; // If the break statement is not executed, this line concatenates the current number (i) to the "text" variable along with a line break for formatting
    }
    document.getElementById("break_Statement").innerHTML = text; // This line updates the inner HTML of the element with id "break_Statement" to display the concatenated string of numbers generated in the loop, which will include numbers from 0 to 4, but will stop before reaching 5 due to the break statement
}   

function continueStatement() {  // Define a function named "continueStatement" that will demonstrate the use of the continue statement in a loop
    let text = "";        // The variable "text" is initialized as an empty string to store the concatenated numbers that will be generated in the loop 
    for (let i = 0; i < 10; i++) { // A for loop is used to iterate from 0 to 9, which means it will generate numbers from 0 to 9
        if (i === 5) {  // The if statement checks if the current value of "i" is equal to 5
            continue;  // If the condition is true (i.e., when i is 5), the continue statement is executed, which skips the rest of the loop body for that iteration
        }   
        text += "The number is " + i + "<br>"; // If the continue statement is not executed, this line concatenates the current number (i) to the "text" variable along with a line break for formatting. When i is 5, this line will be skipped due to the continue statement, so the number 5 will not be included in the output.
    }
    document.getElementById("continue_Statement").innerHTML = text; // This line updates the inner HTML of the element with id "continue_Statement" to display the concatenated string of numbers generated in the loop, which will include numbers from 0 to 9 except for 5, which is skipped due to the continue statement
}   

    