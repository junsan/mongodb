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

// const fruit = new Fruit({
//     rating: 18
// })

// fruit.save()

// Fruit.findOneAndUpdate({_id: "65dfe3a6b616af0b070a7ad5"} , { name: "Pine"})
const query = { _id: "65dfe3a6b616af0b070a7ad5" }

const banana = new Fruit({
    name: "Banana",
    rating: 100
})

const orange = new Fruit({
    name: "Orange",
    rating: 5
})

// Fruit.insertMany([banana, orange])

// Fruit.find({}).then(function(result) {

//     mongoose.connection.close()

//     result.forEach(function(fruit) {
//         console.log(fruit)
//     })
// })

const personSchema = new mongoose.Schema({
    'name': String,
    'age': Number
})

const Person = mongoose.model('Person', personSchema)

const person = Person({
    'name': 'Jay',
    'age': 37
})

Person.collection.deleteOne( { _id: "65e1a38b93d279da2681d3bd" } )

// person.save()

// Person.collection.insertOne({ name: "Jun", age: 38})

// Person.collection.updateOne({ _id: "65e19e9c1ed52cd47d3e80ee" }, { $set: {name: "Jun"}})

Person.find().then(function(result) {

    mongoose.connection.close()

    result.forEach(function(fruit) {
        console.log(fruit)
    })
})



