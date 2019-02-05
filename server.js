var express = require("express");
var storeViewModel = require("./viewmodel/storeViewModel");
var bankViewModel = require("./viewmodel/bankViewModel");
var productsViewModel = require("./viewmodel/productsViewModel");
var imageViewModel = require("./viewmodel/imageViewModel");
var  app = express();
//set up template engine
app.set("view engine","ejs");

//static files
app.use(express.static('./public'));
app.render("Hello");
//fire viewmodel

//storeViewModel(app);
//bankViewModel(app);
//productsViewModel(app);
//imageViewModel(app);

//set port
app.listen(8080,function(){
console.log("now listening on port 5000");
});
