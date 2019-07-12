/*function calculate(){
    var CC = document.getElementById("century").value;
    
    var YY=document.getElementById("year").value;
    
    var MM=document.getElementById("month").value;
    
    var DD=document.getElementById("day").value;
    
}

function day(CC,DD,MM,YY){
    return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
}
function akan(CC,DD,MM,YY){
 alert(parseInt(day(CC,DD,MM,YY)));
}*/

var arr = [];


function century() {
   cc = document.getElementById("CC").value;
   arr.push(cc);
   //alert(arr[0]);
}
function year() {
   yy = document.getElementById("YY").value;
   arr.push(yy);
  // alert(arr[1]);
}
function month() {
   mm = document.getElementById("MM").value;
   arr.push(mm);
   //alert(arr[2]);
}
function day() {
   dd = document.getElementById("DD").value;
   arr.push(dd);
   //alert(arr[1]);
}
function akan(CC,YY,MM,DD){
   return  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7 ;
   }
function calc(){
   alert(parseInt(akan(arr[0],arr[1],arr[2],arr[3]).toFixed()));
   
}

/*var Malename = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var Femalename = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
var weekDays = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];

function display2(){
   if (display() == 0){
       alert("You were born on a "+weekDays[0]);
       }else if(display() == 1){
       alert("You were born on a "+weekDays[1]);
       }else if (display() == 2){
       alert("You were born on a "+weekDays[2]);
       }else if (display() == 3){
       alert("You were born on a "+weekDays[3]);
       }else if (display() == 4){
       alert ("You were born a "+weekDays[4]);
       }else if (display() == 5){
       alert("You were born on "+weekDays[5]);
       }else if (display() == 6){
       alert("You were born on a "+weekDays[6]);
       }else{
       alert("You were born on a "+weekDays[0]);
       }
} */
