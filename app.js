const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors'); 
const xss = require('xss-clean');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const path = require('path')



app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb' }));

const limiter = rateLimit({windowMs: 15 * 60 * 1000, max: 3000});
app.use(limiter);

app.use('/api/v1', router);

// app.use(express.static('client/dist'));//for frontend only
// app.get('*', (req, res) => {
//     res.sendFile(path,path.resolve(__dirname, 'client', 'dist', 'index.html'))
// });
// this is for frontend







let URI = "mongodb://localhost:27017/MernEcommerce";
let option = {user: "", pass: "" ,autoIndex: true};

mongoose.connect(URI, option).then(()=>{
    console.log("✅ Database Connected");
}).catch((err)=>{
    console.log("❌ Database Connection Error:", err);
});

module.exports = app;

