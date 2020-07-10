$(document).ready(() => {
  console.log("ready!");
});

//DOM elements
var container = document.querySelector(".container");
var inputGroup = document.querySelector(".time-block");
var currentDateEl = $("#currentDay");
var plannerEl = document.querySelector("#planner");
//set my variables
// var workingHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
//array of times
// var timeFull = [
//   00,
//   01,
//   02,
//   03,
//   04,
//   05,
//   06,
//   07,
//   08,
//   09,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22,
//   23,
//   24,
// ];

//NON WORKING CODE
// var timeBlockEl = $(
//   '<div class="input-group mb-2"><div class="input-group-prepend"><span class="input-group-text"></span></div> <textarea class="form-control" aria-label="With textarea"></textarea><input class="btn btn-primary" type="submit" value="Submit"></div>'
// );
// var timeBlockEl = $(
//   '<div class="input-group mb-2"><div class="input-group-prepend"><span class="input-group-text"></span></div> <textarea class="form-control" aria-label="With textarea"></textarea><input class="btn btn-primary" type="submit" value="Submit"></div>'
// );
//for each loop to create 9 timeBlocks
//   for (var i = 0; i < workingHours.length; i++) {
//     //creating my new div
//     inputGroup.innerHTML = workingHours[i];
//     container.append(timeBlockEl);
//     console.log([i]);
//   }
// });
//as soon as i open my page get document on ready, create and append my 9 divs
// for (var i = 9; i < 18; i++) {
//   if (i < 12) {
//     $(".input-group-text").text(workingHours[i] + "AM");
//   }
//   if (i > 12) {
//     $(".input-group-text").text(workingHours[i] + "PM");
//   }
//   $(".container").append(timeBlockEl);
// }

//GET THE CURRENT DATE and display it
var date = moment();
currentDateEl.text(date.format("dddd MMMM Do YYYY"));
//MELISSA CODE
// var now = moment().format("H");

// //TO GET CURRENT TIME - DONE
function myHour() {
  var d = new Date();
  var n = d.getHours();
  return parseInt(n);
}
console.log(myHour());

// function init() {
//   $("#currentDay").text(date);
//   $(".time-block").each(buildRow);
//   $(".btn").click(save);
// }

//MELISSAS CODE
// function buildRow() {
//   var time = $(this).attr("data-hour");
//   time = parseInt(time);
//   if (now === time) {
//     $(this).addClass("present");
//   }
//   if (now > time) {
//     $(this).addClass("past");
//   }
//   if (now < time) {
//     $(this).addClass("future");
//   }
//set color blocks by comparing current time with the time in blocks
$("#planner").each(function () {
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

//display hour on top of page
//generate the div - create 9 sub divs
//in each sub div display time on the left, input area in the middle, submit button the the right
//depending on the time of the day, it will diplay differently

// STYLING - for loop that iterates through the time array to generate the div colors
// function colorBlock (){
// for (var i = 0; i <time.length; i++){
//     if (myHour === time[i]){
// //if time.key === myHour, then block is red
//     if (myHour < time[i]) {
// //if time.key < myHour, then block is grey
//     if (myHour > time[i]) {
// // if time.key> if time.key < myHour, then block is green
//     }
//     if (myHour < 09 || myHour>17){
// //turn  all the divs to yellow
//     }
// }
//     }

// //LOCALSTORAGE
