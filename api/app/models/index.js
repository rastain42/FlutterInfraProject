
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const MONGO_URL = process.env;

const db = {};
db.mongoose = mongoose;
db.url = `${MONGO_URL}`
db.events = require("./event.model.js")(mongoose);

module.exports = db;

