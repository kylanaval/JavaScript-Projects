 function checkVote() {
            var age = document.getElementById("age").value;

            var message = (age >= 18) 
                ? "You can vote!" 
                : "You are not old enough to vote.";

            document.getElementById("result").innerHTML = message;
        }