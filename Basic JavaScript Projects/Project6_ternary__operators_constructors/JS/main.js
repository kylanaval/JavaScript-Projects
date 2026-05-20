function Ride_Function() {
    var Height, Can_ride;                                                   //Declaring variables
    Height = document.getElementById("Height").value;                       //Getting the value of the input from the user
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";   //Using the ternary operator to determine if the user can ride or not
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";     //Outputting the result to the user
}

function Vehicle(Make, Model, Year, Color) {    //Creating a constructor function for a vehicle
    this.Vehicle_Make = Make;                   //Using the "this" keyword to assign the values of the parameters to the properties of the object                            
    this.Vehicle_Model = Model;                 //Using the "this" keyword to assign the values of the parameters to the properties of the object
    this.Vehicle_Year = Year;                   //Using the "this" keyword to assign the values of the parameters to the properties of the object    
    this.Vehicle_Color = Color;                 //Using the "this" keyword to assign the values of the parameters to the properties of the object
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                  //Creating a new object using the constructor function
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Creating a new object using the constructor function
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");               //Creating a new object using the constructor function

function my_Function() {                                                //Creating a function to display the properties of the object
    document.getElementById("Keywords_and_Constructors").innerHTML =    //Outputting the properties of the object to the user
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + //Using the properties of the object to create a sentence
    " manufactured in " + Erik.Vehicle_Year;                            //Using the properties of the object to create a sentence
}

function new_Keyword() {                                                //Creating a function to display the properties of the object using the "new" keyword
    document.getElementById("New_and_This").innerHTML =                 //Outputting the properties of the object to the user
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model +  //Using the properties of the object to create a sentence
    " manufactured in " + Jack.Vehicle_Year;                            //Using the properties of the object to create a sentence               
}

function Nested_Function() {                                    //Creating a function to demonstrate a nested function
    document.getElementById("Counting").innerHTML = Count();    //Outputting the result of the nested function to the user
    function Count() {                                          //Creating a nested function to count
        var Starting_point = 9;                                //Declaring a variable to be used in the nested function
        function Plus_one() {Starting_point += 1;}              //Creating a nested function to add 1 to the Starting_point variable
        Plus_one();                                             //Calling the nested function to add 1 to the Starting_point variable   
        return Starting_point;                                  //Returning the value of the Starting_point variable to the outer function
    }       
}

