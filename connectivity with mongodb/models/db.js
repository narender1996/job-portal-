const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB' , {useNewUrlParser:true},(err)=>{

if(!err){console.log('mongodb connection succeeded')}

else{ console.log('error in db connection :' + err)}
});

require('./employee.model');