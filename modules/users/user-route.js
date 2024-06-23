const router = require("express").Router();

//route 1
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Hello form user route" });
  } catch (error) {
    next(error);
  }
});

// route 2
router.post("/", (req, res, next) => {
  try {
    const user_data = req.body;
    console.log({ user_data });
    res.json({ msg: "Hello from user" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
