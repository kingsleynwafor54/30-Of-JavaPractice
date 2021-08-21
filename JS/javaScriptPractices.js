const dog={}
console.log(dog)
dog.name="Whisky"
dog.color="brown"
dog.legs=4
dog.age="3yrs"
dog.bark= function(){
return "Woo-Woo"
}
console.log(dog)
console.log(dog.name)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark)
console.log(dog.bark())
const values=Object.values(dog)
const keys=Object.keys(dog)
const localDog=Object.assign({},dog)
console.log(values)
console.log(keys)
console.log(localDog)


