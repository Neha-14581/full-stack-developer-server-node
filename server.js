import express from 'express';
import cors from 'cors';
import helloController
    from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/fsd');
// const express = require('express');
const DB_CONNECTION_STRING = "mongodb+srv://NehaRamachandra:Admissions@2021@cluster0.zmme2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/fsd'
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app)
// app.get('/hello', (req, res) => {res.send('Hello World!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
//app.listen(4000);
app.listen(process.env.PORT || 4000);