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

  const data = await wp.posts().embed();

  let posts = [];

  data.forEach(function (item) {
    // console.log(item._embedded)
    posts.push(
      {
        title: item.title.rendered,
        author: item._embedded.author['0'].name,
        excerpt: item.excerpt.rendered,
        featured_image: item._embedded['wp:featuredmedia']['0'].media_details.sizes.small.source_url,
      //   if(item._embedded['wp:featuredmedia'])
      //     { return let imageUrl = item._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url
      // } else { 
      //   return null
      // }
      }
    );
  });
  
  res.render('index', { posts: posts });  
});

module.exports = router;
