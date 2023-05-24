var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://rsa12341:cekAOQABl2gtdg47@cluster0.jabtrnj.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ok");
  var myquery = { image:"Thu Apr 27 2023 22:42:14 GMT+0600 (Bangladesh Standard Time).jpg"};
  var newvalues = { $set: {name: "How are you?", address: "Canyon 123" } };
  dbo.collection("User").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    // console.log(myquery);
    db.close();
    ok(myquery);
    
  });


//   dbo.collection("User").find(myquery, function (err, res) {
//       if (err)
//          throw err;
//     //   console.log(res.name)
//       db.close();
//     });


});

function ok(myquery){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ok");
        dbo.collection("User").findOne(myquery, function(err, result) {
          if (err) throw err;
          console.log(result._id);
          var abc="";
          abc=result._id;
          console.log(abc);
          db.close();
        //   update(result._id)
        });
      });
}




function update(myquery){

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ok");
        // var myquery = { image:"Thu Apr 27 2023 22:42:14 GMT+0600 (Bangladesh Standard Time).jpg"};
        var newvalues = { $set: {id: "How are you?", address: "Canyon 123" } };
        dbo.collection("Check").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          // console.log(myquery);
         
          db.close();
        //   ok(myquery);
          
        });
      
      
      //   dbo.collection("User").find(myquery, function (err, res) {
      //       if (err)
      //          throw err;
      //     //   console.log(res.name)
      //       db.close();
      //     });
      
      
      });


}