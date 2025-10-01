let iRandomNum = Math.round(Math.random());

let strChoice = window.prompt("Write in heads or tails: ");

if (strChoice == "heads") {
    if (iRandomNum ==  1){
        
        window.alert("The flip was heads and you chose heads...you win!");
    
    }
    else {
        window.alert("The flip was tails and you chose heads...you lose =(");
    }
}
else if (strChoice == "tails"){
    if (iRandomNum != 1){
        
        window.alert("The flip was tails and you chose tails...you win!");
    
    }
    else {
        window.alert("The flip was heads and you chose tails...you lose =(");
    }
}
else {
    window.alert("You did not choose heads or tails. ")
}