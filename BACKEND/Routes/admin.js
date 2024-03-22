const express=require('express');
const { body, validationResult } = require('express-validator');
const Admin =require('../Modals/Admin');
const Student=require('../Modals/Student');

const router=express.Router();

//Route 1
router.post('/CreateAdmin',async(req,res)=>{
    const status=301;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({status,errors:errors.array()});
    }
    try {
        const {admin_id,password}=req.body;
        let admin=await Admin.findOne({admin_id});
        if(admin){
            return res.status(400).json({status,error:"Sorry A Admin with this id already exist"});
        }
        admin=await Admin.create({
            admin_id:admin_id,
            password:password
        });
        console.log(user);
        res.status(200).json({message:"User is created Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

//Route 2
router.post('/AdminLogin',async (req,res)=>{
    const success=false;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors:errors.array()});
    }
    try {
        const {admin_id,password}=req.body;
        const admin=await Admin.findOne({admin_id});

        //Check if the admin with this id exist or not
        if(!admin){
            return res.status(401).json({message:"This ID Does Not Exist"});
        }
        //Password Check
        const isPasswordValid=password===admin.password;
        if(isPasswordValid){
            res.status(200).json({message:"Login Successfull"});
        }
        else
            res.status(401).json({message:"Invalid Admin Credentials"});
    }
    catch (error) {
        return res.status(500).json({message:"Internal Server Error"});
    }
});

//Route 3
router.get('/GetStudentList',async(req,res)=>{
    let students=await Student.find({}).select("-password");
    if(!students){
        res.status(404).send("No students are there in the list");
    }
    console.log(students);
    res.status(200).json({message:students});
})

//Route 4
router.delete("/DeleteStudent",async(req,res)=>{
    const {enrollment}= req.body;
    let student=await Student.deleteOne({enrollment});
    if(!student){
         return res.status(404).send("No student with this enrollment found");
    }
    console.log(student);
    res.status(200).send("Student Deleted Successfully");
})

module.exports = router;