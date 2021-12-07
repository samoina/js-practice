let today = new Date ();                // this is a new constructor for Date assigned to a variable called today
let hourNow = today.getHours();         // a new variable that is assigned to get the time today and to display a greeting using if else
let greeting;

if (hourNow > 18) {
  greeting = "Good Evening!";
} else if (hourNow > 12) {
  greeting = "Good Afternoon!";
} else if (hourNow > 0) {
  greeting = "Habari za asubuhi!!";
} else {
  greeting = "Karibu sana!";
}

document.write("<h3>" + greeting + "</h3>");

