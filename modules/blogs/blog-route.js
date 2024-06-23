const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "blogs route" });
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res) => {
  try {
    const data = req.body;
    data.time = Math.floor(data.Words / 100);
    console.log({ data });
    res.json({ msg: "hello from blogs" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
