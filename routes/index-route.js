const router = require("express").Router();
const blogRouter = require("./blog/blog-route");
const userRouter = require("./user/user-route");
const roleRouter = require("./role/role-route");
const regestrationRouter = require("./user/regestration-route");

//route 1
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello form index route" });
  } catch (err) {
    next(err);
  }
});

router.use("/blogs", blogRouter);
router.use("/users", userRouter);
router.use("/roles", roleRouter);
router.use("/regestrations", regestrationRouter);
module.exports = router;
