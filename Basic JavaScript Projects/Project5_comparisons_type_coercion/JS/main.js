document.write(typeof "Word" + "<br>"); // Output: string

document.write(typeof 3 + "<br>"); // Output: number

document.write("10" + 5 + "<br>"); // Output: 105


// Display Infinity
function displayInfinity() {            // This function assigns a very large number to the variable 'large_number' and displays it in an HTML element with the id "display_Infinity". Since the number exceeds the maximum limit for JavaScript numbers, it will display as Infinity.
    var large_number = 2e310;           // The variable 'large_number' is assigned the value of 2 times 10 to the power of 310, which is a very large number that exceeds the maximum limit for JavaScript numbers.
    document.getElementById("display_Infinity").innerHTML = large_number; // The innerHTML of the element with id "display_Infinity" is set to the value of 'large_number', which will display as Infinity due to exceeding the maximum limit for JavaScript numbers.
}

// Display -Infinity
function Negative_Infinity() {          // This function assigns a very large negative number to the variable 'negative_number' and displays it in an HTML element with the id "display_Negative_Infinity". Since the number exceeds the minimum limit for JavaScript numbers, it will display as -Infinity.
    var negative_number = -3e310;       // The variable 'negative_number' is assigned the value of -3 times 10 to the power of 310, which is a very large negative number that exceeds the minimum limit for JavaScript numbers.
    document.getElementById("display_Negative_Infinity").innerHTML = negative_number; // The innerHTML of the element with id "display_Negative_Infinity" is set to the value of 'negative_number', which will display as -Infinity due to exceeding the minimum limit for JavaScript numbers.
}

function true_test() {      // This evaluates 10 > 2 (true) and displays it in the HTML element with the id "true_test".
    document.getElementById("true_test").innerHTML = 10 > 2; // The innerHTML of the element with id "true_test" is set to the result of the comparison 10 > 2, which evaluates to true, so it will display true in the HTML element.
}

function false_test() {     // This evaluates 10 < 2 (false) and displays it in the HTML element with the id "false_test".
    document.getElementById("false_test").innerHTML = 10 < 2; // The innerHTML of the element with id "false_test" is set to the result of the comparison 10 < 2, which evaluates to false, so it will display false in the HTML element.
}

function console_log() {    // This logs the result of 2 + 2 to the console.
    console.log(2 + 2); // Logs the result of the addition 2 + 2 to the console.
    console.log(10 > 20); // Logs the result of the comparison 10 > 20 to the console, which evaluates to false.
}

function equal_test() { // This evaluates the equality of 10 == 10 and displays it in the HTML element with the id "equality_test".
    document.getElementById("equal_test").innerHTML = 10 == 10; // The innerHTML of the element with id "equality_test" is set to the result of the comparison 10 == 10, which evaluates to true, so it will display true in the HTML element.
}

function false_equal_test() { // This evaluates the equality of 3 === 10 and displays it in the HTML element with the id "false_equal_test".
    document.getElementById("false_equal_test").innerHTML = 3 === 10; // The innerHTML of the element with id "false_equal_test" is set to the result of the comparison 3 === 10, which evaluates to false, so it will display false in the HTML element.
}
function strict_equal_test() { // This evaluates the strict equality of 10 === 10 and displays it in the HTML element with the id "strict_equal_test".
    document.getElementById("strict_equal_test").innerHTML = 10 === 10; // The innerHTML of the element with id "strict_equal_test" is set to the result of the comparison 10 === 10, which evaluates to true, so it will display true in the HTML element.
}

function false_strict_equal_test() { // This evaluates the strict equality of 3 === 10 and displays it in the HTML element with the id "false_strict_equal_test".
    document.getElementById("false_strict_equal_test").innerHTML = 3 === 10; // The innerHTML of the element with id "false_strict_equal_test" is set to the result of the comparison 3 === 10, which evaluates to false, so it will display false in the HTML element.
}

function TrueData_Type_Value() { // This evaluates the strict equality of 10 === 10 and displays it in the HTML element with the id "TrueData_Type_Value".
    document.getElementById("TrueData_Type_Value").innerHTML = 10 === 10; // The innerHTML of the element with id "TrueData_Type_Value" is set to the result of the comparison 10 === 10, which evaluates to true, so it will display true in the HTML element.
}   

function FalseData_Type_Value() { // This evaluates the strict equality of 10 === "hello" and displays it in the HTML element with the id "FalseData_Type_Value".
    document.getElementById("FalseData_Type_Value").innerHTML = 10 === "hello"; // The innerHTML of the element with id "FalseData_Type_Value" is set to the result of the comparison 10 === "hello", which evaluates to false, so it will display false in the HTML element.
}
   
function FalseData_SameValue() { // This evaluates the strict equality of 10 === "10" and displays it in the HTML element with the id "FalseData_SameValue".
    document.getElementById("FalseData_SameValue").innerHTML = 10 === "10"; // The innerHTML of the element with id "FalseData_SameValue" is set to the result of the comparison 10 === "10", which evaluates to false, so it will display false in the HTML element.
}

function SameData_Type_DifferentValue() { // This evaluates the strict equality of 10 === 20 and displays it in the HTML element with the id "SameData_Type_DifferentValue".
    document.getElementById("SameData_Type_DifferentValue").innerHTML = 10 === 20; // The innerHTML of the element with id "SameData_Type_DifferentValue" is set to the result of the comparison 10 === 20, which evaluates to false, so it will display false in the HTML element.
}
  
 function AND_Operator() {
    document.getElementById("AND_Operator").innerHTML = (10 > 5 && 5 > 3);  // Displays true because both conditions are true
}

function AND_Operator_False() {
    document.getElementById("AND_Operator_False").innerHTML = (10 > 5 && 5 < 3);  // Displays false because the second condition is false, even though the first condition is true
}
    // OR operator function
function OR_Operator() {
        document.getElementById("OR_Operator").innerHTML = (10 > 5 || 5 < 3);  // Displays true because the first condition is true, even though the second condition is false
}

function False_OR_Operator() {
    document.getElementById("False_OR_Operator").innerHTML = (10 < 5 || 5 < 3);  // Displays false because both conditions are false
}
    // Run functions
    AND_Operator();
    AND_Operator_False();
    OR_Operator();
    False_OR_Operator();

function NOT_Operator() {
    document.getElementById("NOT_Operator").innerHTML = !(10 > 5);  // Displays false because 10 > 5 is true, and the ! operator negates it
}

function NOT_Operator_True() {
    document.getElementById("NOT_Operator_True").innerHTML = !(10 < 5);  // Displays true because 10 < 5 is false, and the ! operator negates it
}
