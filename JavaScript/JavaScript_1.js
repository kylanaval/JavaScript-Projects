function showDay() {
    var day = document.getElementById("dayInput").value;
    var dayName;
    switch (day) {
        case "1":
            dayName = "Monday";
            break;
        case "2":
            dayName = "Tuesday";
            break;
        case "3":
            dayName = "Wednesday";
            break;
        case "4":
            dayName = "Thursday";
            break;
        case "5":
            dayName = "Friday";
            break;
        default:
            dayName = "Invalid input";
    }
    document.getElementById("dayOutput").innerHTML = "The corresponding day is: " + dayName;
}

function Hello_World_Function() {
    var elements = document.getElementsByClassName("Click");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Hello, World!";
    }
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.font = "90px Arial";
ctx.textAlign = "center";
ctx.strokeText("Hello World", c.width / 2, c.height / 2);

const g = document.getElementById("myCanvas");
const gtx = g.getContext("2d");

const grd = gtx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

gtx.fillStyle = grd;
gtx.fillRect(20, 20, 150, 100);