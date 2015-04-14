var db= require('./models'),
    express= require('express'),
    bodyParser= require('body-parser'),
    methodOverride= require('method-override'),
    request=require('request'),
    session = require('express-session'),
    app= express();

    app.set("view engine", "ejs");

    app.get('/',function (req,res){
      res.send("What up playa");
    })


    app.listen(3000,function(){
      console.log("Listening Son");
    })