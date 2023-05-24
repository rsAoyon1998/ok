const express = require("express")
const app = express()
const port = 7000
const cors = require("cors")

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://rsa12341:cekAOQABl2gtdg47@cluster0.jabtrnj.mongodb.net/test";

var temp="";
var paris="";
var paris_2="";
var paris_3="";
var france="";
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async (req, res) => {
	res.send("This is working")
})
app.get("/home", cors(), async (req, res) => {
	res.send("This is the data for the home page")
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

app.listen(port, () => {
    console.log("ok")
	console.log(`Listening at http://localhost:${port}`)

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
          console.log('Done!')
          // res.send({message:"Done!"})
          // lg="log_in";
          res.json("log_in")
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

})