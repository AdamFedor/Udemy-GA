const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    return console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log('Geo Error:', error)
        } // could do else and not the return above
        forecast(data.latitude, data.longitude, (error, data2) => {
            if (error) {
                return console.log('Weather Error', error)
            }
            console.log(data.location)
            console.log(data2)
        })
    })
}