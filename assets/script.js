//create empty variables for date and time counter
let date;
let time;

//pull date and time
function updateDateTime() {    
    date = moment(new Date());
    time.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};


$(document).ready(function(){
    date = $('currentDay')
    updateDateTime();
    //setting update to every second(1000ms)
    setInterval(updateDateTime, 1000);
    let rows = $('rows');
    let currentHour = parseInt(date.format('k'));
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
    
})