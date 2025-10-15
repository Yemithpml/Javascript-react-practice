//Functions
//add
function add(a, b){
    return(a + b)
}
console.log(add(2, 5))

//subtract
function subtract(a, b){
    return (a - b)
}
console.log(subtract(44, 20))

//divide
function divide(a, b){
    return(a / b)
}
console.log(divide(20, 3))

//average
function average(a, b, c){
    return(a + b + c / 3)
}
console.log(average(19, 15, 13))

//reduce function
function sumArray(numbers){
    return numbers.reduce((sum, num) => sum + num, 0)
}
console.log(sumArray([10, 39, 44]))

//area of a circle
function area(radius){
    return(3.142 * radius * radius)
}
console.log(area(10))

//arrow functions
//to multiply
const multiply = (a,b) => a*b
console.log(multiply(4,2))

//to return default name
const greet = (name = "user1") => 
    `hi, ${name}`;

console.log(greet())

console.log(greet("yemi"))

//finding numbers greater than 10 in an array

const numbers=[12, 5, 33, 9, 99, 54]

const Big = numbers.filter(number => number > 10)
console.log(Big)

//doubles sum of numbers in an array

const doubleSum = numbers.map(num => num * 2).reduce((sum, num) => sum + num)
console.log(doubleSum)

//HOFs
//a hof that runs a function twice

function twice(func){
    func()
    func()
}
function about(){
    console.log("I'm yemi a 300lvl student")
}
twice(about)

//function that filters even number
function myFilter(arr, callback){
    const result= []
    for(num of arr){
        if(callback(num)){
            result.push(num)
        }
    }
    return(result)
}

const isEven = num => num % 2 === 0;
console.log(myFilter([10,14,77,12,9,12,21], isEven))

//building my filter method
function filter(arr, callback){
    const result =[]
    for(i of arr){
        if (callback(i)){
            result.push(i)
        }
    }
    return(result)
}
console.log(filter([1,10,16,19,22], i => i % 2 === 0))

//createLogger(prefix)
function createLogger(prefix){
    return function(message){
        console.log(`${prefix} : ${message}`)
    }
}

const info = createLogger("INFO")
const error = createLogger("ERROR")

info("server started")
error("Unable to connect database")
