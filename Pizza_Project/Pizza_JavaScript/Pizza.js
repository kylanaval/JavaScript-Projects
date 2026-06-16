function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); // this variable will hold all the sizes that the user can select from
    for (var i = 0; i < sizeArray.length; i++) { // this for loop will go through all the sizes that the user can select from and check if they are checked or not  
        if (sizeArray[i].checked) {         // if the size is checked, then set the selectedSize variable to the value of the size that was selected and add the size that was selected to the text1 variable which will show the size of pizza that was selected on the receipt    
            var selectedSize = sizeArray[i].value; // this sets the selectedSize variable to the value of the size that was selected
            text1 = text1+selectedSize+"<br>"; // this adds the size that was selected to the text1 variable which will show the size of pizza that was selected on the receipt
        }
    }

    if (selectedSize === "Personal Pizza") {    // if the value of selectedSize is Personal Pizza, then set the sizeTotal to 6
        sizeTotal = 6;                          // otherwise, if the value of selectedSize is Small Pizza, then set the sizeTotal to 8
    } else if (selectedSize === "Small Pizza") { // otherwise, if the value of selectedSize is Medium Pizza, then set the sizeTotal to 10
        sizeTotal = 8;                              // otherwise, if the value of selectedSize is Large Pizza, then set the sizeTotal to 14
    } else if (selectedSize === "Medium Pizza") {   // otherwise, if the value of selectedSize is Extra Large Pizza, then set the sizeTotal to 16
        sizeTotal = 10;                             // if the value of selectedSize is not Personal Pizza, Small Pizza, Medium Pizza, Large Pizza, or Extra Large Pizza, then alert an error message
    } else if (selectedSize === "Large Pizza") {    // this is the last else if statement, so we can just have an else statement since there are only 5 options for size
        sizeTotal = 14;                             // the sizeTotal is either 6, 8, 10, 14, or 16 depending on what the user selected for size
    } else if (selectedSize === "Extra Large Pizza") {  // this is the last else if statement, so we can just have an else statement since there are only 5 options for size
        sizeTotal = 16;                            // the sizeTotal is either 6, 8, 10, 14, or 16 depending on what the user selected for size              
    }
    runningTotal = sizeTotal;                           // the runningTotal is the sizeTotal because the size is the first thing that gets added to the order
    console.log(selectedSize+" = $"+sizeTotal+".00");   // this logs the size and price of the pizza that was selected
    console.log("size text1: "+text1);                  // this logs the text1 variable which shows the size of pizza that was selected
    console.log("subtotal: $"+runningTotal+".00");      // this logs the subtotal which is the price of the pizza that was selected
    //these variables will get passed on to each function   
    getTopping(runningTotal, text1);        
};

function getTopping(runningTotal, text1) {      // this function will process the toppings that the user selected and add them to the receipt
    var toppingTotal = 0;                       // this variable will hold the total price of the toppings that the user selected
    var selectedTopping = [];                   // this array will hold the toppings that the user selected
    var toppingArray = document.getElementsByClassName("toppings"); // this variable will hold all the toppings that the user can select from
    for (var j = 0; j < toppingArray.length; j++) { // this for loop will go through all the toppings that the user can select from and check if they are checked or not
        if (toppingArray[j].checked) {              // if the topping is checked, then add it to the selectedTopping array and add the price of the topping to the toppingTotal variable
            selectedTopping.push(toppingArray[j].value); // this adds the value of the topping that was selected to the selectedTopping array
            console.log("selected topping item: ("+toppingArray[j].value+")");  // this logs the topping that was selected
            text1 = text1+toppingArray[j].value+"<br>"; // this adds the topping that was selected to the text1 variable which will show the toppings that were selected on the receipt
        }
    }
    var toppingCount = selectedTopping.length; // this variable will hold the number of toppings that were selected by the user
    if (toppingCount > 1) {                     // if the user selected more than 1 topping, then the first topping is free and the rest of the toppings are $1 each, so we subtract 1 from the toppingCount to get the number of toppings that will be charged for
        toppingTotal = (toppingCount - 1);      // this calculates the total price of the toppings that will be charged for
    } else {                                    // if the user selected 1 or 0 toppings, then the toppingTotal is 0 because the first topping is free and there are no additional toppings to charge for
        toppingTotal = 0;                       // this sets the toppingTotal to 0 because the first topping is free and there are no additional toppings to charge for
    }
    runningTotal = (runningTotal + toppingTotal); // this adds the price of the toppings that will be charged for to the runningTotal which is the total price of the order so far
    console.log("total selected topping items: "+toppingCount); // this logs the number of toppings that were selected by the user
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00"); // this logs the number of toppings that will be charged for and the total price of the toppings that will be charged for
    console.log("topping text1: "+text1); // this logs the text1 variable which shows the toppings that were selected on the receipt
    console.log("Purchase Total: "+"$"+runningTotal+".00"); // this logs the total price of the order which is the price of the pizza plus the price of the toppings that will be charged for
    document.getElementById("showText").innerHTML = text1; // this adds the text1 variable which shows the size and toppings that were selected to the HTML element with the id of showText
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>"; // this adds the total price of the order to the HTML element with the id of totalPrice
};