//create empty variables for date and time counter
let currentDate;
let currentTime;

//pull date and time
function updateDateTime() {    
    currentDate = moment().format('dddd, MMMM Do, YYYY');
    currentTime = moment().format('h:mm:ss a');
    //adding time and date to html
    $('#currentDay').text(currentDate);
    $('#currentTime').text(currentTime);
};


$(document).ready(function(){
    date = $('#currentDay')
    updateDateTime();
    //setting update to every second(1000ms)
    setInterval(updateDateTime, 1000);
    let rows = $('.row');
    let currentHour = parseInt(moment().format('k'));
    //for loop to check time and compare it to the block where text is saved
    for (let i = 0; i < rows.length; i++){
        if(parseInt(rows.eq(i).attr('id')) < currentHour){
            rows.eq(i).children().eq(1).addClass('past');
        } else if(parseInt(rows.eq(i).attr('id')) > currentHour) {
            rows.eq(i).children().eq(1).addClass('future');
        } else if(parseInt(rows.eq(i).attr('id')) === currentHour){
            rows.eq(i).children().eq(1).addClass('present');
        }
    };
    
    //loading saved data for each hour from localStorage    
    $("#content-9").val(localStorage.getItem('content-9'));
    $("#content-10").val(localStorage.getItem('content-10'));
    $("#content-11").val(localStorage.getItem('content-11'));
    $("#content-12").val(localStorage.getItem('content-12'));
    $("#content-13").val(localStorage.getItem('content-13'));
    $("#content-14").val(localStorage.getItem('content-14'));
    $("#content-15").val(localStorage.getItem('content-15'));
    $("#content-16").val(localStorage.getItem('content-16'));

    //eventlistener for click event on each save button
    $(".fas").on("click", function(event) {
        event.preventDefault();
        let timeAttr = $(this).siblings(".col-lg-10").attr("id");
        let noteVal = $(this).siblings(".col-lg-10").val();
        localStorage.setItem(timeAttr, noteVal);
    });
});