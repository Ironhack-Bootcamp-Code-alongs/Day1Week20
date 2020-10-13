const router = require("express").Router();

router.get("/", (_, res) => res.json({ message: "Here" }));
router.use("/products", require("./products"));
router.use("/upload", require("./upload"));

module.exports = router;
