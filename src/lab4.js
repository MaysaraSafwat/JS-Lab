let oFullName  = prompt ("Pleae enter your Name");
let oAge = Number(prompt("Please enter your age"));
let oMoney = Number(prompt("How much money do u own?"));

//-----------------------
// FUNCTION CONSTRUTOR
//----------------------
function Person (name, age, money) {
  
        this.FullName=name;
        this.age=age;
        this.healthRate = 0;
        this. money= money;
        this.sleepMood= " "

   Person.prototype.sleep = (hour) => {
        if(hour > 7 ){
            this.sleepMood = "lazy"
        }
        else if(hour< 7 ){
            this.sleepMood = "tierd"
        }else{
            this.sleepMood = "happy"
        }
    }
    Person.prototype.eat=(numofMeals)=> {
       switch(numofMeals) {
        case 3 : 
         this.healthRate = 100;
         break;
        case 2 : 
            this.healthRate = 100;
            break;  
        case 1 : 
        this.healthRate =  50;   
       }
    }
    Person.prototype.buy= (items)=> {
        for(i in items) {
            money -= 10;
        }
    }

}

let person1 =  new Person(oFullName, oAge, oMoney);
let sh= Number(prompt("how many hours do u sleep?"))
person1.sleep(sh);
alert(`${person1.FullName}'s mood is : ${person1.sleepMood}`) 



//------------------------
// CLASS
//----------------------
/*class Person {
    constructor(name, age, money) {

        this.FullName = name;
        this.age = age;
        this.healthRate = 0;
        this.money = money;
        this.sleepMood = " ";
        // objects own method
        this.sleep = (hour) => {
            if (hour > 7) {
                this.sleepMood = "lazy";
            }
            else if (hour < 7) {
                this.sleepMood = "tierd";
            } else {
                this.sleepMood = "happy";
            }
        };
        //objects own method
        this.eat = (numofMeals) => {
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
        };
       

    }
    // not objects own i.e inherted from class it's prototype
    buy (items){
        for (let i = 0; i<items ; i++) {
            this.money -= 10;
        }
    };
}

let person1  =  new Person(oFullName, oAge, oMoney);
let rm= Number(prompt("how many items did u buy?"))
person1.buy(rm)
alert(`${person1.FullName}'s Remaining money : ${person1.money}`) 
console.log(Object.getOwnPropertyNames(person1)) // doesn't include buy */



//------------------------
//FACTORY Function 
//-----------------------
/*function Person(name, age, money) {
    return {
       fullName: name,
       age: age,
       money: money,
       healthRate : 0,
       sleepMood : " ",

       eat: function (numofMeals) {
        switch (numofMeals) {
            case 3:
                this.healthRate = 100;
                break;
            case 2:
                this.healthRate = 75;
                break;
            case 1 :
                this.healthRate = 50;
        }
       },
      
      sleep: function(hour) {
        if (hour > 7) {
            this.sleepMood = "lazy";
        }
        else if (hour < 7) {
            this.sleepMood = "tierd";
        } else {
            this.sleepMood = "happy";
        }
      },
    
    buy: function(items) {
        for (let i = 0; i<items ; i++) {
            this.money -= 10;
        }
    }  
    };
   
 }


let person1  =  new Person(oFullName, oAge, oMoney);
let hr= Number(prompt("how many meals do u eat a day?"))
person1.eat(hr);
alert(`${person1.fullName}'s health rate is : ${person1.healthRate}`) */


//------------
//OLOO 
//-----------
/*let Person = {
    init: function(name, age, money) {
        this.FullName = name;
        this.age = age;
        this.healthRate = 0;
        this.money = money;
        this.sleepMood = " ";
    },
  
       eat: function (numofMeals) {
        switch (numofMeals) {
            case 3:
                this.healthRate = 100;
                break;
            case 2:
                this.healthRate = 75;
                break;
            case 1:
                this.healthRate = 50;
        }
       },
    
       sleep: function (hour) {
        if (hour > 7) {
            this.sleepMood = "lazy";
        }
        else if (hour < 7) {
            this.sleepMood = "tierd";
        } else {
            this.sleepMood = "happy";
        }
       },   
   
       buy: function(items) {
        for (let i = 0; i<items ; i++) {
            this.money -= 10;
        }
    }     

  };

  let person1 = Object.create(Person) 
  person1.init(oFullName, oAge, oMoney);
  let hr= Number(prompt("how many meals do u eat a day?")
  person1.eat(hr);
  alert(`${person1.fullName}'s health rate is : ${person1.healthRate}`)
  console.log(person1); */ //note:  person1 doesn't own any of his properties, all came from proptotypal inheritance