// Import
const express = require("express");

// Function router()
const router = express.Router();

// Import middleware authentication
const auth = require("../middleware/auth");

// Import middleware multer for images management
const multer = require("../middleware/multer-config");

// Import controllers
const sauceController = require("../controllers/sauce");
const likeController = require("../controllers/like");

/**
 * road router for sauce, authentification and  multer for images
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

// Roads
router.post("/", auth, multer, sauceController.createSauce);
router.get("/", auth, sauceController.getAllSauce);
router.get("/:id", auth, sauceController.getOneSauce);
router.put("/:id", auth, multer, sauceController.updateOneSauce);
router.delete("/:id", auth, sauceController.deleteOneSauce);
router.post("/:id/like", auth, likeController.likeSauce);

module.exports = router;
