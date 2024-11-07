const passport = require('passport');
const { PrismaClient } = require('@prisma/client');
const GoogleStrategy = require("passport-google-oauth2").Strategy;
require('dotenv').config();

// Create Prisma client
const prisma = new PrismaClient();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,  // Uses env variable for flexibility
    passReqToCallback: true,
},
  async (request, accessToken, refreshToken, profile, done) => {
    const { id, displayName, emails } = profile;

    let user = await prisma.user.findUnique({
      where: { id: id },
    });
    console.log(id);
    console.log(emails[0].value);
    console.log(displayName)
    // If user doesn't exist, create a new user
    if (!user) {
      user = await prisma.user.create({
        data: {
          id: id,
          email: emails[0].value,
          name: displayName,
        },
      });
    }
    done(null, user);  // Pass the full user object to be serialized
  }
));

// Serialize user by id
passport.serializeUser((user, done) => {
    done(null, user.id);  // Store only user ID in session
});

// Deserialize user by id, retrieving from the database
passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);  // Populate req.user with the full user object
    } catch (error) {
        done(error, null);
    }
});

module.exports = passport;
