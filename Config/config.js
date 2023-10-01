const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://js-tigers:js-tigers@js-tigers.ygvvvsz.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Database connected')
    })

module.exports = { connection }