require('./models/db');
const express= require('express')
const path=require('path');
const exphbs=require('express-handlebars');
const bodyparser=require('body-parser');


const employeecontroller=require('./controllers/employeecontroller');
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.set('view',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainlayout',layoutDir:__dirname +'/views/layouts/'}));
app.set('view engine','hbs');

app.listen(3000,()=>
{
    console.log('express server satrted at port :3000');
});

app.use('/employee',employeecontroller);