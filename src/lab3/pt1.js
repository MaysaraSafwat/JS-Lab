document.getElementById("task3").innerHTML = "BONUS";

//--task1
// User will enter  his User name , Password If username = “admin” and password = “421$$”
// Show him message “Welcome login success”
//If he entered  inco rrect  usernam e o r passwo rdTell him  which  data ent ered wro ng
document.getElementById("task1").addEventListener("click", function() {
   const name = "admin";
   const pass = "421$$"; 
   var username = prompt("please enter your username");
   var password = prompt("please enter your password");
   var nameCheck = name.localeCompare(username)
   var passwordCheck=  pass.localeCompare(password)
   if(nameCheck == 0 && passwordCheck ==0){
     alert("Login Success, Welcome")
   }else if(nameCheck !=0 && passwordCheck==0) {
    alert("Wrong username please try again");
   }else if(nameCheck ==0 && passwordCheck !=0) {
    alert("Wrong password please try again");
   }else {
    alert("Wrong Credentials");
   }

})

//--task2
//User will enter first number Then 
//enter an o pe ratio n (sum ,m ulti,s ubtract, d iv isio n,m o duls)
//Then enter seco nd  num berThen do  the o peratio n  and sho w the res ult to  use
document.getElementById("task2").addEventListener("click", function() {
   var n1 = Number(prompt("Please enter a Number"));
   var operation = prompt("Please enter Operation");
   var n2 = Number(prompt("Please enter another Number"))
 
   var res =0;
   switch(operation) {
            case '+':
                res = n1+n2;
                alert(`Resault: ${res}`)
                break
            case '-':
               res=n1-n2;
               alert(`Resault: ${res}`)
                break
            case '*':
                res=n1*n2;
                alert(`Resault: ${res}`)
                break
            case '/':
                res=n1/n2;
                alert(`Resault: ${res}`)
                break
            case '%':
                res= n1%n2;
                alert(`Resault: ${res}`)
                break;

   
}})

//BONUS 
//Using  lap2  add more features as following 
//User will be able to  use  the last result to  do  
//new operation on it As example user enter  1 then sum  then 3  then 
//show 4  then sum  then  5  then sho w 9  and so on
document.getElementById("task3").addEventListener("click", function() {
    var n1 = Number(prompt("Please enter a Number"));
    var res =0;
    flag=true;
    do{
    var operation = prompt("Please enter Operation (type exit if you want to stop the calculator)");
    if(operation.toLocaleLowerCase()== 'exit'){
       flag= false;
       break;
    } 
    var n2 = Number(prompt("Please enter another Number"))    
    switch(operation) {
             case '+':
                res = n1+n2;
                 alert(`Resault: ${res}`)
                 n1=res;
                 break;
                 case '-':
                    res=n1-n2;
                    alert(`Resault: ${res}`)
                    n1=res;
                    break
                 case '*':
                     res=n1*n2;
                     alert(`Resault: ${res}`)
                     n1=res;
                     break
                 case '/':
                     res=n1/n2;
                     alert(`Resault: ${res}`)
                     n1=res;
                     break
                 case '%':
                     res= n1%n2;
                     alert(`Resault: ${res}`)
                     n1=res;
                     break;
       
 }}while(flag)
})