const express  = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const loadAPI = require('./src/api/loads/loads.api');
const vehiclesAPI = require('./src/api/vehicles/vehicles.api');
const loadsApi = require('./src/api/loads/loads.api');


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useCreateIndex : true,
    useNewUrlParser : true,
    useFindAndModify : false,
    useUnifiedTopology : true,
}, (error) => {
    if(error){
        console.log('Database Error : ', error.message);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database synced');
});

app.route('/').get((req,res)=> {
    res.send('Server is running');
});


app.use('/loads', loadsApi());
app.use('/vehicles', vehiclesAPI());


app.listen(PORT, () => {
    console.log(`Server is tunning on PORT ${PORT}`);
})