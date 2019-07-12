function calculate(){
    var CC = document.getElementById("century").value;
    alert(CC);
    var YY=document.getElementById("year").value;
    alert(YY);
    var MM=document.getElementById("month").value;
    alert(MM);
    var DD=document.getElementById("day").value;
    alert(DD);
}

function day(CC,DD,MM,YY){
    return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
}
function akan(12,23,MM,YY){
 alert(parseInt(day(CC,DD,MM,YY).toFixed));
}

