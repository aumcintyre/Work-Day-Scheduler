var currentDate = dayjs().format("dddd, MMM Do YYYY");
var todayDate = document.getElementById("currentDay");
todayDate.innerText= (currentDate);

var currentHour = dayjs().format("HH")

function currentTime(){
    // var currentHour = dayjs().hour();
    $(".hourBlock").each(function(){
        var hourBlock = $(this).attr("id").split("-")[1];

        if(currentHour===hourBlock){
            $(this).addClass("present");
            // $(this).children(".description").addClass("white-text")

        }


    }
}


//Just to remember the format
//dayjs().format()