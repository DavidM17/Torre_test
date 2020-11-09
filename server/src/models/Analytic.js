const {Schema, model } = require('mongoose')

const contractortaSchema = new Schema({
    name: {type: String, require: true},
    lastname: {type: String, require: true},
    identification: {type: Number, require: true, unique: true},
    birthday: {type: String, require: true},
    address: {type: String, require: true},
    phone: {type: String, require: true},
    email: {type: String, require: true},
    company: {type: String, require: true},

},{
    timestamps: true,
    versionKey: false
})


module.exports = model("Contractor",contractortaSchema)
