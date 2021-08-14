for(let i=0;i<3;i++){
let promptAge=prompt("enter your age")
let age=parseInt(promptAge)
if(age>=18){
    document.write("You are old enough to drive")
    document.write("<br>")
}
else if(age<18){
document.write(`You are left ${18-age} year(s) to drive`)
document.write("<br>")
}
}
for(let i=0;i<3;i++){ 
let age=parseInt(prompt("enter your age"))
if(age===29){
    document.write("we are same years old")
    document.write("<br>")
}
else if (age>29){
    document.write(`you are ${age-29} year(s) older than me`)
    document.write("<br>")
}
else if (age<29){
    document.write(`you are ${29-age} year(s) younger than me`)
    document.write("<br>")
}
}


document.write("<br>")
let a=4
let b=3

if (a>b){
    document.write(`${a}is greater than ${b}`)
    document.write("<br>")
}
if(a<b){
    document.write(`${a}is less than ${b}`)
    document.write("<br>")
}
let studentScore=parseInt(prompt("Enter student score"))
gradeStudent(studentScore)

function gradeStudent(studentScore){
  if(studentScore>=80){
      document.write("A")
  }
  else if
  (studentScore>=70){
      document.write("B")
  }
 else if(studentScore>=60){
      document.write("C")
  }
 else if(studentScore>=50){
    document.write("D")
}
else{
    document.write("F")
}
}
document.write("<br>")
let season=prompt("Enter Season")
let season1=season.toLowerCase()

    switch("August"){
        case 'September':
        case "October":
        case "November":
            console.log("Autumn")
            
            break
        case "December":
        case "January":
        case "February":
            console.log("Winter")
            break
        case "March":
        case "April":
        case "May":
            console.log("Spring")
            break
        case "June":
        case "July":
        case "August":
            console.log("Summer")
            break
        default:
            console.log("It's not a month")        

    }

