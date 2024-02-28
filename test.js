const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fruitsDB')

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 15
    }
})

const Fruit = mongoose.model('Fruit', fruitSchema)

const fruit = new Fruit({
    rating: 18
})

fruit.save()

const banana = new Fruit({
    name: "Banana",
    rating: 100
})

const orange = new Fruit({
    name: "Orange",
    rating: 5
})

// Fruit.insertMany([banana, orange])

Fruit.find({}, 'name').then(function(result) {

    mongoose.connection.close()

    result.forEach(function(fruit) {
        // console.log(fruit.name)
    })
})

const personSchema = new mongoose.Schema({
    'name': String,
    'age': Number
})

const Person = mongoose.model('Person', personSchema)

const person = Person({
    'name': 'John',
    'age': 37
})

// person.save()

