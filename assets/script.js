
let today = moment();
$("#currentDay").text(today.format("dddd MMMM Do YYYY"))

const day = [ 
    {hour: "9Am"}, {hour: "10Am"}, {hour: "11Am"}, {hour: "12Am"}, {hour: "1pm"}, {hour: "2pm"},  {hour: "3pm"}, {hour: "4pm"}, {hour: "5pm"}
]
day.forEach(function(today) {
    let row = $("<div>").addClass("row");
    let timeblock = $("<div>").text(`${today.hour}`).addClass("hour");
    let reminder = $("<div>").addClass(" col-md-8 description");
    let data = $("<textarea>").addClass("col-md-12");
    let saveButton = $("<h3> Save </h3>")
    let save = $("<button>").addClass("saveBtn");
   
    $(".container").append(row);
    save.append(saveButton); 
    reminder.append(data);
    row.append(timeblock);
    row.append(reminder);
    row.append(save);

     // this if statement changes the classes on the timeblocks to past present and future
     if (today.time < moment().format("HH")) {
        data.addClass("past");
    } else if (today.time === moment().format("HH")) {
        data.addClass("present");
    } else {
        data.addClass("future");
    }
});



