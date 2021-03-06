// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    // if (friendData.length < 5) {
    //   friendData.push(req.body);
    //   res.json(true);
    // }
    var newFriend = req.body

    var totalDifference;
    var lowestDifference = Infinity;
    var matchName;
    var matchPhoto;
    for (var i = 0; i < friendData.length; i++) {
      var currFriend = friendData[i]
      console.log(currFriend);
      totalDifference = 0;
      for (var j = 0; j < currFriend.scores.length; j++) {
        var currFriendScore = currFriend.scores[j]
        // console.log(currFriendScore);
        // console.log("---");
        // console.log(newFriend.scores);
        // console.log(newFriend.scores[j]);
        var currentUserScore = newFriend.scores[j];
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currFriendScore));
      }
      if (totalDifference < lowestDifference) {
        lowestDifference = totalDifference;
        matchName = currFriend.name;
        matchPhoto = currFriend.photo;
        // console.log(matchName, matchPhoto);
      }
      // console.log(friendData[i]);
    }
    // console.log(req.body);
    console.log(matchName, matchPhoto);
    res.send({ matchName, matchPhoto });
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friendData.length = 0;

    res.json({ ok: true });
  });
};


// var bestMatch = {
//   name: "",
//   photo: "",
//   friendDifference: Infinity
// }

// var userData = req.body;
// var userScores = userData.scores;

// var totalDifference;

// for (var i = 0; i < friends.length; i++) {
//   var currentFriend = friends[i];
//   totalDifference = 0;

//   for (var j = 0; j < currentFriend.scores.length; j++) {
//     var currentFriendScore = currentFriend.scores[j];
//     var currentUserScore = userScores[j];

//     totalDifference += Math.abs(parsInt(currentUserScore) - parseInt(currentFriendScore));
//   }
// }

// if (totalDifference < + bestMatch.friendDifference) {
//   bestMatch.name + currentFriend.name
// }

// friends.push(userdata)

// res.json(bestMatch)