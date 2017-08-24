var a = prompt("Podaj wartość liczby a:"),
    b = prompt("Podaj wartość liczby b:"),
    result = (a * a) + (2 * a * b) - (b * b),
    status = "Wynik";

//check if a and b is a number    
if (!isNaN(a) && !isNaN(b)) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log("wynik działania a^2 + 2ab - b^ to: " + result);
    if (result > 0 ) {
        status += " dodatni";  
    } else if (result < 0) {
        status += " ujemny";
    } else {
        status += " zerowy";
    }
// a or b is not a number    
} else {
    status = "Błędne dane wejściowe!";
}
//print info about result or info that input data was wrong
console.log(status);