var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const getQuotes = () => {
return MongoClient.connect(url)
.then(function( db) {
    //if (err) throw err;
    //Connect to MongoDB database
    var dbo = db.db("messageboard");
    // Find collection formula1
    return dbo.collection("formula1")
         .find({})
         //Sort by time
         .sort({createdAt: -1})
         .toArray()
         .then(function(result) {
            console.log(result);
            db.close();
            return result;
        });
  })
}

const insertQuote = (kommentti, created_at ) => {
    return MongoClient.connect(url).then(function(db) {
      var dbo = db.db("messageboard");
      return dbo.collection("formula1")
      .insertOne({kommentti: kommentti, created_at: created_at})
      .then(function(result) {
        db.close()
        return result;
      })

    })}

module.exports = { getQuotes, insertQuote }