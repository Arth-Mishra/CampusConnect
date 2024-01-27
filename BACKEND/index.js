const cors = require('cors');
const connectToMongo = require('./db.js');
const express = require('express');
const app = express();


app.use(cors());
app.use(express.json());



// Available Routes
app.use('/api/auth', require('./Routes/Authentication.js'));
// app.use('/api/feed', require('./Routes/feed.js'));
// app.use('/api/community', require('./Routes/community.js'));
// app.use('/api/internship', require('./Routes/internship.js'));
// app.use('/api/supplies', require('./Routes/supplies.js'));

const startServer = async () => {
    app.listen(5000, () => {
        console.log(`Server is running on http://localhost:${5000}`);
    });
    await connectToMongo();
};

startServer();
