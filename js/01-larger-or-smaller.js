let iFirstNum = window.prompt("Enter the first integer: ");
let iSecondNum = window.prompt("Enter the second integer: ");

if (iFirstNum > iSecondNum) {
    window.document.write("The larger integer is: " + iFirstNum + "<br>");
}
else if (iFirstNum < iSecondNum){
    window.document.write("The larger integer is: " + iSecondNum + "<br>");
}
else {
    window.document.write("The two integers you have entered are equal: " + iFirstNum + "<br>");
}