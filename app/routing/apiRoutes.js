var friends = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var defaultFriend = friends[0];
        var yourFriends = [];
        
        friends.push(newFriend);

        for (var i = 0; i < friends.length; i++) {
            var friendMath = Math.abs((friends[i].scores[0] - newFriend.scores[0])) +
            Math.abs((friends[i].scores[1] - newFriend.scores[1])) +
            Math.abs((friends[i].scores[2] - newFriend.scores[2])) +
            Math.abs((friends[i].scores[3] - newFriend.scores[3])) +
            Math.abs((friends[i].scores[4] - newFriend.scores[4])) +
            Math.abs((friends[i].scores[5] - newFriend.scores[5])) +
            Math.abs((friends[i].scores[6] - newFriend.scores[6])) +
            Math.abs((friends[i].scores[7] - newFriend.scores[7])) +
            Math.abs((friends[i].scores[8] - newFriend.scores[8])) +
            Math.abs((friends[i].scores[9] - newFriend.scores[9]))
            if (friendMath <= 5 && friends[i] !== newFriend) {
                yourFriends.push(friends[i]);
            }  
        }

        console.log(yourFriends);
        if (yourFriends.length > 0) {
            res.json(yourFriends[Math.floor(Math.random()*yourFriends.length)]);
        } else {
            res.json(defaultFriend);
        }
        
    });

}

console.log("apiRoutes online");