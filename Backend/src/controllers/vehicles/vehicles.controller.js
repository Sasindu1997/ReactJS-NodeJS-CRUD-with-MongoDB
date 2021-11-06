const { ObjectId } = require('mongoose').Types;
const Vehicle = require('../../models/vehicles/vehicles.model');


const createVehicle = async (req, res) => {
    if(req.body){
        const vehicle = new Vehicle(req.body);
        await vehicle.save()
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(err => {
            res.status(500).send({err: err.message});
        })
    }
}

const getAllVehicles = async (req, res) => {
    let vehicles = await Vehicle.find({}).populate('loads', 'name code load amountPrKm vehicles')
    .then(data => {
        res.status(200).send({data: data});
        return vehicles;
    })
    .catch(err => {
        res.status(500).send({err: err.message});
    })
}

const getLoadsOfVehicleType = async (req, res) => {
    if(req.params && req.params.id){
        await Vehicle.findById(req.params.id)
        .populate('load', 'name code load amountPrKm')
        .then(data => {
            res.status(200).send({loads: data.loads});
        })
        .catch(err => {
            res.status(500).send({err: err.message});
        })
    }
}


const deleteVehicle = async (req, res) => {
    console.log(req.params);
    if(req.params && req.params.id){
        const data = await Vehicle.deleteOne({ _id: ObjectId(req.params.id) });
        return data;
    }
}

module.exports = {
    createVehicle,
    getAllVehicles,
    getLoadsOfVehicleType,
    deleteVehicle
}