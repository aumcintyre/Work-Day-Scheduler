var currentDate = dayjs().format("dddd, MMM Do YYYY");
var todayDate = document.getElementById("currentDay");
var currentHour = dayjs().format("HH")

todayDate.innerText = (currentDate);


$(document).ready(function () {
    // var currentHour = dayjs().hour();
    $(".hourBlock").each(function () {
    var hourBlock = $(this).attr("id").split("-")[1];

    if (currentHour === hourBlock) {
        $(this).addClass("present");
        // $(this).children(".description").addClass("white-text")
    } else if (currentHour <= hourBlock) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour >= hourBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});




});


//Just to remember the format
//dayjs().format()