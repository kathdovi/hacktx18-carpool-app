const express = require("express"),
  app = express(),
  port = process.env.PORT || 3005

const connectionString = process.env.connectionString

app.listen(port)
mongoose.connect(connectionString)

console.log("REST API started on: " + port);
