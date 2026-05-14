function addition_Function() {      // This function performs a simple addition operation and displays the result in an HTML element with the id "Math".
    var addition = 2 + 2;           // The variable 'addition' is assigned the result of adding 2 and 2.
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition; // The innerHTML of the element with id "Math" is set to display the equation and its result.
}

function subtraction_Function() {   // This function performs a simple subtraction operation and displays the result in an HTML element with the id "Math2"
    var subtraction = 5 - 2;      // The variable 'subtraction' is assigned the result of subtracting 2 from 5.
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction; // The innerHTML of the element with id "Math2" is set to display the equation and its result.
}

function multiplication_Function() {    // This function performs a simple multiplication operation and displays the result in an HTML element with the id "Math3"
    var simple_math = 6 * 8;      // The variable 'simple_math' is assigned the result of multiplying 6 by 8.
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_math; // The innerHTML of the element with id "Math3" is set to display the equation and its result.
}

function division_Function() {      // This function performs a simple division operation and displays the result in an HTML element with the id "Math4"
    var simple_math = 48 / 6;      // The variable 'simple_math' is assigned the result of dividing 48 by 6.
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_math; // The innerHTML of the element with id "Math4" is set to display the equation and its result.
} 

function more_Math() {           // This function performs a more complex mathematical operation and displays the result in an HTML element with the id "Math5"
    var simple_math = (1 + 2) * 10 / 2 - 5; // The variable 'simple_math' is assigned the result of the expression (1 + 2) * 10 / 2 - 5.
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math; // The innerHTML of the element with id "Math5" is set to display the expression and its result. 
} 

function modulus_Operator() {     // This function demonstrates the modulus operator and displays the result in an HTML element with the id "Math6"
    var simple_math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math; // The innerHTML of the element with id "Math6" is set to display the explanation and the result of the modulus operation.
}

function negation_Operator() {     // This function demonstrates the negation operator and displays the result in an HTML element with the id "Math7"
    var simple_math = -5;
    document.getElementById("Math7").innerHTML = "The negation of 5 is: " + simple_math; // The innerHTML of the element with id "Math7" is set to display the explanation and the result of the negation operation.
}

function increment_Operator() {     // This function demonstrates the increment operator and displays the result in an HTML element with the id "Math8"
    var X = 5;
    X++;
    document.getElementById("Math8").innerHTML = "The increment of 5 is: " + X; // The innerHTML of the element with id "Math8" is set to display the explanation and the result of the increment operation.
}

function decrement_Operator() {     // This function demonstrates the decrement operator and displays the result in an HTML element with the id "Math9"
    var X = 5.25;
    X--;
    document.getElementById("Math9").innerHTML = "The decrement of 5 is: " + X; // The innerHTML of the element with id "Math9" is set to display the explanation and the result of the decrement operation.
}

function random() {     // This function generates a random number and displays it in an HTML element with the id "Math10"
    var X = Math.random();
    document.getElementById("Math10").innerHTML = "Your random number from 0 and 1 is: " + X; // The innerHTML of the element with id "Math10" is set to display the random number.
}

function random_Number() {     // This function generates a random number and displays it in an HTML element with the id "Math11"
    var X = Math.random() * 100;
    document.getElementById("Math11").innerHTML = "Your random number between 0 and 100 is: " + X; // The innerHTML of the element with id "Math11" is set to display the random number.
}

window.alert(Math.random()); // This line of code generates a random number between 0 and 100 and displays it in an alert box.

window.alert(Math.random() * 100); // This line of code generates a random number between 0 and 100 and displays it in an alert box.

function Math_Object() {     // This function demonstrates the use of the Math object to calculate the square root of a number and displays the result in an HTML element with the id "Math12"
    var X = Math.sqrt(64);
    document.getElementById("Math12").innerHTML = "The square root of 64 is: " + X; // The innerHTML of the element with id "Math12" is set to display the explanation and the result of the square root operation.
}

function Math_Object_Method() {     // This function demonstrates the use of the Math object to calculate the absolute value of a number and displays the result in an HTML element with the id "Math13"
    var X = Math.abs(-4.25);
    document.getElementById("Math13").innerHTML = "The absolute value of -4.25 is: " + X; // The innerHTML of the element with id "Math13" is set to display the explanation and the result of the absolute value operation.
}   