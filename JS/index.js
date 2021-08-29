//This is a single line comment in javascript
//welcome to 30days of javascript
/*
the man is going to the market to buy some 
provisions
*/
let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(num => sum += num)
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))


let x=function(){
    console.log("Ali is a boy")
}

let y =function(callback){
    console.log("Simbi is a girl")
    callback()
}
y(x)




//creating set from an array

const languages=[
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French"
]
const setOfLanguages=new Set(languages)
console.log(setOfLanguages)

const languages1=[
    "English",
    "Finish",
    "English",
    "French",
    "Spanish",
    "English",
    "French"
]
const setOfLanguage1=new Set(languages1)

for(const k of setOfLanguage1){
    console.log(k)
}
//Adding an element to a set


//Creating an empty set

const companies=new Set()
console.log(companies.size)

companies.add("Google")
companies.add("Facebook")
companies.add("Amazon")
companies.add("Oracle")
companies.add("Microsoft")

console.log(companies.size)
console.log(companies)
const companies1=["Google","Facebook","Amazon","Oracle","Microsoft"]
const setOfTechComp=new Set()
for(const company of companies1){
    setOfTechComp.add(company)
}
console.log(setOfTechComp)

//Deleting an element a set

console.log(setOfTechComp.delete("Google"))
console.log(setOfTechComp.size)

const languages3=["English",
"Finish",
"English",
"French",
"Spanish",
"English",
"French",]
const langSet=new Set(languages3)
console.log(langSet)
console.log(langSet.size)

const counts=[]
const count={}

for(const l of langSet){
    const filteredLang=languages3.filter((lng)=>lng===1)
    console.log(filteredLang)
    counts.push({lang:l,count:filteredLang.length})

}

console.log(counts)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result=words.filter(word=>word.length>6);

console.log(result)

//counting unique item in an array
const numbers3=[5,3,2,5,5,9,4,5]
const setOfNumbers=new Set(numbers)

console.log(setOfNumbers)
//finding the unioun
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)
//finding the intersect of sets
let e=[1,2,3,4,5,6]
let f=[3,4,5,6]
let E=new Set(e)
// let F=new Set(F)

// let c=a.filter((num)=>)
//Destructuring an Object
const rectangle={
    width:20,height:10,area:200
}
let {width,height,area,perimeter}=rectangle
console.log(rectangle)
console.log(width,height,area,perimeter)

//Object parameter without destructuring

// const rectangle

const rect={
    width:20,
    height:10
}
const calculatePerimeter=rectangle=>{
    return 2*(rectangle.width+rectangle.height)
}
console.log(calculatePerimeter(rect))

const nums=[1,2,3,4,5,6,7,8,9,10]
let[num1,num2,num3,...rest]=nums
console.log(num1,num2,num3)
console.log(rest)
