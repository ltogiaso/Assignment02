let iNumFromUser = window.prompt("Write in a number between 1 - 100: ");

if (1 <= iNumFromUser && iNumFromUser < 60){
        console.log("You received an F.");
    }
else if (60 <= iNumFromUser && iNumFromUser < 70) {
    console.log("You received a D.");
}
else if (70 <= iNumFromUser && iNumFromUser < 80) {
    console.log("You received a C.");
}
else if (80 <= iNumFromUser && iNumFromUser < 90) {
    console.log("You received a B.");
}
else if (90 <= iNumFromUser && iNumFromUser <= 100) {
    console.log("You received an A.");
}
else{
    console.log("Please enter ONLY numbers between 1 - 100.");
}