let years = [1855, 1648, 1420];
let countries = ["Canada", "France", "Nigeria", "Thailand", "United States"];
let mess = [53, "Canada", true, 1420];

//document.write(years);
//console.log(years);
let newYears = years.slice();
//console.log(newYears);
let newArray = years.concat(countries);
//console.log(newArray);
//console.log(years.join(mess));
years.pop();
//years.push(1890);
//years.unshift(1990);
countries.unshift("Zimbabwe")
countries.push("Mali");
//console.log(countries.sort());
let product = {
    name: "Apple",
    category: "Fruits",
    price: 1.99,
    nutrients: {
        carbs: 0.95,
        fats: 0.3,
        protein: 0.2
    }
}
//console.log(product["nutrients"]["carbs"]);
let foodValues = {
    "Apple": {
        price: 2,
        fat: 0.1,
        energy: 0.5,
        protein: 0.7,
        calories: 0.85,
        vitamins: 0.45
    },
    "Orange": {
        price: 1,
        fat: 0.01,
        energy: 0.4,
        protein: 0.3,
        calories: 0.6,
        vitamins: 0.56
    },
    "Burger": {
        price: 6,
        fat: 0.41,
        energy: 0.4,
        protein: 0.6,
        calories: 0.94,
        vitamins: 0.3
    },
    "Orange": {
        price: 3,
        fat: 0.01,
        energy: 0.6,
        protein: 0.2,
        calories: 0.2,
        vitamins: 0.1
    }
}
//console.log("apple calories " + foodValues["Apple"]["calories"]);
//console.log(foodValues.Apple);
document.write("<div class='card'>"  + 'Apple' 
+ "<div class='header'>" +'Price: '+ foodValues['Apple']['price'] + "</div>" 
+ "<div class='header'>" +'Fat: '+ foodValues['Apple']['fat'] + "</div>"
+ "<div class='header'>" +'Energy: '+ foodValues['Apple']['energy'] + "</div>"
+ "<div class='header'>" +'Protein: '+ foodValues['Apple']['protein'] + "</div>" 
+ "<div class='header'>" +'Calories: '+ foodValues['Apple']['calories'] + "</div>"
+ "<div class='header'>" +'Vitamins: '+ foodValues['Apple']['vitamins'] + "</div>"
+"</div>");
let sub = function subtotal(price, quantity){
    return price * quantity;
}
let result = sub(23.0, 4);
//console.log("subtotal is $" + result);
//document.write(countries);
//document.write(mess);

//document.write("mess length of array is = " + mess.length + " \n");
//document.write("\n countries length of array is = " + countries.length + " \n");
//document.write("years length of array is = " + years.length + " \n");
