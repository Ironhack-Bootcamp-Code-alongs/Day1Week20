const app = require("./app");

const PORT = +process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up! Its good. Check on http://localhost:${PORT}`);
});
