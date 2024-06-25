const router = require("express").Router();
const { titleValidate } = require("./blogs-validation-middleware");
const blogController = require("./blog-controller");

//route 1
router.get("/", async (req, res, next) => {
  try {
    const result = await blogController.get();
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

//route 2
router.post("/", titleValidate, async (req, res, next) => {
  try {
    const data = req.body;
    data.time = Math.floor(data.words / 100);
    console.log({ data });
    const result = await blogController.create(data);
    res.json({ msg: result });
  } catch (err) {
    next(err);
  }
});

//route 3
router.patch("/:id", async (req, res, next) => {
  try {
    const result = await blogController.updateById("6678ec4a7053a4667ea2a50a", {
      author: "kusum Wifey",
    });
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

//route 4
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await blogController.deleteById("6678ec4a7053a4667ea2a50a");
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

// route 5
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params;
    const body = req.body;
    const result = await blogController.updateById(id, body);
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
