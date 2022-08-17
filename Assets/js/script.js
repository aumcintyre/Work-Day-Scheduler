var currentDate = dayjs().format("dddd, MMM Do YYYY");
var todayDate = document.getElementById("currentDay");
todayDate.innerText= (currentDate);

var currentHour = dayjs().format("HH")

function currentTime(){
    var currentHour = dayjs().hour();
    
}



dayjs().format()