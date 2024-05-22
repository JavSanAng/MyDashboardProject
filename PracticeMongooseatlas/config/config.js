const mongoose = require('mongoose');
require ('dotenv').config();

const dbConennection = async()=>{
    try {
        console.log(process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        console.error('Error conexion DDBB');
        throw new Error ('Error a la hora de iniciar la base de datos');
    }
};

module.exports = {
    dbConennection,
};