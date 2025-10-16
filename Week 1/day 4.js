// deep dive into ohbject

const headphone ={
    brand : "Sony",
    model : "pro22",
    year : 2020,
    price : 70
}
//changing the price
headphone.price = 90
//console.log(headphone)

//adding a new key
headphone.color = "black"
console.log(headphone)

//loop through all keys and add their values
for(let key in headphone) {
    console.log(`${key} : ${headphone}`)
}

//deleting a key
delete headphone.model
console.log(headphone)

//chain method Array of objects
const products =[
    {name : "keyboard", price : 130, inStock : true},
    {name : "headphone", price : 500, inStock : false},
    {name : "pen", price : 50, inStock : true},
    {name : "speaker", price : 410, inStock : true},
    {name : "Printer", price : 230, inStock : false},
]
//apply 10% discount on instock products,and sum up the total pice

const totalDiscount = products
.filter(product => product.inStock)
.map(product => product.price * 0.9)
.reduce((sum, price) => sum + price, 0)

console.log(totalDiscount)