//Es6 Features
//difference between var, let and const
//backtics

//let name = "yemi"
//let course = "Javascript"
//console.log("hello" + name + "welcome to your" + course + "class")

//with backtics
//console.log(`Hello ${name} welcome to your ${course} class`)

//mini task with let and const using template literals

const name = "Yemi"
let age = 19
const track = "FrontnEnd Engineering"

console.log(`Hi ${name} welcome to the ${track} department, we are really  shoked you are ${age} years old`)
age = 91
console.log(`Hi ${name} welcome to the ${track} department, we are really  shoked you are ${age} years old`)

//Spread operator
const num1 = [10, 14, 8, 2]
const num2 = [13, 18, 24, 5]

const combined =[...num1, ...num2]
console.log(combined)

//Rest Operator
function number(...nums){
    return nums.reduce((total,num) => total * num, 1)
}

console.log(number(2, 4, 5))

//combining
const ages = [10, 20, 22, 19]

function addfive(...nums){
    return nums.map(num => num + 5)
}

console.log(addfive(...ages))

//Object Destructuring
const cars = {brand: "BMW", year: 2022, color: "Yellow"}
const {brand, year, color} = cars
console.log(`The ${brand} ${year} is ${color}`)

//NEsted
const profile ={
    namee : "Yemi",
    contact : {
        email: "yemigmail.com",
        phone : "08134413741"
    }
}

const {namee, contact : {email, phone}} = profile

console.log(`Thats ${namee} his email is ${email} and his number is ${phone}`)

//Function Parameters

function showProduct({name, price}){
    console.log(`The ${name} costs ${price}`)
}
showProduct({name : "headphone", price : 200})

//Classes & Inheritance
class student {
    constructor (name, age, score){
        this.name = name
        this.age = age
        this.score = score
    }
    greet(){
        console.log(`Hi my name is ${this.name}, I'm ${this.age} years old, and i got ${this.score} in the exam `)
    }
}
const yemi = new student("Yemi", 19, 91)
yemi.greet()

//Inheritance
class graduate extends student{
    constructor(name, age, score, graduated){
        super(name, age, score)
        this.graduated = graduated
    }
    study(){
        console.log(`${this.name} ${this.age} just graduated from ${this.graduated} with ${this.score}`)
    }
}

const yemithDEV = new graduate("Yemith.dev", 19, 91, "FrontEnd Engineering")
yemithDEV.study()