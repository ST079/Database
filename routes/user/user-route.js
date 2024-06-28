const router = require("express").Router();
const userController = require("../../modules/users/user-controller");
const {
  userValidate,
} = require("../../modules/users/user-validation-middleware");
const { encryptPw } = require("../../middlewares/psw_encrypt_middleware");

//route 1
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Hello form user route" });
  } catch (error) {
    next(error);
  }
});

// route 2
router.post("/", userValidate, encryptPw, async (req, res, next) => {
  try {
    const user_data = req.body;
    const result = await userController.create(user_data);
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
