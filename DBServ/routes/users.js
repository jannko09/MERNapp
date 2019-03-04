var express = require('express');
var router = express.Router();
var dbservice = require('./dbservice')
 

// Send a POST request to /quotes to  CREATE a new quote 
// Send a PUT request to /quotes/:id to UPDATE (edit) a quote
// Send a DELETE request to /quotes/:id DELETE a quote 
// Send a GET request to /quotes/quote/random to READ (view) a random quote


  //READ VIEW FOR NORMAL USERS GET / POST
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
  
// CRUD for ADMIN user
  router.get("/admin", async (req, res, next) => {
    const quotes = await dbservice.getQuotes();
    res.json(quotes);
  });
  router.post("/admin", async (req, res, next) => {
    const quotes = await dbservice.getQuotes();
    res.json(quotes);
  });
  router.delete("/admin/:id", async (req, res, next) => {
    const quotes = await dbservice.getQuotes();
    res.json(quotes);
  });
  router.put("/admin/:id", async (req, res, next) => {
    const quotes = await dbservice.getQuotes();
    res.json(quotes);
  });

module.exports = router;


