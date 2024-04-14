// initialize the connection to the mongoDB database

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://@cluster0.iqxpvr2.mongodb.net/";

const poolMongo = new MongoClient(uri);

module.exports = { poolMongo };
