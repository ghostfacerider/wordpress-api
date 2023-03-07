var express = require("express");
var WPAPI = require("wpapi");
var router = express.Router();

var wp = new WPAPI({
  endpoint: "http://thewave.com/wp-json",
  username: "admin",
  password: "itCampus2022",
});

/*get home page */
router.get("/", async function (req, res, next) {
  /**get the posts from thhe wordpress api */

  const data = await wp.posts();

  let posts = [];

  data.forEach(function (item) {
    posts.push(
      {
        title: item.title.rendered,
        author: item.author,
        image: item.featured_media/`${id}`,
        excerpt: item.excerpt.rendered
      }
    );
  });
  
  res.render('index', { posts: posts });  
});

module.exports = router;
