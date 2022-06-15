const router = require("express").Router();
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");

const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);

module.exports = router;
