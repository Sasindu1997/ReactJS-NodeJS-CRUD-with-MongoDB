const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    name : { type: String, required: true },
    vehicleType : { type: String, required: true },
    description : { type: String, required: true, trim: true},
    loads : [{ type: mongoose.Schema.Types.ObjectId, required: false, ref : 'loads'}]
})

const Vehicles = mongoose.model('vehicles', VehicleSchema);
module.exports = Vehicles;