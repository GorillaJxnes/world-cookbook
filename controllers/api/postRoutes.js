const router = require("express").Router();
const {Recipe, User, Comment } = require("../../models");

router.post("/newpost", async (req, res) => {

 console.log(req.body)
 console.log(req.session.user_id)
 try {
    const recipeData = await Recipe.create({
      name: req.body.name,
      ingredients: req.body.ingredients,
      steps: req.body.steps,
      meal: req.body.meal,
      user_id: req.session.user_id,

    });
    res.status(200).json(recipeData);
    console.log(recipeData);
  } catch (err) {
    res.status(400).json(err);
  }
});





module.exports = router;
