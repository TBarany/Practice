// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const cors = require('cors');
mongoose.connect("mongodb+srv://admin:admin@cluster0.hvqqeen.mongodb.net/geekShopDB?retryWrites=true&w=majority");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))


let Movie = mongoose.model('Movie', 
               new Schema({ title: String}), 
               'movies');   



               

// Works

const corsOptions = {
  origin:"https://example-22gu.onrender.com"
};
app.use(cors(corsOptions));


app.get("/movie",async (req,res)=>{
  
  let result = await Movie.find();
  res.send(JSON.stringify(result))
})


app.get("/movie/:id",async (req,res)=>{
  let givenID = req.params.id;

 let result = await Movie.findOne({"_id":givenID});


  res.send(JSON.stringify(result))
})

var port = process.env.PORT || 3000;


app.listen(port, '0.0.0.0', function(err) {
  console.log("Started listening on ", port);
});




