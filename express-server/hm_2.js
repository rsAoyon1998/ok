// const express = require('express')
// const app = express()




const express = require('express');
const app = express();

app.use(express.json());

const port = 5000
const cors = require('cors')
const multer = require('multer')


router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://rsa12341:qAo5EN2QoIGBpZBm@cluster0.kgl0odv.mongodb.net/_";



var xyz="";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, 'images/')

    cb(null, '../frontend/src/img/')
  },
  filename: (req, file, cb) => {
    console.log(file.originalname)
    const result1 = getFileExtension(file.originalname);
    console.log(result1);
    let { name } = req.body
    // console.log(name)
    


    var currentDate = new Date();

   
    var abc=currentDate+"."+result1;
    
    const newText = abc.replace(/\s/g, "");
    console.log(newText); 


    console.log(abc)


    // xyz=abc;
    xyz=newText;

    




    // cb(null, file.originalname)
    cb(null, newText)
    
  },
})

const upload = multer({ storage: storage })

app.use(cors())



app.post('/image', upload.array('file','name','des','price'), function (req, res) {
  let { name } = req.body
  let { des } = req.body
  let { price } = req.body
  // res.json("ok")

var temp="";
var paris=name;

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    
    console.log(xyz)
  
    // var paris="Je t'aime Paris";
    var myobj = [
      { image: xyz , name: paris, des:des , price:price},
      
      
    ];
    
    console.log("nice")
    
    dbo.collection("User").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: "+ res);
      temp="ok";
      db.close();
    });

    
  });

  if(temp=="ok"){
    console.log("++++")
    res.json("ok")
  }


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





// program to get the file extension

function getFileExtension(filename){

  // get file extension
  const extension = filename.split('.').pop();
  return extension;
}




// passing the filename


// const result2 = getFileExtension('module.txt');
// console.log(result2);


 


app.post("/check", async (req, res) => {
  let {pl}=req.body
  let {dl}=req.body
  let {date}=req.body
  let {hr}=req.body
  let {min}=req.body
  let {car}=req.body

// let { name } = req.body
    
//     let { pass } = req.body
//     france=name;
    
  
//     paris_3=pass;
    // let { name } = req.body

	// console.log(pl)
  // console.log(dl)
  // console.log(date)
  // console.log(hr)
  // console.log(min)
  // console.log(car)

  console.log("xyz")



  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    
    console.log("xyz")
  
    // var paris="Je t'aime Paris";
    var myobj = [
      { From: pl , To: dl, Date:date , Hr:hr, Min:min, Car:car },
      
      
    ];
    
    // console.log("nice")
    
    dbo.collection("reservation").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Inserted")
      db.close();
    });

    
  });




})

app.get('/data', (req, res) => {



  // console.log("Hello")
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    console.log("Hello")
    dbo.collection("User").find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result);
      else{
      res.send(result);
      }
      db.close();
    });
  });





});


app.get('/r_data', (req, res) => {



  // console.log("Hello")
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    console.log("Hello")
    dbo.collection("reservation").find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result);
      else{
      res.send(result);
      }
      db.close();
    });
  });





});




app.get('/user_info', (req, res) => {

  // let {name}=req.body

  // console.log(name)
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    console.log("Hello")
    dbo.collection("ok").find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result);
      else{
      res.send(result);
      }
      db.close();
    });
  });





});


app.post("/post_ad", async (req, res) => {
	let { name } = req.body
    let { email } = req.body
	let { Type } = req.body
	let { pass } = req.body
	console.log(name)
    console.log(email)
	console.log(Type)
	console.log(pass)
    // console.log(name)

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ok");
      
      console.log(xyz)
    
      // var paris="Je t'aime Paris";
      var myobj = [
        { name: name , email: email,  pass:pass},
        
        
      ];
      
      console.log("nice")
      
      dbo.collection(Type).insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: "+ res);
        temp="ok";
        db.close();
      });
  
      
    });


})



app.post("/post_pol", async (req, res) => {
	let { name } = req.body
    
	console.log(name)
  
    // console.log(name)

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ok");
      
      
    
      // var paris="Je t'aime Paris";
      var myobj = [
        { name: name },
        
        
      ];
      
      console.log("nice")
      
      dbo.collection("Type").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: "+ res);
        temp="ok";
        db.close();
      });
  
      
    });


})




app.post("/post_name", async (req, res) => {
	let { name } = req.body
    let { email } = req.body
    let { phone } = req.body
    let { pass } = req.body
    france=name;
    
    paris=email;
    paris_2=phone;
    paris_3=pass;
    // let { name } = req.body

	// console.log(name)


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ok");
        
       
      
        // var paris="Je t'aime Paris";
        var myobj = [
          { name: france , email: paris, phone: paris_2, pass:paris_3},
          
        ];
        console.log(france)
        dbo.collection("ok").insertMany(myobj, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          temp="ok";
          db.close();
        });
      });

if(temp=="ok"){
  console.log("++++")
  res.json("ok")
}

})




app.post("/log_in", async (req, res) => {
	let { name } = req.body
    
    let { pass } = req.body
    france=name;
    
  
    paris_3=pass;
    // let { name } = req.body

	console.log(name)

var lg="";
   
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
   
   
   



//

// dbo.collection("ok").find({name: france}).countDocuments(function (err, res) {
//   if (err)
//      throw err;
//   console.log(res)
//   db.close();
// });

var c=0;
dbo.collection('ok')
    .countDocuments( { name: france }, (err, count) => {
        // console.log(count);
       if(count!=0){
        dbo.collection("ok").findOne({name: france}, function(err, result) {
      
        

          
    
          if (err) throw err;
          if(result.pass==paris_3){
          console.log(result.pass);
          console.log(result._id);
          console.log('Done!')
          // res.send({message:"Done!"})
          // lg="log_in";
          res.json(result.name)
          db.close();
          }
          else{
              console.log('Not Ok!')
              res.json("not_log_in")
          db.close();
          }
        });
      
      
      }
      else{
        res.json("not_log_in")
        console.log("Incorrect User Name")
      }
    });

///

  

   
  });

  // if(lg=="log_in"){
  //   console.log("++++")
  //   res.json("log_in")
  // }

 

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");

    var currentDate = new Date();
    var myquery = { name: name};
    var newvalues = { $set: {last_log_in: currentDate } };
    dbo.collection("ok").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });




 
 

})



app.post("/post_update", async (req, res) => {
  let { name } = req.body
  let { email } = req.body
  let { phone } = req.body
  let { pass } = req.body

let { id } = req.body


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ok");
  var currentDate = new Date();
  var myquery = { name: id};
  var newvalues = { $set: {name: name ,email:email,phone:phone,pass:pass,last_Update: currentDate} };
  dbo.collection("ok").updateOne(myquery, newvalues, function(err, result) {
    if (err) throw err;
    console.log("1 document updated");
    res.json('ok')
    db.close();
  });
});




// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("ok");

//   var currentDate = new Date();
//   var myquery = { name: name};
//   var newvalues = { $set: {last_Update: currentDate } };
//   dbo.collection("ok").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });





})



app.get('/know_user_info/:id', (req, res) => {

  // let { id } = req.body

  var abc = req.params['id'] 

  

  console.log(abc)
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    console.log("Hello")
    dbo.collection("ok").find({name:abc}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result);
      else{
      res.send(result);
      }
      db.close();
    });
  });





});


app.get('/know_user_reservation/:id', (req, res) => {

  // let { id } = req.body

  var abc = req.params['id'] 

  

  console.log(abc)
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    console.log("Hello")
    dbo.collection("reservation").find({name:abc}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result);
      else{
      res.send(result);
      }
      db.close();
    });
  });





})