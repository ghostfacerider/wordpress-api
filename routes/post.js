var express = require("express");
const multer = require("multer");
var router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
var WPAPI = require("wpapi");
//You must authenticate to be able to POST (create) a post
var wp = new WPAPI({
  endpoint: "http://thewave.com//wp-json/",
  username: "admin",
  password: "itCampus2022",
});
//const upload = multer({ dest: 'uploads/' })
/* GET users listing. */
router.get("/", function (req, res, next) {
    
  res.render("post", { title: "New Post " });
});

/* post submitted */

router.post("/", upload.single("featured_image"),async function (req, res, next) {
    console.log(req.body);
  console.log(req.file.buffer);

let newPostId = "";

wp.posts()
  .create({
    
    // "title" and "content" are the only required properties
    title: req.body.title,
    content: req.body.content,
    categories: req.body.category,
    status: "publish",
  })
  .then(function (response) {
    newPostId = response.id;
    console.log(response.id);
  })
  .catch(function (err) {
    console.log(err);
  });

  console.log(req.file.buffer, req.file.originalname)
let image = await wp.media().file(req.file.buffer, req.file.originalname)
  // Specify a path to the file you want to upload, or a Buffer
  .create({
    title: req.body.title,
    alt_text: req.body.alt_text,
    caption: req.body.caption,
    description: req.body.description,
  })
  .then(function (response) {
    // Your media is now uploaded: let's associate it with a post
    var newImageId = response.id;
    return wp.posts().id(newPostId).update({
      featured_media: newImageId,
    });
  })
  .then(function (response) {
    console.log("Media ID #" + response.id);
    console.log("is now associated with Post ID #" + response.post);
  });


  res.redirect("/");
});


module.exports = router;
