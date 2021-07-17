require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 8000;
const dbAddress = "mongodb+srv://{user}:{password}@cluster0.hc6yh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const Board = require('./board');
const router = require('./router')(app, Board)


let mongooseOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};
mongoose.connect(dbAddress, mongooseOption
).then(() => {
    console.log("MongoDB Connect!!")
}).catch((err) => {
    console.log(err)
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Express app listening on port ${port}!`));