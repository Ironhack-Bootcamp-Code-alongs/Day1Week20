const router = require("express").Router();
const uploadRouter = require("./upload");

router.get("/", (req, res) => res.json(true));

router.use("/upload", uploadRouter);

module.exports = router;
