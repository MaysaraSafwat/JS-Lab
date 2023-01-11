 //Task1 - tell age 
document.getElementById("task1").addEventListener("click",  function(){
    var age = Number(prompt("Please Enter Your Age"));
    if(!isNaN(age)){
        if(1<age && age<=10){
            alert("Child!")
        }else if(11<= age  && age <=18) {
            alert("Teen!")
        }else if(19<= age  && age <=50) {
            alert("Grown Up!")
        }else if(age>50){
            alert("Old!")
        }
    }
    else{
        alert("please enter an number")
    }

})

//task 2 - count numbers of vowls in a string

document.getElementById("task2").addEventListener("click", function() {
    var str= prompt("Please enter a String");
    var lowerStr= str.toLocaleLowerCase()
    var counter = 0;
    for( i=0; i<lowerStr.length; i++){
        let char = lowerStr[i];
        console.log(char);
        switch(char) {
            case 'a':
                counter++;
                break
            case 'e':
                counter++;
                break
            case 'i':
                counter++;
                break
            case 'o':
                counter++;
                break
            case 'u':
                counter++;
                break;

        }
    }
   alert(`your string had ${counter} vowels`) 
})

//task 3 - conver 24hr to 12hr clock

document.getElementById("task3").addEventListener("click", function() {
    var hours= new Date().getHours();
    var mins= new Date().getMinutes();
    if(hours ==0 || hours==00){
        hours = 12;
        alert(`it's ${hours}:${mins} am`)
    }
    else if(hours >=12) {
        hours = ((hours + 11) % 12 + 1);
        alert(`it's ${hours}:${mins} pm`)
    } else if(hours <12) {
        alert(`it's ${hours}:${mins} am`)
    }
    
})