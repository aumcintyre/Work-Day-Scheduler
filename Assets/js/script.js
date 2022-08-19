var currentDate = dayjs().format("dddd, MMM Do YYYY: h:mm a");
var todayDate = document.getElementById("currentDay");
var currentHour = dayjs().format("HH")

todayDate.innerText = (currentDate);

//Ready function allows the entire page to load before a DOM element is manipulated
$(document).ready(function () {
   
//Find each hour's div and assign it a time by splitting the id into two items on an index and using the second item [1] which lines up with the hour value
    $(".hourBlock").each(function () {
    var hourBlock = $(this).attr("id").split("-")[1];


//Set the class for each hour block depending on what time of day the user is viewing the page    
    if (currentHour === hourBlock) {
        $(this).addClass("present");
    } else if (currentHour <= hourBlock) {
        $(this).addClass("future");
    } else if (currentHour >= hourBlock) {
        $(this).addClass("past");
    }
});


//Add event listener to click button to grab the time and the text area value and save them to local storage. 

//how do I call the correct areas of the div???

$(".saveBtn").on('click', function (event){
    console.log("hello");
    event.preventDefault();
    let tasks = $(this).siblings(".description").val();
    let time = $(this).parents().attr("id").split("-")[1];
    localStorage.setItem(time, tasks)
});

//Retrieve locally stored variables and display them in the hour blocks when the page refreshes -- currently, nothing happens
$("#hour-09 .description").val(localStorage.getItem("09"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));
});
//Just to remember the format
//dayjs().format()