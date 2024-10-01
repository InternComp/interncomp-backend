const express = require('express');
const router = express.Router();

//Define a route
router.get('/', (req, res) => {
    res.send('this is product route'); // this gets executed when user visit http://localhost:3000/products
});

router.get('/101', (req, res) => {
    res.send('this is product 101 route'); // this gets executed when user visit http://localhost:3000/products101
});

router.get('/102', (req, res) => {
    res.send('this is product 102 route'); // this gets executed when user visits http://localhost:3000/products102
});

module.exports = router;