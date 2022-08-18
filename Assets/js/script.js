var currentDate = dayjs().format("dddd, MMM Do YYYY");
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
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour >= hourBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

});
//Add event listener to click button to grab the time and the text area value and save them to local storage. 

$(".saveBtn").click(function (event){
    console.log("hello");
});
//Just to remember the format
//dayjs().format()