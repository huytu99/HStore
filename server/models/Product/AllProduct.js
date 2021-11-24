// const MongoClient = require("mongodb").MongoClient;

// const url = 'mongodb://localhost/User';

// MongoClient.connect(url, (err, client) => {

//     const db = client.db('User');
    
//     db.listCollections().toArray((err, collections) => {

//        console.log(collections);
//        console.log(typeof collections);


//        client.close();
//     });

// });

// module.exports = MongoClient

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/User', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const pr0ductSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    describe: {
        type: String,
    },
},{
    collection: 'Hat'
})

const pr0ductModel = mongoose.model('product1', pr0ductSchema)

module.exports = pr0ductModel