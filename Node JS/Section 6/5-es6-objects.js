// Object property shorthand

const name = 'Adam'
const userAge = 35

const user = {
    name: name, // ES5
    name, // Shorthand syntax, value comes from the variable and the name is the name of the variable.
    age: userAge,
    location: 'Seattle'
}

console.log(user)

// Object destructing

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// Instead of the following
// const label = product.label
// const stock = product.stock

// Destructured below
const {label:newLabel, stock, rating = 5, justKidding} = product
console.log(newLabel)
console.log(stock)
// rating is now 5 since it didn't exist
// label is now renamed
// justKidding is undefined

// const transaction = (type, myProduct) => {
//     const {} = myProduct
// }
// // OR...
const transaction = (type, {label, stock}) => { // immediately destructuring what I want destructured
    console.log(label, type, stock)
}

transaction('order', product)