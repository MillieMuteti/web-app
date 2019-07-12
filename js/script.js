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
   cc = document.getElementById("century").value;
   arr.push(cc);
   //alert(arr[0]);
}
function year() {
   yy = document.getElementById("year").value;
   arr.push(yy);
   //alert(arr[1]);
}
function month() {
   mm = document.getElementById("month").value;
   arr.push(mm);
   //alert(arr[2]);
}
function day() {
   dd = document.getElementById("day").value;
   arr.push(dd);
   //alert(arr[3]);
}
function gender (){
    gg = document.getElementById("gender").value;
    arr.push(gg);
}
    function akan(){
        var cc = document.getElementById("century").value;
        var yy = document.getElementById("year").value;
        var mm = document.getElementById("month").value;
        var dd = document.getElementById("day").value;
        // console.log(cc,
        //     yy,
        //     mm,
        //     dd) 
    const dateR =   Number( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7// * -1;
    // const dateR =   Number( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7 ;
    // console.log(dateR.toFixed())
        return dateR.toFixed()
    }
function display(){
//    return(parseInt(akan(arr[0],arr[1],arr[2],arr[3]).toFixed()));
return parseInt(akan())
   
}
var Malename = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var Femalename = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function display2(){
    console.log(display())
   if (display() === 0){
       alert("You were born on a "+weekDays[0]);
       }else if(display() === 1){
       alert("You were born on a "+weekDays[1]);
       }else if (display() === 2){
       alert("You were born on a "+weekDays[2]);
       }else if (display() === 3){
       alert("You were born on a "+weekDays[3]);
       }else if (display() === 4){
       alert ("You were born a "+weekDays[4]);
       }else if (display() === 5){
       alert("You were born on "+weekDays[5]);
       }else if (display() === 6){
       alert("You were born on a "+weekDays[6]);
       }else{
       alert("something is wrong");
       }
    }
