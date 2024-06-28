const router = require("express").Router();
const roleController = require("../../modules/roles/role-controller");
const {
  roleValidate,
} = require("../../modules/roles/role-validation-middleware");
const { encryptPw } = require("../../middlewares/psw_encrypt_middleware");

//route 1
router.get("/", async (req, res, next) => {
  try {
    const result = await roleController.get();
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

// route 2
router.post("/", roleValidate, encryptPw, async (req, res, next) => {
  try {
    const data = req.body;
    const result = await roleController.create(data);
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
