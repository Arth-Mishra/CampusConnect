const mongoose=require('mongoose');
const mongoURL="mongodb+srv://arthmishra1504:CampusConnect24@cluster0.2mjvlhn.mongodb.net/"

const connectToMongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("Connected to Mongo successfully");
    })
}

module.exports=connectToMongo;