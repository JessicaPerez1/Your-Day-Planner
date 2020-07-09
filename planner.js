//as soon as i open my page get document on ready
//$( document ).ready(function() {
// console.log("ready!");
// });
//then check current time
//TO GET THE CURRENT DATE
var dateEl = $("#currentDay");
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = dd + "- " + mm + "- " + yyyy;
dateEl.body.append(today);

//TO GET CURRENT TIME
// console.log(
//   new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
// );

//when OPEN MY PLANNER button clicked, planner opens and displays the current date at the top of the page
//

// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
//     ```

//TO GET CURRENT TIME
// console.log(
//   new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
// );

//TO GET THE CURRENT DATE
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// today = dd + ", " + mm + ", " + yyyy;
// document.write(today);
