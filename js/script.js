




var store = [];


function bCent() {
  var century = document.getElementById("century").value;
  store.push(century);
  //alert(store[0]);
}
function bYear() {
  var year = document.getElementById("year").value;
  store.push(year);
  //alert(store[1]);
}
function bMonth() {
 var month = document.getElementById("month").value;
 if (month>12||)alert("something is wrong");
  store.push(month);
  //alert(store[2]);
}
function bDay() {
  var day = document.getElementById("day").value;
  if(day>31)alert("something is wrong");
  store.push(day);
  //alert(store[3]);
}
function gender (){
   var gender = document.getElementById("gender").value;
   store.push(gender);
   //alert(store[4]);
}

var male = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
var female = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function day(CC,YY,MM,DD){
  return ((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7);
  }
function calculator(){
  var weekDay = parseInt(day(store[0],store[1],store[2],store[3]).toFixed());
  store.push(weekDay);
  alert(weekDay);
  //alert(store[5]);
  }
function display(){
  if (store[4] === "male") {
      var yourName = male[store[5]];
      var day = week[arr[5]];
      alert(" Since you were born on " + day + " Your name is "+ yourName);
      }
      else if (store[4] === "female") {
          var fName = female[store[5]];
          var day = week[store[5]];
          alert(" Since you were born on " + day + " Your name is "+ fName);
      }
  }