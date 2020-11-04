const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {config} = require('./config');
const PORT = process.env.PORT || 5000;
const server = express();

server.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://ghostmurda.github.io'],
    exposedHeaders: ['set-cookie']
}));

server.use('/api', require('./api/router'));

const start = async () => {
    try{
        await mongoose.connect(config.mongoUrl, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        server.listen(PORT, () => (
            console.log(`server started on port ${PORT}`)
        ))
    } catch(err){
        console.log(err);
    }
}

start();
