<<<<<<< HEAD
const router = require('express').Router();
const { User } = require('../../models');

router.post('/newuser', async (req, res) => {
    try {
      const newAccount = await User.create(req.body)
      res.status(200).json(newAccount);
    } catch(err) {
      res.status(400).json(err)
  
    }
  });
  
  router.post('/login', async (req, res) => {
    try {
      // Find the user who matches the posted e-mail address
      const userData = await User.findOne({ where: { name: req.body.name } });
  
    //   if (!userData) {
    //     res
    //       .status(400)
    //       .json({ message: 'Incorrect email or password, please try again' });
    //     return;
    //   }
  
      // Verify the posted password with the password store in the database
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // Create session variables based on the logged in user
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
=======
const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

router.post("/newuser", async (req, res) => {
  try {
    const newAccount = await User.create(req.body);
    res.status(200).json(newAccount);
  } catch (err) {
    res.status(400).json(err);
  }
});
>>>>>>> 5896f0f740179a3683e2aca31b7978959c7652f3

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { name: req.body.name } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
