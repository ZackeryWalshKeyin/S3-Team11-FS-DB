// initialize the connection to the mongoDB database

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/";

const poolMongo = new MongoClient(uri);

module.exports = { poolMongo };
