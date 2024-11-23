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
    res.json({ username: req.user.displayName , userid: req.user.id,email:req.user.email} );

});
app.get('/user/:id',async(req,res) =>{
    const {id} =req.params; //api request parameter which is user id in our case
    const user=await prisma.user.findUnique({
        where: {id:id}
    });
    if (user){res.json(user)}; //send user object to the front end where front end can decode the user info from 
    //teh database 
});

app.post('/user/:id',async(req,res)=>{
    const {id} =req.params; //api request parameter which is user id in our case
    const{name, program, university,location,institution,gender}=req.body;
    const user=await prisma.user.findUnique({
        where: {id:id}
    });
    if(user){
        const setUser=await prisma.user.update({
            where: {id:id},
            data:{
                name, 
                program, 
                university,
                location,
                institution,
                gender         
            }
        });
        console.log(setUser)
        res.json({ data: setUser })
    }

}
    

)

app.post('/companies/:id/reviews', async (req, res) => {
    //find company using its id then, the company object has a review array, push a review object to THAT reviews array
    const { id } = req.params;  
    const { reviewerId, companyId, review_text, rating} = req.body;
    try {
        
        const company = await prisma.companies.findUnique({
            where: { id: id }
        });
        console.log(req.body);
        //we create a new review object from the incoming data
        const newReview=await prisma.reviews.create({
            
            data:{
                reviewerId: String(reviewerId),
                companyId: companyId,
                review: review_text,
                rating: rating
            }
        })

        //I dont think we need to send the newReview back a reload should update it? prompt a reload maybe?
        //adding a review with a companyID should automatically associate it to the company in the database
    } catch (error) {
        console.error('Failed:', error);
        res.status(500).send('Internal server error');
    }
});


app.get('/companies/:id',async(req,res) =>{
    const {id} =req.params; //api request parameter which is company id in our case
    const companies=await prisma.companies.findUnique({
        where: {id:id},
        include: {reviews: true}
    });
    if (companies){res.json(companies)}; //send company object to the front end where front end can decode the user info from 
    //the database 
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


// Create a new Job
app.post('/jobs', async (req, res) => {
    const { companyImage, companyName, title, description, location, employmentType, workType, internType, jobLink, linkedin, skillsRequired, basicQualifications, preferredQualifications, keyResponsibilities, additionalInfo} = req.body;
  
    try {
        const newJob = await prisma.job.create({
            data: {
                companyImage,
                companyName,
                title,
                careerPages,
                description,
                location,
                employmentType,
                workType,
                internType,
                jobLink,
                linkedin,
                skillsRequired,
                basicQualifications,
                preferredQualifications,
                keyResponsibilities,
                additionalInfo
            },
        });
        res.status(201).json(newJob);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create job' });
    }
});
  
  // Get all Jobs
app.get('/jobs', async (req, res) => {
    try {
        const jobs = await prisma.jobs.findMany({
            //include: {
                //reviews: true,
                //salaries: true
           // }
        });
      res.json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
});
  
  // Get a specific Job by ID
app.get('/jobs/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
        const job = await prisma.jobs.findUnique({
            where: { id },
            include: {
                //reviews: true,
                //salaries: true
            }
        });
        if (job) {
            res.status(200).json(job);
        } else {
            res.status(404).json({ error: 'Job not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch job' });
    }
});
  
  // Update a Job by ID
app.put('/jobs/:id', async (req, res) => {
    const { id } = req.params;
    const { companyImage, companyName, title, description, location, employmentType, workType, internType, jobLink, linkedin, skillsRequired, basicQualifications, preferredQualifications, keyResponsibilities, additionalInfo } = req.body;
  
    try {
      const updatedJob = await prisma.job.update({
        where: { id },
            data: {
                companyImage,
                companyName,
                title,
                careerPages,
                description,
                location,
                employmentType,
                workType,
                internType,
                jobLink,
                linkedin,
                skillsRequired,
                basicQualifications,
                preferredQualifications,
                keyResponsibilities,
                additionalInfo
            }
        });
        res.json(updatedJob);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update job' });
    }
});
  
  // Delete a Job by ID
app.delete('/jobs/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
        await prisma.job.delete({
        where: { id }
      });
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete job' });
    }
});
  


app.listen (3000, () => {
    console.log ('Listening on port 3000');
});