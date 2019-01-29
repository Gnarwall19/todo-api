// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server:\n', err);
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Learn TypeScript',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo\n', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // insert new doc to users collection (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Kaitlin',
    //     age: 27,
    //     location: 'NC'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});