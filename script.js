function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = document.getElementById("result");

     // Evaluates if principal its zero or negative
     if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
       return;
    }

    var interest = principal*years*rate/100;
    
    //Calculates the future years using the actual year
    var d = new Date();
    d = d.getFullYear() + parseInt(years);

    result.innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>"
                    + "at an interest rate of <mark>" + rate + "</mark>.<br/>"
                    + "You will receive an amount of <mark>" + interest + "</mark>,<br/>"
                    + "in the year <mark>" + d +"</mark>";

}

//Modify value of rate number onchanges
function displayRate()
{
    var range = document.getElementById("rate").value;
    var rate = document.getElementById("rateNumber").innerHTML= range + "%";
}