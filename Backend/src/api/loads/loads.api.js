const express = require('express');
const router = express.Router();

const loadController = require('../../controllers/loads/loads.controller');

module.exports = function () {
    router.post('/create', loadController.createLoad);
    router.delete('/delete/:id', loadController.deleteLoad);
    router.get('/charges/:id', loadController.calculateAmount);
    router.get('/', loadController.getAllLoads);

    return router;
}