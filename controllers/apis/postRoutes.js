const router = require("express").Router();
const { Post, User } = require("../../models");

router.post("/newpost", async (req, res) => {
  try {
    const postData = await Post.create({
      blog_title: req.body.blog_title,
      blog_content: req.body.blog_content,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
    console.log(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
