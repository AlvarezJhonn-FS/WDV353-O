const http = require("http");
require("dotenv").config();
const app = require("./app");

const server = http.createServer();

const PORT = 3000;


server.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});