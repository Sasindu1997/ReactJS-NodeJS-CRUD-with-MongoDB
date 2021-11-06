const { ObjectId } = require('mongoose').Types;
const Load = require('../../models/loads/loads.model');

const createLoad = async (req, res) => {
    console.log("in service");
    if(req.body){
        const load = new Load(req.body);
        await load.save()
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(err => {
            res.status(500).send({err: err.message});
        })
    }
}


const getAllLoads = async (req, res) => {
    let loads = await Load.find({}).populate('vehicles', '_id name vehicleType description')
    .then(data => {
        res.status(200).send({data: data});
        return loads;
    })
    .catch(err => {
        res.status(500).send({err: err.message});
    })
}

const deleteLoad = async (req, res) => {
    console.log(req.params);
    if(req.params && req.params.id){
        const data = await Load.deleteOne({ _id: ObjectId(req.params.id) });
        return data;
    }
}
const calculateAmount = async (req, res) => {
    if(req.params && req.params.id){

        const load = await Load.findById(req.params.id);

        let totalAmount = 0;

        console.log(totalAmount);

        totalAmount = (load.load * load.amountPrKm);
        
        res.status(200).send({totalAmount: totalAmount});
    }
}


module.exports = {
    createLoad,
    getAllLoads,
    deleteLoad,
    calculateAmount
}