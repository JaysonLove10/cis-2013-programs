//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to display and the then runs the loop

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	var i=0;  // sets first number in the Fibonacci series to 0
	var j=1;  //sets second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = i +" " + j +" ";//initialize the Fibonacci series output to include the first two numbers
    if (isNaN(intCount) || intCount<2 || intCount>100)
    {
        alert("Error: The number is not less than 2 and not greater than 100.");
        $("total_fib").value="";
    }
while (intCount>2)
{
    k=i + j;
    stringOutput = stringOutput + k + " ";
    i=j;
    j=k;
    intCount--;
}
$("output").value=(stringOutput);
}; 
	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM
// Push solution back to Output through DOM



window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate;
};  