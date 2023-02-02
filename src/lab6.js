class Shape {
    name;
    sides;
    sideLength;
    constructor( name, s, sl){
        this.name = name;
        this.sides = s;
        this.sideLength = sl
    }
    calcPerimeter () {
        console.log(`Perimeter of ${this.name}: ${this.sides * this.sideLength}`) ;
    }
}
//-------------------
//task 1
//-------------------
let t1 = document.getElementById("task1");
t1.addEventListener("click", function (){
    let square = new Shape("Square" ,4 , 4);
    square.calcPerimeter();

    let triangle =  new Shape("Triangle" , 3 , 4);
    triangle.calcPerimeter();
})


//---------------
//Task 2 
//---------------

let t2 = document.getElementById("task2");
t2.addEventListener("click", function(){
    class Square extends Shape{
          
        constructor(sl){
            super("Square", 4, sl)
        }
        calcArea() {
            console.log(`This square's area = ${this.sideLength * this.sideLength}`)
        }
    }

    let square1 = new Square(4);
       square1.calcArea();
       square1.calcPerimeter();

})

//--------------
//task 3 
//--------------
let t3 =  document.getElementById("task3")
t3.addEventListener("click", function(){
    class Triple{
        static customName = "Tripler";
        static description ="I triple any number you provide";
        
        static calculate(n){
          if(!n){
            return 1*3;
          }  
          return n*3;
        }
    }

    class SquaredTriple extends Triple {
        static logdescription;
        static description = "square the triple of any number you provide"

        static calculate(n) {
            return super.calculate(n) * super.calculate(n);

        }
    }
console.log(Triple.description)// "I triple any number you provide"
console.log(Triple.calculate())//3
console.log(Triple.calculate(6)) // 18

console.log(SquaredTriple.calculate(3))//81
console.log(SquaredTriple.description)//square the triple of any number you provide
console.log(SquaredTriple.logdescription)//undefied
console.log(SquaredTriple.customName)//Tripler

})
