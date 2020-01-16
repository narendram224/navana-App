const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')));
const dbConntection = require('./dbconnection/dbConnetion');
const RecordRoute = require('./routes/record.routes');
// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get('/', (req, res, next) => {
    res.status(200).json({
        name: "jone parker"
    })
});

app.use('/audio', RecordRoute);


// listening port 
app.listen(port, () => {
    console.log("server is running on port:", port);
});