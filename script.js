//DEPENDENCIES====================================================
var currentTimeDisplay = document.querySelector("#currentTime");
var timeNow = dayjs().format(" MMMM DD, YYYY hh: mm: ss");
//Displays current time on page load
currentTimeDisplay.textContent = timeNow;
console.log(timeNow);

//FUNCTIONS========================================================
//DATE PICKER
$(function(){
    $('#datepicker').datepicker();
  });
