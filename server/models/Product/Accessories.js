const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/HStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const accessoriesSchema = new Schema({
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
    quantity: {
        type: Number
    }
},{
    collection: 'Accessories'
})

const AccessoriesModel = mongoose.model('accessories', accessoriesSchema)

module.exports = AccessoriesModel