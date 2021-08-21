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

