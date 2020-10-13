const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/super-hyper-product-db";

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(({ connections }) =>
    console.log(
      `Connected to Mongo! Your database name is ${connections[0].name}`
    )
  )
  .catch((err) => console.error(`Error!! Danger`, err));
