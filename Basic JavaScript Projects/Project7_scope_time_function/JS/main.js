//Global variables in JavaScript
var X=10;
function Add_numbers_1() {          // X is a global variable and can be used in any function
    document.write(20+X+"<br>");    // X is used here and it will give the value of 10
}
function Add_numbers_2() {          // X is a global variable and can be used in any function
    document.write(X + 100  + "<br>");// X is used here and it will give the value of 10
}
Add_numbers_1(); // This will call the function Add_numbers_1 and it will execute the code inside it, which will print 30 (20 + 10) followed by a line break.
Add_numbers_2(); // This will call the function Add_numbers_2 and it will execute the code inside it, which will print 110 (10 + 100) followed by a line break.


//Local variables in JavaScript
function Add_numbers_3() {          // Y is a local variable and can only be used within this function
    var Y=10;                       // Y is declared and assigned a value of 10 within this function, making it a local variable
    document.write(20+Y+"<br>");    // Y is used here and it will give the value of 10
}
function Add_numbers_4() {        // Y is a local variable and cannot be used in this function, it will cause an error if we try to use it here
    document.write(Y + 100  + "<br>"); // This will cause an error because Y is not defined in this function, it is a local variable in the Add_numbers_3 function and cannot be accessed here
}
Add_numbers_3();    // This will call the function Add_numbers_3 and it will execute the code inside it, which will print 30 (20 + 10) followed by a line break.
Add_numbers_4();    // This will call the function Add_numbers_4 and it will execute the code inside it, which will cause an error because Y is not defined in this function, it is a local variable in the Add_numbers_3 function and cannot be accessed here.


//Debugging with console.log
function multiplyNumbers(a, b) {        // This function takes two parameters, a and b
    console.log("Value of a:", a);      // This will print the value of a to the console for debugging purposes
    console.log("Value of b:", b);      // This will print the value of b to the console for debugging purposes

// Intentional error: variable name is incorrect
    let result = a * c;         // This will cause an error because c is not defined, it should be b instead of c

    console.log("Result:", result); //  This will not be executed due to the error in the previous line, but if it were correct, it would print the result of a multiplied by b to the console for debugging purposes

    return result; //   This will return the result of a multiplied by b, but due to the error in the previous line, it will not return anything and will cause an error instead
}

// Call the function
multiplyNumbers(5, 3); // This will call the function multiplyNumbers with the arguments 5 and 3, which will execute the code inside the function. It will print the values of a and b to the console, but it will cause an error when trying to calculate the result because c is not defined.

function get_Date() { // This function will be called when the user clicks on the element with id "Greeting"
    if (new Date().getHours() < 18) { // This checks if the current hour is less than 18 (6 PM)
    document.getElementById("Greeting").innerHTML = "How are you today?"; // If the condition is true, it will change the inner HTML of the element with id "Greeting" to "How are you today?"
    }
}

function if_Statement() { // This function will be called when the user clicks on the element with id "Greeting"
    let temperature = prompt("Enter the temperature outside:"); // This will prompt the user to enter the temperature outside and store it in the variable temperature
    if (temperature > 20) { // This checks if the temperature is greater than 20
        document.write("It's warm outside!"); // If the condition is true, it will print "It's warm outside!" to the document
    }   else {
        document.write("It's cold outside!"); // If the condition is false, it will print "It's cold outside!" to the document
    }
}   

function Age_Function() { // This function will be called when the user clicks on the button
    Age = document.getElementById("Age").value; // This will get the value from the input element with id "Age" and store it in the variable Age
    if (Age >= 18) { // This checks if the age is greater than or equal to 18
        Vote = "You are old enough to vote!"; // If the condition is true, it will set the variable Vote to "You are old enough to vote!"
    }   else {
        Vote = "You are not old enough to vote!"; // If the condition is false, it will set the variable Vote to "You are not old enough to vote!"
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; // This will change the inner HTML of the element with id "How_old_are_you?" to the value of the variable Vote
}

function checkAge() {

    let age = document.getElementById("ageInput").value;    // This will get the value from the input element with id "ageInput" and store it in the variable age

    if (age >= 18) {                                        // This checks if the age is greater than or equal to 18
        document.getElementById("result").innerHTML = "You are old enough to vote!"; // If the condition is true, it will change the inner HTML of the element with id "result" to "You are old enough to vote!"
    } else {
        document.getElementById("result").innerHTML = "You are not old enough to vote."; // If the condition is false, it will change the inner HTML of the element with id "result" to "You are not old enough to vote."
    }

}

function Time_function() {
    var Time = new Date().getHours();   // This will get the current hour from the Date object and store it in the variable Time
    var Reply;
    if (Time < 12 == Time > 0) {        // This checks if the time is less than 12 and greater than 0
        Reply = "It is morning time!"; // If the condition is true, it will set the variable Reply to "It is morning time!"
    }   else if (Time >= 12 == Time < 18) { // This checks if the time is greater than or equal to 12 and less than 18
        Reply = "It is afternoon."; // If the condition is true, it will set the variable Reply to "It is afternoon."
    }   else {  
        Reply = "It is evening time."; // If the condition is false, it will set the variable Reply to "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // This will change the inner HTML of the element with id "Time_of_day" to the value of the variable Reply
}