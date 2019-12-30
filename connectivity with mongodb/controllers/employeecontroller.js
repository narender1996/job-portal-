const express=  require('express')

var router= express();

const mongoose=require('mongoose')
const employee=mongoose.model('employee');
router.get('/',(req,res)=>
{
    res.render('employee/addoredit',{
        viewTitle:"insert employee"
    })
});

router.post('/',(req,res)=>
{
    insertRecord(req,res);
});

function insertRecord(req,res){
    var employees = new employee();
    employees.fullname = req.body.fullname;
    employees.email = req.body.email;
    employees.mobile = req.body.mobile;
    employees.city = req.body.city;
  employees.save((err,doc)=>{
        if(!err)
        res.redirect('employee/list');
        else{
            console.log('error during record insertion:' + err);
        }
    });
}
    router.get('/list',(req,res)=>
{
    res.json('from list')
});

module.exports=router;