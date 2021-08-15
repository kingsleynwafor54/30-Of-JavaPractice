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






