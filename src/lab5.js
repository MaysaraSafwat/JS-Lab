
class Employee {
    constructor(id, name, email, isManger) {
        this.id=id,
        this.name = name,
        this.email=email,
        this.workMood= '',
        this.salary= 1000,
        this.healthRate=0;
        this.isManger=isManger,
        this.sleepMood= ''
    }

    sleep (hour){
        if (hour > 7) {
            this.sleepMood= "lazy";
        }
        else if (hour < 7) {
            this.sleepMood= "tierd";
        } else {
            this.sleepMood= "happy";
        }
    }
    eat (numofMeals) {
         switch (numofMeals) {
              case 3:
                    this.healthRate = 100;
                    break;
              case 2:
                    this.healthRate = 100;
                    break;
              case 1:
                    this.healthRate = 50;
            }
        }  
        
    buy (items){
            for (let i = 0; i<items ; i++) {
                this.salary -= 10;
            }
      };   

    work(hrs){
        if (hrs> 7) {
            this.workMood= "lazy";
        }
        else if (hrs < 7) {
            this.workMood= "tierd";
        } else {
            this.workMood= "happy";
        }
    }  
    setSalary(amount){
        if(amount <1000) {
            this.salary=1000;
        }
        this.salary=amount;
    }
}

class Office {
    #name= ''
    #employees=[]
    get name (){
        return this.#name
    }
    set name (val) {
        this.#name =val;

    }
    getAllEmployees(){
        return this.#employees
    }
    hire(val) {
        this.#employees.push(val)

    }
    fire(empEmail){
        let index = this.#employees.findIndex(e=> e.email == empEmail);
        if(index > -1) {
            this.#employees.splice(index, 1)
           
        }else {
            return 'This Employee doesn"t Exist';
        }
    }
    getEmployee (empEmail) {
     return this.#employees.find(e=> e.email == empEmail)
      
    }

}

//Creating an office 
let office = new Office();
office.name= 'Dunder Mifflin';



//to add employee to office
function addEmployee () {
    var role = prompt('If manager type mngr "\n" if normal employee type nrml "\n" type q if you want to quit')
    var ename = prompt("Enter the Employee's name")
    var email = prompt("Enter the Employee's email")
    var id = Math.floor(Math.random()*1000)
    var newEmp = new Employee(id, ename, email, role== 'mngr' ? true : false )
   
   office.hire(newEmp);
   console.log(office.getAllEmployees());
}

// to get name of employee
function findEmployee () {
    if (office.getAllEmployees().length == 0){
        alert("Hold your horses,There's no Employees");
    }
    else {
        let e = prompt("type the email of the employee you want to find")
        let found = office.getEmployee(e);
        alert(found.name);
    }
}
// to fire an employee
function fireEmployee () {
    if (office.getAllEmployees().length == 0){
        alert("Hold your horses,There's no Employees");
    }
    else {
        let e = prompt("type the email for the employee ypu want to fire")
        office.fire(e);
    }
}

//return the number of employees in the office
function listEmployees () {
    if (office.getAllEmployees().length == 0){
        alert("Hold your horses,There's no Employees");
    }
    else {
       alert(`you have ${office.getAllEmployees().length} employees`)
    }
}

// loop to get an action from user and invoke the corresponding function 
let flag=true;
do{
    var action = prompt("Please type your action \n add for adding new employee \n search- find employee \n fire - fireing an employee \n list- for showing the number of employees\n q- exit");
    var a=action.toLocaleLowerCase()
    switch(a) {
    case 'add':
         addEmployee();   
         break;

    case 'list':
        listEmployees();
          break;
    case 'search' :
          findEmployee();
        break;  
    
    case 'fire' :
           fireEmployee();
         break;          

    case 'q':
            flag= false;
            break;   
    default : 
        alert("Please enter add, search, list, fire or q");
        break;     
    }
    }while(flag) 


