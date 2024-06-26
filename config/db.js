const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(`DB got connected`))
  .catch((error) => {
    console.log("DB CONNECTION ISSUES");
    console.log(error);
    process.exit(1);
  });
