
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const db = {};
db.mongoose = mongoose;
db.url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
db.events = require("./event.model.js")(mongoose);

module.exports = db;

