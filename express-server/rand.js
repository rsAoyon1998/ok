const express = require('express')
const app = express()
const port = 5001
const cors = require('cors')
const multer = require('multer')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://rsa12341:Q8KvaA3EGHIQiBOi@cluster0.jabtrnj.mongodb.net/test";





app.post("/reservation", async (req, res) => {
  // let { car } = req.body
  console.log("car")
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


 


