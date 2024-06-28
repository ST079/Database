const router = require("express").Router();
const regestrationController = require("../../modules/regestration/resgestration-controller");
const {
  regestrationValidate,
} = require("../../modules/regestration/regestraton-validation");
const { encryptPw } = require("../../middlewares/psw_encrypt_middleware");

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "i am from regestration" });
  } catch (error) {
    next(error);
  }
});

router.post("/", regestrationValidate, encryptPw, async (req, res, next) => {
  try {
    const data = req.body;
    const result = await regestrationController.create(data);
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
