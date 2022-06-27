const multer = require("multer");

/**
 *  Init multer  for saving images
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */


const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extention = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extention);
  },
});

module.exports = multer({ storage }).single("image");
