const router = require("express").Router();
const uploadCloud = require("../config/cloudinary");

router.post("/image", uploadCloud.single("image"), (req, res) => {
  res.json(req.file.path);
});

router.post("/multi", uploadCloud.array("imageArray"), (req, res) => {
  res.json(req.files.map((el) => el.path));
});

module.exports = router;
