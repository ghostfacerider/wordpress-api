// var express = require("express");
// const multer = require("multer");
// var router = express.Router();

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// //const upload = multer({ dest: 'uploads/' })
// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.render("post", { title: "New Post " });
// });

// /* post submitted */

// router.post("/", upload.single("featured_image"), function (req, res, next) {
//   console.log(req.file.buffer);
//   res.redirect("/");
// });

// var WPAPI = require("wpapi");
// //You must authenticate to be able to POST (create) a post
// var wp = new WPAPI({
//   endpoint: "http://thewave.com//wp-json/",
//   username: "admin",
//   password: "itCampus2022",
// });

// let newPostId = "";

// wp.posts()
//   .create({
//     // "title" and "content" are the only required properties
//     title: "Your Post Titlee",
//     content: "Your post content",
//     // Post will be created as a draft by default if a specific "status"
//     // is not specified
//     status: "publish",
//   })
//   .then(function (response) {
//     // "response" will hold all properties of your newly-created post,
//     // including the unique `id` the post was assigned on creation
//     newPost = response.id;
//     console.log(response.id);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// wp.media()
//   // Specify a path to the file you want to upload, or a Buffer
//   .file(req.file.buffer, req.file.originalname)
//   .create({
//     title: "My awesome image",
//     alt_text: "an image of something awesome",
//     caption: "This is the caption text",
//     description: "More explanatory information",
//   })
//   .then(function (response) {
//     // Your media is now uploaded: let's associate it with a post
//     var newImageId = response.id;
//     return wp.posts().id(newPostId).update({
//       featured_media: newImageId,
//     });
//   })
//   .then(function (response) {
//     console.log("Media ID #" + response.id);
//     console.log("is now associated with Post ID #" + response.post);
//   });

// module.exports = router;
