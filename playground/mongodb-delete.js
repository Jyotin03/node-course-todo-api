// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return  console.log('Unable to connect to MongoDB server');
}
  console.log('Connect to MongoDB server');

//deleteMany
// db.collection('Users').deleteMany({text: 'Eat lunch'}).then((result) => {
//  console.log(result);
//});


//deleteOne
// db.collection('Users').deleteOne({text: 'Eat lunch'}).then((result) => {
//  console.log(result);
// });

//findOneandDelete
db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
 console.log(result);
});

//db.close();
});
