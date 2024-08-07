const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");

mongoose.promise = global.promise;

const db ={};
db.mongoose = mongoose;
db.url = dbconfig.url;
db.comments = require("./comment.model.js")(mongoose);

module.exports = db;
