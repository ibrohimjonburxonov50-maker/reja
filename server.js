const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://ibrohimjonburxonov50_db_user:0IV8WwaWM5GbbZmJ@cluster0.cj3cemb.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}, https://localhost: ${PORT}`
      );
      });
    }
  }
);