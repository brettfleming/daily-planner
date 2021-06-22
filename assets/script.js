const day = [ 
    {hour: "09Am"}, {hour: "10Am"}, {hour: "11Am"}, {hour: "12Am"}, {hour: "01pm"}, {hour: "02pm"},  {hour: "03pm"}, {hour: "04pm"}, {hour: "05pm"}
]
var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY"))

day.forEach(function(currentHour) {
    let row = $("<div>").addClass("row");
    let hourField = $("<div>").text(`${currentHour.hour}`).addClass("hour");
    let reminder = $("<div>").addClass("description");
    let data = $("<textarea>");
    var saveButton = $("<h3> Save </h3>")
    var save = $("<button>").addClass("saveBtn");


    $(".container").append(row);
    save.append(saveButton); 
    reminder.append(data);
    row.append(hourField, reminder, save);
    
});

