//get JS running after the document is ready to execute JS code
$(document).ready(() => {
  console.log("ready!");
});

//DOM elements
var container = $(".container");
var inputGroup = $(".time-block");
var currentDateEl = $("#currentDay");
var currentTimeEl = $("#currentTime");
var plannerEl = $("#planner");

//NON WORKING CODE - trying to generate the divs through JS
// var workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//create a div element with timeblock, input area and submit button
// var timeBlockEl = $(
//   '<div class="input-group mb-2"><div class="input-group-prepend"><span class="input-group-text"></span></div> <textarea class="form-control" aria-label="With textarea"></textarea><input class="btn btn-primary" type="submit" value="Submit"></div>'
// );
//for each loop to create 9 timeBlocks
// for (var i = 0; i < workingHours.length; i++) {
//   //creating my new div
//   inputGroup.text(workingHours[i]);
//   container.append(timeBlockEl);
//   console.log([i]);
// }

//GET THE CURRENT DATE and display it
var date = moment();
currentDateEl.text(date.format("dddd MMMM Do YYYY"));
var now = moment().format("H");
console.log(now);
currentTimeEl.text(now + ":00 (military time)");

//GET THE CURRENT TIME and display it
function myHour() {
  var d = new Date();
  var n = d.getHours();
  return parseInt(n);
}
console.log(myHour());

//set color blocks by comparing current time with the time in blocks
$(".time-block").each(function () {
  console.log(this);
  //targets the timblock saves it to timeRow
  var timeRow = $(this);
  console.log(timeRow);
  //put in the user time
  var now = myHour();
  console.log(now);
  //splits the number from the hour which allows it to be parsed so we can compare it to the hour
  var time = parseInt(timeRow.attr("id").split("-")[1]);
  console.log(time);
  if (now === time) {
    $(this).addClass("present");
    //if time.key === myHour, then block is red
  }
  if (now > time) {
    $(this).addClass("past");
    //if time.key < myHour, then block is grey
  }
  if (now < time) {
    $(this).addClass("future");
    // if time.key> if time.key < myHour, then block is green
  }
});

var userInputByHour = [];
//LOCALSTORAGE
// jQuery Save button savebutton is targeted, when save button is clicked
$(".btn").on("click", function () {
  //get nearby values
  console.log(this);
  // this targets the text box, sibling will target the description in the textbox and pull it with value
  var myToDo = $(this).siblings(".form-control").val();
  //time is set by targeting the text box and getting the id element from the parent
  var time = $(this).parent().attr("id");
  //set items in local storage.
  localStorage.setItem(time, myToDo);
});

// // calling value of hour-9 and placing it in the proper hour description value
$("#hour-9 .form-control").val(localStorage.getItem("hour-9"));
$("#hour-10 .form-control").val(localStorage.getItem("hour-10"));
$("#hour-11 .form-control").val(localStorage.getItem("hour-11"));
$("#hour-12 .form-control").val(localStorage.getItem("hour-12"));
$("#hour-13 .form-control").val(localStorage.getItem("hour-13"));
$("#hour-14 .form-control").val(localStorage.getItem("hour-14"));
$("#hour-15 .form-control").val(localStorage.getItem("hour-15"));
$("#hour-16 .form-control").val(localStorage.getItem("hour-16"));
$("#hour-17 .form-control").val(localStorage.getItem("hour-17"));
