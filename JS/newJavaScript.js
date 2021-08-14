const arr= Array()
console.log(arr)

// const arr=[]
// console.log(arr)

// const arr=[]
// co
arr[0]="kingsley"
arr[1]=2
arr[2]={key:"value"}
console.log(arr)

const arr1=[0,1,2,3,4,5,6,7,8,9]
console.log("arr",arr1)

const arr2=[
    'Asabeneh',
    250,
    true,
    {country:"Finland",city:"Helsinki"},
    {skills:["HTML","CSS","JS","React","Python"]}
]
console.log(arr2)
console.log(arr2[3].city)
console.log(arr2[4].skills[0])

//Creating an array using split from a string
let  js="JavaScript"
console.log(js.split(''))
let companiesString="Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"
console.log(companiesString.split(","))

//Methods to manipulate array

const arr3=Array(2)
console.log(arr3)

const eightEmptyValues=Array(8)
console.log(eightEmptyValues)

//Creating static values with fill
console.log(arr3.fill("X"))
console.log(eightEmptyValues.fill("Y"))
const names=[1,2,3,4,5,6]
console.log(names.join(" #"))

//slice array elements
console.log(names.slice(2,names.length))
// // splice method in array 
// console.log(names.splice(2,18,9))
const p=[5,6,7,8]
console.log(names.concat(p))
console.log(names+' '+p)
console.log(names.includes(5))

