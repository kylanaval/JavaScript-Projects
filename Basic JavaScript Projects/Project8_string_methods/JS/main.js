function String_Methods() {
    var part_1 = "I am learning ";          //The concat() method is used to join two or more strings together. It does not change the existing strings, but returns a new string that contains the text of the joined strings.
    var part_2 = "Concatenate and ";        //  The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
    var part_3 = "this will be added ";     // The toUpperCase() method converts a string to uppercase letters. The search() method searches a string for a specified value and returns the position of the match. If the value is not found, it returns -1.
    var part_4 = "to complete a sentence."; // The search() method searches a string for a specified value and returns the position of the match. If the value is not found, it returns -1.
    var whole_sentence = part_1.concat(part_2, part_3, part_4); // The concat() method is used to join two or more strings together. It does not change the existing strings, but returns a new string that contains the text of the joined strings.
    document.getElementById("concatenate").innerHTML = whole_sentence; // The concat() method is used to join two or more strings together. It does not change the existing strings, but returns a new string that contains the text of the joined strings.
}

function Slice_Method() {                   
    var Sentence = "All work and no play makes Johnny a dull boy."; // The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
    var Section = Sentence.slice(27,33);                            // The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. The first parameter specifies the index of the first character to include in the returned substring, and the second parameter specifies the index of the first character to exclude from the returned substring.
    document.getElementById("slice").innerHTML = Section;   // The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
}
function Upper_Method() {
    var text = "Hello World!";      // The toUpperCase() method converts a string to uppercase letters.
    var result = text.toUpperCase(); // The toUpperCase() method converts a string to uppercase letters.
    document.getElementById("upper").innerHTML = result; // The toUpperCase() method converts a string to uppercase letters.
}
function Search_Method() {
    var text = "Visit Microsoft!";          // The search() method searches a string for a specified value and returns the position of the match. If the value is not found, it returns -1.
    var result = text.search("Microsoft"); // The search() method searches a string for a specified value and returns the position of the match. If the value is not found, it returns -1.
    document.getElementById("search").innerHTML = result; // The search() method searches a string for a specified value and returns the position of the match. If the value is not found, it returns -1.
}

function numbers_to_string() {
    var number = 182; //    The toString() method returns a string representing the specified Number object. The toString() method can be used to convert other data types to strings as well, such as booleans and arrays.
    document.getElementById("string").innerHTML = number.toString(); //    The toString() method returns a string representing the specified Number object. The toString() method can be used to convert other data types to strings as well, such as booleans and arrays.
}

function Precision_Method() {
    var number = 12938.3012987376112; // The toPrecision() method formats a number to a specified length.
    document.getElementById("precision").innerHTML = number.toPrecision(10); // The toPrecision() method formats a number to a specified length.
}

function Fixed_Method() {
    var num = 5.56789; // The toFixed() method formats a number using fixed-point notation.
    var n = num.toFixed(2); // The toFixed() method formats a number using fixed-point notation. The toFixed() method returns a string, not a number.
    document.getElementById("fixed").innerHTML = n; // The toFixed() method formats a number using fixed-point notation. The toFixed() method returns a string, not a number.
}

function ValueOf_Method() {
    var text = "Hello World!";  // The valueOf() method returns the primitive value of a String object. The valueOf() method is called automatically when a string is used in a context where a primitive value is expected, such as in a comparison or when concatenating with another string.
    document.getElementById("valueOf").innerHTML = text.valueOf(); // The valueOf() method returns the primitive value of a String object. The valueOf() method is called automatically when a string is used in a context where a primitive value is expected, such as in a comparison or when concatenating with another string.
}