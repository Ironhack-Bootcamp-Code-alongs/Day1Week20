const router = require("express").Router();
const uploadCloud = require("../config/cloudinary.config");

router.get("/", (req, res) => res.json(false));

router.post("/image", uploadCloud.single("image"), (req, res) => {
  console.log(req.file);
  res.json(true);
});

module.exports = router;
