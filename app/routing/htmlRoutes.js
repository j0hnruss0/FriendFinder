var path = require("path");

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/pic1", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/images/neutral-friend.jpg"));
    });

    app.get("/pic2", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/images/no-pic.png"));
    });

}


console.log("htmlRoutes online");