/*This will display a window alert.*/
window.alert("This is an alert message!");   //displaying an alert box with the message "This is an alert box!"

/* This will display text using Document.write() */
document.write("This is text displayed using Document.write()!" + "<br><br>"); //displaying text on the webpage

/* This assign a string to variable A */
var A="This is first of assigning a strings\' to a variable assignment!";   //assigning a string to variable A
document.write(A);                              //displaying the value of variable A on the webpage
window.alert(A);                                //displaying the value of variable A in an alert box

/** This will concatenate strings from variable A and B. **/
var B=" and it will concatenate strings from 1st and 2nd variable assignment."; //assigning a string to variable B
var C=A+" "+B;                                  //concatenating variable A with variable B and assigning the result to variable C
document.write("<br><br>" + C);                 //displaying the value of variable C on the webpage

/* This will assign a string to variable D and then concatenate it with variable C. */
var D="This is a string concatenation test.";   //assigning a string to variable D
var E=C+" "+D;                                  //concatenating variable C with variable D and assigning the result to variable E 
document.write("<br><br>" + E);                 //displaying the value of variable E on the webpage

/* This is the Multiple Variables Assignment */
var Family="The Cartallas", Mother="Kyla", Father="Rex", Sister="Rena", Brother="Ken", Dog="Rexy", Cat="Mia"; //assigning multiple variables in one statement
var F="is the result of multiple variables assignment but displaying only one of them."; //assigning a string to variable F
document.write("<br><br>" + Father + " " + F);          //concatenating variable Father with variable F and displaying the result

/* This is a statement containing an expression (3 + 3) */
document.write("<br><br>" + "The result of 3 + 3 is: " + (3 + 3)+ "<br><br>");

/**** This will display using a function for the button text. ****/
function My_First_Function() {                              //Defining a function and naming it
    var str="This is the button text!";                     //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML=str;   //Putting the value of the variable str into the HTML elementFromPoint with the id of Button_Text
}