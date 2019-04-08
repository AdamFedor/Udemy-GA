// Example 1
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data) // do the callback at a specific point in time
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

// Example 2
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    },1000)
}

add(1, 4, (sum) => {
    console.log(sum)
})