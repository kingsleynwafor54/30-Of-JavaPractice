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

console.log()
console.log()
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// function objectIteration(){ 
//   count=0
//  for(const user in users ){
//    for(const st in user){ 
//    if(users.hasOwnProperty(user).hasOwnProperty(st).hasOwnProperty(isLoggedIn)){
// count++
//    }  
  
//   }
 
// }
// return count  
// }
// console.log(objectIteration())
// function getCounterOfIsLoggedIn(){ 
//   let counter1=0;
// for(let count=0;count<users.length;count++){
//   for(let counter=0;counter<5;counter++){
//   if(users[counter].hasOwnProperty(isLoggedIn)){
//   counter1++
//   }
// }

// }
// return counter1
// }
// console.log(getCounterOfIsLoggedIn()
// const converToArray=Object.keys(users)
// console.log(converToArray.length)
// // for (const user in converToArray){
// // if()
// // }
// function getCounterOfIsLoggedIn(){ 
// let counter=0
// for(let count=0;count<converToArray.length;counter++){
//   if(converToArray[count].hasOwnProperty(isLoggedIn)){
//     counter++
//   } 
// }
// return counter;
// }
// console.log(getCounterOfIsLoggedIn())

// console.log(users.Paul.isLoggedIn)

let count=0;

// for (const goat in users) {
//   if(users[goat].isLoggedIn==false ||users[goat].isLoggedIn==true ){
// count++
//   }
// }

// console.log(count)

//The object/person with the most skills
function skillsObject(){ 
let lengthOfSkills=users.Alex.skills.length

for (const goat in users) {
 if(users[goat].skills.length>lengthOfSkills){
   lengthOfSkills=users[goat].skills.length
   console.log(lengthOfSkills)
   console.log(users[goat].skills)
  //  console.log(users[goat])
 }  
}
}
function point(){ 
let county=0;
for (const goat in users) {
  if(users[goat].points==50){
 county++
  console.log(users[goat].email)
  }  
 }
console.log(county)
}

//MERN developers
for (const goat in users) {
  
 if(users[goat].skills.includes("MongoDB")&&users[goat].skills.includes("Express")&&users[goat].skills.includes("React")&&users[goat].skills.includes("Node")){
 console.log(users[goat].email)
//   }
//   }  
}

}
const kingsley= {kingsley: {
  email: 'kingsley@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
  age: 25,
  isLoggedIn: false,
  points: 50
}
}
// console.log(users)
const c=Object.assign(users,kingsley)
console.log(c)
// for (const goat in users){
// users[goat]=kingsley
// }
// console.log(users)
console.log()
console.log()
console.log()

const values1=Object.values(users)
console.log(values1)

const values2=Object.keys(users)
console.log(values2)

const user = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]
 function login(){
   let id='eefamr'
   for(const props in user){
     if(user[props]._id==id){
       console.log("user exist")
     }
   }
 }
 login()