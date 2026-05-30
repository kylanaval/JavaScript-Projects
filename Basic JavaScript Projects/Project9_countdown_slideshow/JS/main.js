function countdown() {
    var seconds = document.getElementById("seconds").value; // Get the value of the input field

    function tick() {
        seconds = seconds - 1;      // Decrease the seconds by 1
        timer.innerHTML = seconds; // Update the timer display
        var time = setTimeout(tick, 1000); // Call tick again after 1 second
        if (seconds == -1) {        // When the countdown reaches -1, it means time is up
            alert("Time's up!");    // Show an alert message
            clearTimeout(time);     // Clear the timeout to stop the countdown
            timer.innerHTML="";     // Clear the timer display
        }
    }
    tick();
}

let slideIndex = 0; // Initialize the slide index to 0
showSlides();       // Call the showSlides function to start the slideshow

function showSlides() { // Function to display the slides
  let i;                // Declare a variable i for iteration
  let slides = document.getElementsByClassName("mySlides"); // Get all elements with the class name "mySlides"
  let dots = document.getElementsByClassName("dot");        // Get all elements with the class name "dot"
  for (i = 0; i < slides.length; i++) {                     // Loop through all slides and hide them
    slides[i].style.display = "none";                       // Set the display style of each slide to "none" to hide them
  }
  slideIndex++;                                     // Increment the slide index by 1
  if (slideIndex > slides.length) {slideIndex = 1} // If the slide index exceeds the number of slides, reset it to 1 
  for (i = 0; i < dots.length; i++) {              // Loop through all dots and remove the "active" class
    dots[i].className = dots[i].className.replace(" active", ""); // Remove the "active" class from each dot
  } 
  slides[slideIndex-1].style.display = "block";   // Display the current slide by setting its display style to "block"
  dots[slideIndex-1].className += " active";      // Add the "active" class to the current dot
  setTimeout(showSlides, 2000);                   // Change image every 2 seconds
}
