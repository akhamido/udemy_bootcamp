var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB = require("./seeds.js");
seedDB();

mongoose.connect("mongodb://localhost/yelp_camp",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds:campgrounds});
        }
    })
});

app.post("/campgrounds", function(req, res){
    var campName = req.body.name;
    var campImg = req.body.img;
    var campDescription = req.body.description;
    var newCampground = {name: campName, image:campImg, description: campDescription};
    //Create new campgrounds and save to debug
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    })
});
app.get("/campgrounds/new", function(req, res){
    res.render("new")
})

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    })
})

app.listen(3000, function(){
    console.log("The YelpCamp Server has started!");
});
