const mongoose = require('mongoose');

const MONGOURI = "mongodb+srv://gayathri456:12345@mern.ngv5u.mongodb.net/nodeauthjwt?retryWrites=true&w=majority";

const dbConnection = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to DB');
    } catch (e) {
        console.log(e);
    }
};
module.exports = dbConnection;