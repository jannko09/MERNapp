const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const withAuth = require('./middleware');
const cors = require('cors')

const app = express();

const secret = 'mysecretsshhh';

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const mongo_uri = 'mongodb://localhost/react-auth';


mongoose.connect(mongo_uri, function (err) {
    if (err) {
        throw err;
    } else {
        console.log(`Connected to ${mongo_uri}`);
    }
});

app.get('/api/home', withAuth, function(req, res) {
    res.send('Welcome');
});

app.get('/api/secret', withAuth, function (req, res) {
    res.send('The password is potato');
});

app.get('/checkToken', withAuth, function (req, res) {
    res.sendStatus(200);
});


app.post('/api/register', function(req, res) {
    console.dir(req.body);
    const { email, password } = req.body;
    const user = new User({ email, password });
    user.save(function(err) {
      if (err) {
        res.status(500)
          .send("Error registering new user.");
      } else {
        res.status(200).send("Welcome to Acme!");
      }
    });
  });

  app.post('/api/authenticate', function(req, res) {
      console.dir(req.body);
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (!user) {
        res.status(401)
          .json({
            error: 'Incorrect email or password'
          });
      } else {
        user.isCorrectPassword(password, function(err, same) {
          if (err) {
            res.status(500)
              .json({
                error: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401)
              .json({
                error: 'Incorrect email or password'
            });
          } else {
            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '1h'
            });
            res.status(200).cookie('token', token, { httpOnly: true }).json({token:token});
            console.log("Success")
          }
        //   if (status=200) {
        //     window.location.replace('http://localhost:3000/home');
        //   }
        });
      }
    });
  });

app.listen(process.env.PORT || 8080);

