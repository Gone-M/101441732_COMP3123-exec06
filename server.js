const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes.js');  // Correctly import the router

const DB_URL = "mongodb+srv://admin:admin1@mycluster.stqzx.mongodb.net/mydatabase?retryWrites=true&w=majority";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database MongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note-taking application - Week06 Exercise</h1>");
});

// Use noteRoutes
app.use('/', noteRoutes);

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
