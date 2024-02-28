const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fruitsDB')

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number
})

const Fruit = mongoose.model('Fruit', fruitSchema)

const fruit = new Fruit({
    name: 'Apple',
    rating: 10
})

fruit.save()