const express=require("express");
const cookieParser= require('cookie-parser');
const app=express();
const port =8000;
const expressLayouts= require('express-ejs-Layouts');
const db=require('./config/mongoose');

// to get good quality data from browser
app.use(express.urlencoded());

// for cookies
app.use(cookieParser());

// for static files of css and js
app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and scripts from sub pages into the layout 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use('/',require("./routes/index"));

// setting up ejs view engine 
app.set('view engine' , 'ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err){
        console.log("Error in port is :-",err );
    }
    console.log("server is running on port", port);
});