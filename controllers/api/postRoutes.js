const router = require("express").Router();
const {Recipe, User, Comment } = require("../../models");

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



router.get('/post/:name', async (req, res) => {
  try {
    const postData = await Post.name(req.params.id, {
      include: [
        {
          model: Recipe,
          attributes: ['name','ingredients', 'steps', 'meal'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post','ingredients', 'steps', 'meal' {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
