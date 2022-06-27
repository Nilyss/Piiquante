const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

/**
 * road  router for user, login and signup
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;
