"use strict"

// Premitive DataTypes (number string undefined Boolean null bigInt symbol)
 

let id=1
let Name ="Ali"
let Address
let Pass =true
let fail=null
console.log([id, Name, Address, Pass, fail]);
console.table([id, Name, Address, Pass, fail])
console.log(typeof Name)
console.table([typeof id, typeof Name, typeof Address, typeof Pass, typeof fail ])

// BigInt
let BigNum=1233444n
console.log(typeof BigNum)
// Symbol
let roll=Symbol('123') //its for uniqueness 
let roll2=Symbol('123')   
console.log(typeof roll)
console.log(roll==roll2) //it can't be equal bcz symbol used for uniqueness

// Non-Premitive (refernce dataTypes)
// 3types (Array Object Functions)

// Array
const Subject=["CS","IT","AI"];
// console.log( Subject)
console.log(typeof Subject)
console.log(Subject[2]);

// Object
let myObject={
    Name:"Abrar",
    age:18
}
// console.log( myObject)
console.log(typeof myObject)
console.log(myObject.age)
console.log(myObject.Name="Ahmed")


// Functions
let myFunction=function(Name){
   return  "Hello "+ Name +"!"  ;
}
console.log(myFunction("Kashmiri"))
 
// Object with functions
const Student={
    Name:"Hunzala",
    greet:function(){
        return "Hello"  + this.Name + "!"
    }
}
console.log(Student.greet())


//***************Some Basic intro that how Array Object Function can be used**************//

// Array

const myArray=[1, 2, 3, 4, 5];
console.log(myArray[1])
console.log(myArray.length) //used to find the length of an array

// Object 
const person={
    Name:"Hisham",
    age:13
}
console.log(person.age)

// Functions
const Intro =function(Name){
    return "How are you " + Name + "?"
}
console.log(Intro("Hunain"))

// Function with object

const person1={
    Id:1,
    info:"World",
    msg:function(){
        return "Hello "+ this.info
    }
}
console.log(person1.msg())