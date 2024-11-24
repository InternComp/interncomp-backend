const {PrismaClient}=require('@prisma/client');
const cors = require('cors');
const express = require ('express');
const passport = require('passport');
const session = require('express-session');
const path = require ('path');
const app = express ();
const prisma = new PrismaClient();
require('dotenv').config();  // Load environment variables

// Log to ensure the environment variables are loaded
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);
console.log('GOOGLE_CALLBACK_URL:', process.env.GOOGLE_CALLBACK_URL);

console.log(process.env.GOOGLE_CLIENT_SECRET);

require('./auth');
app.use (express.json ());
app.use (express.static (path.join (__dirname, 'client')));

function isloggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);

}

app.use(cors({
    origin: ['http://localhost:4000'],
    credentials: true, 
    methods: ['GET'], // need to allow get 
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));


app.get ('/', (req, res) => {
    res.sendFile ('index.html');
});

app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

app.use (passport.initialize ());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: 'http://localhost:4000/WelcomeNewUserPage',
        failureRedirect: '/auth/google/failure'
}));

app.get('/auth/google/failure', (req,res) => {
    res.send("Something went wrong!");
});

app.get('/auth/protected', isloggedIn, (req,res)=>{
    res.json({ username: req.user.displayName , userid: req.user.id, email: req.user.email}, );

});
app.get('/user/:id',async(req,res) =>{
    const {id} =req.params; //api request parameter which is user id in our case
    const user=await prisma.user.findUnique({
        where: {id:id}
    });
    if (user){res.json(user)}; //send user object to the front end where front end can decode the user info from 
    // the database 
});

app.get('/companies/:id',async(req,res) =>{
    const {id} =req.params; //api request parameter which is company id in our case
    const companies=await prisma.companies.findUnique({
        where: {id:id}
    });
    if (companies){res.json(companies)}; //send company object to the front end where front end can decode the user info from 
    // the database 
});

app.get('/companies',async(req,res) =>{
    try{
        const companies = await prisma.companies.findMany();
        res.status(200).json(companies);
    }
    catch (error){
        res.status(500).json({error: "Unable to fetch companies"});
    }
});

app.get('/auth/logout', (req, res) => {
    req.logout(err => {
        if (err) {
            return res.status(500).send("Logout failed");
        }
        req.session.destroy(() => {
            res.clearCookie('connect.sid'); // Adjust cookie name if needed
            res.status(200).send("Logged out successfully");
        });
    });
});


app.listen (3000, () => {
    console.log ('Listening on port 3000');
});

