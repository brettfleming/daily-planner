const day = [ 
    {hour: "09Am"}, {hour: "10Am"}, {hour: "11Am"}, {hour: "12Am"}, {hour: "01pm"}, {hour: "02pm"},  {hour: "03pm"}, {hour: "04pm"}, {hour: "05pm"}
]
var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY"))

day.forEach(function(currentHour) {
    let row = $("<form>").addClass("row");
    let hourField = $("<div>").text(`${currentHour.hour}`).addClass("hour");
    let reminder = $("<div>").addClass("description");
    let data = $("<textarea>");
    $(".container").append(row);
    reminder.append(data);
    row.append(hourField, reminder);
    
});

