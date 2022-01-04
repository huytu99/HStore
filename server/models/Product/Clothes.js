const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/HStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const clothesSchema = new Schema({
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
    collection: 'Clothes'
})

const ClothesModel = mongoose.model('clothes', clothesSchema)

module.exports = ClothesModel