var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./app/public/images")));

require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

