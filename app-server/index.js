const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const auth = require('./routes/auth.route');
const {connectMongoDB} =require('./db/connectMongoDB');
app.use(express.json());
dotenv.config();
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/',auth);
app.listen(5050, () => {
    connectMongoDB();
    console.log('listening on *:5050');

  }); 
    