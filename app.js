const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('fruitsDB');
    const collection = database.collection('fruits');

    // await collection.insertMany([
    //     { name: 'Apple' },
    //     { name: 'Banana' }
    // ])

    // Query for a movie that has the title 'Back to the Future'
    const fruits = await collection.find().toArray();

    console.log(fruits)

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);