// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return  console.log('Unable to connect to MongoDB server');
}
  console.log('Connect to MongoDB server');

//findOneAndUpdate
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('59be6569501111edcbda72ab')
}, {
     $set: {
       completed: false
     }
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
}) ;

//db.close();
});
