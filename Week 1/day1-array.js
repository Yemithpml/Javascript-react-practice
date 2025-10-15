//Map()
const ages =[10, 27, 16, 19, 45, 32, 60];

const agesDoubled = ages.map(a => a * 2)
console.log(agesDoubled)
//Filter 
const evenAges =ages.filter(a => a % 2 === 0)
console.log(evenAges)

const number =[10,18, 26, 17, 19,33, 45, 60]
const adult = number.filter(n => n >= 18)
const isAdult = number.find(n => n === 18)
console.log(adult)
console.log(isAdult)
const difference =[10, 26, 17, 19]
const total = difference.reduce((sum, diff) => sum + diff, 0)
console.log(total)

//destructuring array

const student ={
    name: "Yemi",
    age: 19,
    isMarried: false,
    scores:{EEE310 : 85, EEE301: 90, ENT311: 75}
}

//destructuring object
const {name, age, isMarried,} = student

//updating isMarried
student.isMarried = true

// Adding new field to object
student.course = "Electrical and Electronics Engineering" 
console.log(student)

//Real world example
const todos =[
    {id:1 , task: "Go to school", isCompleted: true},
    {id:2 , task: "Javascript tutorial", isCompleted: true},
    {id:3 , task: "read a book", isCompleted: false},
    {id:4 , task: "Write a letter", isCompleted: true},
]

const incomplete = todos.filter(todo => !todo.isCompleted)
console.log(incomplete)

const cart =[
    {id:1, product: "Laptop", price: 250000},
    {id:2, product: "Phone", price: 150000},
    {id:3, product: "Tablet", price: 100000},
    {id:4, product: "Smart Watch", price: 50000},
]
const totalcost = cart.reduce((sum, product) => sum + product.price , 0)

console.log (totalcost)

//Building map from scratch
function myMap(arr, callback){
    const result=[]
    for(let i =0; i < arr.length; i++){
        result.push(callback(arr[i], i))
    }
    return result
}

console.log(myMap([1,3,4,5], n => n * 2)) 