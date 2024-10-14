require('dotenv').config();  // Load environment variables

// Log to ensure the environment variables are loaded
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);
console.log('GOOGLE_CALLBACK_URL:', process.env.GOOGLE_CALLBACK_URL);

console.log(process.env.GOOGLE_CLIENT_SECRET);
const cors = require('cors');
const express = require ('express');
const passport = require('passport');
const session = require('express-session');
const path = require ('path');
const app = express ();
require('./auth');
app.use (express.json ());
app.use (express.static (path.join (__dirname, 'client')));

function isloggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);

}

app.use(cors({
    origin: 'http://localhost:4000', 
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
    res.json({ username: req.user.displayName });

});

app.listen (3000, () => {
    console.log ('Listening on port 3000');
});