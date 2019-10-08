const app = require("./app");
//create a server object:
app.listen(8000, (req, res) => {
  console.log("Listening to requests on the port 8000");
});
