const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.mode.js');
const productRoute = require('./routes/product.route.js');

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRoute)



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});


mongoose.connect("mongodb+srv://admin:Test123!@backenddb.scygtq0.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to the database!");
})
.catch (() => {
    console.log("Connection failed!");
});