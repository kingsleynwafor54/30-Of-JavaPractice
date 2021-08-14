// let firstname='kingsley'
// const isTrue=False
// const lastname
// let middleName=null
// document.write(typeof(firstname))
// console.log(firstname,isTrue,lastname,middleName)


//Create a function that returns an array of two(2)numbers in javascript
const number=[1,2]
function getNumbers(){
    return number
}
  console.log(getNumbers())

let ujay=getNumbers()
console.log(ujay)
const[one,two]=ujay
console.log(one ,two)
let array=[1,2,3,4,5,6]
const [y,k,j]=array

console.log(j)
let word="JavaScript"
console.log(word[0])

//Non-Primitive Data Types
let nums=[1,2,3]
nums[0]=10
console.log(nums)

//   checking if two non primitive data type are equal
let num=[1,2,3]
let numbers=[1,2,3]
console.log(num==numbers)


//Object as a non primitive 
let userOne={
  name:'Kingsley',
  role:"teaching",
  country:"Nigeria"
}

let userTwo={
  name:'Kingsley',
  role:"teaching",
  country:"Nigeria"
}
console.log(userOne==userTwo)
/* 
This shows that though two object might be thesame but they are actually different in memory

Math Object in Js provides a lot of methods to work with numbers
*/
const PI=Math.PI
console.log(PI)
console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(-5,3,20,4,5,10))
const random =Math.random()
console.log(random)
const numb=Math.floor(Math.random()*11)
console.log(num)
console.log(Math.sin(30))
//Strings are texts,which are under single,double,back-tick quote.

let space=" "
let firstName="Asabeneh"
let lastName="Yetayeh"
let country="Finland"
let city="Helsinki"
let language ="JavaScript"
let job="teacher"
const age=25
// concatenation
let fullName= firstName+space +lastName+ space+city
console.log(fullName)

//Long Literal Strings
const Paragraph="My name is kingsley Nwafor,I am a physicist and I am also a software Engineer.\
I also do music and also I love the Lord with all my heart\
Following what is going on as a trend in the society of today,I will like to say I am fortunate to be living \
in the light of the word of God."

console.log(Paragraph)
console.log('Day 1\t3\t5')
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


//Template literals(Template Strings)
let a=2
let b=3
console.log(`The sum of ${a} and ${b} is ${a+b}`)

let personInfoTwo=`I am  ${fullName}.I am ${age}.I live in ${country}`


let string= "30DaysOfJavaScript"

console.log(string.includes("Days"))

//Changing Data Type(Casting)
//Exercises

let challenge="30 Days Of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(1,challenge.length-1))
console.log(challenge.substring(1,challenge.length))
console.log(challenge.slice(3,challenge.length))
console.log(challenge.split(""))
console.log(challenge.split(" "))
let socialMedia="Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"
console.log(socialMedia.split(","))
console.log(challenge.replace("30 Days Of JavaScript","30 years Of Prayers"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(j))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))
let sentence="You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf("because"))
console.log(sentence.lastIndexOf("because"))
console.log(sentence.search("because"))
let challenge1=" 20 days of worship"
console.log(challenge1.trim())
console.log(challenge.repeat(2))

//Exercise 3
let numOne=4
let numTwo=3
let sum=numOne+numTwo
let diff=numOne-numTwo
let mult=numOne*numTwo
let div=numOne/numTwo
let remainder=numOne%numTwo
let powerOf=numOne**numTwo

console.log(sum,diff,mult,div,remainder,powerOf)

const Pi=3.14
let radius=100
const areaOfCircle=Pi*radius*radius
console.log(areaOfCircle)
const gravity=9.81
let mass=72

const weight=mass *gravity
console.log(weight)

//Comparison Operators

console.log(3=="3")
//Increment Operator
//pre-increment
let count=0
console.log(++count)
console.log(count)
//post-increment
let count1=0
console.log(count1++)
console.log(count1)
 let count2=0
 console.log(count2--)
 console.log(count2)
 //Ternary Operators
 let isRaining=false
 isRaining ?console.log("you need a rain coat."):console.log("No need for a rain coat.")
 
let number1=-5
number>0 ?console.log(`${number1} is a positive number`)
:console.log(`${number1} is a negative number`)

console.log(3+4*5);
//Window Methods
//alert(challenge)
// let number3 = prompt('Enter number', 'number goes here')
// console.log(number3)
// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree)

//Date Object .In javaScript time and date are created using JavaScript Date Object
const now=new Date()
const now1=new Date()
const getTime=new Date()
console.log(now)
console.log(now1)
console.log(getTime.toLocaleTimeString())
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDay())

// let firstName="kingsley"
// let lastName="Nwafor"
// let country="Nigeria"
let City="Lagos"
// let age= 12
let isMarried= false
const Year=new Date()
let year=Year.getFullYear()
//Using typeOf method to check for the type of the element

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(City))
console.log(typeof(age))
console.log(typeof(year))
console.log(typeof(isMarried))

console.log("10"==10)
console.log(parseInt("9.8")==9.8)

let sentence1="Ali is a boy"
let sentence2="Simbi is a girl"
if (typeof(sentence1)==typeof(sentence2)){
  console.log(sentence1)
}
if (typeof(sentence2)==typeof(sentence1)){
  console.log(sentence2)
}

if(sentence1="Ali is a boy"){
  console.log(sentence1)
}



