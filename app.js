var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds =
[
    {name:"Salmon Creek", image: "https://farm3.staticflickr.com/2238/1514148183_092606ba94.jpg"},
    {name:"Grant Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
    {name:"Munapun Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f6c779a2e4b7bc_340.jpg"},
    {name:"Salmon Creek", image: "https://farm3.staticflickr.com/2238/1514148183_092606ba94.jpg"},
    {name:"Grant Hill", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
    {name:"Munapun Creek", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f6c779a2e4b7bc_340.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var campName = req.body.name;
    var campImg = req.body.img;
    var newCampground = {name: campName, image:campImg};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new")
})

app.listen(3000, function(){
    console.log("The YelpCamp Server has started!");
});
