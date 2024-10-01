//example using Express.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello root node'); // this gets executed when you run http://localhost:3000/
});

//Include route files
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');

//Use the route

app.use('/users', usersRoute);
app.use('/products', productsRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});