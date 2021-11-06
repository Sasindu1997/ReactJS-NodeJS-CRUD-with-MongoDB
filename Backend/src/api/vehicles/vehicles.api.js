const express = require('express');
const router = express.Router();

const vehicleController = require('../../controllers/vehicles/vehicles.controller');

module.exports = function () {
    router.post('/create', vehicleController.createVehicle);
    router.get('/', vehicleController.getAllVehicles);
    router.get('/:id', vehicleController.getLoadsOfVehicleType);
    router.delete('/delete/:id', vehicleController.deleteVehicle);

    return router;
}