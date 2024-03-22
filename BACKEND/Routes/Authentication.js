const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const Student = require("../Modals/Student");
const jwt=require('jsonwebtoken');
const fetchUser = require('../MiddleWare/fetchUser');
const JWT_SECRET="CampusConnect24"

//Create Student Data
router.post('/createUser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('enrollment').isLength({ min: 12 }),
    body('password').isLength({ min: 5 }),
], async (req, res) => {
    const status = 301;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ status, errors: errors.array() });
    }

    try {
        const { name, email, enrollment, password } = req.body;
        let user = await Student.findOne({ enrollment });
        if (user) {
            return res.status(400).json({ status, error: "Sorry! a user with this enrollment already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        user = await Student.create({
            name: name,
            email: email,
            enrollment: enrollment,
            password: secPass,
        });
        const data={
            user:{
                enrollment:user.enrollment
            }
        }
        const auth_Token=jwt.sign(data,JWT_SECRET);

        console.log(user);
        res.status(200).json({ user, auth_Token });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
});



//Login Api
router.post('/login', [
    body('enrollment').isLength({ min: 12 }),
    body('password').isLength({ min: 5 })
],
    async (req, res) => {
        const success = false;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        try {
            const { enrollment, password } = req.body;

            const studentData = await Student.findOne({ enrollment });

            // Check if the user exists or not

            if (!studentData) {
                return res.status(401).json({ message: 'This Enrollment Number Does Not Exist' });
            }

            // Password Check

            const isPasswordValid = await bcrypt.compare(password, studentData.password);
            const data={
                user:{
                    enrollment:studentData.enrollment
                }
            }

            const auth_Token=jwt.sign(data,JWT_SECRET);

            if (isPasswordValid) {
                res.status(200).json({ message: 'Login successful', auth_Token });
            } else {
                res.status(401).json({ message: 'Invalid Password' });
            }
        }
        catch (error) {
            console.error('Error in Login API:', error.message);
            res.status(500).json({ message: 'Internal Server error in Login API' });
        }
    });


// Update User Data API

router.put('/updateUser', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
], async (req, res) => {
    const status = 301;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ status, errors: errors.array() });
    }

    try {
        const { enrollment ,email, password } = req.body;

        let user = await Student.findOne({ enrollment });

        if (!user) {
            return res.status(404).json({ status, error: "User not found" });
        }

        // If enrollment is being updated, check if the new enrollment already exists

        if (email !== user.email) {

            const existingUserEmail = await Student.findOne({ email });
            if (existingUserEmail) {
                return res.status(400).json({ status, error: "Sorry! a user with this email already exists" });
            }
        }

        // Update user data
        user.email = email;

        if (password) {
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(password, salt);
            user.password = secPass;
        }

        await user.save();
        console.log(user);
        res.status(200).json({ message: "User data updated successfully", user });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
});


//Get Student Information
router.get('/getStudent',fetchUser,async(req,res)=>{
    try {
        const studentId=req.user.enrollment;
        console.log(studentId)
        const student=await Student.findOne({enrollment:studentId});
        if(!student){
            return res.send("Wrong authtoken");
        }
        res.send(student);
        console.log(student);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router;