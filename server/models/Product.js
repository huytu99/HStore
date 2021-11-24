const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/User', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const productSchema = new Schema({
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
    collection: 'Hat',

})

const ProductModel = mongoose.model('product', productSchema)

module.exports = ProductModel