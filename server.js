const server = require("./app");
const connectDb = require("./config/db.config");

const PORT = process.env.PORT ;

if (connectDb()) {
  server.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
  });
}