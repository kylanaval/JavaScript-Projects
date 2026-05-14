function Dictionary_Function() {    //   This function creates a dictionary object and displays its properties in an HTML element with the id "Dictionary".
    var Dictionary = {              //   This line declares a variable named "Dictionary" and assigns it an object with three properties: "name", "age", and "city".
        "name": "Kyla",             //   This line sets the "name" property of the Dictionary object to "Kyla".
        "age": 40,                  //   This line sets the "age" property of the Dictionary object to 40.
        "city": "Edmonton"           //   This line sets the "city" property of the Dictionary object to "Edmonton".
    };
    document.getElementById("Dictionary").innerHTML = Dictionary.name + " is " + Dictionary.age + " years old and lives in " + Dictionary.city; //   This line selects the HTML element with the id "Dictionary" and sets its innerHTML to a string that includes the values of the "name", "age", and "city" properties of the Dictionary object.
}

function Delete_Operator() {    //   This function creates an object named "Animal" with several properties, deletes the "Sound" property, and then attempts to display the value of the deleted property in an HTML element with the id "Dictionary2".
    var Animal = {              //   This line declares a variable named "Animal" and assigns it an object with several properties: "Species", "Color", "Breed", "Age", and "Sound".
        Species: "Dog",         //   This line sets the "Species" property of the Animal object to "Dog".
        Color: "Black",         //   This line sets the "Color" property of the Animal object to "Black".
        Breed: "Labrador",      //   This line sets the "Breed" property of the Animal object to "Labrador".
        Age: "5",               //   This line sets the "Age" property of the Animal object to "5".
        Sound: "Bark!"          //   This line sets the "Sound" property of the Animal object to "Bark!".
    };
    delete Animal.Sound;        //   This line uses the delete operator to remove the "Sound" property from the Animal object.  
    document.getElementById("Dictionary2").innerHTML = Animal.Sound; //   This line selects the HTML element with the id "Dictionary2" and sets its innerHTML to the value of the "Sound" property of the Animal object. Since the "Sound" property has been deleted, this will display "undefined".
}