$(document).ready(function () {

var TDay = $('.DATE');
var Data = new Date();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[Data.getDay()];

var dd = Data.getDate();
var mm = Data.getMonth() + 1;

var yyyy = Data.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var Data = dd + '/' + mm + '/' + yyyy + ', ' + n;
TDay.text(Data);

});