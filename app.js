var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Scheme Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create(
//     {
//         name:"Salmon Creek",
//         image: "https://farm3.staticflickr.com/2238/1514148183_092606ba94.jpg"
//     }, function(err, campground){
//         if(err){
//             console.log(err)
//         }
//         else {
//             console.log("Newly created Campground: ");
//             console.log(campground);
//         }
//     }
// )

// var campgrounds =
// [
//     {name:"Salmon Creek", image: "https://farm3.staticflickr.com/2238/1514148183_092606ba94.jpg"},
//     {name:"Grant Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
//     {name:"Salmon Creek", image: "https://farm3.staticflickr.com/2238/1514148183_092606ba94.jpg"},
//     {name:"Grant Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
//     {name:"Salmon Creek", image: "https://farm3.staticflickr.com/2238/1514148183_092606ba94.jpg"},
//     {name:"Grant Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
//     {name:"Salmon Creek", image: "https://farm3.staticflickr.com/2238/1514148183_092606ba94.jpg"},
//     {name:"Grant Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
//
// ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds:campgrounds});
        }
    })
});

app.post("/campgrounds", function(req, res){
    var campName = req.body.name;
    var campImg = req.body.img;
    var newCampground = {name: campName, image:campImg};
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

app.listen(3000, function(){
    console.log("The YelpCamp Server has started!");
});
