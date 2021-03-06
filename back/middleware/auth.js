const jwt = require("jsonwebtoken");

/**
 * Middleware for authentification. use json web token for security concern
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */


module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, `${process.env.TOKEN}`);
    const userId = decodedToken.userId;
    req.auth = { userId: userId };
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error });
  }
};
