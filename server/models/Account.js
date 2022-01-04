const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/HStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    repeatPassword:{
        type: String,
        required: true,
    },
    name:{

        type:String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    
    email:{
        type: String,
        required: true,
    },    
    phone:{
        type: String,   
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    collection: 'User'
})
const AccountModel = mongoose.model('account', AccountSchema)

module.exports = AccountModel