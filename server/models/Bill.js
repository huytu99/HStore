const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/HStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const moment = require('moment-timezone');
const dateVN = moment.tz(Date.now(), "Asia/Bangkok");

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
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: dateVN,
    },
    quantity: {
        type: String
    }

},{
    collection: 'Bill'
})

const BillModel = mongoose.model('bill', billSchema)

module.exports = BillModel