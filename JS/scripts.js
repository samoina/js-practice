//This script displays a greeting to the user based on their current local time. It is an example from the JS and jQuery book


let today = new Date ();                // this creates a new date object
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

document.write("<h3>" + greeting + "</h3>");      //if you write the script within the html file we will have document.write("Habari za asubui"); where document is the object, .write is the method that allows new content to be written onto the page while in () we have the data required for the method to work. Remember, when the browser comes across a script element, it stops to load the script and check if there is panything it needs to do. 

//NB: the section in {} determines which code should run and represent blocks of code. new statements start on a new line and end with ;

