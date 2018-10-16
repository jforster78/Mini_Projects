//Tip Calculator
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //Validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter value");
        return;
    }

    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    let total = (billAmt * serviceQual) / numOfPeople;
    //round to decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after the decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Click to call function
var elcalculate = document.getElementById("calculate");
elcalculate.addEventListener("click", calculateTip, false);