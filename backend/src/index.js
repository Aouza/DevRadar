const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');


const app = express();
mongoose.connect("mongodb+srv://devmap:devmap@cluster0-upcaa.mongodb.net/devusers?retryWrites=true&w=majority",{
useNewUrlParser: true,
useUnifiedTopology: true
}
);

app.use(express.json()); //entender JSON
app.use(routes);

app.listen(2300);