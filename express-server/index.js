// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://rsa12341:cekAOQABl2gtdg47@cluster0.jabtrnj.mongodb.net/test";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("ok");
  
//   var france="Vive la France";

//   var paris="Je t'aime Paris";
//   var myobj = [
//     { name: france , address: paris, id: 1998},
    
//   ];
//   dbo.collection("ok").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });