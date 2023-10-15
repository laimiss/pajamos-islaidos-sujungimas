const mongoose = require('mongoose');

const connectToDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO);
        console.log('connect to DB');
    } catch (error) {
        console.log('nepavyko',error);
    }
}

module.exports = connectToDb;