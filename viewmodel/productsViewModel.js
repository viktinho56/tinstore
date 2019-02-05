
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended:false});
var mongoose =require("mongoose");
mongoose.connect('process.env.MONGOLAB_URI');
var productsSchema = new mongoose.Schema({

    name:String,
    category:String,
    price:Number,
    quantity:Number,
    description:String,
    storename:String,
    storeid:String,
    dateadded:Date
    });
   
var  Todo = mongoose.model('Products',productsSchema); 
var itemOne = Todo({name:"Nike boots",
                    category:"Shoes",
                    price:7500,
                    quantity:5,
                    description:"Very nice shoes",
                    storename:"SPL Stores",
                    storeid:"5c50b3d5c9931a0850761d94",
                    dateadded:25/07/9
                    
                    }).save(function(err){
            if (err) throw err;
             console.log('product saved');
});
module.exports = function (app) {
    //show all products
    app.get("/api/products",function(req,res){
        Todo.find({},function(err,data){
            if (err) throw err;
            res.send({product:data});
            console.log({product:data});
        })
    
    }); 
//show a single product /search for products
    app.get("/api/products/:name",function(req,res){
        Todo.find({name:req.params.name.replace(/\-/g," ")},function(err,data){
            if (err) throw err;
            res.send({bank:data});
//console.log({storename:req.params.name});
        })
    
    }); 
//create a store
    app.post("/api/products/",urlencodedParser,function(req,res){
       // data.push(req.body);
       // res.json(data);
        Todo(req.body).save(function(err,data){
            if (err) throw err;
            res.json(data);
          //  res.render("todo",{todos:data});
            console.log('product saved');
            });
       
       // console.log({todos:req.body});
    }); 
// delete a store
    app.delete("/api/products/:productid",function(req,res){
        Todo.find(req.params.productid.replace(/\-/g," ")).remove(function(err,data){

            if (err) throw err;
            res.json(data)
            
            
            })
        });

        //update a store
    app.put("/api/banks/:productid",urlencodedParser,function(req,res){
            Todo.findById(req.params.productid.replace(/\-/g," "),function(err,data){
    
                if (err) throw err;
                //data.storename = req.body.storename;
               // data.storeid = req.body.storedescription;
                data.name = req.body.name;
                data.price = req.body.price;
                data.quantity = req.body.quantity;
                data.description = req.body.description;
                data.save(function(err) {
                if (err)
                res.send(err);
                res.json(data);
            
            });
               
                
                
                });
            });
            
       //
      //  res.render("todo",{todos:data});
    
}
