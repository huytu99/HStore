const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/User', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const billSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    total: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

},{
    collection: 'Bill'
})

const BillModel = mongoose.model('bill', billSchema)

module.exports = BillModel