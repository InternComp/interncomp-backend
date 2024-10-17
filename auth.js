const passport = require('passport');
const {PrismaClient}=require('@prisma/client');
const GoogleStrategy = require( "passport-google-oauth2").Strategy;
require('dotenv').config()

//Create prisma client
const prisma = new PrismaClient();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback : true
},
  async(request, accessToken, refreshTOken, profile, done) => {
    const{id, displayName, emails}=profile;
    let user=await prisma.user.findUnique({
      where: {id:id}
    });
    //if user doesnt exist create else proceed
    console.log(id);
    console.log(emails[0].value);
    console.log(displayName)
    if(!user){
      user =await prisma.user.create({
        data:{
          id:id,
          email:emails[0].value,
          name:displayName,
        },
      });
    }
    done(null, profile)
  }
));

passport.serializeUser ((user, done) => {
  done (null, user);
});

passport.deserializeUser ((user, done) => {
  done (null, user);
});