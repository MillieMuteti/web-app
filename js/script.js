function day(CC,DD,MM,YY){
    return(D= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7)
}
