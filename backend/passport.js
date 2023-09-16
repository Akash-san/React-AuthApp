

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const AmazonStrategy = require('passport-amazon').Strategy;
const passport = require('passport');
require('dotenv').config();
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const FACEBOOK_APP_ID=process.env.FACEBOOK_APP_ID ;  
const FACEBOOK_APP_SECRET=process.env.FACEBOOK_APP_SECRET;

const GITHUB_CLIENT_ID=process.env.GITHUB_CLIENT_ID ;  
const GITHUB_CLIENT_SECRET=process.env.GITHUB_CLIENT_SECRET;

const AMAZON_APP_ID=process.env.AMAZON_APP_ID ;  
const AMAZON_APP_SECRET=process.env.AMAZON_APP_SECRET;



// const GOOGLE_CLIENT_ID =
//     "453717584733-711nabfohqqbeevpnkjrshecru2nhd6u.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";

// GITHUB_CLIENT_ID = "3a3c89f39fc14fcee955";
// GITHUB_CLIENT_SECRET = "3e051f356101fade66333df2bb69b108eea30a7d";

// FACEBOOK_APP_ID = "855759006068799";
// FACEBOOK_APP_SECRET = "e2f4bf8fea57a687ecf401d2c33a2d56";

// AMAZON_APP_ID = "amzn1.application-oa2-client.e32a2262b6c8444abc197af6023813be";
// AMAZON_APP_SECRET = "amzn1.oa2-cs.v1.1fe1bde91bc2a704b2735a604037a6f133960073e9dc94c0939875cedd9829c3";



passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)


    }

));
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)


    }

));
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)


    }

));
passport.use(new AmazonStrategy({
    clientID: AMAZON_APP_ID,
    clientSecret: AMAZON_APP_SECRET,
    callbackURL: "/auth/amazon/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)


    }

));

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})

module.exports = passport;