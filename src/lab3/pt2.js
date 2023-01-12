document.getElementById("task3").innerHTML = "BONUS";
//PART2
//--task1
//Calculate the Sum  and  average Of the user entered 
//values Ask the user to  enter how many  num ber he wants to  get the sum 
// of Save the number in array Show him  the sum  and  average of the entered  values
document.getElementById("task1").addEventListener("click", function() {
    var arr=[];
    var numOfElements= Number(prompt("How many numbers?"))
    var sum=0;
    for(i=0; i<numOfElements; i++){
    let num = Number(prompt(`Enter number ${i+1}`))
     arr.push(num);
    }
   arr.forEach(e=> sum +=e)
   alert(`The Sum of your values : ${sum}. & The Avarage: ${sum /numOfElements}`)
 })

 
//--task2
//Create phone book app Ask the user for operation through JS prompt If 
//user enters “add”Ask him  fo r the nam e o f the co ntact and  pho n e num ber
//Then create js object for that contact and add  it to  contacts array
//Then ask him  for new operatio and repeat 
//If user enters “search” Ask him  for so mething  to  search for
//Get the user input and 
// search in t he contacts  array  in  name and phone Then show the 
//user the full  details of that contact Then ask him  for new operatio n an d repeat
document.getElementById("task2").addEventListener("click", function() {
var contacts =[];
var flag= true;
do{
var operation = prompt("Please enter an Operation");
var op=operation.toLocaleLowerCase()
switch(op) {
    case 'add':
        var obj= {};
        obj.name = prompt("Please enter the name of a contact");
        obj.number= prompt("Please enter their phone number");
        contacts.push(obj);
        console.log(contacts);
        break;

    case 'search':
        var searchStr = prompt("Please enter a name or a number");
        var isNum = /^\d+$/.test(searchStr);
        if(isNum) {
          let found = contacts.find((C)=>{
            if(C.number == searchStr)
		    return true;
          }) 
         alert(`FOUND! name : ${found.name}   number: ${found.number}`)
        }else {
            let found = contacts.find((C)=>{
                if(C.name == searchStr)
                return true;
              }) 
              alert(`FOUND! name : ${found.name}   number: ${found.number}`)
        }
        break;

    case 'exit' :
        flag= false;
        break;  

    default : 
    alert("Please enter add, search or exit");
    break;     
}
}while(flag)
});

//BONUS 
//Area calculator Ask the user to  enter t he name of the shape
// he wants to  calc area for Ask the user for the  
//dimensio ns o f that sha peCalculate t he area an d  sho w it to  user

document.getElementById("task3").addEventListener("click", function() {
    var shape = prompt("please enter your desired shape");
    var dim1= Number(prompt("please enter the first dimension"))
    var dim2= Number(prompt("please enter the seconf dimension (optional if you chose circle or a square)"))
    var s= shape.toLocaleLowerCase()
    var area = 0;
    switch(s) {
        case 'circle':
            area = 3.14*(dim1*dim1);
            alert(`the area of your circle is ${area}`)
            break;
    
        case 'rectangle':
            area = dim1*dim2;
            alert(`the area of your rectangle is ${area}`)
            break;
    
        case 'square' :
            area= dim1*dim1;
            alert(`the area of your square is ${area}`)
            break;  
        case 'triangle' :
            area= 0.5*dim1*dim2
            alert(`the area of your triangle is ${area}`)
            break;  
       
        case 'parallelogram' :
            area= dim1*dim2
            alert(`the area of your parallelogram is ${area}`)  
            break;  

         case 'ellipse' :
            area=3.14* dim1*dim2
            alert(`the area of your ellipse is ${area}`)  
            break;

         case 'trapezium' :
            let dim3=  Number(prompt("please enter your third dimension (height)"));
            area= 0.5*(dim1+dim2) * dim3
            alert(`the area of your Trapezium is ${area}`)  
            break;             

        default : 
        alert("Please enter a valid closed shape");
        break;     
        }
    });