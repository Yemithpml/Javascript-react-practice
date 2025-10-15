//For, forEach, for...of 

const cars = ["BMW", "Volvo", "Saab", "Ford"];

for (let i =0; i< cars.length; i++){
    console.log(cars[i])
}

for (const car of cars){
    console.log(car)
}

cars.forEach((car, index) =>{
    console.log(`${car}:  ${index}`)
})

//using loops to count even numbers between 0-50
for (let i =0; i < 51; i++){
    if (i % 2 === 0)
    console.log(i)
}


// high order array method
//chaining practice
const ages = [10, 18, 26, 17, 19,33, 45, 60]
.filter(n => n % 2 !== 0)
.map(n => n * 3)
.reduce((sum, age) => sum + age)
console.log(ages)

const students =[
    {id : 1, name : "Yemi", scores : 84},
    {id : 2, name : "David", scores : 61},
    {id : 3, name : "Gary", scores : 44},
    {id : 4, name : "Tunde", scores : 31},
    {id : 5, name : "Crystal", scores : 91}
]

const passed = students.filter(student => student.scores > 50)
console.log(passed)

const dinstinction = students.filter(student => student.scores > 70)
console.log(dinstinction)

const names = passed.map(passed => passed.name)
console.log(names)

students.forEach((student, index) =>{
    if (student.scores > 50)
        console.log(`${index}: ${student.name} scored ${student.scores}`)
});

//Data Transformation Challenge
const products = [
  { name: "Headphones", price: 200, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
  { name: "Mouse", price: 50, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
];
//available products
const available = products.filter(product => product.inStock === true)
console.log(available)

//10% discount
const discount = products.map(product => product.price * 0.9)
console.log(discount)

//Total revenue value
const total = products.reduce((sum, product) => sum + product.price, 0)
console.log(total)

//Using Chain method
const All = products
.filter(a => a.inStock) //filtering inStock products
.map(a => a.price * 0.9) //applying 10% discount
.reduce((sum, a) => sum + a, 0) //calculating total value

console.log(All)