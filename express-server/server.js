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
var url = "mongodb://localhost:27017/";



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



app.post('/image', upload.array('file','name','des','price','user_name'), function (req, res) {
  let { name } = req.body
  let { des } = req.body
  let { price } = req.body
  let { user_name } = req.body
  // res.json("ok")

var temp="";
var paris=name;

var currentDate = new Date();

   
var abc=currentDate+""+user_name;

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    
    console.log(xyz)
  
    
    var myobj = [
      { image: xyz , name: paris, des:des , price:price, user_name:user_name, u_id:abc},
      
      
    ];
    
    console.log("nice")
    
    dbo.collection("Write").insertMany(myobj, function(err, res) {
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


app.post('/image_update', upload.array('file','name','des','price','u_id'), function (req, res) {
  let { name } = req.body
  let { des } = req.body
  let { price } = req.body
  let { u_id } = req.body


var temp="";
var paris=name;



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ok");
  var myquery = { u_id: u_id};

  if(xyz!=''){
  var newvalues = { $set: {image:xyz, name: name,des:des,price:price} };
  }
  else{
    var newvalues = { $set: {name: name,des:des,price:price} };
  }
  dbo.collection("Write").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document Updated");
    db.close();
  });
});

  if(temp=="ok"){
    console.log("++++")
    res.json("ok")
  }


})


















// program to get the file extension

function getFileExtension(filename){

  // get file extension
  const extension = filename.split('.').pop();
  return extension;
}








   app.get('/user_info_2/:id', (req, res) => {
    var user = req.params['id'] 

    

  
    console.log(user)
  
 
   
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ok");
      console.log("Hello")

  
      dbo.collection("Write").find({user_name:user}).toArray(function(err, result) {
        if (err) throw err;
        // console.log(result);
        else{
          res.send(result);
        }
        db.close();
      });
    });

  
  });








app.get('/user_info/:id', (req, res) => {



  var abc = req.params['id'] 

  var name = abc.split(',');
  
  console.log(name)



  const page=name[1];
  const limit=2;

  console.log(name)

  if (name[0] == "0" && name[1]!='0') {


 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    console.log("else if")


    dbo.collection("Write").find({user_name:name[2]}).limit(2).skip((page-1)*limit).toArray(function(err, result) {
      if (err) throw err;
     
      else{
        res.send(result);
      }
      db.close();
    });
  });
}
else if(name[0]!='0' && name[1]!='0') {



  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    console.log("Hello")
   
    

   

    dbo.collection("Write").find({name : name, user_name:name[2]}).toArray(function(err, result) {
      if (err) throw err;
      
      else{
        res.send(result);
      }
      db.close();
    });
  });






}
else{




  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    console.log("else")
   
    

    


    dbo.collection("Write").find({user_name:name[2]}).toArray(function(err, result) {
      if (err) throw err;
      
      else{
        res.send(result);
      }
      db.close();
    });
  });








}


});



app.get('/user_info_s/:id', (req, res) => {



  var abc = req.params['id'] 

  var name = abc.split(',');
  
  console.log(name)



  const page=name[1];
  const limit=2;

  console.log(name)


  
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    console.log("else if")





    dbo.collection("Write").find({name:name[0],user_name:name[1]}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result);
      else{
        res.send(result);
      }
      db.close();
    });
  });

});







app.get('/filter_check_box/:id', (req, res) => {
  


  var abc = req.params['id'] 

  var name = abc.split(',');
  
  console.log(name)

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    console.log("Hello")
   
    

   
   

    dbo.collection("Write").find({des : { $in: name }}).toArray(function(err, result) {
      if (err) throw err;
     
      else{
      res.send(result);
      }
      db.close();
    });
  });



});
















app.post("/delete", async (req, res) => {
	let { a } = req.body
   
	console.log(a)
    
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    var myquery = { u_id: a };
    dbo.collection("Write").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });

})




app.post("/delete_collection", async (req, res) => {
	let { a } = req.body
  let { user } = req.body
   
	console.log(a)
    
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    var myquery = { des: a ,user_name:user};
    dbo.collection("Write").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });

})



app.post("/update_collection", async (req, res) => {
	let { a } = req.body
  let { user } = req.body
  let { name } = req.body
   
	console.log(a)
    
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    var myquery = { des: a ,user_name:user};
    var newvalues = { $set: {des: name} };
    dbo.collection("Write").updateMany(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });

})


app.post("/update", async (req, res) => {
	let { name } = req.body
  let { des } = req.body
  let { price } = req.body
   
  let { a } = req.body
	console.log(name)
    
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");
    var myquery = { u_id: a};
    var newvalues = { $set: {name: name , des: des, price:price} };
    dbo.collection("Write").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
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



    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ok");
        
      
      
        var myobj = [
          { name: france , email: paris, phone: paris_2, pass:paris_3},
          
        ];
        console.log(france)
        dbo.collection("User").insertMany(myobj, function(err, res) {
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
  

	console.log(name)

var lg="";
   
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ok");

var c=0;
dbo.collection('User')
    .countDocuments( { name: france }, (err, count) => {
        
       if(count!=0){
        dbo.collection("User").findOne({name: france}, function(err, result) {
      
        

          
    
          if (err) throw err;
          if(result.pass==paris_3){
          console.log(result.pass);
          console.log(result._id);
          console.log('Done!')
          Update('ok',name)
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



   
  });


  

 

})


function Update(ok,name){
  MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ok");
    
        var currentDate = new Date();
        var myquery = { name: name};
        var newvalues = { $set: {last_log_in: currentDate } };
        dbo.collection(ok).updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          db.close();
        });
      });

}

