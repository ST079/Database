const router = require("express").Router();
const blogRouter = require("../modules/blogs/blog-route");
const userRouter = require("../modules/users/user-route");
const roleRouter = require("../modules/roles/role-route");

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
module.exports = router;
