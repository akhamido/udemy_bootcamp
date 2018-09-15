var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    passport   = require("passport"),
    LocalStrategy   = require("passport-local"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User        = require("./models/user"),
    methodOverride = require("method-override"),
    flash = require("connect-flash"),
    seedDB = require("./seeds.js");

var commentRoutes       = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),
    indexRoutes         = require("./routes/index");

app.use(flash());
//mongoose.connect("mongodb://localhost/yelp_camp",{useNewUrlParser: true});
//mongoose.connect("mongodb://akhamido:Yu06UnzJ@@ds149672.mlab.com:49672/yelpcamp",{useNewUrlParser: true});
mongoose.connect("mongodb://ds149672.mlab.com:49672/yelpcamp", {
    auth: {
        user: "akhamido",
        password: "Yu06UnzJ@"
    }, useNewUrlParser: true

})
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//seedDB();

// Passport Configuration
app.use(require("express-session")({
    secret: "blah",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})
app.use(indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);
app.listen(process.env.PORT, process.env.IP, function(){
//app.listen(3000, function(){
    console.log("The YelpCamp Server has started!");
});
