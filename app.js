// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
mongoose.connect("mongodb+srv://admin:admin@cluster0.hvqqeen.mongodb.net/geekShopDB?retryWrites=true&w=majority");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

let Movie = mongoose.model('Movie', 
               new Schema({ title: String}), 
               'movies');   



               

// Works


app.get("/",async (req,res)=>{
 /*  let result = await Movie.find(); */
 let result = {name:'Feri'}

  res.send(result.json())
})

let PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', function(err) {
  console.log("Started listening on ", PORT);
});




