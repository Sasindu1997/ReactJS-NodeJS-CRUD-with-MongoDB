const mongoose = require('mongoose');

const LoadSchema = new mongoose.Schema({
    name : { type: String, required: true },
    code : { type: String, required: true },
    load : { type: String, required: true },
    amountPrKm : { type: Number, required: true },
    vehicles : [{ type: mongoose.Schema.Types.ObjectId, required: false, ref : 'vehicles' }]
})

const Loads = mongoose.model('loads', LoadSchema);
module.exports = Loads;