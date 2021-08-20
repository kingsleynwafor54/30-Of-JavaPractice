// Declare an empty array
const array=Array()
console.log(array)

//Declare an array with more than five(5) number of elements
const array1=[1,2,3,4,5,6,7,8,9,23,45,67]
console.log(array1)
console.log(array1.length)
console.log(array1[0],array1[Math.floor((array1.length)/2)],array1[array1.length-1])
const mixedArray=["kingsley",{king:"Queen"},12,true,false,'k',null]
console.log(mixedArray.length)

const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0],itCompanies[Math.floor((itCompanies.length)/2)],itCompanies[itCompanies.length-1])
for(let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i].toUpperCase())

}
console.log()
for(let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i].toLowerCase())
}
console.log(itCompanies.toString()+" are big IT companies")
function iscompany(){ 
if(itCompanies[0].includes("Facebook")){
    return "it's the company"
}
else
return "not the company"
}
console.log(iscompany())
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
//  console.log(itCompanies.slice(3))
// let num=3
//  console.log(itCompanies.splice(0,(itCompanies.length-1)-num))
// console.log(itCompanies.slice(1))
console.log(itCompanies.splice(0,itCompanies.length-1))
console.log(itCompanies.splice(0,0))

//Day 7

function square(){
    let num=2
    let sq=num*num
    console.log(sq)
}
square()

function sumArrayValues(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
const numbers=[1,2,3,4,5,6];
console.log(sumArrayValues(numbers))

const areaOfCircle=(radius)=>{
    let area=Math.PI*radius*radius;
    return area;
}

console.log(areaOfCircle(10))
/*unlimited number of parameters in regular function,it is 
 also called variable args in Java*/

 function sumAllNumber(){
     console.log(arguments)
 }
 sumAllNumber(1,2,3,4,5,6,7,8,9)


 //variable args with finding the solution to unlimited sum

 function sumAllNumber1(){
     let sum=0;
     for(let i=0;i<arguments.length;i++){
         sum+=arguments[i]
     }
     return sum
 }

console.log(sumAllNumber1(1,2,3,4,5,6,7))
console.log(sumAllNumber1(10, 20, 13, 40, 10)) 
console.log(sumAllNumber1(15, 20, 30, 25, 10, 33, 40))

//variable args or unlimited number of parameters with arrow function

const sumAllNumber2=(...args)=>{
    console.log(args)
}
sumAllNumber2(1,2,3,4,5,6,7,8,9)

const sumAllNums=(...args)=>{
    let sum=0;
    for (const element of args){
        sum+=element
    }
    return sum
}
//Anonymous Function

const anoymousFun= function(){
    console.log("I am an anonymous function and my value is stored in anonymousFunction")
}
anoymousFun()

function greetings(name='Peter'){
    let message =`${name},welcome to 30 Days Of JavaScript`
    return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))

function generateFullName(FirstName='Asabeneh',lastName="Yetayeh"){
    let space=" "
    let fullName=FirstName+space+lastName
    return fullName
}
console.log(generateFullName())

function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ',  calculateAge(1819))


  function weightOfObject(mass,gravity=9.81){
      let weight =mass *gravity +"N"
      return weight
  }

  console.log("weight of an object in Newton",weightOfObject(100))
  

const weightOfObject2=(mass,gravity=9.81)=>mass*gravity+"N"
   console.log("Weight of an object in Newton:") 

//Exercise
function fullName1(firstName,lastName){
    let space=" "
    fullName= firstName +space+ lastName
    return fullName
}
console.log(fullName1("Kingsley","Nwafor"))

function addNumber(param1,param2){
    sum=param1+param2
    return sum
}
console.log(addNumber(1,2))

const areaOfRectangle=(length,width)=>{
    area=length*width
    return area
}
console.log(areaOfRectangle(5,5))


const perimeterOfRectangle=(length,width)=>{
    perimeter=2*(length+width)
    return perimeter
}

console.log(perimeterOfRectangle(5,5))

const areaOfACircle=(radius)=>{
    area=Math.PI*radius**2
    return area
}
console.log(areaOfACircle(3))

const circumOfCircle=(radius)=>{
    circumference=2*(Math.PI*radius)
    return circumference
}
console.log(circumOfCircle(3))

const density=(mass,volume)=>{
    density1=(mass/volume)+"Kgm-3"
    return density1
}
console.log(density(100,1000))

const speed=(totalDistance,totalTimeTaken)=>{
    speed1=(totalDistance/totalTimeTaken)+"ms-3"
    return speed1
}

console.log(speed(1200,15))


// const person = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city:'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
//       street: 'Heitamienkatu 16',
//       pobox: 2002,
//       city: 'Helsinki'
//     },
//     getPersonInfo: function() {
//       return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//     }
//   }
   
//   const copyPerson = Object.assign({}, person)
//   console.log(copyPerson)
  
//Day 8



// let a="JavaScript"
// let b=10
// function letsLearnScope(){
//   console.log(a,b)
//   if (true){
//     console.log(a,b)
//   }
// }
// console.log(a,b)
//Global variable
let a="JavaScript"
let b=10
const letsLearnScope1=()=>{
  if(true){
    let a='Python'
    let b=100
    console.log(a,b)
  }
  console.log(a,b)
}
letsLearnScope1()
console.log(a,b)

//creating an object with values

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person)










