
//Part one 
//--task1
//Create JS script to  be r un i n web bro wser ,
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
   var n2 = Number(prompt("Please enter another Number"))
   var operation = prompt("Please enter Operation");
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

//PART2
//--task1
//Calculate t he Sum  an d  av erage Of the user e ntered 
//v aluesAsk the user to  enter h o w m any  num ber he wants to  get the sum 
// o fSav e the num ber i n arr aySho w him  the sum  and  av erage o f the entered  v alues

//--task2
//Create pho ne bo o k appAsk the user fo r o perat io n thro ug h J S pro m ptIf 
//user enters “add”Ask him  fo r the nam e o f the co ntact and  pho n e num ber
//Then create js o bject f o r that co ntact and a dd  it to  co ntacts array
//Then ask him  fo r new o peratio n an d repeatIf user enters “search”Ask him  fo r so mething  to  search fo rGet the user in put a nd 
// search in t he co ntacts  array  in  nam e and p ho ne Then sho w the 
//user t he full  details o f th at co n tactThen ask him  fo r new o peratio n an d repeat