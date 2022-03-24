const { body, validationResult } = require("express-validator");
let users = [];

function getUsers(req, res) {
  res.json(users);
}
const addUser = [
  body("email").isEmail().withMessage("Invalid Email Format"),
  body("name")
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("Min should be 5 and Max length to be 20"),
  body("city")
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage("City length should be in between 3-20")
    .isAlphanumeric()
    .withMessage("City should only contain alpha-numerics"),
  body("age").isNumeric().withMessage("Age should be in 0-100"),
  body("username").custom((value) => {
    if (value.includes("&") || value.includes("*")) {
      throw new Error("Username should not contain &,*");
    }
    if (value.length < 5 || value.length > 15) {
      throw new Error("Username length is 5-15");
    }
    return true;
  }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      users.push({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        city: req.body.city,
      });
      res.json({
        message: "user added successfully.",
      });
    }
  },
];

module.exports = {
  getUsers,
  addUser,
};
