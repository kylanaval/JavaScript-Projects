function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let y = document.forms["myForm"]["lname"].value;
  if (x == "" || y == "") {
    alert("Both first name and last name must be filled out");
    return false;
  }
}

