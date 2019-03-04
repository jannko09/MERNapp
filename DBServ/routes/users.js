var express = require('express');
var router = express.Router();
var dbservice = require('./dbservice')
 

router.get('/posts', async (req, res, next) => {
  const quotes = await dbservice.getQuotes();
   res.json(quotes);
  });

router.post("/posts", async(req, res, next) => {
  var comment = req.body.kommentti;
  var created = req.body.created_at;
  console.log(comment)
  console.log(created)
  var result = await dbservice.insertQuote(comment, created);
  res.send(result)
  });
  
module.exports = router;


