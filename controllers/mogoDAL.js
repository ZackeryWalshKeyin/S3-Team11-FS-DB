const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongodb://localhost:27017/

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
    return;
  }

  console.log('Connected successfully to MongoDB');
  // perform actions on the collection object
  client.close();
});