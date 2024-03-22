const express=require('express');
const { body, validationResult } = require('express-validator');
const Student=require('../Modals/Student');
const Feed = require('../Modals/Feed');
const fetchUser = require('../MiddleWare/fetchUser');

const router=express.Router();


//Route 1:- Get all the feeds of a student
router.get('/fetchallfeeds',fetchUser,async(req,res)=>{
    try {
        const feed=await Feed.find({enrollment:req.user.enrollment});   
        if(!feed){
            return res.status(404).send("No feeds found ");
        }
        console.log(feed);
        res.status(200).send(feed);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

//Route 2:- Add a Feed
router.post('/addFeed',fetchUser,async(req,res)=>{
    try {
        const {title,description}=req.body;
        const errors = validationResult(req);
            if (!errors.isEmpty())  {
                return res.status(400).json({ errors: errors.array() });
            }
        const enrollment =req.user.enrollment;
        let studentName=await Student.findOne({enrollment:enrollment});
        studentName=studentName.name;
        const feed = new Feed({
            title, description, enrollment:enrollment ,username:studentName
        });
        const saveNote = await feed.save();

        res.json(saveNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})
module.exports=router;