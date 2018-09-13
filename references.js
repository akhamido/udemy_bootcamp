var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_0", {useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user");



// User.findOne({email:"Bom.com"}).populate("posts").exec(function(err, user){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })


// Post.create({
//     title: "How to contect",
//     content: "sadfsadf",
// }, function(err, post) {
//     User.findOne({email: "Bom.com"}, function(err, foundUser){
//         if (err) {
//             console.log("didnt find any");
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             })
//         }
//     })
//     console.log(post)
// });



// User.create({
//     email:"Bom.com",
//     name: "Bob Belcher"
// }, function(err, user){
//     err? console.log(err) : console.log(user);
// });
