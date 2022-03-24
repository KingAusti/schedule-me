//create empty variables for date and time counter
let currentDate;
let currentTime;

//pull date and time
function updateDateTime() {    
    currentDate = moment(new Date());
    currentTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};


$(document).ready(function(){
    date = $('#currentDay')
    updateDateTime();
    //setting update to every second(1000ms)
    setInterval(updateDateTime, 1000);
    let rows = $('.row');
    let currentHour = parseInt(currentDate.format('k'));
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
    $("#content-9").attr("value", localStorage.getItem('content-9'));
    $("#content-10").attr("value", localStorage.getItem('content-10'));
    $("#content-11").attr("value", localStorage.getItem('content-11'));
    $("#content-12").attr("value", localStorage.getItem('content-12'));
    $("#content-13").attr("value", localStorage.getItem('content-13'));
    $("#content-14").attr("value", localStorage.getItem('content-14'));
    $("#content-15").attr("value", localStorage.getItem('content-15'));
    $("#content-16").attr("value", localStorage.getItem('content-16'));

    //eventlistener for click event on each save button
    $(".fas").on("click", function(event) {
        event.preventDefault();
        let timeAttr = $(this).siblings(".col-lg-10").attr("id");
        let noteVal = $(this).siblings(".col-lg-10").val();
        localStorage.setItem(timeAttr, noteVal);
    });
});