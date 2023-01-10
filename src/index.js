//Task 1 
var firstname= prompt("Please enter youyr first name");
var lastname = prompt("Please enter your last name");
var confirmMsg= `Is your Fullname ${firstname} ${lastname}`;
var isConfirmed= confirm(confirmMsg)
if(isConfirmed) {
    var age = prompt("How old are you?")
    var stm = `Welcome ${firstname} ${lastname} you are ${age} years old!`
    document.write(stm)
}



//Task 2 - uncomment to test
/*var num1 = Number(prompt("We're introducing the first release of an addition only calavulator, please enter a number"))
var num2 = Number(prompt("please enter another number"))
if(!isNaN(num1) && !isNaN(num2)){
    var stm = ` ${num1} + ${num2} = ${num1+num2}`
    document.write(stm)
}else{
    alert("Kindly refresh the page and enter Numbers only")
}*/