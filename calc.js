/*
1. Basically have to take input 
2. now perform the below arithmetic operations accordingly
*/

alert("Welcome to Sashank's Calculator");
// for add
Add = document.getElementById("add");
function addition(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    sum = parseInt(number1.value) + parseInt(number2.value)
    
    document.getElementById("Result").innerHTML = "The Result is "+ sum;
}
Add.addEventListener("click", addition);


Sub = document.getElementById("subb");
function subtraction(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    sub = parseInt(number1.value) - parseInt(number2.value)
    
    document.getElementById("Result").innerHTML ="The Result is "+ sub;
}
Sub.addEventListener("click", subtraction);


Mul = document.getElementById("mull");
function multiplication(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    mul = parseInt(number1.value) * parseInt(number2.value)
    
    document.getElementById("Result").innerHTML =  "The Result is "+ mul;
}
Mul.addEventListener("click", multiplication);


Div = document.getElementById("divv");
function division(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    div = parseInt(number1.value) / parseInt(number2.value)
    
    document.getElementById("Result").innerHTML = "The Result is "+ Math.round(div *100)/100;
}
Div.addEventListener("click", division);


