//URL's Of our project by sharma
//General  API's
//login, get feed, add feed, update feed, delete feed
// get resource , add resource, update resource, delete resource
// post message, get message 
// get internship, post internship , update internship, delete internship
// get profile data
//Admin API's
// register student, get all student data, delete post , remove student 

const express=require('express');
const connectToMongo=require('./db.js');

connectToMongo();

const app=express();
const port=5000;
app.use(express.json);

//Available Routes
app.use('/api/auth', require('./Routes/auth.js'));
app.use('/api/feed',require('./Routes/feed.js'));
app.use('./api/community',require('./Routes/community.js'));
app.use('/api/internship',require('./Routes/internship.js'));
app.use('/api/supplies',require('./Routes/supplies.js'));

app.listen(port,()=>{
    console.log(`CampusConnect Backend server started at ${port} successfully`);
});